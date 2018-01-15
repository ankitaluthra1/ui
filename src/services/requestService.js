import ApiGateway from './apiGateway';

const submitRequestUrl = 'request';

export const submitRequest = request => ApiGateway.post(submitRequestUrl, request);
