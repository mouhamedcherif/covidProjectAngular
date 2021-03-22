import { Medecin } from './../app/model/Medecin';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {
  public optionRequete = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    }),
  };
private showMedecin = 'http://127.0.0.1:8082/api/covid/';
private DELETEMedecin = 'http://127.0.0.1:8082/api/covid/Medecinsdel/';
private updateMedecin = 'http://127.0.0.1:8082/api/covid/Medecinsput/';
private MedecinById = 'http://127.0.0.1:8082/api/covid/Medecin/';
private PostMedecin = 'http://127.0.0.1:8082/api/covid/medecins';
private getByidmedecin = 'http://127.0.0.1:8082/api/covid/Medecin/';
private Postfindmed = 'http://127.0.0.1:8082/api/covid/findMedecin';


  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  postMedecin(medecin: Medecin , iduser: any) {
    let params = new HttpParams();
    params = params.append('iduser', iduser);
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Credentials', 'true');
    // tslint:disable-next-line:object-literal-shorthand
    console.log(medecin);
    return  this.http.post<Medecin>(this.PostMedecin , medecin, { headers , params} );
  }
  // tslint:disable-next-line:typedef
  findmedecin(iduser: any) {
    let params = new HttpParams();
    params = params.append('iduser', iduser);
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    // headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:8082');
    headers.append('Access-Control-Allow-Credentials', 'true');
    // tslint:disable-next-line:object-literal-shorthand
    return  this.http.post<any>(this.Postfindmed , '', { headers , params} );
  }
  // tslint:disable-next-line:typedef
  getmedecinbyId(id: any ) {
    return  this.http.get<any>(this.getByidmedecin + id);
  }
  // tslint:disable-next-line:typedef
  modimedecin(medecin: Medecin, id: any) {
    return  this.http.put<any>(this.updateMedecin + id, medecin, this.optionRequete );
  }
  // tslint:disable-next-line:typedef
  deletemedecin(id: any ) {
    return  this.http.delete<any>(this.DELETEMedecin + id);
  }


}
