import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";

import * as firebase from "firebase/app";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {

  constructor(private afAuth:AngularFireAuth,
              private router:Router) {
    this.afAuth.authState.subscribe((user: firebase.User)=>{
      if(user){
        console.log("User is signed as", user)
        alert('Hey :) welcome'+` `+ user.displayName);
      }else{
        console.log("user isnt signed in")
      }
    });
   }

   signInwithGoogle():void{
     this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
     .then((user : firebase.User)=>{
      this.router.navigate(['/'])
     });
   }

   signOut(): void{
     this.afAuth.auth.signOut();
     alert('Bye :(');
     this.router.navigate(['/home'])
   }
}
