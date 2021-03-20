import { HopitalService } from './../../../../service/hopital.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listhopital',
  templateUrl: './listhopital.component.html',
  styleUrls: ['./listhopital.component.css']
})
export class ListhopitalComponent implements OnInit {
  public rdevList = [] as any;
  public idrendv: any ;
  forumContent!: string;
  constructor(private hopitalService: HopitalService , private router: Router) { }

  ngOnInit(): void {
    this.showAllRdv();
  }
  // tslint:disable-next-line:typedef
  showAllRdv(){
    this.hopitalService.getAllRdv().subscribe(
      (result: []) => {
        this.rdevList = result;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  // tslint:disable-next-line:typedef
  delete(idrendv: any){
    this.hopitalService.deleterdev(idrendv).subscribe(
      // tslint:disable-next-line:variable-name
      (_result: any ) => {
        this.router.navigate(['/listhopital']);
      },
      (error: any) => {
        console.log(error);
      });
      // tslint:disable-next-line:align
      location.reload();

    // await this.router.navigate(['/mesforum', Constantuser.User_Id]);
  }

}
