import { Component } from '@angular/core';
import { ProjetsService } from './services/projets.service';
import { Projet } from './shared/projet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'checksemWebServices';
  projets: Projet[];
  constructor(private projetsService: ProjetsService) {
    projetsService.getProjets().subscribe(
      (projets) => this.projets = projets
    );
  }
}
