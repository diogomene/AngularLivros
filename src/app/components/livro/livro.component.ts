import { Component, Input, OnInit } from '@angular/core';
import { Livro } from 'src/app/entities/livro';
import { faStar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {
  @Input() livro!: Livro
  faStar = faStar
  constructor() { }

  ngOnInit(): void {
  }

}
