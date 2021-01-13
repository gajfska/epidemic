import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent {
    @ViewChild('f', {static: false}) slForm: NgForm;


    onSubmit(form: NgForm): void {
        if (!form.valid) {
            return;
        }
        const value = form.value;

        console.log(form.value);
        console.log(value.populationSize);
    }
}
