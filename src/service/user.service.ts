import { User } from './../app/model/User';
import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders , HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public optionRequete = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    })
  };

  private showallUser = 'http://127.0.0.1:8082/api/covid/rendv';
  private showmedecin = 'http://127.0.0.1:8082/api/covid/Medecin';
  private showpatient = 'http://127.0.0.1:8082/api/covid/Patient';
 // private DELETErdev = 'http://127.0.0.1:8082/api/covid/rendvdel/';
  private updateUser = 'http://127.0.0.1:8082/api/covid/Usersput/';
  private UsertById = 'http://127.0.0.1:8082/api/covid/User/';
  private PostUser = 'http://127.0.0.1:8082/api/covid/Users';
  private UserIslogin = 'http://127.0.0.1:8082/api/covid/Userlogin';


  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
login(email: any,  mdp: any) {
  let params = new HttpParams();
  params = params.append('email', email);
  params = params.append('mdp', mdp);
  const headers = new HttpHeaders();
  headers.append('Access-Control-Allow-Origin', '*');
  headers.append('Access-Control-Allow-Credentials', 'true');
  // tslint:disable-next-line:object-literal-shorthand
  const  res = this.http.post<any>(this.UserIslogin , '' , { headers , params } );
  return res ;
}

// tslint:disable-next-line:typedef
postUser( user: User) {

  const headers = new HttpHeaders();
  headers.append('Access-Control-Allow-Origin', '*');
  // headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:8082');
  headers.append('Access-Control-Allow-Credentials', 'true');
  // tslint:disable-next-line:object-literal-shorthand
  return  this.http.post<User>(this.PostUser , user,  { headers  } );
}
// tslint:disable-next-line:typedef
getUserbyId(id: any ) {
  return  this.http.get<any>(this.UsertById + id);

}
// tslint:disable-next-line:typedef
modifUser(user: User , id: any) {
  return  this.http.put<any>(this.updateUser + id, user, this.optionRequete );
}
// tslint:disable-next-line:typedef
isLoggedIn(){

  const token = localStorage.getItem('myToken');

  if (token) {
    return true ;
  } else {
    return false;
  }
}
}
