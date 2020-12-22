import BasePage from './Base.page';

class PaymentApprovedPage extends BasePage {

    get paymentApproved () {
        return $('h1');
    }

}
export default new PaymentApprovedPage();