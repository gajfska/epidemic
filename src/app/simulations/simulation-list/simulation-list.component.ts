import {Component, OnDestroy, OnInit} from '@angular/core';
import {Simulation} from '../simulation.model';
import {Subscription} from 'rxjs';
import {SimulationService} from '../simulation.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-simulation-list',
  templateUrl: './simulation-list.component.html',
  styleUrls: ['./simulation-list.component.css']
})
export class SimulationListComponent implements OnInit, OnDestroy{
    simulations: Simulation[];
    subscription: Subscription;

    constructor(private simulationService: SimulationService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.subscription = this.simulationService.simulationsChanged
            .subscribe(
                (simulations: Simulation[]) => {
                    this.simulations = simulations;
                }
            );
        this.simulations = this.simulationService.getSimulations();
    }

    onNewSimulation() {
        this.router.navigate(['new'], {relativeTo: this.route});
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
