import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {SimulationService} from '../simulation.service';
import {DataStorageService} from '../../shared/data-storage.service';

@Component({
  selector: 'app-simulation-edit',
  templateUrl: './simulation-edit.component.html',
  styleUrls: ['./simulation-edit.component.css']
})
export class SimulationEditComponent implements OnInit {

    id: number;
    editMode = false;
    simulationForm: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private simulationService: SimulationService,
        private router: Router,
        private dataStorageService: DataStorageService
    ) {}

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.id = +params['id'];
            this.editMode = params['id'] != null;
            this.initForm();
            this.dataStorageService.storeSimulations();
        });
    }

    onSubmit() {
        if (this.editMode) {
            this.simulationService.updateSimulation(this.id, this.simulationForm.value);
        } else {
            this.simulationService.addSimulation(this.simulationForm.value);
        }
        this.dataStorageService.storeSimulations();
        this.onCancel();
    }

    onCancel() {
        this.router.navigate(['../'], { relativeTo: this.route });
    }

    private initForm() {
        let nameSimulation = '';
        let populationSize = 0;
        let initianNumberOfInfectedPeople = 0;
        let indexOfR = 0;
        let mortalityRate = 0;
        let numberDayInfectionToRecover = 0;
        let numberDayInfectionToDeath = 0;
        let numberDaySimulationPerformed = 0;

        if (this.editMode) {
            const simulation = this.simulationService.getSimulation(this.id);
            nameSimulation = simulation.nameSimulation;
            populationSize = simulation.populationSize;
            initianNumberOfInfectedPeople = simulation.initianNumberOfInfectedPeople;
            indexOfR = simulation.indexOfR;
            mortalityRate = simulation.mortalityRate;
            numberDayInfectionToRecover = simulation.numberDayInfectionToRecover;
            numberDayInfectionToDeath = simulation.numberDayInfectionToDeath;
            numberDaySimulationPerformed = simulation.numberDaySimulationPerformed;
        }

        this.simulationForm = new FormGroup({
            nameSimulation: new FormControl(nameSimulation, Validators.required),
            populationSize: new FormControl( populationSize, Validators.required),
            initianNumberOfInfectedPeople: new FormControl( initianNumberOfInfectedPeople, Validators.required),
            indexOfR: new FormControl( indexOfR, Validators.required),
            mortalityRate: new FormControl( mortalityRate, Validators.required),
            numberDayInfectionToRecover: new FormControl( numberDayInfectionToRecover, Validators.required),
            numberDayInfectionToDeath: new FormControl( numberDayInfectionToDeath, Validators.required),
            numberDaySimulationPerformed: new FormControl( numberDaySimulationPerformed, Validators.required)
        });
    }

}
