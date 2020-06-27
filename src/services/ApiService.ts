import { injectable, inject } from 'inversify';
import { ServiceID } from '../utils/enums';
import { CacheService } from './CacheService';

@injectable()
export class ApiService {
	@inject(ServiceID.CacheService) private cacheService: CacheService<any>;
	private BASE_URL = 'https://baseballcloud-back.herokuapp.com/api/v1';

	constructor() {
		// DEBUG
		(window as any).ApiService = this;
	}
}
