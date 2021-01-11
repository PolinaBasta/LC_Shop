import LoginPage from "../pageobjects/login.page";
import RegisterPage from "../pageobjects/register.page";
import ContactUsPage from "../pageobjects/contactUs.page";
import FooterPage from "../pageobjects/footer.page";
const exp = require ("../../data/expectedPurchase.json");

describe('CONTACT US FUNCTIONALITY', () => {
    before(() => {
        LoginPage.open();
        LoginPage.createBTN.waitForDisplayed()
        LoginPage.createBTN.click()
        RegisterPage.registerRandomUserAndClickShop();
    });

    it('TC-4.41 Validate Header of Contact us page is present', function () {
        FooterPage.footerContactUs.scrollIntoView();
        browser.pause(2000);
        FooterPage.footerContactUs.click();
        expect(ContactUsPage.contactUsHeader.isDisplayed()).toEqual(true);
    });

    it('TC-4.42 Validate label of Contact us page is present', function () {
        expect(ContactUsPage.contactUsLabel.getText()).toEqual(exp.contactUsLabel);
    });

    it('TC-4.43 Validate Contact us form field is present: name', function () {
        expect(ContactUsPage.nameField.isDisplayed()).toEqual(true);
    });

    it('TC-4.43.1 Validate Contact us form field is present: email', function () {
        expect(ContactUsPage.emailField.isDisplayed()).toEqual(true);
    });

    it('TC-4.43.2 Validate Contact us form field is present: cell phone', function () {
        expect(ContactUsPage.cellPhoneField.isDisplayed()).toEqual(true);
    });

    it('TC-4.43.3 Validate Contact us form field is present: prefix in cell phone field', function () {
        expect(ContactUsPage.prefix.isDisplayed()).toEqual(true);
    });

    it('TC-4.43.4 Validate Contact us form field is present: message', function () {
        expect(ContactUsPage.messageField.isDisplayed()).toEqual(true);
    });

    it('TC-4.44 Validate Contact us form placeholder is present: name', function () {
        expect(ContactUsPage.nameField.getAttribute("placeholder")).toEqual(exp.contactUsName);
    });

    it('TC-4.44.1 Validate Contact us form placeholder is present: email', function () {
        expect(ContactUsPage.emailField.getAttribute("placeholder")).toEqual(exp.contactUsEmail);
    });

    it('TC-4.44.2 Validate Contact us form placeholder is present: cell phone', function () {
        expect(ContactUsPage.cellPhoneField.getAttribute("placeholder")).toEqual(exp.contactUsCellPhone);
    });

    it('TC-4.44.3 Validate Contact us form placeholder is present: message', function () {
        expect(ContactUsPage.messageField.getAttribute("placeholder")).toEqual(exp.contactUsMessage);
    });

    it('TC-4.45 Validate Submit button is present', function () {
        expect(ContactUsPage.submitBtn.isDisplayed()).toEqual(true);
    });

    it('TC-4.45.1 Validate Reset button is present', function () {
        expect(ContactUsPage.resetBtn.isDisplayed()).toEqual(true);
    });

    it('TC-4.46 Validate Submit button is clickable', function () {
        expect(ContactUsPage.submitBtn).toBeClickable();
    });

    it('TC-4.46.1 Validate Reset button is clickable', function () {
        expect(ContactUsPage.resetBtn).toBeClickable();
    });
});