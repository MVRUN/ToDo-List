import Component from '../../../templates/components';

export const enum PageIds {
  newTask = 'new-task-page',
  taskInProgress = 'tasks-in-progress-page',
  completedTask = 'completed-tasks-page',
}

const Buttons = [
  {
    id: PageIds.newTask,
    text: 'New task',
  },
  {
    id: PageIds.taskInProgress,
    text: 'Task in progress',
  },
  {
    id: PageIds.completedTask,
    text: 'Completed tasks',
  },
];

class Navigation extends Component {
  constructor(tagName: string, [className]: string[]) {
    super(tagName, [className]);
  }

  createPageButtons(): void {
    Buttons.forEach(button => {
      const buttonHTML = document.createElement('a');
      buttonHTML.href = `#${button.id}`;
      buttonHTML.innerText = button.text;
      buttonHTML.className = 'header__navigation-link';
      this.container.append(buttonHTML);
    });
  }

  createNavigation(): HTMLElement {
    this.createPageButtons();
    return this.container;
  }
}

export default Navigation;
