import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getEndpoint } from '../../../src';

describe('Endpoint Test', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  it('Resolves the metadata for a request that has no path', () => {
    const endpoint = getEndpoint(AppController, 'getHello');
    expect(endpoint).toBe('app');
  });

  it('Resolves the metadata for a request that has an additional path', () => {
    const endpoint = getEndpoint(AppController, 'getHelloWithPath');
    expect(endpoint).toBe('app/path');
  });

  it('Resolves the metadata for a request that has an additional path that is long', () => {
    const endpoint = getEndpoint(AppController, 'getHelloWithPathThatIsLong');
    expect(endpoint).toBe('app/path/that/is/long');
  });

  it('Resolves the metadata for a request that has parameters', () => {
    const endpoint = getEndpoint(AppController, 'getHelloWithParam');
    expect(endpoint).toBe('app/path/:param');
  });

  it('Resolves the metadata for a request that has parameters at the start', () => {
    const endpoint = getEndpoint(AppController, 'getHelloWithParamAsRoot');
    expect(endpoint).toBe('app/:param');
  });

  it('Resolves the metadata for a other types of requests', () => {
    const post = getEndpoint(AppController, 'getPost');
    expect(post).toBe('app/post');

    const put = getEndpoint(AppController, 'getPut');
    expect(put).toBe('app/put');

    const del = getEndpoint(AppController, 'getDelete');
    expect(del).toBe('app/delete');
  });
});
