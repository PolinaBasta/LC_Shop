export default class BasePage {
  open(path) {
    browser.url(path);
  }
  clearInput(selector) {
    selector.doubleClick();
    selector.doubleClick();
    selector.keys('Delete');
  }
}
