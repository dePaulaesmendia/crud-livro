import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ListarLivroComponent } from "./components/listar-livro/listar-livro.component";
import { NovoLivroComponent } from "./components/novo-livro/novo-livro.component";

export const routes: Routes = [
    { path: 'listar-livro', component: ListarLivroComponent}, 
    { path: 'novo-livro', component: NovoLivroComponent},
    { path: 'home', component: HomeComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)], 
    exports:[RouterModule]
})

export class AppRoutingModule{}
