import axios from 'axios';
import store from '../store/index';
const BASEURL = 'http://192.168.1.16/';
export default axios.create({
        baseURL: BASEURL,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${store.getters.authToken}`
        }
    })