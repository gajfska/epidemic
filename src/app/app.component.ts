import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'epidemic';


    options: FormGroup;
    colorControl = new FormControl('primary');
    fontSizeControl = new FormControl(16, Validators.min(10));

    constructor(fb: FormBuilder) {
        this.options = fb.group({
            color: this.colorControl,
            fontSize: this.fontSizeControl,
        });
    }
}
