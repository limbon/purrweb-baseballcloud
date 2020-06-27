import { ServiceID } from '../utils/enums';
import { IOC } from '../ioc';

export const useService = <T>(id: ServiceID): T => {
	return IOC.get<T>(id);
};
