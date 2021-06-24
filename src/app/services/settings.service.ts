import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private themeLink = document.querySelector('#theme');

  constructor() {
    const themeUrl = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.themeLink?.setAttribute('href', themeUrl);
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${ theme }.css`;
    this.themeLink?.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme(): void {
    const links: NodeListOf<Element> = document.querySelectorAll('.selector');
    links.forEach((link) => {
      link.classList.remove('working');
      const btnTheme = link.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`;
      const currentTheme = this.themeLink?.getAttribute('href');

      if (btnThemeUrl === currentTheme) {
        link.classList.add('working');
      }
    });
  }

}
