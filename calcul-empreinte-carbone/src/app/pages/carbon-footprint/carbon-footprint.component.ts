import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-carbon-footprint',
  standalone: false,

  templateUrl: './carbon-footprint.component.html',
  styleUrl: './carbon-footprint.component.css'
})
export class CarbonFootprintComponent implements OnInit, OnChanges, OnDestroy {

  name:string ="Carbon Footprint";
  distanceKm:number=0;
  consommationPour100Km:number=0;
  // arrays
  voyages = [
    { distanceKm: 50, consommationPour100Km: 5 },
    { distanceKm: 150, consommationPour100Km: 6 },
    { distanceKm: 250, consommationPour100Km: 7 },
    { distanceKm: 350, consommationPour100Km: 8 },
    { distanceKm: 450, consommationPour100Km: 9 }
  ]

  ngOnInit(): void {
    console.log('Method not implemented.');
    this.calculateAverage();
  }

  addDistancePer100(){
    this.distanceKm += 100;
  }

  addTravel(){
    const v = {
      distanceKm:Math.floor(Math.random()*(1000-0+1))+1,
      consommationPour100Km:Math.floor(Math.random()*(15-0+1))+1
    }
    this.voyages = [...this.voyages,v];
    this.calculateAverage();
  }

  calculateAverage(){
    let m = 0;
    this.voyages.forEach(voyage => {
      this.distanceKm+=voyage.distanceKm;
      this.consommationPour100Km += voyage.consommationPour100Km/ this.voyages.length;
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Method not implemented.');
  }
  ngOnDestroy(): void {
    console.log('Method not implemented.');
  }
}
