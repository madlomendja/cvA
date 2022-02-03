import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  onsubmit(){
    console.log('soumission',this.formulaire)
  }

}
