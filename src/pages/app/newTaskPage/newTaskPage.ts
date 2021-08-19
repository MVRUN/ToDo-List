import TaskWrapperModel from '../../../core/components/taskWrapperModel/taskWrapperModel';
import Component from '../../../core/templates/components';
import { getTest } from '../../../core/workWithLocaleStorage';

class NewTaskPage extends Component {
  private taskWrapper: TaskWrapperModel;

  private taskArr: { value: string; id: number }[] = [];

  constructor(tagName: string, className: string, id: string) {
    super(tagName, [className]);
    this.container.id = id;
    this.taskWrapper = new TaskWrapperModel('div', ['task-menu']);
    this.taskArr = getTest('newTasks');
  }

  public addSubTitle(): void {
    const subtitle = document.createElement('h3');
    subtitle.classList.add('task-menu__subtitle');
    subtitle.innerHTML = 'Add new task';
    this.container.appendChild(subtitle);
  }

  public createNewTaskPage(): HTMLElement {
    this.addSubTitle();
    this.taskWrapper.addInputWrapper();
    this.container.appendChild(this.taskWrapper.createTaskWrapper(this.taskArr, 'newTasks'));
    return this.container;
  }
}

export default NewTaskPage;
