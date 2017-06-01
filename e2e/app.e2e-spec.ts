import { EnvironmentRefreshAppPage } from './app.po';

describe('environment-refresh-app App', () => {
  let page: EnvironmentRefreshAppPage;

  beforeEach(() => {
    page = new EnvironmentRefreshAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
