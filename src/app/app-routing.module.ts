import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaincompetenceComponent } from './maincompetence/maincompetence.component';
import { MaincontactComponent } from './maincontact/maincontact.component';
import { MainformationComponent } from './mainformation/mainformation.component';
import { MainindexComponent } from './mainindex/mainindex.component';
import { MainrealisationsComponent } from './mainrealisations/mainrealisations.component';

const routes: Routes = [ 
  {
    path :'',
    component :MainindexComponent
},
{
  path :'competences',
  component :MaincompetenceComponent
}
,
{
  path :'contact',
  component :MaincontactComponent
}
,
{
  path :'formation',
  component :MainformationComponent
}
,
{
  path :'realisation',
  component :MainrealisationsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
