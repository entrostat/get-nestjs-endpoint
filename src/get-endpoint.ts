import { StringKeyOf } from 'type-fest';
import 'reflect-metadata';

const NESTJS_ENDPOINT_METADATA_KEY = 'path';

export function getEndpoint<T>(controller: new (...params: any[]) => T, key: StringKeyOf<T>) {
    const controllerPath = Reflect.getMetadata(NESTJS_ENDPOINT_METADATA_KEY, controller);
    const endpointPath = Reflect.getMetadata(NESTJS_ENDPOINT_METADATA_KEY, controller.prototype[key]);
    return `${controllerPath}/${endpointPath}`;
}
