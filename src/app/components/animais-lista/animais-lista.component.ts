import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimaisService } from '../../services/animais.service';
import { Animais } from '../../models/animais';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-animais-lista',
  standalone: true,
  imports: [HttpClientModule, RouterLink],
  providers: [AnimaisService],
  templateUrl: './animais-lista.component.html',
  styleUrl: './animais-lista.component.scss'
})
export class AnimaisListaComponent {

  animais?: Animais[];

  animaisSubscription?: Subscription;

  constructor(private animaisService: AnimaisService){

  }

  ngOnInit(){
    this.animaisSubscription = this.animaisService.getAll().subscribe({
      next: (value) => {
        this.animais = value;
      },
      error: (err) => {
        console.error('Error ao carregar dados!', err);
      },
    });
  }

  ngOnDestroy(){
    this.animaisSubscription?.unsubscribe();
  }


}
