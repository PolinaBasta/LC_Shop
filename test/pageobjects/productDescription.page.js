import BasePage from "./Base.page";

class ProductDescriptionPage extends BasePage {

    get productHeader () {
        return $('h1');
    }
    get productPrice () {
        return $('h3');
    }
    get productDescription () {
        return $('p');
    }
    get productImg () {
        return $('img');
    }
    get productEditBtn () {
        return $('button');
    }
    get shopBtn () {
        return $('.item.active');
    }

}
export default new ProductDescriptionPage();