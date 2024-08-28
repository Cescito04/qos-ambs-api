import { PropertiesValues, Properties } from '../models';
import { PropertiesValuesRepository } from '../repositories';
export declare class PropertiesValuesPropertiesController {
    propertiesValuesRepository: PropertiesValuesRepository;
    constructor(propertiesValuesRepository: PropertiesValuesRepository);
    getProperties(id: typeof PropertiesValues.prototype.id): Promise<Properties>;
}
