import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TutoresService } from '../../services/tutores.service';
import { RouterLink } from '@angular/router';
import { Subscribable, Subscription } from 'rxjs';
import { Tutores } from '../../models/tutores';

@Component({
  selector: 'app-tutores-lista',
  standalone: true,
  imports: [HttpClientModule, RouterLink],
  providers: [TutoresService],
  templateUrl: './tutores-lista.component.html',
  styleUrl: './tutores-lista.component.scss'
})
export class TutoresListaComponent {


tutores?: Tutores[];

tutoresSubscription?: Subscription;

constructor(private tutoresService: TutoresService){}

ngOnInit(){
  this.tutoresSubscription = this.tutoresService.getAll().subscribe({
    next: (value) => {
      this.tutores = value;
    },
    error: (err) => {
      console.error('Error ao carregar dados!', err);
    },
  });
}

ngOnDestroy(){
  this.tutoresSubscription?.unsubscribe();
}


}
