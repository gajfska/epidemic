import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SimulationService} from '../simulations/simulation.service';
import {Simulation} from '../simulations/simulation.model';
import {map, tap} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(private http: HttpClient, private simulationService: SimulationService) {}


    storeSimulations() {
        const simulations = this.simulationService.getSimulations();
        this.http
            .put(
                'https://ng-epidemic-default-rtdb.firebaseio.com/epidemic.json',
                simulations
            )
            .subscribe(response => {
                console.log(response);
            });
    }


    fetchSimulations() {
        return this.http
            .get<Simulation[]>(
                'https://ng-epidemic-default-rtdb.firebaseio.com/epidemic.json'
            )
            .pipe(
                map(simulations => {
                    return simulations.map(simulation => {
                        return {
                            ...simulation,
                            // ingredients: simulation.ingredients ? simulation.ingredients : []
                        };
                    });
                }),
                tap(simulations => {
                    this.simulationService.setSimulations(simulations);
                })
            );
    }
}
