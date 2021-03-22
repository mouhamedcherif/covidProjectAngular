import { MedecinService } from './../../../../service/medecin.service';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Medecin } from 'src/app/model/Medecin';

@Component({
  selector: 'app-profilmedcin',
  templateUrl: './profilmedcin.component.html',
  styleUrls: ['./profilmedcin.component.css']
})
export class ProfilmedcinComponent implements OnInit {
  Formedecin!: FormGroup;
  isfind = false;
  public rdevList = [] as any;
  public idmedecin: any;

  constructor(private medecinservice: MedecinService  , private router: Router, private fb: FormBuilder, public datepipe: DatePipe) {
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
       specialite : new FormControl('', [
        Validators.required,
       ]),
       Experience : new FormControl('', [
       Validators.required,
      ])
   };
    this.Formedecin = this.fb.group(formControls);

  }
  // tslint:disable-next-line:typedef
  get nom() {
    return this.Formedecin.get('nom');
  }
  // tslint:disable-next-line:typedef
  get prenom() {
    return this.Formedecin.get('prenom');
  }
  // tslint:disable-next-line:typedef
  get cin() {
    return this.Formedecin.get('cin');
  }
  // tslint:disable-next-line:typedef
  get specialite() {
    return this.Formedecin.get('specialite');
  }
  // tslint:disable-next-line:typedef
  get Experience() {
    return this.Formedecin.get('Experience');
  }

  ngOnInit(): void {
    this.findmedecin();
  }
  // tslint:disable-next-line:typedef
  savemed(){
    const data = this.Formedecin.value;
    console.log(data);

    // tslint:disable-next-line:prefer-const
    let idUser = localStorage.getItem('IdUser');
    // tslint:disable-next-line:prefer-const
    let  medecin = new Medecin(data.specialite, data.Experience, data.cin, data.nom, data.prenom);

    console.log(medecin);
     // tslint:disable-next-line:align
     this.medecinservice.postMedecin( medecin , idUser).subscribe(
      result => {
        alert(' ajoute aves succes ');
        location.reload();
        this.router.navigate(['/profilmedecin']);
      },
      error => {
        console.log(error);
      }
    );
  }
  // tslint:disable-next-line:typedef
  async findmedecin(){
    // tslint:disable-next-line:prefer-const
    let idUser = localStorage.getItem('IdUser');
   // tslint:disable-next-line:align
   await  this.medecinservice.findmedecin( idUser).subscribe(
  async result => {
    this.isfind = result.find;
    if ( this.isfind === true) {
       this.idmedecin = result.idmedecin;
       localStorage.setItem('medecin', this.idmedecin);

       await this.medecinservice.getmedecinbyId( this.idmedecin).subscribe(
        result1 => {
          this.rdevList = result1;

          this.Formedecin.patchValue({
              nom: this.rdevList.nom,
              prenom: this.rdevList.prenom,
              cin: this.rdevList.cin,
              specialite: this.rdevList.sepc,
              Experience: this.rdevList.experience

            });
        },
        error => {
          console.log(error);
        }
      );

     }
  },
  error => {
    console.log(error);
  }
);
}
// tslint:disable-next-line:typedef
async update(){
  const idpat = this.idmedecin;
  const data = this.Formedecin.value;
// tslint:disable-next-line:prefer-const
  let  medecin = new Medecin(data.specialite, data.Experience, data.cin, data.nom, data.prenom);
  await this.medecinservice.modimedecin(medecin , idpat).subscribe(
    async res => {
      await location.reload();
      await this.router.navigate(['/profilmedecin']);    },
    err => {
      console.log(err);
    }
  );

}
// tslint:disable-next-line:typedef
delete(){
  const idpat = this.idmedecin;

  this.medecinservice.deletemedecin(idpat).subscribe(
    // tslint:disable-next-line:variable-name
    (_result: any ) => {
      location.reload();

      localStorage.removeItem('myToken');
      localStorage.removeItem('IdUser');
      localStorage.removeItem('role');
      this.router.navigate(['/']);
      location.reload();

    },
    (error: any) => {
      console.log(error);
    });
    // tslint:disable-next-line:align
    this.router.navigate(['/']);

  // await this.router.navigate(['/mesforum', Constantuser.User_Id]);
}
}
