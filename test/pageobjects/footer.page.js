import BasePage from './Base.page';

class FooterPage extends BasePage {

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
export default new FooterPage();
