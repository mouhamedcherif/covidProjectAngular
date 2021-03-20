import {  Patients } from 'src/app/model/Patients';
import { PatientService } from './../../../../service/patient.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HopitalService } from 'src/service/hopital.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-profilpatient',
  templateUrl: './profilpatient.component.html',
  styleUrls: ['./profilpatient.component.css']
})
export class ProfilpatientComponent implements OnInit {
  FormPatient!: FormGroup;

  constructor(private patientservice: PatientService , private router: Router, private fb: FormBuilder, public datepipe: DatePipe) {
    const formControls = {
      nom : new FormControl('', [
       Validators.required,
      ]),
      prenom : new FormControl('', [
        Validators.required,
       ]),
       cin : new FormControl('', [
        Validators.required,
       ]),
       age : new FormControl('', [
        Validators.required,
       ]),
       sex : new FormControl('', [
       Validators.required,
      ]),
      Region : new FormControl('', [
        Validators.required,
       ]),
       numcnss : new FormControl('', [
        Validators.required,
       ])
   };
    this.FormPatient = this.fb.group(formControls);

   }
   // tslint:disable-next-line:typedef
   get nom() {
    return this.FormPatient.get('nom');
  }
  // tslint:disable-next-line:typedef
  get prenom() {
    return this.FormPatient.get('prenom');
  }
  // tslint:disable-next-line:typedef
  get cin() {
    return this.FormPatient.get('cin');
  }
  // tslint:disable-next-line:typedef
  get age() {
    return this.FormPatient.get('age');
  }
  // tslint:disable-next-line:typedef
  get sex() {
    return this.FormPatient.get('sex');
  }
  // tslint:disable-next-line:typedef
  get Region() {
    return this.FormPatient.get('Region');
  }
  // tslint:disable-next-line:typedef
  get numcnss() {
    return this.FormPatient.get('numcnss');
  }
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  get f() { return this.FormPatient.controls; }
  // tslint:disable-next-line:typedef
  savepatient() {
    const data = this.FormPatient.value;
    console.log(data);

    // tslint:disable-next-line:prefer-const
    let idUser = localStorage.getItem('IdUser');
    // tslint:disable-next-line:prefer-const
    let  patient = new Patients(data.age, data.cin, data.nom, data.numcnss, data.prenom, data.region, data.sex);

    console.log(patient);
     // tslint:disable-next-line:align
     this.patientservice.postPatient( patient , idUser).subscribe(
      result => {
        alert(' ajoute aves succes ');
        this.router.navigate(['/consultPatient']);

      },
      error => {
        console.log(error);
      }
    );

  }

}
