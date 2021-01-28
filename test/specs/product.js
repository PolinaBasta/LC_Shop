import ProductPage from "../pageobjects/product.page";
import LoginPage from "../pageobjects/login.page";
import MainPage from "../pageobjects/main.page";
import BasePage from "../pageobjects/Base.page";
const expValue = require ("../../data/expectedProduct.json");

before(()=>{
    LoginPage.open();
    LoginPage.login(expValue.adminUserLogin, expValue.adminUserPassword);
    browser.pause(3000);
    expect(browser).toHaveUrlContaining('profile');
    MainPage.Shop.click();
    ProductPage.productPageHeader.waitForDisplayed();
    browser.pause(3000);
});

after(()=>{
    browser.closeWindow();
});

describe('TC-2.013 Fullstack course has elements', () => {

    it('.01 Fullstack course has Header', ()=>{
        expect(ProductPage.fullstackHeader).toHaveText(expValue.fullstackHeader);
    });
    it('.02 Fullstack course has image', () => {
        expect(ProductPage.fullstackPic).toExist();
    });
    it('.03 Fullstack course has clickable Edit', ()=>{
       expect(ProductPage.fullstackEdit).toBeClickable();
    });
    it('.04 Fullstack course has clickable Delete', () => {
        expect(ProductPage.fullstackDelete).toBeClickable();
    });
    it('.05 Fullstack course has clickable Archive', () => {
        expect(ProductPage.fullstackArchive).toBeClickable();
    });
    it('.06 Fullstack course has Description', () => {
        expect(ProductPage.fullstackDescription).toExist();
    });
    it('.07 Fullstack course has Price', () => {
        expect(ProductPage.fullstackPriceStatus).toExist();
    });
    it('.08 Fullstack course has clickable Buy now button', () => {
        expect(ProductPage.fullstackBuyLearn).toBeClickable();
    });
});

describe('TC-2.014 QA Automation Engineer course has elements', () => {

    it('.01 QA Automation Engineer course has header', () => {
        expect(ProductPage.qaAutomHeader).toHaveText(expValue.qaAutoEngHeader);
    });
    it('.02 QA Automation Engineer course has image', () => {
        expect(ProductPage.qaAutomPic).toExist();
    });
    it('.03 QA Automation Engineer course has Edit', () => {
        expect(ProductPage.qaAutomEdit).toBeClickable();
    });
    it('.04 QA Automation Engineer course has Delete', () => {
        expect(ProductPage.qaAutomDelete).toBeClickable();
    });
    it('.05 QA Automation Engineer course has Archive', () => {
        expect(ProductPage.qaAutomArchive).toBeClickable();
    });
    it('.06 QA Automation Engineer course has Description', () => {
        expect(ProductPage.qaAutomDescription).toExist();
    });
    it('.07 QA Automation Engineer course has Price', () => {
        expect(ProductPage.qaAutomPriceStatus).toExist();
    });
    it('.08 QA Automation Engineer course has Buy now button', () => {
        expect(ProductPage.qaAutomBuyLearn).toBeClickable();
    });
});

describe('TC-2.010 JS w/Teacher course has elements', () => {

    it('.01 JS w/Teacher course has header', () => {
        expect(ProductPage.javaSyntTeacherHeader).toHaveText(expValue.jSWTeacherHeader);
    });
    it('.02 JS w/Teacher course has image', () => {
        expect(ProductPage.javaSyntTeacherPic).toExist();
    });
    it('.03 JS w/Teacher course has Edit', () => {
        expect(ProductPage.javaSyntTeacherEdit).toBeClickable();
    });
    it('.04 JS w/Teacher course has Delete', () => {
        expect(ProductPage.javaSyntTeacherDelete).toBeClickable();
    });
    it('.05 JS w/Teacher course has Archive', () => {
        expect(ProductPage.javaSyntTeacherArchive).toBeClickable();
    });
    it('.06 JS w/Teacher course has Description', () => {
        expect(ProductPage.javaSyntTeacherDescription).toExist();
    });
    it('.07 JS w/Teacher course has Price', () => {
        expect(ProductPage.javaSyntTeacherPriceStatus).toExist();
    });
    it('.08 JS w/Teacher course has Buy now button', () => {
        expect(ProductPage.javaSyntTeacherBuyLearn).toBeClickable();
    });
});

