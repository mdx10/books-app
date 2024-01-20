import { MainView } from '../views/main/main';
import './app.css';

export class App {
  routes = [
    { path: '', view: MainView },
  ];

  appState = {
    favorites: [],
  };

  constructor() {
    document.addEventListener('hashchange', this.route.bind(this));
    this.route();
  }

  route() {
    if (this.currentView) {
      this.currentView.destroy();
    }
    const view = this.routes.find(route => route.path === location.hash).view;
    this.currentView = new view(this.appState);
    this.currentView.render();
  }
}