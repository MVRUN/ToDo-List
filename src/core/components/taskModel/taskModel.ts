import Component from '../../templates/components';
import ButtonsWrapper from './buttons/buttons';

class TaskItemModel extends Component {
  private taskText: HTMLElement;

  constructor(taskValue: string, taskId: number, pageId: string) {
    super('div', ['task-menu__task']);
    this.taskText = document.createElement('p');
    this.taskText.classList.add('task-menu__description-task');
    this.taskText.innerHTML = taskValue;
    this.container.appendChild(this.taskText);
    this.container.appendChild(new ButtonsWrapper(taskValue, taskId, pageId).createButtonsWrapper());
  }

  public createTaskItem(): HTMLElement {
    return this.container;
  }
}

export default TaskItemModel;
