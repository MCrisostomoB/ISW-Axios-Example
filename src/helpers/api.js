import axios from 'axios';

const endpoints = {
    development: 'https://isw-springboot-example.herokuapp.com',
    //development: 'http://127.0.0.1:8000',
};

export const api = axios.create({
    baseURL: endpoints['development'],
    timeout: 20000,
});