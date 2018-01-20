import {submitRequest} from '../requestService';
import ApiGateway from '../apiGateway';

describe('Request Service', () => {
  it('should post request to /requests api gateway', () => {
    spyOn(ApiGateway, 'post');

    const request = {name: 'Luke Skywalker'};
    submitRequest(request);

    expect(ApiGateway.post).toHaveBeenCalledWith('requests', request);
  });
});
