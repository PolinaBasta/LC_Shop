import BasePage from './Base.page';

class PayStripePage extends BasePage {

    get receipt () {
        return $$('.Content.Title-copy.Font.Font--title')[0];
    }

    get receiptNum () {
        return $$('.Content.Title-copy.Font.Font--title')[1];
    }
}
export default new PayStripePage();
