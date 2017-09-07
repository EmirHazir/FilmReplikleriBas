import { FilmSeriesPage } from './app.po';

describe('film-series App', () => {
  let page: FilmSeriesPage;

  beforeEach(() => {
    page = new FilmSeriesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
