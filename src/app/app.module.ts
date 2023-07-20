import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './components/forms/forms.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListsComponent } from './components/lists/lists.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ModelComponent } from './components/model/model.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';


const routes: Routes = [
  {path: '', component: ListsComponent},
  {path: 'edit/:list', component: EditFormComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    ListsComponent,
    ListItemComponent,
    ModelComponent,
    EditFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
