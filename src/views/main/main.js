import onChange from 'on-change';
import { AbstractView } from '../../common/view';
import { Header } from '../../components/header/header';

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
    main.innerHTML = `Число книг: ${this.appState.favorites.length}`;
    this.app.innerHTML = '';
    this.renderHeader();
    this.app.append(main);
  }

  renderHeader() {
    const header = new Header(this.appState).render();
    this.app.prepend(header);
  }
}