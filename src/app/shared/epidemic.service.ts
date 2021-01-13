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

}