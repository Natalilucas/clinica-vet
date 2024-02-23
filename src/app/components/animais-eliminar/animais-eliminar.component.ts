import { Component } from '@angular/core';
import { AnimaisService } from '../../services/animais.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Animais } from '../../models/animais';
import { MarcacoesService } from '../../services/marcacoes.service';

@Component({
  selector: 'app-animais-eliminar',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, HttpClientModule],
  providers: [AnimaisService],
  templateUrl: './animais-eliminar.component.html',
  styleUrl: './animais-eliminar.component.scss'
})
export class AnimaisEliminarComponent {
  animais?: Animais;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private animaisService: AnimaisService
  ) {}

  //inicializa e guarda o id
  ngOnInit():void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.animaisService.getById(id).subscribe(result => this.animais = result);
    }
  }

  //função aplicada no html para chamar a função de deletar
  deleteAnimais(): void{
   if(this.animais){
    this.animaisService.delete(this.animais).subscribe(()=>this.router.navigate(['/animais-lista']))
   }
  }


}
