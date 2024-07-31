variable "region" {
  default = "ap-southeast-1"
  type    = string
}

variable "bucket_name" {
  default = "martin-cloud-resume"
  type    = string
}

variable "domain_name" {
  default = "martinngjk.com"
  type    = string
}

variable "record_name" {
  default     = "www"
  description = "Subdomain name"
  type        = string
}
