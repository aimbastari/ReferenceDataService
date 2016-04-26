var fake = require('fake-api-server');

var cusips = new fake.Resource("cusip")
  .add({
      cusip : 'cusip 1'
  })
  .add({
      cusip : 'cusip 2'
  })
  .add({
      cusip : 'cusip 3'
  });

  var swaps = new fake.Resource("swap")
    .add({
        cusip : 'cusip 1',
        name  : 'swap 1',
        description : 'represents swap 1'
    })
    .add({
      cusip : 'cusip 2',
      name  : 'swap 2',
      description : 'represents swap 2'
    })
    .add({
      cusip : 'cusip 3',
      name  : 'swap 3',
      description : 'represents swap 3'
    });



  var server = fake.Server()
    .register(cusips)
    .register(swaps)
    .listen(3000);
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}