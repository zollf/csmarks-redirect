resource "aws_cloudfront_distribution" "csmarks_link_website" {
  comment             = local.project
  enabled             = true
  default_root_object = "index.html"

  origin {
    origin_id                = local.project
    domain_name              = aws_s3_bucket.csmarks_link_website.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.csmarks_link_website.id
  }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.project

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.csmarks_auto_redirect.arn
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 0
    max_ttl                = 0
    compress               = true
  }

  aliases = [
    local.domain,
    "www.${local.domain}"
  ]

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = module.csmarks_link_cert.acm_certificate_arn
    minimum_protocol_version = "TLSv1.2_2021"
    ssl_support_method       = "sni-only"
  }

  price_class = "PriceClass_200"
}

resource "aws_cloudfront_origin_access_control" "csmarks_link_website" {
  name                              = local.project
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_function" "csmarks_auto_redirect" {
  name    = "${local.project}-auto-redirect"
  runtime = "cloudfront-js-2.0"
  publish = true
  code    = file("${path.root}/auto-redirect.js")
}
