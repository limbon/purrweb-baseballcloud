import { Container, decorate, injectable } from 'inversify';
import { ServiceID } from './utils/enums';
import { CacheService } from './services/CacheService';

const IOC = new Container();

IOC.bind<CacheService<any>>(ServiceID.CacheService).to(CacheService);

export { IOC };
