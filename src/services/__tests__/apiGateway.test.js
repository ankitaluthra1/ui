import axios from 'axios';
import ApiGateway from '../apiGateway';
import {SERVICE_HOST} from '../../config/appConfig';

describe('API Gateway', () => {
  const url = '/request/new';
  const params = {param1: 'value1', param2: 100};

  it('should call service host url with params with http get', () => {
    spyOn(axios, 'get');

    ApiGateway.get(url, params);

    const expectedUrl = `${SERVICE_HOST}/${url}`;
    expect(axios.get).toHaveBeenCalledWith(expectedUrl, {params});
  });

  it('should post to url with body', () => {
    spyOn(axios, 'post');

    ApiGateway.post(url, params);

    const expectedUrl = `${SERVICE_HOST}/${url}`;
    expect(axios.post).toHaveBeenCalledWith(expectedUrl, params);
  });
});
