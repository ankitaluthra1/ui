import ApiGateway from './apiGateway';

const submitRequestUrl = 'requests';

export const submitRequest = request => ApiGateway.post(submitRequestUrl, request);
