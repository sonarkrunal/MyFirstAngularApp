import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdditionComponent } from './addition/addition.component';
import { AngularDirectivesComponent } from './angular-directives/angular-directives.component';
import { ProductComponent } from './product/product.component';
import { GitConsumerComponent } from './git-consumer/git-consumer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdditionComponent,
    AngularDirectivesComponent,
    ProductComponent,
    GitConsumerComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
