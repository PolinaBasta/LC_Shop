import BasePage from './Base.page';
import paymentCredentials from '../../data/helpers'

class PurchasePage extends BasePage {

    get header() {
        return $('.Header-businessLink-name.Text.Text-color--gray800.Text-fontSize--14.Text-fontWeight--500.Text--truncate');
    }

    get productImage() {
        return $('.ProductImage-image');
    }

    get backArrow() {
        return $('.InlineSVG.Icon.Header-backArrow.mr2.Icon--sm');
    }

    get test() {
        return $('.Text.Text-color--orange.Text-fontSize--11.Text-fontWeight--700.Text-transform--uppercase');
    }

    get poweredBy() {
        return $$('.Text.Text-fontWeight--400')[0];
    }

    get terms() {
        return $$('.Text.Text-fontWeight--400')[1];
    }

    get privacy() {
        return $$('.Text.Text-fontWeight--400')[2];
    }

    get payWithCard() {
        return $('.PaymentHeader');
    }

    get fillInForm() {
        return $('.App-Payment');
    }

    get emailPlaceholder() {
        return $('#email');
    }

    get emailLabel() {
        return $$('.Text.Text-color--gray600.Text-fontSize--13.Text-fontWeight--500')[0];
    }

    get cardNumberPlaceholder() {
        return $('#cardNumber');
    }

    get cardNumberLabel() {
        return $$('.Text.Text-color--gray600.Text-fontSize--13.Text-fontWeight--500')[1];
    }

    get cardExpiryPlaceholder() {
        return $('#cardExpiry');
    }

    get cardCVCPlaceholder() {
        return $('#cardCvc');
    }

    get billingNamePlaceholder() {
        return $('#billingName');
    }

    get billingNameLabel() {
        return $$('.Text.Text-color--gray600.Text-fontSize--13.Text-fontWeight--500')[2];
    }

    get billingPostalCodePlaceholder() {
        return $('#billingPostalCode');
    }

    get billingCountryPlaceholder() {
        return $('#billingCountry');
    }

    get billingCountryLabel() {
        return $$('.Text.Text-color--gray600.Text-fontSize--13.Text-fontWeight--500')[3];
    }

    get payBtn() {
        return $('.SubmitButton-IconContainer');
    }

    get paymentInfo() {
        return $('.ant-divider-inner-text');
    }

    get receiptPASVLabel() {
        return $$('.Content.Title-copy.Font.Font--title')[0];
    }

    get receiptNumber() {
        return $$('.Content.Title-copy.Font.Font--title')[1];
    }

    paymentCredentialsAndClickPayButton() {
        this.emailPlaceholder.setValue(paymentCredentials.email);
        this.cardNumberPlaceholder.setValue(paymentCredentials.cardNumber);
        this.cardExpiryPlaceholder.setValue(paymentCredentials.expirationDate);
        this.cardCVCPlaceholder.setValue(paymentCredentials.securityCode);
        this.billingNamePlaceholder.setValue(paymentCredentials.cardName)
        this.billingPostalCodePlaceholder.setValue(paymentCredentials.postalCode);
        this.payBtn.click();
    }
}
export default new PurchasePage();