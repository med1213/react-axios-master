import axios from "axios"
import { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/posts/1";

export default function Post () {

const [ post, setPost ] = useState(null);

useEffect( () => {
    axios.get(url).then( (res) => {
        setPost(res.data);
        console.log(res.data);
    })
}, []);

if(!post) return null;
    return (
        <div>
            <h1>{ post.title }</h1>
            <p>{ post.body }</p>
        </div>
    )
}