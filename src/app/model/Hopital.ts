import { Medecin } from './Medecin';

export class Hopital {
    constructor(
    public id: any,
    public dateRv?: string,
    public nomHopital?: string,
      // tslint:disable-next-line:variable-name
    public  gouvernerat?: string ,
      // tslint:disable-next-line:variable-name
    public etatest?: any,
    public medecin?: any,
    public patient?: any
    ) {}


}
