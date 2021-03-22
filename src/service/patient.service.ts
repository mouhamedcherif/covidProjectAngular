import { Patients } from './../app/model/Patients';
import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders , HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  public optionRequete = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    }),
  };


private showpatient = 'http://127.0.0.1:8082/api/covid/';
private DELETEPatient = 'http://127.0.0.1:8082/api/covid/Patientsdel/';
private updatePatient = 'http://127.0.0.1:8082/api/covid/Patientsput/';
private PostPatients = 'http://127.0.0.1:8082/api/covid/Patients';
private Postfindpat = 'http://127.0.0.1:8082/api/covid/findPatient';
private getByidPatient = 'http://127.0.0.1:8082/api/covid/Patient/';

  constructor(private http: HttpClient) { }



  // tslint:disable-next-line:typedef
  postPatient(patient: Patients, iduser: any) {
    let params = new HttpParams();
    params = params.append('iduser', iduser);
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    // headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:8082');
    headers.append('Access-Control-Allow-Credentials', 'true');
    // tslint:disable-next-line:object-literal-shorthand
    console.log(patient);
    return  this.http.post<Patients>(this.PostPatients , patient, { headers , params} );
  }
    // tslint:disable-next-line:typedef
    findpatient(iduser: any) {
      let params = new HttpParams();
      params = params.append('iduser', iduser);
      const headers = new HttpHeaders();
      headers.append('Access-Control-Allow-Origin', '*');
      // headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:8082');
      headers.append('Access-Control-Allow-Credentials', 'true');
      // tslint:disable-next-line:object-literal-shorthand
      return  this.http.post<any>(this.Postfindpat , '', { headers , params} );
    }
    // tslint:disable-next-line:typedef
    getPatientbyId(id: any ) {
      return  this.http.get<any>(this.getByidPatient + id);
    }
    // tslint:disable-next-line:typedef
    modipatient(patient: Patients, id: any) {
      return  this.http.put<any>(this.updatePatient + id, patient, this.optionRequete );
    }
    // tslint:disable-next-line:typedef
    deletepatient(id: any ) {
      return  this.http.delete<any>(this.DELETEPatient + id);
    }
}
