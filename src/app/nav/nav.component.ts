import { Component } from '@angular/core';
import { AuthService } from "../services/auth.service";


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  
  title = "Videos in Angular 4"
  videos:any[] = [
    {
      video : 'https://www.youtube.com/embed/uu1RI3vqUfg'
    },
    {
      video : 'https://www.youtube.com/embed/uNFBV9mNuNY'    
    }
  ]
  // 
  // <iframe width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>
  constructor(public authService: AuthService) {}

}
