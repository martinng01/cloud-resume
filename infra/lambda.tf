locals {
  lambda_source_dir = "${path.module}/lambda"
  lambda_zip_path  = "${path.module}/lambda/lambda_payload.zip"
}

data "archive_file" "zip" {
  type        = "zip"
  source_dir  = "${local.lambda_source_dir}"
  output_path = "${local.lambda_zip_path}"
}

resource "aws_lambda_function" "viewcounter_lambda" {
  filename         = data.archive_file.zip.output_path
  function_name    = "cloud-resume-viewcounter-api"
  role             = aws_iam_role.iam_for_lambda.arn
  source_code_hash = data.archive_file.zip.output_base64sha256
  handler          = "index.lambda_handler"
  runtime          = "python3.10"
}

resource "aws_lambda_function_url" "viewcounter_url" {
  function_name      = aws_lambda_function.viewcounter_lambda.function_name
  authorization_type = "NONE"

  cors {
    allow_credentials = true
    allow_origins     = ["*"] // Insert own domain
    allow_methods     = ["*"]
    allow_headers     = ["date", "keep-alive"]
    expose_headers    = ["keep-alive", "date"]
    max_age           = 86400
  }
}