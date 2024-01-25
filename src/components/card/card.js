import { DivComponent } from '../../common/div-component';
import favorites from '../../../static/favorites.svg';
import favoritesWhite from '../../../static/favorites-white.svg';
import './card.css';

export class Card extends DivComponent {
  constructor(appState, cardState) {
    super();
    this.appState = appState;
    this.cardState = cardState;
    this.existInFavorites = this.appState.favorites.find(item => item.key === this.cardState.key);
  }

  toggleFavorites() {
    if (this.existInFavorites) {
      this.appState.favorites = this.appState.favorites.filter(item => item.key !== this.cardState.key);
    } else {
      this.appState.favorites.push(this.cardState);
    }
  }

  render() {
    this.el.classList.add('card');
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
          <button class="card__button ${this.existInFavorites ? 'card__button--active' : ''}">
            <img src="${this.existInFavorites ? favorites : favoritesWhite}" alt="favorites">
          </button>
        </div>
      </div>
    `;
    this.el.querySelector('button').addEventListener('click', () => this.toggleFavorites());
    return this.el;
  }
}