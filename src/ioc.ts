import { Container } from 'inversify';
import { ServiceID } from './utils/enums';
import { CacheService } from './services/CacheService';
import { ApiService } from './services/ApiService';
import { CachedData } from 'baseballcloud/types';

const IOC = new Container();

IOC.bind<CacheService<CachedData>>(ServiceID.CacheService).to(CacheService).inSingletonScope();
IOC.bind<ApiService>(ServiceID.ApiService).to(ApiService).inSingletonScope();

export { IOC };
