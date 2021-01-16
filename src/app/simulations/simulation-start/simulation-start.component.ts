import {Component, OnInit} from '@angular/core';
import {DataStorageService} from '../../shared/data-storage.service';

@Component({  selector: 'app-simulation-start',
  templateUrl: './simulation-start.component.html',
  styleUrls: ['./simulation-start.component.css']

})
export class SimulationStartComponent implements OnInit{

    constructor(private dataStorageService: DataStorageService) {}

    ngOnInit() {
        this.dataStorageService.fetchSimulations().subscribe();
    }
}
