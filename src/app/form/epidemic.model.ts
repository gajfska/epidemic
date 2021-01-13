export interface EpidemicModel {
    nameSimulation: string;
    populationSize: number;
    initianNumberOfInfectedPeople: number;
    indexOfR: number;
    mortalityRate: number;
    numberDayInfectionToRecover: number;
    numberDayInfectionToDeath: number;
    numberDaySimulationPerformed: number;
}
