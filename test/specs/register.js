import LoginPage from '../pageobjects/login.page';
import RegisterPage from '../pageobjects/register.page';
import ShopPage from '../pageobjects/shop.page';

describe("REGISTER",()=>{
 before(()=>{
     LoginPage.open();
     LoginPage.createBTN.click()
     RegisterPage.registerRandomUserAndClickShop();
 });

    it('Redirect to Shop Page', function () {
        ShopPage.productPage.waitForExist()
        expect(ShopPage.productPage.isDisplayed()).toEqual(true)
    });
});
