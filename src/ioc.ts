import { Container, decorate, injectable } from 'inversify';
import { ServiceID } from './utils/enums';
import { CacheService } from './services/CacheService';
import { ApiService } from './services/ApiService';

const IOC = new Container();

IOC.bind<CacheService<any>>(ServiceID.CacheService).to(CacheService);
IOC.bind<ApiService>(ServiceID.ApiService).to(ApiService);

export { IOC };
