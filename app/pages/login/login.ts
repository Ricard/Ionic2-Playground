import {Page, NavController, NavOptions} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {SignupPage} from '../signup/signup';
import {UserData} from '../../providers/user-data';


@Page({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {
  login: {username?: string, password?: string} = {};
  submitted = false;

  constructor(private nav: NavController, private userData: UserData) {}

  onLogin(form) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login();
      var test: NavOptions = { duration: 3000 };
      this.nav.push(TabsPage, null, test);
    }
  }

  onSignup() {
    this.nav.push(SignupPage);
  }
}
