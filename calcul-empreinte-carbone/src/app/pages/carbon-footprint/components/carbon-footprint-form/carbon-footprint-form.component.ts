import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CarbonFootprintComputeService} from '../../../../services/carbon-footprint/carbon-footprint-compute.service';

@Component({
  selector: 'app-carbon-footprint-form',
  standalone: false,

  templateUrl: './carbon-footprint-form.component.html',
  styleUrl: './carbon-footprint-form.component.css'
})
export class CarbonFootprintFormComponent {

  formCarbon: FormGroup;
  isVoiture:boolean=true;

  constructor(private carbonFootprintComputeService:CarbonFootprintComputeService ) {
    this.formCarbon = new FormGroup({
      distanceKm: new FormControl('', [Validators.required,Validators.min(1) ]),
      consomation100km: new FormControl('', null),
      date: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required])
    })
  }



  addVoyage(){
    if(this.formCarbon.invalid){
      console.log("formCarbon invalid");
      return;
    }
    console.log(this.formCarbon.value);
    this.carbonFootprintComputeService.addVoyage(this.formCarbon.value);
    this.formCarbon.reset()
  }

  onChangeType(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    if(value==="voiture"){
      this.isVoiture = true;
      this.formCarbon.get("consomation100km")?.setValidators([Validators.required,Validators.min(1)])
    }else{
      this.isVoiture = false;
      this.formCarbon.get("consomation100km")?.clearValidators();
    }
    this.formCarbon.get("consomation100km")?.updateValueAndValidity();
    console.log(this.isVoiture)
  }
}
