import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Projet } from '../shared/projet';
import webServices from '../../assets/webservices.json';

@Injectable({
  providedIn: 'root'
})
export class ProjetsService {

  constructor() { }

  getProjets(): Observable<Projet[]> {
    let projets: Projet[] = [];
    for (let p of webServices.projets) {
      let projet: Projet = JSON.parse(JSON.stringify(p));
      projets.push(projet);
    }
    return of(projets);
  }

}
