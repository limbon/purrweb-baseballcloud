import { IOC } from '../../ioc';
import { ApiService } from '../../services/ApiService';
import { ServiceID } from '../../utils/enums';

const api = IOC.get<ApiService>(ServiceID.ApiService);

export const requestTeams = () => () => {
	return api.requestTeams();
};

export const requestSchools = () => () => {
	return api.requestSchools();
};

export const requestFacilites = () => () => {
	return api.requestFacilites();
};
