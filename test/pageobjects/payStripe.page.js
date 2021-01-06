import BasePage from './Base.page';

class PayStripePage extends BasePage {

    get receipt () {
        return $$('.Content.Title-copy.Font.Font--title')[0];
    }

    get receiptNum () {
        return $$('.Content.Title-copy.Font.Font--title')[1];
    }

    get amountPaid () {
        return $$('.Font.Font--caption.Font--uppercase.Font--mute.Font--noWrap')[0];
    }

    get datePaid () {
        return $$('.Font.Font--caption.Font--uppercase.Font--mute.Font--noWrap')[1];
    }

    get paymentMethod () {
        return $$('.Font.Font--caption.Font--uppercase.Font--mute.Font--noWrap')[2];
    }

    get amountSymbols () {
        return $$('.Font.Font--body.Font--noWrap')[0];
    }

    get dateSymbols () {
        return $$('.Font.Font--body.Font--noWrap')[1];
    }

    get paymentMethodSymbols () {
        return $$('.Font.Font--body.Font--noWrap')[2];
    }

    get summary () {
        return $$('.st-Delink')[1];
    }

    get summaryForm () {
        return $('.st-Blocks-item-cell.st-Font.st-Font--body');
    }

    get addInfo () {
        return $$('.st-Copy.st-Width.st-Width--mobile')[3];
    }

    get addEmail () {
        return $$('.st-Copy td a')[0];
    }

    get addPhone () {
        return $$('.st-Copy td a')[1];
    }

    get footerInfo1 () {
        return $$('.Content.Footer-legal.Font.Font--caption.Font--mute')[0];
    }

    get footerInfo2 () {
        return $$('.Content.Footer-legal.Font.Font--caption.Font--mute')[1];
    }

    get footerLink1 () {
        return $('.Content.Footer-legal.Font span');
    }

    get footerLink2 () {
        return $$('.Content.Footer-legal.Font a')[1];
    }
}
export default new PayStripePage();
