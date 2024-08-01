import os
import pytest
import boto3
from moto import mock_aws


@pytest.fixture(scope="function")
def aws_credentials():
    """
    Mocked AWS Credentials for moto.
    """

    os.environ["AWS_ACCESS_KEY_ID"] = "testing"
    os.environ["AWS_SECRET_ACCESS_KEY"] = "testing"
    os.environ["AWS_SECURITY_TOKEN"] = "testing"
    os.environ["AWS_SESSION_TOKEN"] = "testing"
    os.environ["AWS_DEFAULT_REGION"] = "ap-southeast-1"


@pytest.fixture(scope="function")
def table(aws_credentials):
    with mock_aws():
        dynamodb = boto3.resource('dynamodb', region_name='ap-southeast-1')
        table = dynamodb.create_table(
            TableName='cloud-resume',
            KeySchema=[
                {
                    'AttributeName': 'id',
                    'KeyType': 'HASH'
                }
            ],
            AttributeDefinitions=[
                {
                    'AttributeName': 'id',
                    'AttributeType': 'S'
                }
            ],
            ProvisionedThroughput={
                'ReadCapacityUnits': 1,
                'WriteCapacityUnits': 1
            }
        )

        yield table


def test_lambda_increments_viewer_count(table):
    """
    Test that the lambda function increments the viewer count by 1
    """

    table.put_item(
        Item={
            'id': '1',
            'views': 0
        }
    )

    from ..index import lambda_handler
    response = lambda_handler({}, {})
    assert response == 1

    # Check that the views have been incremented
    response = table.get_item(
        Key={
            'id': '1'
        }
    )
    assert response['Item']['views'] == 1
