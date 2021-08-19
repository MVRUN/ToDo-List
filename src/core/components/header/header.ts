import Component from '../../templates/components';
import Navigation from './nav/nav';
import Title from './title/title';
import './header.scss';

class Header extends Component {
  constructor(tagName: string, [className]: string[]) {
    super(tagName, [className]);
  }

  createHeader(): HTMLElement {
    this.container.appendChild(new Title('h1', ['header__title']).createTitle());
    this.container.appendChild(new Navigation('nav', ['header__navigation']).createNavigation());
    return this.container;
  }
}

export default Header;
