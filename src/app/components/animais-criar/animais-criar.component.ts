import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Animais } from '../../models/animais';
import { AnimaisService } from '../../services/animais.service';
import { Router, RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-animais-criar',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, RouterLink],
  providers:[AnimaisService],
  templateUrl: './animais-criar.component.html',
  styleUrl: './animais-criar.component.scss'
})
export class AnimaisCriarComponent {
  formularioAnimais: FormGroup = new FormGroup({
    id: new FormControl('', Validators.required),
    nome: new FormControl('', Validators.required),
    especie: new FormControl('', Validators.required),
    raca: new FormControl('', Validators.required),
    sexo: new FormControl('', Validators.required),
    dataNascimento: new FormControl('', Validators.required),
    tutorId: new FormControl('', Validators.required),

  });
  criarSubscription?: Subscription;
  submitted: boolean = false;

  constructor(
    private animaisService: AnimaisService,
    private router: Router
  ) {}

  handleSubmit(): void{
    this.submitted = true;

    if(this.formularioAnimais.valid){
      this.criarSubscription = this.animaisService.create({
        id: this.formularioAnimais.controls['id'].value,
        nome: this.formularioAnimais.controls['nome'].value,
        especie: this.formularioAnimais.controls['especie'].value,
        raca: this.formularioAnimais.controls['raca']?.value,
        sexo: this.formularioAnimais.controls['sexo']?.value,
        dataNascimento: this.formularioAnimais.controls['dataNascimento']?.value,
        tutorId: this.formularioAnimais.controls['tutorId']?.value,
      }).subscribe({
        next: (value) => {this.router.navigate(['/animais-lista']);},
        error:(err) => {console.error('Erro ao cadastrar animal', err);},
      });
    }
  }

  ngOnDestroy(){
    this.criarSubscription?.unsubscribe();
  }

}

