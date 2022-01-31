import axios from "axios";

async function getData {
    const data = await  axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(data);
} 

getData();