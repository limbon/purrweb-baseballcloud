import { IOC } from '../../ioc';
import { ApiService } from '../../services/ApiService';
import { ServiceID } from '../../utils/enums';

export const requestTeams = () => () => {
	const api = IOC.get<ApiService>(ServiceID.ApiService);
	return api.requestTeams();
};
