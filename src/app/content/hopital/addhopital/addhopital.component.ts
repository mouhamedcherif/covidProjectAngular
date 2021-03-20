import { PostRdev } from './../../../model/PostRdev';
import { Medecin } from './../../../model/Medecin';
import { Hopital } from './../../../model/Hopital';
import { FormGroup , FormControl , FormBuilder , Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HopitalService } from 'src/service/hopital.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Patients } from '../../../model/Patients';

@Component({
  selector: 'app-addhopital',
  templateUrl: './addhopital.component.html',
  styleUrls: ['./addhopital.component.css']
})
export class AddhopitalComponent implements OnInit {
  public medecinList = [] as any;
  public patientList = [] as any;
  myForm!: FormGroup;
  constructor(private hopitalService: HopitalService , private router: Router, private fb: FormBuilder, public datepipe: DatePipe) {
    const formControls = {
      inputdate : new FormControl('', [
       Validators.required,
      ]),
      nomHopital : new FormControl('', [
        Validators.required,
       ]),
       gouvernerat : new FormControl('', [
        Validators.required,
       ]),
       inputState : new FormControl('', [
        Validators.required,
       ]),
       inputmedecin : new FormControl('', [
       Validators.required,
      ]),
      inputpatient : new FormControl('', [
        Validators.required,
       ])
   };
    this.myForm = this.fb.group(formControls);
  }
  // tslint:disable-next-line:typedef
  get inputdate() {
    return this.myForm.get('inputdate');
  }
  // tslint:disable-next-line:typedef
  get nomHopital() {
    return this.myForm.get('nomHopital');
  }
  // tslint:disable-next-line:typedef
  get gouvernerat() {
    return this.myForm.get('gouvernerat');
  }
  // tslint:disable-next-line:typedef
  get inputState() {
    return this.myForm.get('inputState');
  }
  // tslint:disable-next-line:typedef
  get inputmedecin() {
    return this.myForm.get('inputmedecin');
  }
  // tslint:disable-next-line:typedef
  get inputpatient() {
    return this.myForm.get('inputpatient');
  }
  ngOnInit(): void {
    this.showAll();
  }
  // tslint:disable-next-line:typedef
  async showAll(){
    await this.hopitalService.getshowmedecin().subscribe(
      (result: []) => {
        this.medecinList = result;
      },
      (error: any) => {
        console.log(error);
      }
    );
    await this.hopitalService.getshowpatient().subscribe(
      (result1: []) => {
        this.patientList = result1;
      },
      (error: any) => {
        console.log(error);
      }
    );

  }
  // tslint:disable-next-line:typedef
  async saveRdv(){
    const data = this.myForm.value;
    const date = new Date();
    // tslint:disable-next-line:variable-name
    // tslint:disable-next-line:prefer-const
    // tslint:disable-next-line:variable-name
    const latest_date = this.datepipe.transform(data.inputdate, 'yyyy-MM-dd') || '{}';
    console.log(data);

    // tslint:disable-next-line:max-line-length
    const rendevous = new PostRdev( latest_date, data.nomHopital, data.gouvernerat, data.inputState);
    console.log(rendevous);
    await this.hopitalService.postrdev( rendevous , data.inputmedecin , data.inputpatient).subscribe(
      result => {
        alert(' ajoute aves succes ');
        this.router.navigate(['/listhopital']);

      },
      error => {
        console.log(error);
      }
    );

  }
}
