import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HopitalService } from 'src/service/hopital.service';
import { MedecinService } from 'src/service/medecin.service';

@Component({
  selector: 'app-demande-rdv',
  templateUrl: './demande-rdv.component.html',
  styleUrls: ['./demande-rdv.component.css']
})
export class DemandeRdvComponent implements OnInit {
  public idpatient: any;
  public rdevList = [] as any;
  public rdevListdemand  = [] as any;
  constructor(private hopitalService: HopitalService  , private router: Router, private fb: FormBuilder, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.list();
  }
  // tslint:disable-next-line:typedef
  demande(){
    this.idpatient = localStorage.getItem('patient');
    this.hopitalService.demandRendezvous( this.idpatient).subscribe(
      result => {
        alert(' ajoute aves succes ');
        // this.router.navigate(['/listhopital']);
        location.reload();

      },
      error => {
        console.log(error);
      }
    );
  }
  // tslint:disable-next-line:typedef
  async list(){
    this.idpatient = localStorage.getItem('patient');
    await this.hopitalService.getRdvpatient( this.idpatient).subscribe(
      result => {
        this.rdevList = result;
      },
      error => {
        console.log(error);
      }
    );
    await this.hopitalService.getetatRdvpatient( this.idpatient).subscribe(
      result1 => {
        console.log(result1);
        this.rdevListdemand = result1;
      },
      error => {
        console.log(error);
      }
    );
  }
}
