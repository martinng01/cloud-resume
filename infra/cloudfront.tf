# resource "aws_cloudfront_distribution" "s3_distribution" {
#   origin {
#     domain_name = aws_s3_bucket.cloud_resume_bucket.bucket_regional_domain_name
#     origin_id   = var.bucket_name
#   }

#   enabled             = true
#   is_ipv6_enabled     = true
#   default_root_object = "index.html"

#   aliases = ["www.${var.domain_name}"]

#   default_cache_behavior {
#     allowed_methods  = ["GET", "HEAD"]
#     cached_methods   = ["GET", "HEAD"]
#     target_origin_id = var.bucket_name

#     forwarded_values {
#       query_string = false

#       cookies {
#         forward = "none"
#       }
#     }

#     viewer_protocol_policy = "allow-all"
#     min_ttl                = 0
#     default_ttl            = 3600
#     max_ttl                = 86400
#   }

#   restrictions {
#     geo_restriction {
#       restriction_type = "none"
#     }
#   }

#   viewer_certificate {
#     acm_certificate_arn      = data.aws_acm_certificate.cert.arn
#     ssl_support_method       = "sni-only"
#     minimum_protocol_version = "TLSv1.2_2021"
#   }
# }

data "aws_cloudfront_distribution" "s3_distribution" {
  id = "ETRP57ATZ2WAQ"
}
