import { Component } from '@angular/core';
import { TutoresService } from '../../services/tutores.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { AnimaisService } from '../../services/animais.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tutores-criar',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, RouterLink],
  providers:[TutoresService],
  templateUrl: './tutores-criar.component.html',
  styleUrl: './tutores-criar.component.scss'
})
export class TutoresCriarComponent {
  formularioTutores: FormGroup = new FormGroup({
    id: new FormControl('', Validators.required),
    nome: new FormControl('', Validators.required),
    telemovel: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)

  });
  criarSubscription?: Subscription;
  submitted: boolean = false;

  constructor(
    private tutoresService: TutoresService,
    private router: Router
  ) {}

  handleSubmit(): void{
    this.submitted = true;

    if(this.formularioTutores.valid){
      this.criarSubscription = this.tutoresService.create({
        id: this.formularioTutores.controls['id'].value,
        nome: this.formularioTutores.controls['nome'].value,
        telemovel: this.formularioTutores.controls['telemovel'].value,
        email: this.formularioTutores.controls['email']?.value,
      }).subscribe({
        next: (value) => {this.router.navigate(['/tutores-lista']);},
        error:(err) => {console.error('Erro ao cadastrar cliente', err);},
      });
    }
  }

  ngOnDestroy(){
    this.criarSubscription?.unsubscribe();
  }

}

