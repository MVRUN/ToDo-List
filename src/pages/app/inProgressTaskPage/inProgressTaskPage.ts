import TaskWrapperModel from '../../../core/components/taskWrapperModel/taskWrapperModel';
import Component from '../../../core/templates/components';
import { getTest } from '../../../core/workWithLocaleStorage';

class InProgressTaskPage extends Component {
  private taskWrapper: TaskWrapperModel;

  private taskArr: { value: string; id: number }[] = [];

  constructor(tagName: string, className: string, id: string) {
    super(tagName, [className]);
    this.container.id = id;
    this.taskWrapper = new TaskWrapperModel('div', ['task-menu']);
    this.taskArr = getTest('tasksInProgress');
  }

  public addSubTitle(): void {
    const subtitle = document.createElement('h3');
    subtitle.classList.add('task-menu__subtitle');
    subtitle.innerHTML = 'Tasks in progress';
    this.container.appendChild(subtitle);
  }

  createInProgressTaskPage(): HTMLElement {
    this.addSubTitle();
    this.container.appendChild(this.taskWrapper.createTaskWrapper(this.taskArr, 'tasksInProgress'));
    return this.container;
  }
}

export default InProgressTaskPage;
