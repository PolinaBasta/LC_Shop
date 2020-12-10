import BasePage from './Base.page';

class PaymentCancelPage extends BasePage {

    get paymentCancel() {
        return $('h1');
    }

    get backToShopping() {
        return $('a[href="/shop"]');
    }
}
export default new PaymentCancelPage();