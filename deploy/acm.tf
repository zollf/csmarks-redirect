data "aws_route53_zone" "csmarks_link" {
  name = "csmarks.link."
}

module "csmarks_link_cert" {
  source  = "terraform-aws-modules/acm/aws"
  version = "5.1.1"
  providers = {
    aws = aws.us_east_1
  }
  domain_name               = local.domain
  subject_alternative_names = ["*.${local.domain}"]
  zone_id                   = data.aws_route53_zone.csmarks_link.id
  validation_method         = "DNS"
  wait_for_validation       = true
}

