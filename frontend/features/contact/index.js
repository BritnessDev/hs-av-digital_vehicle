import { SERVER_URL } from '../../config/config';
import { handleResponse } from '../../utils';
import { store } from '../../store';
import { toast } from 'react-toastify';

// METHOD: POST
// INPUT: query, typeContact, pageSize, pageIndex
// OUTPUT: Contacts
export const getContact = async (query, typeContact, pageSize, pageIndex) => {
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
                    query,
                    typeContact,
                    pageSize,
                    pageIndex,
                }
            )
        };

        
        const response = await fetch(`${SERVER_URL}/getContact`, requestOptions);
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
  };
  
// METHOD: POST
// INPUT: contactData
// OUTPUT: Add contacts with param
export const addContact = async (contactData) => {
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
                    contactData
                }
            )
        };
        const response = await fetch(`${SERVER_URL}/addContact`, requestOptions);
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
// METHOD: POST
// INPUT: [id]
// OUTPUT: delete contacts with ids

export const deleteContactByIds = async (ids) => {
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
        const response = await fetch(`${SERVER_URL}/deleteContacts`, requestOptions);
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

// METHOD: POST
// INPUT: id
// OUTPUT: get contacts with id

export const getContactById = async (id) => {
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
        const response = await fetch(`${SERVER_URL}/getContactById`, requestOptions);
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

// METHOD: POST
// INPUT: id
// OUTPUT: get contacts with id

export const updateContact = async (id, contactData, contactPersonData) => {
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
                    contactData,
                    contactPersonData
                }
            )
        };
        const response = await fetch(`${SERVER_URL}/updateContact`, requestOptions);
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

// METHOD: POST
// INPUT: id
// OUTPUT: get contacts with id

export const getAddList = async (tab) => {
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
                    tab
                }
            )
        };
        const response = await fetch(`${SERVER_URL}/getAddList`, requestOptions);
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


// METHOD: POST
// INPUT: id
// OUTPUT: get contacts with id

export const addContactData = async (id, page) => {
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
                    page
                }
            )
        };
        const response = await fetch(`${SERVER_URL}/addContactData`, requestOptions);
        const data = await handleResponse(response);
        if(data?.auth == false)
        {
            toast.warning(data?.message, {autoClose:2000});
            return {};
        }
        return data;
    } catch (e) {
        return e;
    }
}