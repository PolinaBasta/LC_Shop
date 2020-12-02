import BasePage from "./Base.page";

class ShopPage extends BasePage {

  get productPage() {
    return $(".mt-4");
  }
}
export default new ShopPage();
