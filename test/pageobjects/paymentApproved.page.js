import BasePage from './Base.page';

class PaymentApprovedPage extends BasePage {

    get paymentApproved () {
        return $('h1');
    }

    get paymentInfo () {
        return $('h3');
    }

    get paymentInfoForm () {
        return $('.ant-descriptions.ant-descriptions-small.ant-descriptions-bordered');
    }

    get receiptInfo () {
        return $('.mb-3rem p');
    }

    get additionalReceiptInfo () {
        return $$('p')[3];
    }

    get here () {
        return $('.mt-3rem p a');
    }

    get footer () {
        return $$('.container.mt-4')[1];
    }

    get footerContactUs () {
        return $('[data-qa="footerContactUs"]');
    }

    get footerTerms () {
        return $('[data-qa="footerTerms"]');
    }

    get footerPrivacy () {
        return $$('[data-qa="footerPrivacy"]');
    }
}
export default new PaymentApprovedPage();