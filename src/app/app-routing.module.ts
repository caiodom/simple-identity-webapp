import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navigation/home/home.component';


const routes: Routes = [

  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path:'signin',
        loadChildren:()=> import('./signin/signin.module')
                                     .then(m=>m.SignInModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
