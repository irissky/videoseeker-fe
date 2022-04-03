import json

def handler(event, context):
  print('received event:')
  print(event)
  test_dict = {'index':
[{'name': 'THE CONTRACTOR1',
'id':5,
'description': 'Chris Pine stars in the action-packed thriller as Special Forces Sergeant James Harper, who is involuntarily discharged from the Army and cut-off from his pension. In debt, out of options and desperate to provide for his family, Harper contracts with a private underground military force. When the very first assignment goes awry, the elite soldier finds himself hunted and on the run, caught in a dangerous conspiracy and fighting to stay alive long enough to get home and uncover the true motives of those who betrayed him.',
'actor':"janny,calro",
'img':'https://images.unsplash.com/photo-1635488640163-e5f6782cda6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
'src':[0,0,1,1,0]},
{'name': 'THE CONTRACTOR2',
'id':3,
'description': 'Chris Pine stars in the action-packed thriller as Special Forces Sergeant James Harper, who is involuntarily discharged from the Army and cut-off from his pension. In debt, out of options and desperate to provide for his family, Harper contracts with a private underground military force. When the very first assignment goes awry, the elite soldier finds himself hunted and on the run, caught in a dangerous conspiracy and fighting to stay alive long enough to get home and uncover the true motives of those who betrayed him.',
'actor':"janny,calro",
'img':'https://images.unsplash.com/photo-1648737154547-b0dfd281c51e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
'src':[0,1,0,1,0]},
{'name': 'THE CONTRACTOR3',
'id':4,
'description': 'Chris Pine stars in the action-packed thriller as Special Forces Sergeant James Harper, who is involuntarily discharged from the Army and cut-off from his pension. In debt, out of options and desperate to provide for his family, Harper contracts with a private underground military force. When the very first assignment goes awry, the elite soldier finds himself hunted and on the run, caught in a dangerous conspiracy and fighting to stay alive long enough to get home and uncover the true motives of those who betrayed him.',
'actor':"Chris Pine stars in the action-packed thriller ",
'img':'https://images.unsplash.com/photo-1648536475316-27bcbc7784e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
'src':[0,1,0,1,0]}
]
}
  return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps(test_dict)
  }