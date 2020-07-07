import { Container } from 'inversify';

import { CacheService } from './services/CacheService';
import { ApiService } from './services/ApiService';

const IOC = new Container();

IOC.bind(CacheService).toSelf().inSingletonScope();
IOC.bind(ApiService).toSelf().inSingletonScope();

export { IOC };
