resource "aws_iam_role" "iam_for_lambda" {
  name = "iam_for_lambda"
  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect = "Allow",
        Principal = {
          Service = "lambda.amazonaws.com"
        },
        Action = "sts:AssumeRole"
      }
    ]
  })
}

resource "aws_iam_policy" "policy" {
  name        = "aws_iam_policy_for_cloud_resume"
  path        = "/"
  description = "AWS IAM Policy for the cloud resume role"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        "Effect" : "Allow",
        "Action" : [
          "dynamodb:UpdateItem",
          "dynamodb:GetItem"
        ],
        "Resource" : "arn:aws:dynamodb:*:*:table/cloud-resume"
      },
    ]
  })
}

resource "aws_iam_role_policy_attachment" "attach_iam_policy_to_iam_role" {
  role       = aws_iam_role.iam_for_lambda.name
  policy_arn = aws_iam_policy.policy.arn
}


data "archive_file" "zip" {
  type        = "zip"
  source_dir  = "${path.module}/lambda"
  output_path = "${path.module}/lambda_function_payload.zip"
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

