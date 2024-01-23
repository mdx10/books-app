import { DivComponent } from '../../common/div-component';
import favorites from '../../../static/favorites.svg';
import favoritesWhite from '../../../static/favorites-white.svg';
import './card.css';

export class Card extends DivComponent {
  constructor(appState, cardState) {
    super();
    this.appState = appState;
    this.cardState = cardState;
  }

  render() {
    this.el.classList.add('card');
    const existInFavorites = this.appState.favorites.find(item => item.key === this.cardState.key);
    this.el.innerHTML = `
      <div class="card__image">
        <img src="https://covers.openlibrary.org/b/olid/${this.cardState.cover_edition_key}-M.jpg" alt="book-cover" />
      </div>
      <div class="card__info">
        <div class="card__tag">
          ${this.cardState.subject_facet ? this.cardState.subject_facet[0] : 'Не задано'}
        </div>
        <div class="card__title">
          ${this.cardState.title}
        </div>
        <div class="card__author">
          ${this.cardState.author_name ? this.cardState.author_name[0] : 'Не задано'}
        </div>
        <div class="card__footer">
          <button class="card__button ${existInFavorites ? 'card__button--active' : ''}">
            <img src="${existInFavorites ? favorites : favoritesWhite}" alt="favorites">
          </button>
        </div>
      </div>
    `;
    return this.el;
  }
}