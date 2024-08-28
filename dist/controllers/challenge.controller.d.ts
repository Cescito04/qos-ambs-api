import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Challenge } from '../models';
import { AmbassadorRepository, ChallengeRepository, DatahistoryRepository, SouscriptionRepository, ZoningRepository } from '../repositories';
import { ApiManagementController } from './api-management.controller';
export declare class ChallengeController {
    challengeRepository: ChallengeRepository;
    souscriptionRepository: SouscriptionRepository;
    datahistoryRepository: DatahistoryRepository;
    ambassadorRepository: AmbassadorRepository;
    apiManagementController: ApiManagementController;
    zoningRepository: ZoningRepository;
    constructor(challengeRepository: ChallengeRepository, souscriptionRepository: SouscriptionRepository, datahistoryRepository: DatahistoryRepository, ambassadorRepository: AmbassadorRepository, // Ajouter le repository des ambassadeurs
    apiManagementController: ApiManagementController, zoningRepository: ZoningRepository);
    create(challenge: Omit<Challenge, 'id'>): Promise<Challenge>;
    notifyAmbassadors(challenge: Challenge): Promise<void>;
    count(where?: Where<Challenge>): Promise<Count>;
    find(filter?: Filter<Challenge>): Promise<Challenge[]>;
    updateAll(challenge: Challenge, where?: Where<Challenge>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Challenge>): Promise<Challenge>;
    getClassement(challengeId: string): Promise<any[]>;
    calculeScore(id: string): Promise<any[]>;
    isPointInPolygon(point: Coordinate, rings: Coordinate[][]): boolean;
    calculateAverage(values: number[]): number;
    updateById(id: string, challenge: Challenge): Promise<void>;
    replaceById(id: string, challenge: Challenge): Promise<void>;
    deleteById(id: string): Promise<void>;
    getClassements(challengeId: string, ambassadorId: string): Promise<any[]>;
    calculeScores(challengeId: string, ambassadorId: string): Promise<any[]>;
}
declare type Coordinate = [number, number];
export {};
