import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(x => x.UsersModule)
    },
    {
        path: 'schema',
        loadChildren: () => import('./schema/schema.module').then(x => x.SchemaModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
