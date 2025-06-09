import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:3000/api",
    withCredentials: true
})

export const signUp = (data: any) => API.post('/auth/signup', data)
export const signIn = (data: any) => API.post('/auth/signin', data)