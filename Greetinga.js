import React,{useState, useEffect} from "react";

function Greetinga(){
    const [name , setNmae] = useState('');
    useEffect(() => {
        fetch('/api/user')
        .then((Response) => Response.json())
        .then((date) => setNmae(date.name));
    }, []);
    return<h1>Hello, {name}!</h1>
}

export default Greetinga;