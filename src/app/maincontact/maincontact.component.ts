import { Component, OnInit } from '@angular/core';
import { FormulaireService } from '../services/formulaire.service';


@Component({
  selector: 'app-maincontact',
  templateUrl: './maincontact.component.html',
  styleUrls: ['./maincontact.component.css']
})
export class MaincontactComponent implements OnInit {

  formulaire = {
    nom : '',
    prenom :'',
    email : '',
    message : ''
  }

  constructor(private service : FormulaireService) {

   }

  ngOnInit(): void {
  }

  onsubmit(){
    console.log('soumission',this.formulaire)
    this.service.recuperation(this.formulaire).subscribe(fleche => {
      console.log(fleche)
    })
  }

}
