import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Title } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { MarcacoesCriarComponent } from './components/marcacoes-criar/marcacoes-criar.component';
import { MarcacoesEditarComponent } from './components/marcacoes-editar/marcacoes-editar.component';
import { MarcacoesEliminarComponent } from './components/marcacoes-eliminar/marcacoes-eliminar.component';
import { AnimaisCriarComponent } from './components/animais-criar/animais-criar.component';
import { AnimaisEditarComponent } from './components/animais-editar/animais-editar.component';
import { AnimaisEliminarComponent } from './components/animais-eliminar/animais-eliminar.component';
import { AnimaisListaComponent } from './components/animais-lista/animais-lista.component';
import { TutoresListaComponent } from './components/tutores-lista/tutores-lista.component';
import { TutoresEliminarComponent } from './components/tutores-eliminar/tutores-eliminar.component';
import { TutoresEditarComponent } from './components/tutores-editar/tutores-editar.component';
import { TutoresCriarComponent } from './components/tutores-criar/tutores-criar.component';

export const routes: Routes = [

{
  path: '',
  title: 'Página inicial',
  component: HomeComponent
},
{
  path:'nova-marcacao',
  title: 'Nova Marcação',
  component: MarcacoesCriarComponent
},
{
  path:'editar-marcacao/:id',
  title: 'Editar Marcação',
  component: MarcacoesEditarComponent
},
{
  path: 'eliminar-marcacao/:id',
  title:'Eliminar Marcação',
  component: MarcacoesEliminarComponent
},
{
  path: 'animais-criar',
  title: 'Inserir animais',
  component: AnimaisCriarComponent
},
{
  path: 'animais-editar/:id',
  title: 'Editar animais',
  component: AnimaisEditarComponent
},
{
  path: 'animais-deletar/:id',
  title: 'Deletar animais',
  component: AnimaisEliminarComponent
},
{
  path: 'animais-lista',
  title: 'Lista animais',
  component: AnimaisListaComponent
},
{
  path: 'tutores-criar',
  title: 'Cadastrar clientes',
  component: TutoresCriarComponent
},
{
  path: 'tutores-editar/:id',
  title: 'Editar ficha do Cliente',
  component: TutoresEditarComponent
},
{
  path: 'tutores-deletar/:id',
  title: 'Deletar cliente',
  component: TutoresEliminarComponent
},
{
  path: 'tutores-lista',
  title: 'Lista Tutores',
  component: TutoresListaComponent
}

];

