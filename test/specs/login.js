
import LoginPage from '../pageobjects/login.page';
import RegisterPage from "../pageobjects/register.page";
import ShopPage from "../pageobjects/shop.page"

describe("register",()=>{
 before(()=>{
     LoginPage.open();
     LoginPage.createBTN.click()
     RegisterPage.registerRandomUserAndClickShop();
 })
    it('should ', function () {
        ShopPage.productPage.waitForExist()
        expect(ShopPage.productPage.isDisplayed()).toEqual(true)
    });


})