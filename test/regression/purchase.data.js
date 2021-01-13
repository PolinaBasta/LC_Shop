import LoginPage from "../pageobjects/login.page";
import RegisterPage from "../pageobjects/register.page";
import ShopPage from "../pageobjects/shop.page";
import PurchasePage from "../pageobjects/purchase.page";
import PaymentCredentials from "../../data/helpers";
import RandomUser from "../../data/random";
import clearInput from "../../data/clearValueMethod";
const exp = require ("../../data/expectedPurchase.json");

describe("PURCHASE FUNCTIONALITY",()=> {
    before(() => {
        LoginPage.open();
        LoginPage.createBTN.waitForDisplayed()
        LoginPage.createBTN.click()
        RegisterPage.registerRandomUserAndClickShop();
        browser.pause(2000);
        ShopPage.buyNowBtnJSP.click();
    });

    it('4.47 Validate Email is not typed in Email field', function () {
        browser.pause(2000);
        expect(PurchasePage.emailPlaceholder.getValue()).toEqual(PaymentCredentials.emailEmpty);
    });

    it('4.47.1 Validate clear Email field', function () {
        PurchasePage.emailPlaceholder.setValue(RandomUser.email);
        clearInput(PurchasePage.emailPlaceholder);
        browser.pause(2000);
        expect(PurchasePage.emailPlaceholder.getValue()).toEqual(PaymentCredentials.emailEmpty);
    });

    xit('TC-4.47.2 Validate Email is required on Payment Form page', function () {
        PurchasePage.emailPlaceholder.setValue(RandomUser.email);
        clearInput(PurchasePage.emailPlaceholder);
        browser.keys("Tab");
        expect(PurchasePage.required.getText()).toEqual(exp.required);
    });

    it('4.47.3 Validate Email is typed in Email field', function () {
        browser.pause(2000);
        PurchasePage.emailPlaceholder.setValue(RandomUser.email);
        expect(PurchasePage.emailPlaceholder.getValue()).toEqual(RandomUser.email);
    });

    it('TC-4.49 Validate Card number field is empty', function () {
        browser.pause(2000);
        expect(PurchasePage.cardNumberPlaceholder.getValue()).toEqual(PaymentCredentials.cardNumberEmpty);
    });

    it('TC-4.49.1 Validate Card number field accepts only digits', function () {
        PurchasePage.cardNumberPlaceholder.setValue(PaymentCredentials.cardNumber);
        expect(PurchasePage.cardNumberPlaceholder.getValue()).toEqual(PaymentCredentials.cardNumber);
    });

    it('TC-4.50 Validate Card number field accepts only 16 digits', function () {
        clearInput(PurchasePage.cardNumberPlaceholder);
        PurchasePage.cardNumberPlaceholder.setValue(PaymentCredentials.cardNumber4Digits);
        browser.keys("Tab");
        expect(PurchasePage.errorField.getText()).toEqual(exp.nameFieldError);
    });

    it('TC-4.52 Validate Expiration date field is required to be filled in', function () {
        PurchasePage.cardNumberPlaceholder.setValue(PaymentCredentials.cardNumber);
        PurchasePage.cardExpiryPlaceholder.setValue(PaymentCredentials.expirationDate);
        clearInput(PurchasePage.cardExpiryPlaceholder);
        PurchasePage.cardExpiryPlaceholder.setValue(PaymentCredentials.expirationDate2Digits);
        browser.keys("Tab");
        expect(PurchasePage.errorField.getText()).toEqual(exp.expirationFieldError);
    });

    it('TC-4.55 Validate Expiration date field has waring message under the field if date is past due todays date', function () {
        clearInput(PurchasePage.cardExpiryPlaceholder);
        PurchasePage.cardExpiryPlaceholder.setValue(PaymentCredentials.pastExpDate);
        expect(PurchasePage.errorField.getText()).toEqual(exp.presentExpDateError);
    });

    it('TC-4.56 Validate CVC field accepts digits only', function () {
        clearInput(PurchasePage.cardExpiryPlaceholder);
        PurchasePage.cardExpiryPlaceholder.setValue(PaymentCredentials.expirationDate);
        PurchasePage.cardCVCPlaceholder.setValue(PaymentCredentials.securityCode);
        expect(PurchasePage.cardCVCPlaceholder.getValue()).toEqual(PaymentCredentials.securityCode);
    });

    it('TC-4.56.1 Validate CVC field does not accept 2 digits', function () {
        clearInput(PurchasePage.cardCVCPlaceholder);
        PurchasePage.cardCVCPlaceholder.setValue(PaymentCredentials.securityCode2Digits);
        browser.keys("Tab");
        expect(PurchasePage.errorField.getText()).toEqual(exp.cvcError);
    });
});
