import {Injectable} from '@angular/core';
import {SimulationService} from './simulation.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Simulation} from './simulation.model';
import {DataStorageService} from '../shared/data-storage.service';

@Injectable({ providedIn: 'root' })
export class SimulationsResolverService implements Resolve<Simulation[]>{
    constructor(
        private dataStorageService: DataStorageService,
        private simulationsService: SimulationService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const simulations = this.simulationsService.getSimulations();

        if (simulations.length === 0) {
            return this.dataStorageService.fetchSimulations();
        } else {
            return simulations;
        }
    }
}
