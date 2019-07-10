import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConceptsComponent } from './concepts/concepts.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';

//setting up routes
const routes: Routes = [
  { path: '', component: ConceptsComponent },
  { path: 'concepts', component: ConceptsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'get-in-touch', component: GetInTouchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //registering the routes 
  exports: [RouterModule]
})
export class AppRoutingModule { }
