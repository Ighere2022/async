//Task 1
// objective: Awaiting a call: create an async function awaitCall that simulates fetching data form an API. use awaitn to wait for the API response and then log the data.

// step 1: Create a functon called await call

// simulate data fetchinh using the global available fecth method
async function awaitCall() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await response.json();

  console.log(data[6]);
}
// invoke the function or call it
awaitCall();

//Task 2: Modified to handel errors properly
//  objective: Modify the awaitCall function to hanel errors gracefully. if the API call FileSystemWritableFileStream, catch the error and log user-friendly error Message.
async function awaitCallModified() {
  try {
    //simulate data fetching using the dail global available FETCH method
    const response = await fetch("https://jsonplaceholder.typicode");

    const data = await response.json();

    //log the data from the api
    console.log(data);
  } catch (error) {
    //handle any error the migth occur from the try block above
    console.log(error);
    console.log("Sorry an error occured");
  }
}
// inoke the function or call it
awaitCallModified();


//task3 
//
async function getposts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const info = await response.json();
  console.log(info);
}
getposts();
async function getTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");

  const tell = await response.json();
  console.log(tell);
}
getTodos();

// using both async functions together
const conCurrentRequest = async () => {
  return await Promise.all([getposts(), getTodos()]);
};
conCurrentRequest();
