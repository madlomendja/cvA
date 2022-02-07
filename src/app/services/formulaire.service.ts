import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormulaireService {

  url = 'http://127.0.0.1:8000/api/formulaires'

  constructor(private recup : HttpClient) { 

  }

  recuperation(contact:any): Observable<any>{
    return this.recup.post(this.url, contact)
  }
}
