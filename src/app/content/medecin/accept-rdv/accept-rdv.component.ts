import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HopitalService } from 'src/service/hopital.service';

@Component({
  selector: 'app-accept-rdv',
  templateUrl: './accept-rdv.component.html',
  styleUrls: ['./accept-rdv.component.css']
})
export class AcceptRdvComponent implements OnInit {
  public rdevList = [] as any;
  public idmedecin: any;

  constructor(private hopitalService: HopitalService  , private router: Router, private fb: FormBuilder, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.list();
  }
  // tslint:disable-next-line:typedef
  async accept(id: any){
    this.idmedecin = localStorage.getItem('medecin');
    await this.hopitalService.acceptation(id).subscribe(
      result => {
        alert('accept');
        this.rdevList = result;
        location.reload();

      },
      error => {
        console.log(error);
      }
    );
  }
  // tslint:disable-next-line:typedef
  async delete(id: any){
    this.idmedecin = localStorage.getItem('medecin');
    await this.hopitalService.refuse(id).subscribe(
      result => {
        alert('delete');
        this.rdevList = result;
        location.reload();

      },
      error => {
        console.log(error);
      }
    );

  }
  // tslint:disable-next-line:typedef
  async list(){
    this.idmedecin = localStorage.getItem('medecin');
    await this.hopitalService.getRdvmedein( this.idmedecin).subscribe(
      result => {
        this.rdevList = result;

      },
      error => {
        console.log(error);
      }
    );
}
}
