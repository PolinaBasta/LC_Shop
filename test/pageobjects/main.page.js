import BasePage from './Base.page';

class MainPage extends BasePage {
    get shopOne () {return  $$('.item')[4]};
    get Courses () {return  $$('.item')[0]};
    get Cards () {return  $$('.item')[1]};
    get Diary () {return  $$('.item')[2]};
    get Groups () {return  $$('.item')[3]};
    get Challenges () {return  $$('.item')[4]};
    get Shop () {return  $$('.item')[5]};
    get Chat () {return  $$('.item')[6]};
    get Goal () {return  $$('.item')[7]};


}
export default new MainPage();