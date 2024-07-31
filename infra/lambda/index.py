import json
import boto3

dynamodb = boto3.resource('dynamodb', region_name='ap-southeast-1')
table = dynamodb.Table('cloud-resume')


def lambda_handler(event, context):
    response = table.get_item(
        Key={
            'id': '1'
        }
    )
    num_views = response['Item']['views']
    num_views += 1
    response = table.put_item(
        Item={
            'id': '1',
            'views': num_views
        }
    )

    return num_views
