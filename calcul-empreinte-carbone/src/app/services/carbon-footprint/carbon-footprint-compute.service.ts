import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarbonFootprintComputeService {

  private _voyages = [
    { distanceKm: 50, consommationPour100Km: 5, quantiteCO2: (50*5) / 100 * 2.3},
    { distanceKm: 150, consommationPour100Km: 6, quantiteCO2: (150*6) / 100 * 2.3 },
    { distanceKm: 250, consommationPour100Km: 7, quantiteCO2: (250*7) / 100 * 2.3 },
    { distanceKm: 350, consommationPour100Km: 8, quantiteCO2: (350*8) / 100 * 2.3 },
    { distanceKm: 450, consommationPour100Km: 9, quantiteCO2: (450*9) / 100 * 2.3 }
  ]

  constructor() { }

  addVoyage(voyage:any){
    //this._voyages = [...this._voyages,voyage];
    const { distanceKm, consomation100km,date,type } = voyage;
    let quantiteCO2 = 0;
    switch (type) {
      case 'voiture': quantiteCO2 = (distanceKm * consomation100km) / 100 * 2.3; break;
      case 'avion':  quantiteCO2 = distanceKm * 0.2; break
      case 'train': quantiteCO2 = distanceKm * 0.03; break

    }
    this._voyages.push({ distanceKm , consommationPour100Km: type==="voiture"?consomation100km:-1, quantiteCO2});
  }

  getVoyages() {
    return this._voyages;
  }


  getResumeVoyages(){
    let moyenneConsomationPour100km= 0;
    let sommeDistanceKm = 0;
    let sommeTotalCo2 = 0;
    this._voyages.forEach(voyage => {
      sommeDistanceKm+=voyage.distanceKm;
      moyenneConsomationPour100km += voyage.consommationPour100Km;
      sommeTotalCo2 += voyage.quantiteCO2;
    })
    moyenneConsomationPour100km /= this._voyages.length;
    return { sommeDistanceKm,moyenneConsomationPour100km,sommeTotalCo2 }
  }

}
