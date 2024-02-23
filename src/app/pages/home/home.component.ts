import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MarcacoesListaComponent } from "../../components/marcacoes-lista/marcacoes-lista.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [RouterLink, MarcacoesListaComponent]
})
export class HomeComponent {

}
