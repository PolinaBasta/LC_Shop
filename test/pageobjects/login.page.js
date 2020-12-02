import BasePage from "./Base.page";

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

  login(user, password) {
    this.loginEmail.setValue(user);
    this.loginPassword.setValue(password);
    this.loginButton.click();
  }

  open() {
    super.open("/user/login");
  }
}

export default new LoginPage();
