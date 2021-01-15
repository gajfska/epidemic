export class Simulation {
  nameSimulation: string;
  populationSize: number;
  initianNumberOfInfectedPeople: number;
  indexOfR: number;


  constructor(nameSimulation: string, populationSize: number, initianNumberOfInfectedPeople: number, indexOfR: number) {
    this.nameSimulation = nameSimulation;
    this.populationSize = populationSize;
    this.initianNumberOfInfectedPeople = initianNumberOfInfectedPeople;
    this.indexOfR = indexOfR;
    }
}


