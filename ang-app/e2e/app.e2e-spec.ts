import { AngAppPage } from './app.po';

describe('ang-app App', () => {
  let page: AngAppPage;

  beforeEach(() => {
    page = new AngAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
