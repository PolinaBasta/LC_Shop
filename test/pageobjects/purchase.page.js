import BasePage from './Base.page';
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

    get required () {
        return $('#required-email-fieldset');
    }

    get errorField () {
        return $$('.FieldError.Text.Text-color--red.Text-fontSize--13')[1];
    }

    get nameFieldError () {
        return $('#required-billingName-fieldset');
    }

    get countryAbrName () {
        return $(".Select-source [value='RU']");
    }

    get errorZipCode () {
        return $$('.FieldError.Text.Text-color--red.Text-fontSize--13')[3];
    }

    paymentCredentials(card) {
        this.emailPlaceholder.setValue(card.email);
        this.cardNumberPlaceholder.setValue(card.number);
        this.cardExpiryPlaceholder.setValue(card.expDate);
        this.cardCVCPlaceholder.setValue(card.cvc);
        this.billingNamePlaceholder.setValue(card.name);
        this.billingPostalCodePlaceholder.setValue(card.zip);
    }

    clearAllFieldsMethod() {
        this.clearInput(this.emailPlaceholder);
        this.clearInput(this.cardNumberPlaceholder);
        this.clearInput(this.cardExpiryPlaceholder);
        this.clearInput(this.cardCVCPlaceholder);
        this.clearInput(this.billingNamePlaceholder);
        this.clearInput(this.billingPostalCodePlaceholder);
    }
}
export default new PurchasePage();