import BasePage from './Base.page';

class ShopPage extends BasePage {

  get productPage() {
    return $(".mt-4");
  }

  get buyNowBtnJSP() {
    return $$(".ant-btn.ant-btn-primary.mb-1rem")[0];
  }

  get buyNowBtnRJS() {
    return $$(".ant-btn.ant-btn-primary.mb-1rem")[1];
  }

  get buyNowBtnFRP() {
    return $$(".ant-btn.ant-btn-primary.mb-1rem")[2];
  }

  get buyNowBtnQAAE() {
    return $$(".ant-btn.ant-btn-primary.mb-1rem")[3];
  }
}
export default new ShopPage();