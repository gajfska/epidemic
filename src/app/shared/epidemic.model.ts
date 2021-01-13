import { v4 as uuidv4 } from 'uuid';

export class EpidemicModel {
    id = uuidv4();
    nameSimulation: string;
    populationSize: number;
    initianNumberOfInfectedPeople: number;
    indexOfR: number;
    mortalityRate: number;
    numberDayInfectionToRecover: number;
    numberDayInfectionToDeath: number;
    numberDaySimulationPerformed: number;

    constructor(nameSimulation: string, populationSize: number, initianNumberOfInfectedPeople: number, indexOfR: number,
                mortalityRate: number, numberDayInfectionToRecover: number, numberDayInfectionToDeath: number,
                numberDaySimulationPerformed: number) {
        this.nameSimulation = nameSimulation;
        this.populationSize = populationSize;
        this.initianNumberOfInfectedPeople = initianNumberOfInfectedPeople;
        this.indexOfR = indexOfR;
        this.mortalityRate = mortalityRate;
        this.numberDayInfectionToRecover = numberDayInfectionToRecover;
        this.numberDayInfectionToDeath = numberDayInfectionToDeath;
        this.numberDaySimulationPerformed = numberDaySimulationPerformed;
    }
}
