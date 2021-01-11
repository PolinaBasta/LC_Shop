import FooterPage from "../pageobjects/footer.page";
import LoginPage from "../pageobjects/login.page";
import RegisterPage from "../pageobjects/register.page";

describe('FOOTER FUNCTIONALITY', () => {
    before(() => {
        LoginPage.open();
        LoginPage.createBTN.waitForDisplayed()
        LoginPage.createBTN.click()
        RegisterPage.registerRandomUserAndClickShop();
    });

    it('TC-4.39 Validate footer links for Payment success page are present', function () {
        expect(FooterPage.footer.isDisplayed()).toEqual(true);
    });

    it('TC-4.40 Validate that link for Payment success page is clickable: contact us', function () {
        expect(FooterPage.footerContactUs).toBeClickable();
    });

    it('TC-4.40.1 Validate that link for Payment success page is clickable: terms', function () {
        expect(FooterPage.footerTerms).toBeClickable();
    });

    it('TC-4.40.2 Validate that link for Payment success page is clickable: privacy', function () {
        expect(FooterPage.footerPrivacy).toBeClickable();
    });
});