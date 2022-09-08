import './env.js'
import fetch from "node-fetch";

export const fetchPost = async (path, data) => {
    const body = {...data, client: process.env.CLIENT_NAME}
    const SERVER_HOST = process.env.SERVER_HOST
    const SERVER_PORT = process.env.SERVER_PORT
    try {
        const response = await fetch(`http://${SERVER_HOST}:${SERVER_PORT}/${path}`, {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(body)
        })
        await response.json
        // console.log(response)
    } catch (error) {
        console.error(error)
    }
}

