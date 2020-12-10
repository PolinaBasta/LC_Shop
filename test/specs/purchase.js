import LoginPage from "../pageobjects/login.page";
import RegisterPage from "../pageobjects/register.page";
import ShopPage from "../pageobjects/shop.page";
import PurchasePage from "../pageobjects/purchase.page";
const exp = require ("../../data/expectedPurchase.json");
import PaymentCancelPage from "../pageobjects/paymentCancel.page"

describe("REGISTER",()=> {
    before(() => {
        LoginPage.open();
        LoginPage.createBTN.click()
        RegisterPage.registerRandomUserAndClickShop();
        browser.pause(2000);
        ShopPage.buyNowBtnJSP.click();
    });

    it('TC-4.1 Validate that a Header is present', function () {
        PurchasePage.header.waitForDisplayed();
        browser.pause(2000);
        expect(PurchasePage.header.isDisplayed()).toEqual(true);
    });

    it('TC-4.2 Validate the text content of the Header', function () {
        expect(PurchasePage.header.getText()).toEqual(exp.header);
    });

    it('TC-4.3 Validate that a Header image is present', function () {
        expect(PurchasePage.productImage.isDisplayed()).toEqual(true);
    });

    it('TC-4.4 Validate that back arrow is present', function () {
        expect(PurchasePage.backArrow.isDisplayed()).toEqual(true);
    });

    it('TC-4.5 Validate that the text TEST is present', function () {
        expect(PurchasePage.test.isDisplayed()).toEqual(true);
    });

    it('TC-4.6 Validate the text content of the test', function () {
        expect(PurchasePage.test.getText()).toEqual(exp.test);
    });

    it('TC-4.9 Validate that links are clickable', function () {
        PurchasePage.poweredBy.click();
        PurchasePage.terms.click();
        PurchasePage.privacy.click();
    });

    it('TC-4.10 Validate that back arrow redirect to Cancel page and cancel the order', function () {
       PurchasePage.backArrow.click();
       expect(PaymentCancelPage.paymentCancel.getText()).toEqual(exp.paymentCancel);
    });

    it('TC-4.11 Validate that Go back shopping link is clickable and redirect to Shop page', function () {
        PaymentCancelPage.backToShopping.click();
        expect(ShopPage.productPage.isDisplayed()).toEqual(true);
    });
});
