import { GbPage } from './app.po';

describe('gb App', () => {
  let page: GbPage;

  beforeEach(() => {
    page = new GbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
