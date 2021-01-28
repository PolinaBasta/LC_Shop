import ProductPage from "../pageobjects/product.page";
import ProductDescriptionPage from "../pageobjects/productDescription.page";
import LoginPage from "../pageobjects/login.page";
import MainPage from "../pageobjects/main.page";
const expValue = require ("../../data/expectedProduct.json");

before(()=>{
    LoginPage.open();
    LoginPage.login(expValue.adminUserLogin, expValue.adminUserPassword);
    browser.pause(2000);
    expect(browser).toHaveUrlContaining('profile');
    MainPage.Shop.click();
    ProductPage.productPageHeader.waitForDisplayed();
    browser.pause(2000);
});

describe ('Product Description Page', () => {

    describe ('Fullstack Product Description Page', () => {
        before (()=>{
            ProductPage.fullstackHeader.click();
            expect(browser).toHaveUrlContaining('product');
            browser.pause(2000);
        });
        after(() => {
            ProductDescriptionPage.shopBtn.click();
            expect(browser).toHaveUrlContaining('shop');
            browser.pause(2000);
        });

        it ('Fullstack Page Header is correct', () => {
            expect(ProductDescriptionPage.productHeader).toHaveText(expValue.productHeaderFS);
        });
        it ('Fullstack Page Price is correct', () => {
            expect(ProductDescriptionPage.productPrice).toHaveText(expValue.productPriceFS);
        });
        it ('Fullstack Page Description is correct', () => {
            expect(ProductDescriptionPage.productDescription).toExist();
        });
        it ('Fullstack Page Image is available', () => {
            expect(ProductDescriptionPage.productImg).toExist();
        });
        it ('Fullstack Page Edit button is clickable', () => {
            expect(ProductDescriptionPage.productEditBtn).toBeClickable();
        });
    });

    describe ('QA AutoEng Product Description Page', () => {
        before (() => {
            ProductPage.qaAutomHeader.click();
            expect(browser).toHaveUrlContaining('product');
        });
        after (() => {
            ProductDescriptionPage.shopBtn.click();
            expect(browser).toHaveUrlContaining('shop');
            browser.pause(2000);
        });

        it ('QA AutoEng Page Header is correct', () => {
            expect(ProductDescriptionPage.productHeader).toHaveText(expValue.productHeaderQA);
        });
        it ('QA AutoEng Page Price is correct', () => {
            expect(ProductDescriptionPage.productPrice).toHaveText(expValue.productPriceQA);
        });
        it ('QA AutoEng Page Description is correct', () => {
            expect(ProductDescriptionPage.productDescription).toExist();
        });
        it ('QA AutoEng Page Image is available', () => {
            expect(ProductDescriptionPage.productImg).toExist();
        });
        it ('QA AutoEng Page Edit button is clickable', () => {
            expect(ProductDescriptionPage.productEditBtn).toBeClickable();
        });
    });

    describe ('JS w/teacher Product Description Page', () => {
        before (() => {
            ProductPage.javaSyntTeacherHeader.click();
            expect(browser).toHaveUrlContaining('product');
        });
        after (() => {
            ProductDescriptionPage.shopBtn.click();
            expect(browser).toHaveUrlContaining('shop');
            browser.pause(2000);
        });

        it ('JS w/teacher Page Header is correct', () => {
            expect(ProductDescriptionPage.productHeader).toHaveText(expValue.productHeaderJSteacher);
        });
        it ('JS w/teacher Page Price is correct', () => {
            expect(ProductDescriptionPage.productPrice).toHaveText(expValue.productPriceJSteacher);
        });
        it ('JS w/teacher Page Description is correct', () => {
            expect(ProductDescriptionPage.productDescription).toExist();
        });
        it ('JS w/teacher Page Image is available', () => {
            expect(ProductDescriptionPage.productImg).toExist();
        });
        it ('JS w/teacher Page Edit button is clickable', () => {
            expect(ProductDescriptionPage.productEditBtn).toBeClickable();
        });
    });

});