Tech Used
-
- React
- Redux
- Webpack
- Babel
- chai
- mocha
- enzyme

Most code written from scratch except the use of Bootstrap.

Application setup
-
To install
``npm install``

To start server 
``npm start``

To run lint
``npm run lint``

To run unit tests
``npm run test``

Endpoints
-
For ease of development, I have used a tool www.mockapi.io to implement the API.

`GET /ideas` 
returns
```
{
    "id": "1", //number as string
    "created_date": "2017-12-13T01:31:34.090Z", //a date in the past
    "title": "title 1", // a string
    "body": "body 1" // a string
  },
```

`POST /ideas`
returns a new idea in the following format
```
{
    "id":"2",
    "created_date":"2018-05-20T01:27:11.826Z",
    "title":"title 2",
    "body":"body 2"
}
```

`PUT /ideas/:id`
updates the current id with the values passed into the call

`DELETE /ideas/:id`
deletes the current idea selected

Assumptions
-

The endpoint was not created, but instead a mock endpoints avilable online was used to return data. It returns data in the similar format for the test.

Since its a mock endpoint, there is no control on the date sent back from server.

Due to lack of space in the area for the tile, `id` and `created_date` ar not displayed.

The title is capped at 20chars and body wraps after a point it cannot be displayed in the div dimensions. So they are truncated, but displayed on hover.

Todo
-
Unit tests
