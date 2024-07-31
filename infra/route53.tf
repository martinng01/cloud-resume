data "aws_route53_zone" "hosted_zone" {
  name = var.domain_name
}

resource "aws_route53_record" "site_domain" {
  zone_id = data.aws_route53_zone.hosted_zone.zone_id
  name    = "${var.record_name}.${var.domain_name}"
  type    = "CNAME"
  ttl     = 300

  records = ["${var.domain_name}"]
}
