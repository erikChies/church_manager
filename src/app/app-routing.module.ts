import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { CadastroComponent } from './core/components/cadastro-gerente/cadastro.component';
import { RelatoriosComponent } from './core/components/relatorios/relatorios.component';

const routes: Routes = [
  //{ path: '', component: HomeComponent },
  { path: '', loadChildren: () => import('./core/components/tabs/tabs.module').then(m => m.TabsPageModule) },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro-gerente', component: CadastroComponent },
  { path: 'relatorios', component: RelatoriosComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
