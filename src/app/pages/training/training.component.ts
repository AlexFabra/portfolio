import { Component, OnInit } from '@angular/core';
import { timelineItem } from 'src/app/components/timeline/timeline.component';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  studies: timelineItem[] = [
    { id: 'study1', title: 'Batxillerat', description: `Especialitat en Arts Plàstiques`, location: `Ins Josep Brugulat, Banyoles.`, date: `2013-2015` },
    { id: 'study2', title: 'Història de la filosofia', description: '', location: 'Universitat de Girona.', date: '2015-2020' },
    { id: 'study3', title: `Desenvolupament d'aplicacions multiplataforma`, description: '', location: `Ins Pla de l'Estany, Banyoles.`, date: `2020-2022` }
  ]

  works: timelineItem[] = [
    { id: 'work1', title: 'Operari a Haribo', description: `Delegat de treballs de certa responsabilitat com la preparació de les proporcions del ingredients de la pasta del caramel i la preparació del colorant i el aroma`, location: 'Cornellà del Terri, Girona', date: 'Estius de 2015 a 2017' },
    { id: 'work2', title: 'Cambrer i ajudant de cuina a La Parra', description: `Servei a taula i a barra, cobrament; encarregat de la disposició i neteja de les taules i el local; responsable de la comptabilitat.`, location: 'Banyoles, Girona', date: 'Estius de 2018 a 2019' },
    { id: 'workInfo3', title: 'Depenent i gestor de web a la llibreria Ulyssus', description: 'Disseny i maquetació web i atenció al client', location: 'Girona', date: `D'octubre a desembre de 2018` },
    { id: 'work4', title: `Representant de la Facultat de lletres a la Universitat de Girona a l'Event Expojove`, description: 'Exposició als interessats de la oferta de la Facultat de Lletres de la UdG', location: 'Girona', date: '2019' },
    { id: 'workInfo5', title: 'Depenent i ajudant de flequer i programador a la fleca/pizzeria Can Maula', description: `A més de tractar amb els clients i fer les feines típiques d'unafleca/cafeteria, vaig fer un programa d'escriptori amb Java/MySql per agilitzar les comandes de la pizzeria`, location: 'Melianta, Girona', date: `De l'agost de 2020 a l'agost 2021` },
    { id: 'workInfo6', title: 'Front-end developer en Nexus Geographics', description: 'Pràctiques del cicle DAM', date: `De l'octubre de 2021 a juliol de 2022` }
  ]

  worksView!: timelineItem[];

  timelinePointColor = 'white';

  constructor() { }

  ngOnInit(): void {
    this.UnfilterWork();
  }

  FilterWorkBySoftware(): void {
    this.worksView = this.works.filter((work) => work.id.includes('Info'))
  }
  UnfilterWork(): void {
    this.worksView = this.works;
  }

}