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
private PatientById = 'http://127.0.0.1:8082/api/covid/Patient/';
private PostPatients = 'http://127.0.0.1:8082/api/covid/Patients';
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
}