describe('TC-2.046-050 Edit Drawer', () => {

    describe('Fullstack Edit Drawer', () => {
        before(() => {
            ProductPage.fullstackEdit.click();
            ProductPage.drawerHeader.waitForDisplayed();
        });
        after(() => {
            browser.pause(1000);
            ProductPage.drawerCloseBtn.click();
        });

        it('TC-2.047.04 Fullstack Edit Drawer Header', () => {
            expect(ProductPage.drawerHeader).toHaveText(expValue.editDrawerHeader);
        });

        it('TC-2.050.04 Fullstack Edit Green Checkboxes', () => {
            ProductPage.drawerNameField.setValue('fake name');
            ProductPage.drawerDescrField.setValue('description');
            ProductPage.drawerImgLink.setValue('b');
            ProductPage.drawerPriceField.setValue(500);
            browser.pause(2000);
            expect(ProductPage.drawerCheckGreenCircle.length).toEqual(4);
            browser.pause(2000);
        });

        it('TC-2.051.04-06 Empty fields trigger REQUIRED msg', () => {
            ProductPage.clearInput(ProductPage.drawerNameField);
            ProductPage.drawerDescrField.clearValue();
            ProductPage.clearInput(ProductPage.drawerImgLink);
            ProductPage.clearInput(ProductPage.drawerPriceField);
            expect(ProductPage.drawerCheckRedCircle.length).toEqual(4);
            for(let i = 0; i < ProductPage.drawerErrorMsg.length; i++){
                expect((ProductPage.drawerErrorMsg[i]).getText()).toEqual(expValue.editDrawerErrorMsg);
                browser.pause(1000);
            }
        });

    });

    describe('QA Auto Edit Drawer', () => {
        before(() => {
            ProductPage.qaAutomEdit.click();
            ProductPage.drawerHeader.waitForDisplayed();
        });
        after(() => {
            browser.pause(1000);
            ProductPage.drawerCloseBtn.click();
        });

        it('TC-2.047.05 QA Auto Edit Drawer Header', () => {
            expect(ProductPage.drawerHeader).toHaveText(expValue.editDrawerHeader);
        });

        it('TC-2.050.05 QA Auto Edit Green Checkboxes', () => {
            ProductPage.drawerNameField.setValue('fake name');
            ProductPage.drawerDescrField.setValue('description');
            ProductPage.drawerImgLink.setValue('b');
            ProductPage.drawerPriceField.setValue(500);
            browser.pause(3000);
            expect(ProductPage.drawerCheckGreenCircle.length).toEqual(4);
        });

    });

    describe('JS w/teacher Edit Drawer', () => {

        before(() => {
            ProductPage.javaSyntTeacherEdit.click();
            ProductPage.drawerHeader.waitForDisplayed();
        });
        after(() => {
            browser.pause(1000);
            ProductPage.drawerCloseBtn.click();
        });

        it('TC-2.047.06 JS w/teacher Edit Drawer Header', () => {
            expect(ProductPage.drawerHeader).toHaveText(expValue.editDrawerHeader);
        });

        it('TC-2.050.06 JS w/teacher Edit Green Checkboxes', () => {
            ProductPage.drawerNameField.setValue('fake name');
            ProductPage.drawerDescrField.setValue('description');
            ProductPage.drawerImgLink.setValue('b');
            ProductPage.drawerPriceField.setValue(500);
            browser.pause(3000);
            expect(ProductPage.drawerCheckGreenCircle.length).toEqual(4);
        });
    });
});

describe('Create Edit Archive Delete new Product', () => {
    it('Delete Product', () => {
        ProductPage.testProductDelete.click();
        ProductPage.deleteWindowWarning.waitForDisplayed();
        ProductPage.deleteWindowOKBtn.click();
        browser.pause(2000);
        browser.refresh();
        browser.pause(1000);
        expect((ProductPage.testProductHeader).getText()).not.toEqual(expValue.newProductName);
    });

    it('TC-2.036 Create new Product', () => {
        ProductPage.createProductBtn.click();
        browser.pause(1000);
        ProductPage.drawerNameField.setValue(expValue.newProductName);
        ProductPage.drawerDescrField.setValue(expValue.newProductDescription);
        ProductPage.drawerImgLink.setValue(expValue.newProductImageLink);
        ProductPage.drawerPriceField.setValue(expValue.newProductPrice);
        ProductPage.drawerSubmitBtn.click();
        browser.pause(1000);
        browser.refresh();
        browser.pause(1000);
        expect((ProductPage.testProductHeader).getText()).toEqual(expValue.newProductName);
    });

    it('Edit Product', () => {
        ProductPage.testProductEdit.click();
        browser.pause(2000);
        ProductPage.drawerNameField.setValue('fake name');
        ProductPage.drawerDescrField.setValue('description');
        ProductPage.drawerSubmitBtn.click();
        browser.pause(2000);
        expect((ProductPage.testProductHeader).getText()).not.toEqual(expValue.newProductName);
    });
});
