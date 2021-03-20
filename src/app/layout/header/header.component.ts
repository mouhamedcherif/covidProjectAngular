import { User } from './../../model/User';
import { UserService } from './../../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl , FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'angulartoastr';
  showModal: boolean  ;
  showModalregister: boolean  ;
  showmodifcpt: boolean;
  loginForm: FormGroup;
  registerForm: FormGroup;
  modifForm: FormGroup;
  submitted = false;
  isLoggedIn = false;
  public UserList = [] as any;

  constructor(private formBuilder: FormBuilder , private userservice: UserService , private router: Router, public datepipe: DatePipe) {
    this.showModal = false;
    this.showModalregister = false;
    this.showmodifcpt = false;
    const formControls = {
    email : new FormControl('', [
     Validators.required,
    ]),
    password : new FormControl('', [
      Validators.required,
     ])
    };
    this.loginForm = this.formBuilder.group(formControls);

  // tslint:disable-next-line:align
  const formControls1 = {
    email : new FormControl('', [
     Validators.required,
    ]),
    password : new FormControl('', [
      Validators.required,
     ]),
     role : new FormControl('', [
     ])
    };
    this.registerForm = this.formBuilder.group(formControls1);

    const formControls2 = {
      email : new FormControl('', [
       Validators.required,
      ]),
      password : new FormControl('', [
        Validators.required,
       ])
      };
    this.modifForm = this.formBuilder.group(formControls2);

  }
  // tslint:disable-next-line:typedef
  get email() { return this.loginForm.get('email'); }
  // tslint:disable-next-line:typedef
  get password() { return this.loginForm.get('password'); }
  // tslint:disable-next-line:typedef
  show(){
    this.showModal = true; // Show-Hide Modal Check
  }
  // tslint:disable-next-line:typedef
  showregister(){
    this.showModalregister = true;

  }
  // tslint:disable-next-line:typedef
  hideregister(){
    this.showModalregister = false;
  }
  // Bootstrap Modal Close event
  // tslint:disable-next-line:typedef
  hide()
  {
    this.showModal = false;
  }
  // tslint:disable-next-line:typedef
  showmodif(){
    this.showmodifcpt = true;

  }
  // tslint:disable-next-line:typedef
  hidemodif(){
    this.showmodifcpt = false;
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.isLoggedIn = this.userservice.isLoggedIn();
    this.onSubmitmodif();


}
// convenience getter for easy access to form fields
// tslint:disable-next-line:typedef
get f() { return this.loginForm.controls; }
// tslint:disable-next-line:typedef
get regis() { return this.registerForm.controls; }

// tslint:disable-next-line:typedef
get modif() { return this.modifForm.controls; }

// tslint:disable-next-line:typedef
async login() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    if (this.submitted)
    {
      const data = this.loginForm.value;

      await this.userservice.login(data.email , data.password).subscribe(
        async res => {
          console.log(res);
          // tslint:disable-next-line:prefer-const
          let token = res.token;
          const IdUser = res.id;
          const role = res.role;
          localStorage.setItem('myToken', token);
          localStorage.setItem('IdUser', IdUser);
          localStorage.setItem('role', role);

          // tslint:disable-next-line:whitespace
          if( role === 'medecin'){
            this.router.navigate(['/profilmedecin']);

          }
          if ( role === 'patient'){
            this.router.navigate(['/profilpatient']);

          }
          if ( role === 'admin'){
            this.router.navigate(['/listhopital']);

          }
          await location.reload();

        },
        err => {
          console.log(err);
        }
      );
      this.showModal = false;

    }
}
// tslint:disable-next-line:typedef
async onSubmitregister(){
  const data = this.registerForm.value;

  const user = new User(data.email, data.password , data.role);
  console.log(user);

  await this.userservice.postUser(user).subscribe(
    res => {
      console.log(res);
      location.reload();

      this.router.navigate(['/']);
      alert('merci de vous conncté !');
    },
    err => {
      console.log(err);
    }
  );
  this.submitted = true;
  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }
  if (this.submitted)
  {
    this.showModalregister = false;
  }
}
// tslint:disable-next-line:typedef
async onSubmitmodif(){
  const idUser = localStorage.getItem('IdUser');

  this.userservice.getUserbyId(idUser).subscribe((result: []) => {
    this.UserList = result;
    console.log(result);
    this.modifForm.patchValue({
      email: this.UserList.email,
      password: this.UserList.mdp
    });
  }, (error: any) => {
    console.log(error);
  });

  this.submitted = true;
  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }
  if (this.submitted)
  {
    this.showmodifcpt = false;
  }
}
// tslint:disable-next-line:typedef
modifiercpt(){
const data = this.modifForm.value;
const modifuser = new User(data.email, data.password , this.UserList.roler );
const idUser = localStorage.getItem('IdUser');
this.userservice.modifUser( modifuser, idUser).subscribe((result: []) => {
  this.UserList = result;
  console.log(result);
  this.modifForm.patchValue({
    email: this.UserList.email,
    password: this.UserList.mdp
  });
}, (error: any) => {
  console.log(error);
});
this.submitted = true;
// stop here if form is invalid
if (this.modifForm.invalid) {
    return;
}
if (this.submitted)
{
  this.showmodifcpt = false;
}
}
// tslint:disable-next-line:typedef
logout(){
  localStorage.removeItem('myToken');
  localStorage.removeItem('IdUser');

  location.reload();

  this.router.navigate(['/']);

}


}
