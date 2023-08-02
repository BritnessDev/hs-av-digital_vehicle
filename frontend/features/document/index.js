import { SERVER_URL } from "../../config/config";
import { handleResponse } from "../../utils";
import { store } from '../../store';
import { toast } from 'react-toastify';

export const createDocument = async (pdfData) => {
    try {
        const {token} = store.getState().login.token;
        const requestOptions = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
                'Authorization': "Bearer " + token
            },
            body: JSON.stringify(
                {
                    ...pdfData
                }
            )
        };
        const response = await fetch(`${SERVER_URL}/createDocument`, requestOptions);
        const data = await handleResponse(response);
        if(data?.success)
            toast.success("Created successfully", {autoClose: 2000});
        else if(data?.auth == false)
        {
            toast.warning(data?.message, {autoClose:2000});
            return {};
        }
        return data;
    } catch(e) {
        return e;
    }
}

export const getDocumentById = async (id) => {
    try {
        const {token} = store.getState().login.token;
        const requestOptions = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
                'Authorization': "Bearer " + token
            },
            body: JSON.stringify(
                {
                    id
                }
            )
        };
        const response = await fetch(`${SERVER_URL}/getDocumentById`, requestOptions);
        const data = await handleResponse(response);
        if(data?.auth == false)
        {
            toast.warning(data?.message, {autoClose:2000});
            return {};
        }
        return data;
    } catch(e) {
        return e;
    }
}

export const getDocuments = async ({query, pageSize, pageIndex}) => {
    try {
        const {token} = store.getState().login.token;
        const requestOptions = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
                'Authorization': "Bearer " + token
            },
            body: JSON.stringify(
                {
                    query, pageSize, pageIndex
                }
            )
        };
        const response = await fetch(`${SERVER_URL}/getDocuments`, requestOptions);
        const data = await handleResponse(response);
        if(data?.auth == false)
        {
            toast.warning(data?.message, {autoClose: 2000});
            return {};
        }
        return data;
    } catch(e) {
        return e;
    }
}

export const deleteDocuments = async (ids) => {
    try {
        const {token} = store.getState().login.token;
        const requestOptions = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
                'Authorization': "Bearer " + token
            },
            body: JSON.stringify(
                {
                    ids
                }
            )
        };
        const response = await fetch(`${SERVER_URL}/deleteDocuments`, requestOptions);
        const data = await handleResponse(response);
        if(data?.auth == false)
        {
            toast.warning(data?.message, {autoClose:2000});
            return {};
        }
        return data;
    } catch(e) {
        return e;
    }
}

export const updateDocuments = async (id, document) => {
    try {
        const {token} = store.getState().login.token;
        const requestOptions = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
                'Authorization': "Bearer " + token
            },
            body: JSON.stringify(
                {
                    id,
                    document
                }
            )
        };
        const response = await fetch(`${SERVER_URL}/updateDocuments`, requestOptions);
        const data = await handleResponse(response);
        if(data?.auth == false)
        {
            toast.warning(data?.message, {autoClose: 2000});
            return {};
        }
        return data;
    } catch(e) {
        return e;
    }
}

export const previewDocuments = async (pdfData, id) => {
    try {
        const {token} = store.getState().login.token;
        const requestOptions = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
                'Authorization': "Bearer " + token
            }
        };

        const request = JSON.stringify(pdfData);

        const response = await fetch(`${SERVER_URL}/returnViewUrl/${id}/${request}`, requestOptions);
        const data = await handleResponse(response);
        if(data?.auth == false)
        {
            toast.warning(data?.message, {autoClose:2000});
            return {};
        }
        return data;
    } catch(e) {
        return e;
    }
}

 // $id, $type (0 ~ 4), $pdfData, $flag //('add', 'update'),

export const downloadDocument = async (pdfData, id, type, flag) => {
    try {
        const {token} = store.getState().login.token;
        const requestOptions = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
                'Authorization': "Bearer " + token
            },
            body: JSON.stringify(
                {
                    pdfData,
                    id,
                    type,
                    flag
                }
            )
        };
        const response = await fetch(`${SERVER_URL}/generatePDF`, requestOptions);
        const data = await handleResponse(response);
        if(data?.auth == false)
        {
            toast.warning(data?.message, {autoClose:2000});
            return {};
        }
        return data;
    } catch (e){
        return e;
    }
}
