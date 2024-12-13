resource "aws_s3_bucket" "csmarks_link_website" {
  bucket = local.project
}

resource "aws_s3_bucket_public_access_block" "csmarks_link_website" {
  bucket                  = aws_s3_bucket.csmarks_link_website.bucket
  block_public_policy     = true
  block_public_acls       = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_server_side_encryption_configuration" "csmarks_link_website" {
  bucket = aws_s3_bucket.csmarks_link_website.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

resource "aws_s3_object" "csmarks_link_website_index_html" {
  bucket       = aws_s3_bucket.csmarks_link_website.bucket
  key          = "index.html"
  content      = file("${path.root}/../index.html")
  source_hash  = filesha256("${path.root}/../index.html")
  content_type = "text/html"
}

resource "aws_s3_object" "csmarks_link_website_index_css" {
  bucket       = aws_s3_bucket.csmarks_link_website.bucket
  key          = "index.css"
  content      = file("${path.root}/../index.css")
  source_hash  = filesha256("${path.root}/../index.css")
  content_type = "text/css"
}

resource "aws_s3_object" "csmarks_link_website_index_js" {
  bucket       = aws_s3_bucket.csmarks_link_website.bucket
  key          = "index.js"
  content      = file("${path.root}/../index.js")
  source_hash  = filesha256("${path.root}/../index.js")
  content_type = "text/javascript"
}


resource "terraform_data" "assets" {
  triggers_replace = [timestamp()] // always sync on terraform apply for now
  provisioner "local-exec" {
    command = "aws s3 sync ${path.root}/../assets s3://${aws_s3_bucket.csmarks_link_website.id}/assets"
  }
}

resource "aws_s3_bucket_policy" "csmarks_link_website" {
  bucket = aws_s3_bucket.csmarks_link_website.id
  policy = data.aws_iam_policy_document.csmarks_link_website.json
}

data "aws_iam_policy_document" "csmarks_link_website" {
  statement {
    actions   = ["s3:GetObject"]
    effect    = "Allow"
    resources = ["${aws_s3_bucket.csmarks_link_website.arn}/*"]

    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [aws_cloudfront_distribution.csmarks_link_website.arn]
    }
  }
}
