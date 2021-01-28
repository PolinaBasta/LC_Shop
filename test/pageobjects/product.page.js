import BasePage from './Base.page';

class ProductPage extends BasePage {

    get productPageHeader() {
        return $('h1');
    }
    get createProductBtn () {
        return $('.ant-btn-primary');
    }

    get fullstackHeader() {
        return $$('h3>a:first-child')[3];
    }
    get fullstackPic() {
        return $$('img.img-thumb')[3];
    }
    get fullstackEdit() {
        return $$('.ant-btn.ant-btn-link.mb-1rem')[9];
    }
    get fullstackDelete() {
        return $$('.ant-btn.ant-btn-link.mb-1rem')[10];
    }
    get fullstackArchive() {
        return $$('.ant-btn.ant-btn-link.mb-1rem')[11];
    }
    get fullstackDescription() {
        return $$('div:nth-of-type(8) > .ant-col.ant-col-lg-10.ant-col-md-12.ant-col-sm-18.ant-col-xs-20');
    }
    get fullstackPriceStatus() {
        return $$('p')[4];
    }
    get fullstackBuyLearn() {
        return $$('(//p/following-sibling::button)[3]');
    }


    get qaAutomHeader() {
        return $$('h3>a:first-child')[4];
    }
    get qaAutomPic() {
        return $$('img.img-thumb')[4];
    }
    get qaAutomEdit() {
        return $$('.ant-btn.ant-btn-link.mb-1rem')[12];
    }
    get qaAutomDelete() {
        return $$('.ant-btn.ant-btn-link.mb-1rem')[13];
    }
    get qaAutomArchive() {
        return $$('.ant-btn.ant-btn-link.mb-1rem')[14];
    }
    get qaAutomDescription() {
        return $$('div:nth-of-type(10) > .ant-col.ant-col-lg-10.ant-col-md-12.ant-col-sm-18.ant-col-xs-20');
    }
    get qaAutomPriceStatus() {
        return $$('p')[5];
    }
    get qaAutomBuyLearn() {
        return $$('(//p/following-sibling::button)[4]');
    }

    get javaSyntTeacherHeader() {
        return $$('h3>a:first-child')[5];
    }
    get javaSyntTeacherPic() {
        return $$('img.img-thumb')[5];
    }
    get javaSyntTeacherEdit() {
        return $$('.ant-btn.ant-btn-link.mb-1rem')[15];
    }
    get javaSyntTeacherDelete() {
        return $$('.ant-btn.ant-btn-link.mb-1rem')[16];
    }
    get javaSyntTeacherArchive() {
        return $$('.ant-btn.ant-btn-link.mb-1rem')[17];
    }
    get javaSyntTeacherDescription() {
        return $$('div:nth-of-type(12) > .ant-col.ant-col-lg-10.ant-col-md-12.ant-col-sm-18.ant-col-xs-20');
    }
    get javaSyntTeacherPriceStatus() {
        return $$('p')[6];
    }
    get javaSyntTeacherBuyLearn() {
        return $$('(//p/following-sibling::button)[5]');
    }

    get testProductHeader() {
        return $$('h3')[$$('h3').length-1];
    }
    get testProductEdit() {
        return $$('.ant-btn.ant-btn-link.mb-1rem')[18];
    }


    get testProductDelete() {
        return $$('.ant-btn.ant-btn-link.mb-1rem')[19];
    }
    get testProductArchive() {
        return $$('.ant-btn.ant-btn-link.mb-1rem')[20];
    }

    get drawerHeader () {
        return $('.ant-drawer-title');
    }
    get drawerNameField () {
        return $('#name');
    }
    get drawerDescrField () {
        return $('#description');
    }
    get drawerImgLink () {
        return $('#productImages');
    }
    get drawerPricePrefix (){
        return $('.ant-input-prefix');
    }
    get drawerPriceField () {
        return $('#price');
    }
    get drawerCourseIdField () {
        return $('#courseId');
    }
    get drawerCoursesList () {
        return $$('.ant-select-item-option');
    }
    get drawerSubmitBtn () {
        return $$('.ant-btn.ant-btn-primary')[$$('.ant-btn.ant-btn-primary').length-1];
    }
    get drawerCloseBtn () {
        return $('.ant-drawer-close');
    }
    get drawerCheckGreenCircle() {
        return $$('.anticon-check-circle');
    }
    get drawerCheckRedCircle() {
        return $$('.anticon-close-circle');
    }
    get drawerErrorMsg() {
        return $$('div.ant-form-item-explain.ant-form-item-explain-error > div')
    }

    get deleteWindowWarning () {
        return $('.ant-modal-confirm-title');
    }
    get deleteWindowOKBtn () {
        return $('.ant-btn.ant-btn-dangerous');
    }
    get deleteWindowCancelBtn () {
        return $$('.ant-btn')[$$('.ant-btn').length-2];
    }

    deleteProduct(){
        this.testProductDelete.click();
        browser.pause(2000);
        this.deleteWindowWarning.waitForDisplayed();
        this.deleteWindowOKBtn.click();
        browser.pause(2000);
        browser.refresh();
    };

    // function (){
    //     this.testProductEdit.click();
    //     browser.pause(2000);
    //     this.drawerNameField.setValue('fake name');
    //     browser.pause(2000);
    //     this.drawerDescrField.setValue('description');
    //     this.drawerPriceField.keys(['Backspace']);
    // };

}

export default new ProductPage();