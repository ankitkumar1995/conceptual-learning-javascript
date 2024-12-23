/*
async/await is a more modern and concise way of working with promise in javascript.
It provides a more synchronous style of coding while still being non-blocking and asynchronous.

The async keyword is used to define asynchronous function and inside async function we can use the await keyword before a promise to pause the
function execution until the promise is resolved or rejected.

error handling in async/await is done using regular try/catch blocks,making it straightforward to handle error in a asynchronous manner.

*/
async function fetchUser() {
  try {
    const apiuser = await fetch("'https://api.example.com/data");
    const user = await apiuser.json();
    // apiuser.json() parse the json data from the response body and return the resulting promise.
  } catch (err) {
    console.log("error fetching api user");
  }
}
/* 
async/await handling promise using try-catch or then-catch

asyn/await provides a more synchronous coding style, while then-catch is more asynchronous and may lead to nested callback

then/catch is more suitable for handling complex promise chains or performing multiple operation on the resolved values before moving to the next step.

*/

// then-catch may lead to callback hell,if not used carefully.

/* callback hell */
fetch("https://api.example.com/data")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    return fetch("https://api.example.com/another-data");
  })
  .then((anotherres) => {
    return anotherres.json();
  })
  .then((anotherdata) => {
    console.log(anotherdata);
    return fetch("https://api.example.com/yet-another-data");
  })
  .then((yetanotherdata) => {
    return yetanotherdata.json();
  })
  .then((yetanotherdata) => {
    // even more processing with yetanotherdata
  })
  .catch((error) => {
    console.log("error");
  });
/*
as we can Selection, each new asynchronous operation nested inside a then callback 
making the code indentation deeper and harder to follow.

when we have many async operation and different error handling scenario, this can quickly become unwieldy and challenging to maintain.
 */

/* to avoid callback hell, we can use a async/await and try-catch */
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    // some processing with data

    const anotherResponse = await fetch("https://api.example.com/another-data");
    const anotherData = await anotherResponse.json();

    // more processing with anotherData

    const yetAnotherResponse = await fetch(
      "https://api.example.com/yet-another-data"
    );
    const yetAnotherData = await yetAnotherResponse.json();

    // even more processing with yetAnotherData
  } catch (error) {
    console.error("Error:", error);
  }
}
