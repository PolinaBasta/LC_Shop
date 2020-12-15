import LoginPage from '../pageobjects/login.page';
//const LoginPage = require('../pageobjects/login.page');
import MainPage from '../pageobjects/main.page';

describe('My Shop tab', () => {
    it('should login and validate Shop ', () => {
        LoginPage.open();
        LoginPage.login('3333@gmail.com','33333');
        browser.pause(1000);
        expect(MainPage.shopOne.getText()).toEqual(LoginPage.Text);
    });

    // it('1', () => {
    //     LoginPage.logout();
    //     expect(MainPage.shopOne.isDisplayed()).eq(false);
    // });

    it('2 ', () => {
        LoginPage.open();
        LoginPage.login('2222@gmail.com', '22222');
        browser.pause(1000);
        MainPage.Courses.click();
        expect(MainPage.Shop.getText()).toEqual(LoginPage.Text);
    });

    it('3 ', () => {
        browser.pause(1000);
        MainPage.Cards.click();
        expect(MainPage.Shop.getText()).toEqual(LoginPage.Text);
    });

    it('4', () => {
        browser.pause(2000);
        MainPage.Diary.click();
        expect(MainPage.Shop.getText()).toEqual(LoginPage.Text);
    });

    it('5', () => {
        browser.pause(1000);
        MainPage.Groups.click();
        expect(MainPage.Shop.getText()).toEqual(LoginPage.Text);
    });

    it('6 ', () => {
        browser.pause(2000);
        MainPage.Challenges.click();
        expect(MainPage.Shop.getText()).toEqual(LoginPage.Text);
    });

    it('7', () => {
        browser.pause(2000);
        MainPage.Chat.click();
        expect(MainPage.Shop.getText()).toEqual(LoginPage.Text);
    });

    it('8', () => {
        browser.pause(2000);
        MainPage.Goal.click();
        expect(MainPage.Shop.getText()).toEqual(LoginPage.Text);
    });


});
