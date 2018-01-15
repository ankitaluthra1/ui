import axios from 'axios';
import {SERVICE_HOST} from '../config/appConfig';

export default class ApiGateway {
  static get(endpoint, params) {
    const url = `${SERVICE_HOST}/${endpoint}`;
    return axios.get(url, {params});
  }

  static post(endpoint, body) {
    const url = `${SERVICE_HOST}/${endpoint}`;
    return axios.post(url, body);
  }
}
