import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {CarbonFootprintComputeService} from '../../services/carbon-footprint/carbon-footprint-compute.service';

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
  totalCo2:number=0;
  voyages:any[]=[];

  constructor(private carbonFootprintService:CarbonFootprintComputeService) {}

  ngOnInit(): void {
    this.voyages = this.carbonFootprintService.getVoyages();
    this.calculateAverage();
  }

  addDistancePer100(){
    this.distanceKm += 100;
  }

  addTravel(){
    const distanceKm = Math.floor(Math.random()*(1000-0+1))+1;
    const consommationPour100Km = Math.floor(Math.random()*(15-0+1))+1;
    const quantiteCO2 = (distanceKm*consommationPour100Km) / 100 * 2.3;
    const travel = {
      distanceKm:distanceKm,
      consommationPour100Km:consommationPour100Km,// moyenne simple
      quantiteCO2: quantiteCO2,
    }
    this.carbonFootprintService.addVoyage(travel)
    this.calculateAverage();
  }

  calculateAverage(){
    const { sommeDistanceKm,moyenneConsomationPour100km,sommeTotalCo2 } = this.carbonFootprintService.getResumeVoyages();
    this.distanceKm=sommeDistanceKm;
    this.consommationPour100Km = moyenneConsomationPour100km;
    this.totalCo2 = sommeTotalCo2;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Method not implemented.');
  }
  ngOnDestroy(): void {
    console.log('Method not implemented.');
  }
}
