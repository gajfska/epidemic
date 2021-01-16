import {Component, Input, OnInit} from '@angular/core';
import {Simulation} from '../../simulation.model';
import {DataStorageService} from '../../../shared/data-storage.service';

@Component({
  selector: 'app-simulation-item',
  templateUrl: './simulation-item.component.html',
  styleUrls: ['./simulation-item.component.css']
})
export class SimulationItemComponent {
    @Input() simulation: Simulation;
    @Input() index: number;

}
