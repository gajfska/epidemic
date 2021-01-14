import {Component, OnInit} from '@angular/core';
import {EpidemicService} from '../../shared/epidemic.service';
import {EpidemicModel} from '../../shared/epidemic.model';
import {Subscription} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'}
];

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

    displayedColumns: string[] = ['nameSimulation', 'populationSize', 'initianNumberOfInfectedPeople', 'indexOfR', 'mortalityRate', 'numberDayInfectionToRecover', 'numberDayInfectionToDeath', 'numberDaySimulationPerformed', 'details', 'delete'];
    dataSource: any;
    private subscription: Subscription;


    constructor(private epidemicService: EpidemicService) {
    }


    ngOnInit(): void {
        this.subscription = this.epidemicService.epidemicChangedSubject
            .subscribe(
                (simulations: EpidemicModel[]) => {
                    console.log(simulations);
                    this.dataSource.data = simulations;
                }
            );
        this.dataSource = new MatTableDataSource([]);
        this.epidemicService.initSimulations();

    }

    onDelete(id: string): void {
        this.epidemicService.deleteSimulation(id);
    }

}