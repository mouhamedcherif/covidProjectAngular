import { Component, OnInit } from '@angular/core';
import { HopitalService } from 'src/service/hopital.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { PostRdev } from 'src/app/model/PostRdev';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-update-rdv',
  templateUrl: './update-rdv.component.html',
  styleUrls: ['./update-rdv.component.css']
})
export class UpdateRdvComponent implements OnInit {
  public rdevList = [] as any;
  public idrendev: any;
  myFormUpdate!: FormGroup;
  userService: any;
  toastr: any;

  constructor(private hopitalService: HopitalService , private router: ActivatedRoute , private fb: FormBuilder ,    private route: Router
    ,         public datepipe: DatePipe) {
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
    this.myFormUpdate = this.fb.group(formControls);
   }

  ngOnInit(): void {
    // tslint:disable-next-line:prefer-const
    this.idrendev = this.router.snapshot.params.id;
    this.showAll();
  }
  // tslint:disable-next-line:typedef
  async showAll(){
    // tslint:disable-next-line:prefer-const
    let idrenv = this.idrendev;
    this.hopitalService.getrdevbyId(idrenv).subscribe((result: []) => {
      this.rdevList = result;
      console.log(result);
      this.myFormUpdate.patchValue({
        inputdate: this.rdevList.inputdate,
        nomHopital: this.rdevList.nomHopital,
        gouvernerat: this.rdevList.gouvernerat,
        inputState: this.rdevList.inputState
      });
    }, (error: any) => {
      console.log(error);
    });
}
// tslint:disable-next-line:typedef
updateRdev() {
  const data = this.myFormUpdate.value;
  const idRdev = this.router.snapshot.params.id;
  // tslint:disable-next-line:variable-name
  const latest_date = this.datepipe.transform(data.inputdate, 'yyyy-MM-dd') || '{}';
  console.log(data);
  alert(data.inputpatient + 'MEDECIN' + data.inputmedecin);

  // tslint:disable-next-line:max-line-length
  const rendevous = new PostRdev( latest_date, data.nomHopital, data.gouvernerat, data.inputState);
  console.log(rendevous);
  this.hopitalService.modirdev(rendevous , idRdev).subscribe(
    res => {
      this.route.navigate(['/listhopital']);
    },
    err => {
      console.log(err);
    }
  );

}
}
