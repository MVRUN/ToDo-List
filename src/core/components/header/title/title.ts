import Component from '../../../templates/components';

class Title extends Component {
  constructor(tagName: string, [className]: string[]) {
    super(tagName, [className]);
  }

  createTitle(): HTMLElement {
    this.container.innerHTML = 'ToDoList';
    return this.container;
  }
}

export default Title;
