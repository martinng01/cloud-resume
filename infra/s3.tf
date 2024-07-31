resource "aws_s3_bucket" "cloud_resume_bucket" {
  bucket = "${var.bucket_name}"
}