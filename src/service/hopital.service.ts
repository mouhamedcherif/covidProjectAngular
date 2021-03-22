import { PostRdev } from './../app/model/PostRdev';
import { Hopital } from './../app/model/Hopital';
import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders , HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HopitalService {
  public optionRequete = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    }),
  };

private showallrdv = 'http://127.0.0.1:8082/api/covid/rendv';
private showmedecin = 'http://127.0.0.1:8082/api/covid/Medecin';
private showpatient = 'http://127.0.0.1:8082/api/covid/PatientRdv';
private DELETErdev = 'http://127.0.0.1:8082/api/covid/rendvdel/';
private updaterdev = 'http://127.0.0.1:8082/api/covid/rendvput/';
private rendevtById = 'http://127.0.0.1:8082/api/covid/rendv/';
private PostForum = 'http://127.0.0.1:8082/api/covid/rendv/ajout';
private getByidmedecin = 'http://127.0.0.1:8082/api/covid/Medecin/';
private getByidPatient = 'http://127.0.0.1:8082/api/covid/Patient/';
private getRendezvous = 'http://127.0.0.1:8082/api/covid/demande/ajout';
private getpatientrdv = 'http://127.0.0.1:8082/api/covid/rendvpatient';
private getetatpatientrdv = 'http://127.0.0.1:8082/api/covid/etat';
private getMedecintrdv = 'http://127.0.0.1:8082/api/covid/rendvMedecin';
private accept = 'http://127.0.0.1:8082/api/covid/rendvputmedecinaccept';
private dontaccept = 'http://127.0.0.1:8082/api/covid/rendvMedecin';



constructor(private http: HttpClient) { }
// tslint:disable-next-line:typedef
acceptation( id: any) {
  let params = new HttpParams();
  params = params.append('id', id);
  return  this.http.put<any>(this.accept, '', { params } );
}
// tslint:disable-next-line:typedef
refuse( id: any) {
  let params = new HttpParams();
  params = params.append('id', id);
  return  this.http.put<any>(this.dontaccept , '', { params } );
}
// tslint:disable-next-line:typedef
getRdvmedein(id: any) {
  let params = new HttpParams();
  params = params.append('idMedecin', id);
  const data = this.http.get<any>(this.getMedecintrdv , { params });

  return data;
 }
// tslint:disable-next-line:typedef
getetatRdvpatient(id: any) {
  let params = new HttpParams();
  params = params.append('idPatient', id);
  const data = this.http.get<any>(this.getetatpatientrdv, { params });

  return data;
 }

// tslint:disable-next-line:typedef
getRdvpatient(id: any) {
  let params = new HttpParams();
  params = params.append('idPatient', id);
  const data = this.http.get<any>(this.getpatientrdv , { params });

  return data;
 }

  // tslint:disable-next-line:typedef
  getAllRdv() {
  const data = this.http.get<any>(this.showallrdv, this.optionRequete);

  return data;
 }
 // tslint:disable-next-line:typedef
 getshowmedecin() {
  const data = this.http.get<any>(this.showmedecin, this.optionRequete);

  return data;
 }
 // tslint:disable-next-line:typedef
 getshowpatient() {
  const data = this.http.get<any>(this.showpatient, this.optionRequete);

  return data;
 }
 // tslint:disable-next-line:typedef
 deleterdev(id: any ) {
  return  this.http.delete<any>(this.DELETErdev + id);

}
// tslint:disable-next-line:typedef
modirdev(rendev: PostRdev  , id: any) {
  return  this.http.put<any>(this.updaterdev + id, rendev, this.optionRequete );
}
// tslint:disable-next-line:typedef
getrdevbyId(id: any ) {
  return  this.http.get<any>(this.rendevtById + id);

}
// tslint:disable-next-line:typedef
postrdev(hopital: PostRdev, med: any , pat: any) {
  let params = new HttpParams();
  params = params.append('idMedecin', med);
  params = params.append('idPatient', pat);
  const headers = new HttpHeaders();
  headers.append('Access-Control-Allow-Origin', '*');
  // headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:8082');
  headers.append('Access-Control-Allow-Credentials', 'true');
  // tslint:disable-next-line:object-literal-shorthand
  return  this.http.post<PostRdev>(this.PostForum , hopital, { headers , params } );
}
// tslint:disable-next-line:typedef
getmedcinbyId(id: any ) {
  return  this.http.get<any>(this.getByidmedecin + id);

}
// tslint:disable-next-line:typedef
getPatientbyId(id: any ) {
  return  this.http.get<any>(this.getByidPatient + id);

}
// tslint:disable-next-line:typedef
demandRendezvous( pat: any) {
  let params = new HttpParams();
  params = params.append('idPatient', pat);
  const headers = new HttpHeaders();
  headers.append('Access-Control-Allow-Origin', '*');
  // headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:8082');
  headers.append('Access-Control-Allow-Credentials', 'true');
  // tslint:disable-next-line:object-literal-shorthand
  return  this.http.post<any>(this.getRendezvous , '', { headers , params } );
}
}
