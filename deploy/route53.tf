resource "aws_route53_record" "apex" {
  zone_id = data.aws_route53_zone.csmarks_link.zone_id
  name    = local.domain
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.csmarks_link_website.domain_name
    zone_id                = aws_cloudfront_distribution.csmarks_link_website.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www" {
  zone_id = data.aws_route53_zone.csmarks_link.zone_id
  name    = "www.${local.domain}"
  type    = "CNAME"
  ttl     = 300
  records = [aws_cloudfront_distribution.csmarks_link_website.domain_name]
}
