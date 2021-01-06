import LoginPage from "../pageobjects/login.page";
import RegisterPage from "../pageobjects/register.page";
import ShopPage from "../pageobjects/shop.page";
import PurchasePage from "../pageobjects/purchase.page";
const exp = require ("../../data/expectedPurchase.json");
import PaymentCancelPage from "../pageobjects/paymentCancel.page";
import PaymentApprovedPage from "../pageobjects/paymentApproved.page";
import PayStripePage from "../pageobjects/payStripe.page";
import ContactUsPage from "../pageobjects/contactUs.page";

describe("REGISTER",()=> {
    before(() => {
        LoginPage.open();
        LoginPage.createBTN.waitForDisplayed()
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

    it('TC-4.9 Validate that link Powered by is clickable', function () {
        expect(PurchasePage.poweredBy.isClickable()).toEqual(true);
    });

    it('TC-4.9.1 Validate that link terms is clickable', function () {
        expect(PurchasePage.terms.isClickable()).toEqual(true);
    });

    it('TC-4.9.2 Validate that link privacy is clickable', function () {
        expect(PurchasePage.privacy.isClickable()).toEqual(true);
    });

    it('TC-4.10 Validate that back arrow redirect to Cancel page and cancel the order', function () {
       PurchasePage.backArrow.click();
       expect(PaymentCancelPage.paymentCancel.getText()).toEqual(exp.paymentCancel);
    });

    it('TC-4.11 Validate that Go back shopping link is clickable and redirect to Shop page', function () {
        PaymentCancelPage.backToShopping.click();
        expect(ShopPage.productPage.isDisplayed()).toEqual(true);
    });

    it('TC-4.12 Validate that a Header is present', function () {
        browser.pause(2000);
        ShopPage.buyNowBtnJSP.click();
        browser.pause(2000);
        PurchasePage.header.waitForDisplayed();
        expect(PurchasePage.payWithCard.isDisplayed()).toEqual(true);
    });

    it('TC-4.13 Validate the text content of the Header', function () {
        expect(PurchasePage.payWithCard.getText()).toEqual(exp.payMethod);
    });

    it('TC-4.14 Validate the form to fill in is present', function () {
        expect(PurchasePage.fillInForm.isDisplayed()).toEqual(true);
    });

    it('TC-4.15 Validate Email label is present', function () {
        expect(PurchasePage.emailLabel.isDisplayed()).toEqual(true);
    });

    it('TC-4.16 Validate Email placeholder is present', function () {
        expect(PurchasePage.emailPlaceholder.isDisplayed()).toEqual(true);
    });

    it('TC-4.18 Validate Card information label is present', function () {
        expect(PurchasePage.cardNumberLabel.isDisplayed()).toEqual(true);
    });

    it('TC-4.19 Validate Card information placeholder is present', function () {
        expect(PurchasePage.cardNumberPlaceholder.isDisplayed()).toEqual(true);
    });

    it('TC-4.19.1 Validate Expiration date placeholder is present', function () {
        expect(PurchasePage.cardExpiryPlaceholder.isDisplayed()).toEqual(true);
    });

    it('TC-4.19.2 Validate Security code placeholder is present', function () {
        expect(PurchasePage.cardCVCPlaceholder.isDisplayed()).toEqual(true);
    });

    it('TC-4.20 Validate Name on card label is present', function () {
        expect(PurchasePage.billingNameLabel.isDisplayed()).toEqual(true);
    });

    it('TC-4.21 Validate Name on card placeholder is present', function () {
        expect(PurchasePage.billingNamePlaceholder.isDisplayed()).toEqual(true);
    });

    it('TC-4.22 Validate Country or region label is present', function () {
        expect(PurchasePage.billingCountryLabel.isDisplayed()).toEqual(true);
    });

    it('TC-4.23 Validate Country or region placeholder is present', function () {
        expect(PurchasePage.billingCountryPlaceholder.isDisplayed()).toEqual(true);
    });

    it('TC-4.23.1 Validate Postal code placeholder is present', function () {
        expect(PurchasePage.billingPostalCodePlaceholder.isDisplayed()).toEqual(true);
    });

    it('TC-4.24 Validate Pay button is present', function () {
        expect(PurchasePage.payBtn.isDisplayed()).toEqual(true);
    });

    it('TC-4.26 Validate Pay button is enabled when all required fields have valid inputs', function () {
        PurchasePage.paymentCredentialsAndClickPayButton();
        expect(PurchasePage.payBtn).toBeEnabled();
    });

    it('TC-4.27 Validate that clicking on Pay button generates payment status', function (){
        PurchasePage.payBtn.click();
        expect(PaymentApprovedPage.paymentInfo.getText()).toEqual(exp.paymentInfo);
    });

    it('TC-4.29 Validate Payment Info link is present', function () {
        expect(PaymentApprovedPage.paymentInfo.getText()).toEqual(exp.paymentInfo);
    });

    it('TC-4.30 Validate Payment Info link is clickable', function () {
        expect(PaymentApprovedPage.paymentInfo).toBeClickable();
    });

    xit('TC-4.30.1 Validate Payment Info link redirects to Pay Stripe Page', function () {
        expect(PayStripePage.receipt.getText()).toEqual(exp.payStripeHeader);
    });

    it('TC-4.31 Validate confirmation form with fields on Payment success page is present', function () {
        expect(PaymentApprovedPage.paymentInfoForm.isDisplayed()).toEqual(true);
    });

    it('TC-4.32 Validate receipt information is present', function () {
        expect(PaymentApprovedPage.receiptInfo.getText()).toEqual(exp.receiptInfo);
    });

    it('TC-4.33 Validate additional confirmation of receipt information is present', function () {
        expect(PaymentApprovedPage.additionalReceiptInfo.getText()).toEqual(exp.additionalReceiptInfo);
    });

    it('TC-4.33.1 Validate additional confirmation of receipt information is available by link', function () {
        PaymentApprovedPage.here.click();
        browser.pause(2000);
        expect(PayStripePage.receipt.getText()).toEqual(exp.payStripeHeader);
    });

    it('TC-4.34 Validate printable form of receipt is present: amount', function () {
        expect(PayStripePage.amountPaid.isDisplayed()).toEqual(true);
    });

    it('TC-4.34.1 Validate printable form of receipt is present: date', function () {
        expect(PayStripePage.datePaid.isDisplayed()).toEqual(true);
    });

    it('TC-4.34.2 Validate printable form of receipt is present: payment method', function () {
        expect(PayStripePage.paymentMethod.isDisplayed()).toEqual(true);
    });

    it('TC-4.34.3 Validate printable form of receipt is present: amount symbols', function () {
        expect(PayStripePage.amountSymbols.isDisplayed()).toEqual(true);
    });

    it('TC-4.34.4 Validate printable form of receipt is present: date symbols', function () {
        expect(PayStripePage.dateSymbols.isDisplayed()).toEqual(true);
    });

    it('TC-4.34.5 Validate printable form of receipt is present: payment method symbols', function () {
        expect(PayStripePage.paymentMethodSymbols.isDisplayed()).toEqual(true);
    });

    it('TC-4.34.6 Validate printable form of receipt is present: summary', function () {
        expect(PayStripePage.summary.isDisplayed()).toEqual(true);
    });

    it('TC-4.34.7 Validate printable form of receipt is present: summary form', function () {
        expect(PayStripePage.summaryForm.isDisplayed()).toEqual(true);
    });

    it('TC-4.35 Validate additional information in the form is present', function () {
        expect(PayStripePage.addInfo.isDisplayed()).toEqual(true);
    });

    it('TC-4.36 Validate link email is clickable', function () {
        expect(PayStripePage.addEmail).toBeClickable();
    });

    it('TC-4.36.1 Validate link phone is clickable', function () {
        expect(PayStripePage.addPhone).toBeClickable();
    });

    it('TC-4.37 Validate footer link for Receipt page is present: footer info 1', function () {
        expect(PayStripePage.footerInfo1.isDisplayed()).toEqual(true);
    });

    it('TC-4.37.1 Validate footer link for Receipt page is present: footer info 2', function () {
        expect(PayStripePage.footerInfo2.isDisplayed()).toEqual(true);
    });
    // check redirect
    it('TC-4.38 Validate footer link for Receipt page is clickable: footer link 1', function () {
        expect(PayStripePage.footerLink1).toBeClickable();
    });
    // check redirect
    it('TC-4.38.1 Validate footer link for Receipt page is clickable: footer link 2', function () {
        expect(PayStripePage.footerLink2).toBeClickable();
    });

    it('TC-4.39 Validate footer links for Payment success page are present', function () {
        browser.back();
        expect(PaymentApprovedPage.footer.isDisplayed()).toEqual(true);
    });

    it('TC-4.40 Validate that link for Payment success page is clickable: contact us', function () {
        expect(PaymentApprovedPage.footerContactUs).toBeClickable();
    });

    it('TC-4.40.1 Validate that link for Payment success page is clickable: terms', function () {
        expect(PaymentApprovedPage.footerTerms).toBeClickable();
    });

    it('TC-4.40.2 Validate that link for Payment success page is clickable: privacy', function () {
        expect(PaymentApprovedPage.footerPrivacy).toBeClickable();
    });

    it('TC-4.41 Validate Header of Contact us page is present', function () {
        PaymentApprovedPage.footerContactUs.click();
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