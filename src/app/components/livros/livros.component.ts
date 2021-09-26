import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/entities/livro';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {
  livros:Livro[]=[]
  constructor(private servicoLivro:LivroService) { }

  ngOnInit(): void {
    this.servicoLivro.listar().subscribe(
      data=>{this.livros=data;console.log(this.livros)}
    )
  }

}
