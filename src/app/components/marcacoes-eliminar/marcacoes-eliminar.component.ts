import { Component, Input, OnInit } from '@angular/core';
import { MarcacoesService } from '../../services/marcacoes.service';
import { Marcacao } from '../../models/marcacao';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-marcacoes-eliminar',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, HttpClientModule],
  providers: [MarcacoesService],
  templateUrl: './marcacoes-eliminar.component.html',
  styleUrls: ['./marcacoes-eliminar.component.scss']
})
export class MarcacoesEliminarComponent{
  marcacao?: Marcacao;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private marcacoesService: MarcacoesService
  ) {}

  //inicializa e guarda o id
  ngOnInit():void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.marcacoesService.getById(id).subscribe(result => this.marcacao = result);
    }
  }

  //função aplicada no html para chamar a função de deletar
  deleteMarcacao(): void{
   if(this.marcacao){
    this.marcacoesService.delete(this.marcacao).subscribe(()=>this.router.navigate(['']))
   }
  }



}

