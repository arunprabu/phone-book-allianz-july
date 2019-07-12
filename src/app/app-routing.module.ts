import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConceptsComponent } from './concepts/concepts.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { AuthGuard } from './shared/guards/auth.guard';

//setting up routes
const routes: Routes = [
  { path: '', component: ConceptsComponent },
  { path: 'concepts', component: ConceptsComponent },
  // { path: 'contacts', component: ContactsComponent },
  // { path: 'contacts/new', component: AddContactComponent,
  //  canActivate: [ AuthGuard] },
  // { path: 'contacts/:id', component: ContactDetailsComponent },
  { path: 'contacts',
    children: [
      { path: '', component: ContactsComponent},
      { path: 'new', component: AddContactComponent},
      { path: ':id', component: ContactDetailsComponent}
    ]
  },
  { path: 'about', component: AboutComponent },
  { path: 'get-in-touch', component: GetInTouchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //registering the routes 
  exports: [RouterModule]
})
export class AppRoutingModule { }
