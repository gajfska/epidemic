import {Injectable} from '@angular/core';
import {EpidemicModel} from './epidemic.model';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class EpidemicService {

    private epidemicModelsArray: EpidemicModel[] = [];
    epidemicChangedSubject = new Subject<EpidemicModel[]>();
    private localStorageName = 'localStorageDB';

    private updateSimulationsList(): void {
        this.epidemicChangedSubject.next(this.epidemicModelsArray.slice());
        localStorage.setItem(this.localStorageName, JSON.stringify(this.epidemicModelsArray));
    }


    addModel(task: EpidemicModel): void {
        this.epidemicModelsArray.push(task);
        this.updateSimulationsList();
    }

    initSimulations(): void {
        const retrievedObject = localStorage.getItem(this.localStorageName);
        const locations: Array<EpidemicModel> = JSON.parse(retrievedObject);
        this.epidemicModelsArray = locations;
        if (this.epidemicModelsArray.length === 0) {
            this.epidemicModelsArray = this.epidemicModelsArray;
        }
        this.updateSimulationsList();
    }

    deleteSimulation(wantedId: string): void {
        const removeIndex = this.epidemicModelsArray.map((item) => {
            return item.id;
        }).indexOf(wantedId);

        this.epidemicModelsArray.splice(removeIndex, 1);

        this.updateSimulationsList();
    }

}