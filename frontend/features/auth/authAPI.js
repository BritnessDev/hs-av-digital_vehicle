import axios from "axios";
import { handleResponse } from "../../utils";
import { SERVER_URL } from "../../config/config";

export const LoginAPI = async (login) => {
    try {
        const requestOptions = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
            },
            body: JSON.stringify(
                {
                    ...login
                }
            )
        };
        const response = await fetch(`${SERVER_URL}/login`, requestOptions);
        const data = await handleResponse(response);
        return {
            ...data,
            status: response.status
        };
    } catch(e) {
        return e;
    }
}


export const SignUpAPI = async (signup) => {
    try {
        const requestOptions = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
            },
            body: JSON.stringify(
                {
                    ...signup
                }
            )
        };
        const response = await fetch(`${SERVER_URL}/signup`, requestOptions);
        
        const data = await handleResponse(response);
        return {
            ...data,
            status: response.status
        };
    } catch(e) {
        return e;
    }
}