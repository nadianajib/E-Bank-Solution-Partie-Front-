import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrerComponent } from './components/registrer/registrer.component';

const routes: Routes = [
  {path:"registrer",component:RegistrerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
