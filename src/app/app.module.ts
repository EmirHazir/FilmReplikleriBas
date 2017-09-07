import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';

import { AngularFireModule } from "angularfire2"; //angularFire2
import { environment } from "../environments/environment"; //firebase baglatılar
import { AngularFireDatabaseModule } from "angularfire2/database";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),//Angularfirebase config yolu
    AngularFireDatabaseModule,//database modullerini ceker

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
