import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'

import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './shared/components/home/home.component';
import { PostsComponent } from './shared/components/posts/posts.component';
import { TodosComponent } from './shared/components/todos/todos.component';
import { ObservablesDetailsComponent } from './shared/components/observables-details/observables-details.component';
import { SubjectObservableTypeComponent } from './shared/components/subject-observable-type/subject-observable-type.component';
import { UsernameFormComponent } from './shared/components/subject-observable-type/username-form/username-form.component';
import { UsernameOneComponent } from './shared/components/subject-observable-type/username-one/username-one.component';
import { UsernameTwoComponent } from './shared/components/subject-observable-type/username-two/username-two.component';
import { UsernameThreeComponent } from './shared/components/subject-observable-type/username-three/username-three.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PostsComponent,
    TodosComponent,
    ObservablesDetailsComponent,
    SubjectObservableTypeComponent,
    UsernameFormComponent,
    UsernameOneComponent,
    UsernameTwoComponent,
    UsernameThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


