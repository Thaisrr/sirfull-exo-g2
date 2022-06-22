import { Film } from './../utils/models/film';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filmotheque',
  templateUrl: './filmotheque.component.html',
  styleUrls: ['./filmotheque.component.css']
})
export class FilmothequeComponent {

  films: Film[] = [
    {title: 'Titanic', image: '', watched: true},
    {title: 'Mad Men', image: '', watched: false},
    {title: 'Le Seigneur des Anneaux', image: '', watched: true}
  ]



  constructor() { }


}
