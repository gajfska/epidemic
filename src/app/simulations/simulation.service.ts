import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Simulation} from './simulation.model';

@Injectable()
export class SimulationService {
    simulationsChanged = new Subject<Simulation[]>();

    private simulations: Simulation[] = [];

    constructor() {}

    setSimulations(simulations: Simulation[]) {
        this.simulations = simulations;
        this.simulationsChanged.next(this.simulations.slice());
    }

    getSimulations() {
        return this.simulations.slice();
    }

    getSimulation(index: number) {
        return this.simulations[index];
    }

    addSimulation(simulation: Simulation) {
        this.simulations.push(simulation);
        this.simulationsChanged.next(this.simulations.slice());
    }

    updateSimulation(index: number, newSimulation: Simulation) {
        this.simulations[index] = newSimulation;
        this.simulationsChanged.next(this.simulations.slice());
    }

    deleteSimulation(index: number) {
        this.simulations.splice(index, 1);
        this.simulationsChanged.next(this.simulations.slice());
    }
}
