import {Component} from '@angular/core';
import {AuthService, SocialUser, GoogleLoginProvider, FacebookLoginProvider } from 'ng4-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: 'App';
  public user: any = SocialUser;

  constructor(private socialAuthService: AuthService){}
 facebookLogin(){
   this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((userData) => {
   this.user = userData;
  });
 }

 googleLogin(){
   this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData) => {
     this.user = userData;
   });
 }
}