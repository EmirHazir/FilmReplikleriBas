import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';


import { AngularFireModule } from "angularfire2"; //angularFire2
import { environment } from "../environments/environment"; //firebase baglatılar
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { ReversePipe } from './reverse.pipe';
import { NavComponent } from './nav/nav.component';
import { MoiveComponent } from './moive/moive.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthService } from "./services/auth.service";
import { RouterModule, Routes } from "@angular/router";
import { YoutubePipe } from './nav/youtube.pipe';

const routes: Routes = [
  { path: '', pathMatch:'full', component: MoiveComponent },
  { path: 'signin',  component: SignInComponent },
  { path: 'home',  component: NavComponent },
  { path: '**', redirectTo: '/' },
];



@NgModule({
  declarations: [
    AppComponent,
    ReversePipe,
    NavComponent,
    MoiveComponent,
    SignInComponent,
    YoutubePipe,
 
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),//Angularfirebase config yolu
    AngularFireDatabaseModule,//database modullerini ceker
    AngularFireAuthModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
