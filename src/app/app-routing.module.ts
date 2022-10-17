import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListarLivroComponent } from "./components/listar-livro/listar-livro.component";

export const routes: Routes = [
    { path: 'listar-livro', component: ListarLivroComponent} 
]

@NgModule({
    imports:[RouterModule.forRoot(routes)], 
    exports:[RouterModule]
})

export class AppRoutingModule{}
