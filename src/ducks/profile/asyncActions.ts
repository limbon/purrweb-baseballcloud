import { IOC } from '../../ioc';
import { ApiService } from '../../services/ApiService';
import { ServiceID } from '../../utils/enums';

const api = IOC.get<ApiService>(ServiceID.ApiService);

export const requestTeams = (search: string) => () => {
	return api.requestTeams(search);
};

export const requestSchools = (search: string) => () => {
	return api.requestSchools(search);
};

export const requestFacilites = (search: string) => () => {
	return api.requestFacilites(search);
};
