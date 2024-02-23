import { Component } from '@angular/core';
import { TutoresService } from '../../services/tutores.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tutores-editar',
  standalone: true,
  imports: [HttpClientModule, RouterLink, ReactiveFormsModule],
  providers:[TutoresService],
  templateUrl: './tutores-editar.component.html',
  styleUrl: './tutores-editar.component.scss'
})
export class TutoresEditarComponent {
  tutoresId: string = '';
  formularioTutores: FormGroup = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl('', Validators.required),
    telemovel: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });
  criarSubscription?: Subscription;
  submitted: boolean = false;

  constructor(
    private tutoresService: TutoresService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.tutoresId = this.route.snapshot.paramMap.get('id') || '';
  }

  handleSubmit(): void{
    this.submitted = true;

    if(this.formularioTutores.valid){
      this.criarSubscription = this.tutoresService.update({
        id: this.tutoresId,
        nome: this.formularioTutores.controls['nome'].value,
        telemovel: this.formularioTutores.controls['telemovel'].value,
        email: this.formularioTutores.controls['email']?.value,
      }).subscribe({
        next: (value) => {this.router.navigate(['/tutores-lista']);},
        error:(err) => {console.error('Erro ao atualizar tutor', err);},
      });
    }
  }

  ngOnDestroy(){
    this.criarSubscription?.unsubscribe();
  }

}







