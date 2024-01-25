import { DivComponent } from '../../common/div-component';
import { Card } from '../card/card';
import './card-list.css';

export class CardList extends DivComponent {
  constructor(appState, parentState) {
    super();
    this.appState = appState;
    this.parentState = parentState;
  }

  render() {
    this.el.classList.add('card-list');
    if (this.parentState.loading) {
      this.el.innerHTML = `
        <div class="card-list__loader">Загрузка..</div>
      `;
      return this.el;
    }
    const cardGrid = document.createElement('div');
    cardGrid.classList.add('card-grid');
    this.el.append(cardGrid);
    this.parentState.list.map(card => cardGrid.append(new Card(this.appState, card).render()));
    return this.el;
  }
}