import BasePage from './Base.page';

class PurchasePage extends BasePage {

    get header() {
        return $('.Header-BusinessLink-name.Text.Text-color--gray800.Text-fontSize--14.Text-fontWeight--500.Text--truncate');
    }

    get productImage() {
        return $('.ProductImage-image');
    }

    get backArrow() {
        return $('.InlineSVG.Icon.Header-BusinessLink-arrow.mr2.Icon--sm');
    }

    get test() {
        return $('.Tag.Header-TestTag.Tag-orange');
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
        return $('.Text.Text-color--default.Text-fontSize--20.Text-fontWeight--500');
    }

    get fillInForm() {
        return $('.App-Payment');
    }

    get emailPlaceholder() {
        return $$('.Input--empty')[0];
    }

    get emailLabel() {
        return $$('.Text.Text-color--gray600.Text-fontSize--13.Text-fontWeight--500')[0];
    }

    get cardNumberPlaceholder() {
        return $$('.Input--empty')[1];
    }

    get cardNumberLabel() {
        return $$('.Text.Text-color--gray600.Text-fontSize--13.Text-fontWeight--500')[1];
    }

    get cardExpiryPlaceholder() {
        return $$('.Input--empty')[2];
    }

    get cardCVCPlaceholder() {
        return $$('.Input--empty')[3];
    }

    get billingNamePlaceholder() {
        return $$('.Input--empty')[4];
    }

    get billingNameLabel() {
        return $$('.Text.Text-color--gray600.Text-fontSize--13.Text-fontWeight--500')[2];
    }

    get billingPostalCodePlaceholder() {
        return $$('.Input--empty')[5];
    }

    get billingCountryPlaceholder() {
        return $('#billingCountry');
    }

    get billingCountryLabel() {
        return $$('.Text.Text-color--gray600.Text-fontSize--13.Text-fontWeight--500')[4];
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

}
export default new PurchasePage();