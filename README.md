# All types of Express JS API
Top API in espress js are **GET, POST, PUT, PATCH and DELETE.**   
Express JS  important topics are   
- Middleware
- Routes and Routers
- Route parameters
- Query parameters 
- Authentication - JWT Authentication
- Database Connection 
- Passport JS 
- Sessions
- Cookies 
- Hashing passwords
- API testing
- Swagger Documentation
- API versioning

Difference between PUT, POST, GET, DELETE and PATCH in HTTP Verbs:

The most commonly used HTTP verbs POST, GET, PUT, DELETE are similar to CRUD (Create, Read, Update and Delete) operations in database. We specify these HTTP verbs in the capital case. So, the below is the comparison between them.

Create - POST
Read - GET
Update - PUT
Delete - DELETE
PATCH: Submits a partial modification to a resource. If you only need to update one field for the resource, you may want to use the PATCH method.

Note:
Since POST, PUT, DELETE modifies the content, the tests with Fiddler for the below url just mimicks the updations. It doesn't delete or modify actually. We can just see the status codes to check whether insertions, updations, deletions occur.

URL: http://jsonplaceholder.typicode.com/posts/

GET:
GET is the simplest type of HTTP request method; the one that browsers use each time you click a link or type a URL into the address bar. It instructs the server to transmit the data identified by the URL to the client. Data should never be modified on the server side as a result of a GET request. In this sense, a GET request is read-only.

Checking with Fiddler or PostMan: We can use Fiddler for checking the response. Open Fiddler and select the Compose tab. Specify the verb and url as shown below and click Execute to check the response.

Verb: GET

url: http://jsonplaceholder.typicode.com/posts/

Response: You will get the response as:

"userId": 1,  "id": 1,  "title": "sunt aut...",  "body": "quia et suscipit..."
In the “happy” (or non-error) path, GET returns a representation in XML or JSON and an HTTP response code of 200 (OK). In an error case, it most often returns a 404 (NOT FOUND) or 400 (BAD REQUEST).

2) POST:

The POST verb is mostly utilized to create new resources. In particular, it's used to create subordinate resources. That is, subordinate to some other (e.g. parent) resource.

On successful creation, return HTTP status 201, returning a Location header with a link to the newly-created resource with the 201 HTTP status.

Checking with Fiddler or PostMan: We can use Fiddler for checking the response. Open Fiddler and select the Compose tab. Specify the verb and url as shown below and click Execute to check the response.

Verb: POST

url: http://jsonplaceholder.typicode.com/posts/

Request Body:

data: {
   title: 'foo',
   body: 'bar',
   userId: 1000,
   Id : 1000
}
Response: You would receive the response code as 201.

If we want to check the inserted record with Id = 1000 change the verb to Get and use the same url and click Execute.

As said earlier, the above url only allows reads (GET), we cannot read the updated data in real.

3) PUT:

PUT is most-often utilized for update capabilities, PUT-ing to a known resource URI with the request body containing the newly-updated representation of the original resource.

Checking with Fiddler or PostMan: We can use Fiddler for checking the response. Open Fiddler and select the Compose tab. Specify the verb and url as shown below and click Execute to check the response.

Verb: PUT

url: http://jsonplaceholder.typicode.com/posts/1

Request Body:

data: {
   title: 'foo',
   body: 'bar',
   userId: 1,
   Id : 1
}
Response: On successful update it returns status 200 (or 204 if not returning any content in the body) from a PUT.

4) DELETE:

DELETE is pretty easy to understand. It is used to delete a resource identified by a URI.

On successful deletion, return HTTP status 200 (OK) along with a response body, perhaps the representation of the deleted item (often demands too much bandwidth), or a wrapped response (see Return Values below). Either that or return HTTP status 204 (NO CONTENT) with no response body. In other words, a 204 status with no body, or the JSEND-style response and HTTP status 200 are the recommended responses.

Checking with Fiddler or PostMan: We can use Fiddler for checking the response. Open Fiddler and select the Compose tab. Specify the verb and url as shown below and click Execute to check the response.

Verb: DELETE

url: http://jsonplaceholder.typicode.com/posts/1

Response: On successful deletion it returns HTTP status 200 (OK) along with a response body.

Example between PUT and PATCH

PUT

If I had to change my first name then send PUT request for Update:

{ "first": "Nazmul", "last": "hasan" }
So, here in order to update the first name we need to send all the parameters of the data again.

PATCH:

Patch request says that we would only send the data that we need to modify without modifying or effecting other parts of the data. Ex: if we need to update only the first name, we pass only the first name.

Please refer the below links for more information:

https://jsonplaceholder.typicode.com/
https://github.com/typicode/jsonplaceholder#how-to
What is the main difference between PATCH and PUT request?
http://www.restapitutorial.com/lessons/httpmethods.html    


The below definition is from the real world example.

Example Overview
For every client data, we are storing an identifier to find that client data and we will send back that identifier to the client for reference.

POST

If the client sends data without any identifier, then we will store the data and assign/generate a new identifier.
If the client again sends the same data without any identifier, then we will store the data and assign/generate a new identifier.
Note: Duplication is allowed here.
PUT

If the client sends data with an identifier, then we will check whether that identifier exists. If the identifier exists, we will update the resource with the data, else we will create a resource with the data and assign/generate a new identifier.
PATCH

If the client sends data with an identifier, then we will check whether that identifier exists. If the identifier exists, we will update the resource with the data, else we will throw an exception.
Note: On the PUT method, we are not throwing an exception if an identifier is not found. But in the PATCH method, we are throwing an exception if the identifier is not found.    


Here is a simple description of all:

POST is always for creating a resource ( does not matter if it was duplicated )
PUT is for checking if resource exists then update, else create new resource
PATCH is always for updating a resource