import { injectable, inject } from 'inversify';
import axios from 'axios';

import { ServiceID } from '../utils/enums';
import { CacheService } from './CacheService';
import { SignInFormData, User, CachedData } from 'baseballcloud/types';

@injectable()
export class ApiService {
	@inject(ServiceID.CacheService) private cacheService: CacheService<CachedData>;
	private BASE_URL = 'https://baseballcloud-back.herokuapp.com/api/v1';

	constructor() {
		// DEBUG
		(window as any).ApiService = this;
	}

	requestSignIn = async (data: SignInFormData): Promise<User> => {
		const url = `${this.BASE_URL}/auth/sign_in`;
		const response = await axios.post<{ data: User }>(url, data);

		this.cacheService.set<string>('access-token', response.headers['access-token']);
		this.cacheService.set<string>('uid', response.headers.uid);
		this.cacheService.set<string>('client', response.headers.client);

		return response.data.data;
	};
}
