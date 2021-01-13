import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {EpidemicModel} from '../shared/epidemic.model';
import {EpidemicService} from '../shared/epidemic.service';


@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent {
    @ViewChild('f', {static: false}) slForm: NgForm;

    constructor(private epidemicService: EpidemicService) {
    }


        onSubmit(form: NgForm): void {
        if (!form.valid) {
            return;
        }
        const value = form.value;
        // const newSimulation = new EpidemicModel(value);
        this.epidemicService.addModel(value);
        form.resetForm();
    }
}
