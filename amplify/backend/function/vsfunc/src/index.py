import json
import pymysql

# Configuration Values
endpoint = 'database-1.cghignbnc7u4.us-east-1.rds.amazonaws.com'
username = 'admin'
password = 'cs522422'
database_name = 'Video'

# Connection
connection = pymysql.connect(host=endpoint, user=username, passwd=password, db=database_name)

def handler(event, context):
  print('received event:')
  print(event)
  target = event['pathParameters']['id']
  cursor = connection.cursor()
  cursor.execute(f'SELECT * FROM Demo WHERE title LIKE "%{target}%";')
  rows = cursor.fetchall()
  data = []
  for row in rows:
    print(f"{row[0]} {row[1]} {row[2]}")
    print(f"{row[3]} {row[4]} {row[5]}")
    data.append({'id': row[0], 'name': row[1], 'description': row[2], 'actor': row[3], 'img': row[4], 'src': row[5:9]})
    
  print(data)
	
  return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps({'index':data})
  }