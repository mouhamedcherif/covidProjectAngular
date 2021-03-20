import { ProfilmedcinComponent } from './content/medecin/profilmedcin/profilmedcin.component';
import { UpdateRdvComponent } from './content/hopital/update-rdv/update-rdv.component';
import { ListhopitalComponent } from './content/hopital/listhopital/listhopital.component';

import { HomeComponent } from './content/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddhopitalComponent } from './content/hopital/addhopital/addhopital.component';
import { ProfilpatientComponent } from './content/patient/profilpatient/profilpatient.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,

    children: [
       { path: 'listhopital', component: ListhopitalComponent },
       { path: 'addhopital', component: AddhopitalComponent },
       { path: 'modifhopital/:id', component: UpdateRdvComponent },
       { path: 'profilpatient', component: ProfilpatientComponent },
       { path: 'profilmedecin', component: ProfilmedcinComponent }
        // consultPatient
      // { path: 'register', component: RegisterComponent }
      // { path: '', component: PostsComponent },
      // { path: 'postShow', component: PostshowComponent },
      // { path: 'forum/:id', component: ForumComponent },
      // { path: 'listforum', component: ListforumComponent },
      // { path: 'addforum', component: AddforumComponent },
      // { path: 'commentforum/:id', component: CommentComponent },
      // { path: 'mesforum/:id', component: MesForumComponent }


    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
