import LoginPage from "../pageobjects/login.page";
import RegisterPage from "../pageobjects/register.page";
import ShopPage from "../pageobjects/shop.page";
import PurchasePage from "../pageobjects/purchase.page";
import PaymentCredentials from "../../data/helpers";
const card = require ("../../data/cards");
import RandomUser from "../../data/random";
const exp = require ("../../data/expectedPurchase.json");
import PaymentApprovePage from "../pageobjects/paymentApproved.page";

describe("PURCHASE FUNCTIONALITY",()=> {
    before(() => {
        LoginPage.open();
        LoginPage.createBTN.waitForDisplayed();
        LoginPage.createBTN.click();
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
        PurchasePage.clearInput(PurchasePage.emailPlaceholder);
        browser.pause(2000);
        expect(PurchasePage.emailPlaceholder.getValue()).toEqual(PaymentCredentials.emailEmpty);
    });

    xit('TC-4.47.2 Validate Email is required on Payment Form page', function () {
        PurchasePage.emailPlaceholder.setValue(RandomUser.email);
        PurchasePage.clearInput(PurchasePage.emailPlaceholder);
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
        PurchasePage.clearInput(PurchasePage.cardNumberPlaceholder);
        PurchasePage.cardNumberPlaceholder.setValue(PaymentCredentials.cardNumber4Digits);
        browser.keys("Tab");
        expect(PurchasePage.errorField.getText()).toEqual(exp.nameFieldError);
    });

    it('TC-4.52 Validate Expiration date field is required to be filled in', function () {
        PurchasePage.cardNumberPlaceholder.setValue(PaymentCredentials.cardNumber);
        PurchasePage.cardExpiryPlaceholder.setValue(PaymentCredentials.expirationDate);
        PurchasePage.clearInput(PurchasePage.cardExpiryPlaceholder);
        PurchasePage.cardExpiryPlaceholder.setValue(PaymentCredentials.expirationDate2Digits);
        browser.keys("Tab");
        expect(PurchasePage.errorField.getText()).toEqual(exp.expirationFieldError);
    });

    it("TC-4.55 Validate Expiration date field has waring message under the field if date is past due today's date", function () {
        PurchasePage.clearInput(PurchasePage.cardExpiryPlaceholder);
        PurchasePage.cardExpiryPlaceholder.setValue(PaymentCredentials.pastExpDate);
        expect(PurchasePage.errorField.getText()).toEqual(exp.presentExpDateError);
    });

    it('TC-4.56 Validate CVC field accepts digits only', function () {
        PurchasePage.clearInput(PurchasePage.cardExpiryPlaceholder);
        PurchasePage.cardExpiryPlaceholder.setValue(PaymentCredentials.expirationDate);
        PurchasePage.cardCVCPlaceholder.setValue(PaymentCredentials.securityCode);
        expect(PurchasePage.cardCVCPlaceholder.getValue()).toEqual(PaymentCredentials.securityCode);
    });

    it('TC-4.56.1 Validate CVC field does not accept 2 digits', function () {
        PurchasePage.clearInput(PurchasePage.cardCVCPlaceholder);
        PurchasePage.cardCVCPlaceholder.setValue(PaymentCredentials.securityCode2Digits);
        browser.keys("Tab");
        expect(PurchasePage.errorField.getText()).toEqual(exp.cvcError);
    });

    it('TC-4.57 Validate CVC field accepts 4 digits for AMEX card only', function () {
        PurchasePage.clearInput(PurchasePage.cardNumberPlaceholder);
        PurchasePage.clearInput(PurchasePage.cardCVCPlaceholder);
        PurchasePage.cardNumberPlaceholder.setValue(PaymentCredentials.amexCardNumber);
        PurchasePage.cardCVCPlaceholder.setValue(PaymentCredentials.amexSecurityCode);
        expect(PurchasePage.cardCVCPlaceholder.getValue()).toEqual(PaymentCredentials.amexSecurityCode);
    });

    it('TC-4.58 Validate CVC field does not accept 3 digits for AMEX card only', function () {
        PurchasePage.clearInput(PurchasePage.cardCVCPlaceholder);
        PurchasePage.cardCVCPlaceholder.setValue(PaymentCredentials.securityCode);
        expect(PurchasePage.cardCVCPlaceholder.getValue()).toEqual(PaymentCredentials.securityCode);
    });

    xit('TC-4.59 Validate Name on Card field is "Required" to be filled in', function () {
        PurchasePage.billingNamePlaceholder.setValue(PaymentCredentials.cardName);
        PurchasePage.clearInput(PurchasePage.billingNamePlaceholder);
        browser.keys("Tab");
        expect(PurchasePage.nameFieldError.getText()).toEqual(exp.required);
    });

    it('TC-4.61 Validate country field is United States by default', function () {
        PurchasePage.billingNamePlaceholder.setValue(PaymentCredentials.cardName);
        expect(PurchasePage.billingCountryPlaceholder.getValue()).toEqual(PaymentCredentials.countryName);
    });

    it('TC-4.62 Validate ZIP field accepts digits', function () {
        PurchasePage.billingPostalCodePlaceholder.setValue(PaymentCredentials.postalCode);
        expect(PurchasePage.billingPostalCodePlaceholder.getValue()).toEqual(PaymentCredentials.postalCode);
    });

    it('TC-4.63 Validate ZIP field accepts 5 digits only', function () {
        PurchasePage.clearInput(PurchasePage.billingPostalCodePlaceholder);
        PurchasePage.billingPostalCodePlaceholder.setValue(PaymentCredentials.postalCode4Digits);
        browser.keys("Tab");
        expect(PurchasePage.errorZipCode.getText()).toEqual(exp.zipCodeError);
    });

    it('TC-4.64 Validate purchase with VISA, Master Card and etc. credit cards', function () {
        PurchasePage.clearAllFieldsMethod();
        PurchasePage.paymentCredentials(card.visa);
        PurchasePage.payBtn.click();
        browser.pause(5000);
        expect(PaymentApprovePage.paymentInfo.getText()).toEqual(exp.paymentInfo);
    });
});