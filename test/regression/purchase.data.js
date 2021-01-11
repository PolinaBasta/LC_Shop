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

    it('4.47.2 Validate Email is typed in Email field', function () {
        browser.pause(2000);
        PurchasePage.emailPlaceholder.setValue(RandomUser.email);
        expect(PurchasePage.emailPlaceholder.getValue()).toEqual(RandomUser.email);
    });
});