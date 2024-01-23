import onChange from 'on-change';
import { AbstractView } from '../../common/view';
import { Header } from '../../components/header/header';
import { Search } from '../../components/search/search';

export class MainView extends AbstractView {
  state = {
    list: [],
    searchQuery: undefined,
    offset: 0,
    loading: false,
  };

  constructor(appState) {
    super();
    this.appState = appState;
    this.appState = onChange(this.appState, this.appStateHook.bind(this));
    this.setTitle('Поиск книг');
  }

  appStateHook(path) {
    if (path === 'favorites') {
      console.log(path);
    }
  }

  render() {
    const main = document.createElement('div');
    main.append(new Search(this.state).render());
    this.app.innerHTML = '';
    this.app.append(main);
    this.renderHeader();
  }

  renderHeader() {
    const header = new Header(this.appState).render();
    this.app.prepend(header);
  }
}