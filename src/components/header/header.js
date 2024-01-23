import { DivComponent } from '../../common/div-component';
import logo from '../../../static/logo.svg';
import search from '../../../static/search.svg';
import favorites from '../../../static/favorites.svg';
import './header.css';

export class Header extends DivComponent {
  constructor(appState) {
    super();
    this.appState = appState;
  }

  render() {
    this.el.classList.add('header');
    this.el.innerHTML = `
      <div>
        <img src="${logo}" alt="logo" />
      </div>
      <div class="menu">
        <a class="menu__item" href="#">
          <img src="${search}" alt="search" />
          Поиск книг
        </a>
        <a class="menu__item" href="#favorites">
          <img src="${favorites}" alt="favorites" />
          Избранное
          <div class="menu__counter">
            ${this.appState.favorites.length}
          </div>
        </a>
      </div>
    `;
    return this.el;
  }
}