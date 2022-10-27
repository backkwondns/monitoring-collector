import './env.js'
import fetch from "node-fetch";

export const fetchPost = async (path, data) => {
    const body = {...data, client: process.env.CLIENT_NAME}
    const SERVER_HOST = process.env.SERVER_HOST
    try {
        const response = await fetch(`${SERVER_HOST}${path}`, {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(body)
        })
        const result = await response.json()
        result.statusCode = response.status
        console.log(result)
        return result
    } catch (error) {
        console.error(error)
    }
}

