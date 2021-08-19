import Component from '../../templates/components';
import '../componentStyle.scss';
import TaskItemModel from '../taskModel/taskModel';
import { newTaskValue } from '../../taskData'; /// ///Вернуть как было
import InputWrapper from '../../../pages/app/newTaskPage/inputWrapper/inputWrapper';

class TaskWrapperModel extends Component {
  private wrapper: HTMLElement;

  constructor(tagName: string, [className]: string[]) {
    super(tagName, [className]);
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('task-menu__task-wrapper');
  }

  private addTasks(tasks: Array<{ value: string; id: number }>, pageId: string): void {
    if (tasks.length > 0) {
      tasks.forEach((taskItem: { value: string; id: number }) =>
        this.wrapper.prepend(new TaskItemModel(taskItem.value, taskItem.id, pageId).createTaskItem()),
      );
      this.container.appendChild(this.wrapper);
    }
  }

  public addTaskItem(inputValue: string, id: number, pageId: string): void {
    if (inputValue) {
      this.wrapper.prepend(new TaskItemModel(inputValue, id, pageId).createTaskItem());
    }
  }

  public addInputWrapper(): void {
    this.container.appendChild(new InputWrapper().createInputWrapper());
  }

  public createTaskWrapper(tasks: { value: string; id: number }[], pageId: string): HTMLElement {
    this.addTasks(tasks, pageId);
    this.container.addEventListener('render', () => {
      this.addTaskItem(newTaskValue.value, newTaskValue.id, pageId);
      this.container.appendChild(this.wrapper);
    });
    return this.container;
  }
}

export default TaskWrapperModel;
