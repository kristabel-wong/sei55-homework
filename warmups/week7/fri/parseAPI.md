## Query string to Params Object

Given the following sample url

let url = "http://omdbapi.com/?t=jaws&apikey=123456&page=5"

Write a function that accepts a url as an argument and returns just the query string formatted as an object. Please write this in JavaScript.
<br>
*Hint: look into substring()*

```
parseQueryString(url)

returns the following

{
  t: "jaws",
  apikey: "123456",
  page: "5"
}
```
here is another example

```
let url = "https://api.giphy.com/v1/gifs/search?q=cats&limit=10"

parseQueryString(url)

returns the following

{
  q: "cats",
  limit: "10"
}
