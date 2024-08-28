import { PropertiesValues, Souscription } from '../models';
import { PropertiesValuesRepository } from '../repositories';
export declare class PropertiesValuesSouscriptionController {
    propertiesValuesRepository: PropertiesValuesRepository;
    constructor(propertiesValuesRepository: PropertiesValuesRepository);
    getSouscription(id: typeof PropertiesValues.prototype.id): Promise<Souscription>;
}
