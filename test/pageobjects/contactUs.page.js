import BasePage from './Base.page';

class ContactUsPage extends BasePage {

    get contactUsHeader () {
        return $('h1');
    }

    get contactUsLabel () {
        return $('p');
    }

    get nameField () {
        return $('#normal_login_name');
    }

    get emailField () {
        return $('#normal_login_email');
    }

    get prefix () {
        return $('.ant-input-prefix');
    }

    get cellPhoneField () {
        return $('#normal_login_phone');
    }

    get messageField () {
        return $('#normal_login_message');
    }

    get submitBtn () {
        return $('.ant-btn.ant-btn-primary.login-form-button');
    }

    get resetBtn () {
        return $('.ant-btn.ml-2');
    }

}
export default new ContactUsPage();