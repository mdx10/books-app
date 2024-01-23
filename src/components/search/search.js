import { DivComponent } from '../../common/div-component';
import search from '../../../static/search.svg';
import searchWhite from '../../../static/search-white.svg';
import './search.css';

export class Search extends DivComponent {
  constructor(state) {
    super();
    this.state = state;
  }

  render() {
    this.el.classList.add('search');
    this.el.innerHTML = `
      <div class="search__wrapper">
        <input
          class="search__input"
          type="text"
          value="${this.state.searchQuery ?? ''}"
          placeholder="Найти книгу или автора..."
        />
        <img src="${search}" alt="search-icon" />
      </div>
      <button class="search__button">
        <img src="${searchWhite}" alt="search-icon" />
      </button>
    `;
    return this.el;
  }
}