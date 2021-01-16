import {Component, OnInit} from '@angular/core';
import {Simulation} from '../simulation.model';
import {SimulationService} from '../simulation.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-simulation-detail',
  templateUrl: './simulation-detail.component.html',
  styleUrls: ['./simulation-detail.component.css']
})
export class SimulationDetailComponent implements OnInit{

    simulation: Simulation;
    id: number;

    constructor(private simulationService: SimulationService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.id = +params['id'];
                    this.simulation = this.simulationService.getSimulation(this.id);
                }
            );
    }

    onEditSimulation() {
        this.router.navigate(['edit'], {relativeTo: this.route});
        // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
    }

    onDeleteSimulation() {
        this.simulationService.deleteSimulation(this.id);
        this.router.navigate(['/simulations']);
    }
}
