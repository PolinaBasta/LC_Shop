import BasePage from "./Base.page";
import randomUser from "../../data/random";

class RegisterPage extends BasePage {
  get firstName() {
    return $("#user_login_firstName");
  }
  get lastName() {
    return $("#user_login_lastName");
  }
  get email() {
    return $("#user_login_email");
  }
  get password() {
    return $("#user_login_password");
  }
  get agreementBox() {
    return $("#user_login_agreement");
  }
  get registerBTN() {
    return $(".ant-btn.ant-btn-primary.ant-btn-lg");
  }
  get phone() {
    return $("#user_login_phone");
  }
  get phoneSubmitBTN() {
    return $(".ant-btn-lg");
  }
  get shopBtnNewUser() {
    return $(".item");
  }

  registerRandomUserAndClickShop() {
    this.firstName.setValue(randomUser.firstName);
    this.lastName.setValue(randomUser.lastName);
    this.email.setValue(randomUser.email);
    this.password.setValue(randomUser.password);
    this.agreementBox.click();
    this.registerBTN.waitForEnabled();
    this.registerBTN.click();
    this.phone.waitForEnabled();
    this.phone.setValue(randomUser.phone);
    this.phoneSubmitBTN.click();
    this.shopBtnNewUser.waitForExist();
    this.shopBtnNewUser.click();
  }
}
export default new RegisterPage();
