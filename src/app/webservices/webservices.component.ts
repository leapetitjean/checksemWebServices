import { Component, OnInit } from '@angular/core';
import { ProjetsService } from '../services/projets.service';
import { Projet } from '../shared/projet';

@Component({
  selector: 'app-webservices',
  templateUrl: './webservices.component.html',
  styleUrls: ['./webservices.component.scss']
})
export class WebservicesComponent implements OnInit {

  projets: Projet[];
  constructor(private projetsService: ProjetsService) {
    projetsService.getProjets().subscribe(
      (projets) => this.projets = projets
    );
  }

  ngOnInit(): void {
  }

}
