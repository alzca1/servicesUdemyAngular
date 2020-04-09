import { Injectable } from "@angular/core";

@Injectable()

export class CounterService {
  actives = 0;
  inactives = 0;

  addToActives() {
    this.actives++;
    console.log(`Actives have been triggered ${this.actives} times`);
  }

  addToInactives() {
    this.inactives++;
    console.log(`Inactives have been triggered ${this.inactives} times`);
  }
}
