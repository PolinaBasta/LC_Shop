import BasePage from './Base.page';

class LoginPage extends BasePage {

  get loginEmail() {
    return $("#normal_login_email");
  }
  get loginPassword() {
    return $("#normal_login_password");
  }
  get loginButton() {
    return $(".login-form-button");
  }
  get createBTN() {
    return $("a[href='/user/register']");
  }
  get inputUsername () { return  $$('.ant-input-lg')[0] };
  get inputPassword () { return  $$('.ant-input-lg')[1] };

  login(user, password) {
    this.inputUsername.setValue(user);
    this.inputPassword.setValue(password);
    this.loginButton.click();
  }

  open() {
    super.open("/user/login");
  }

  get Text () {return "Shop"};
  get userName () {return $('.ant-dropdown-link')};
  get Logout () {return $$('.ant-dropdown-menu-item-only-child')[3]};
  logout () {
    this.userName.click();
    this.Logout.click();
  }

}
export default new LoginPage();