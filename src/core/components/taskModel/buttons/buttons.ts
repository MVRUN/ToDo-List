import Component from '../../../templates/components';
import { getTest, postTest } from '../../../workWithLocaleStorage';

class ButtonsWrapper extends Component {
  private taskId: number;

  private taskValue: string;

  private taskArr: { value: string; id: number }[] = [];

  private arrForNextStep: { value: string; id: number }[] = [];

  private pageId: string;

  constructor(value: string, taskId: number, pageId: string) {
    super('div', ['task-menu__buttons-wrapper']);
    this.taskId = taskId;
    this.taskValue = value;
    this.pageId = pageId;
  }

  private createButtons(): void {
    /// Этот блок CORE!!!!!!!!//////////////////////////////////
    const removeButton = document.createElement('button');
    removeButton.classList.add('task-menu__button');
    const btnImg = document.createElement('img');
    btnImg.classList.add('task-menu__button-image');
    btnImg.src = './icon/delete.svg';
    removeButton.appendChild(btnImg);
    removeButton.addEventListener('click', () => {
      this.removeCurrentTask(removeButton);
    });

    /// ///Тут начинается кнопка отправки на некст этап
    const nextStepButton = document.createElement('button');
    nextStepButton.classList.add('task-menu__button');
    this.createNexStepButton(nextStepButton); /// /////////////////ПОМЕНЯТЬ НАЗВАНИЕ ФУНКЦИИИ
    nextStepButton.addEventListener('click', () => {
      this.removeCurrentTask(nextStepButton);
    });
    this.container.appendChild(removeButton);
    /// Этот блок CORE!!!!!!!!///////////////////////////////////
  }

  public createNexStepButton(nextStepButton: HTMLButtonElement): void {
    /// ///////////////ПОМЕНЯТЬ НАЗВАНИЕ ФУНКЦИИИ
    const btnImg = document.createElement('img');
    btnImg.classList.add('task-menu__button-image');
    nextStepButton.appendChild(btnImg);
    switch (window.location.hash.slice(1)) {
      case 'completed-tasks-page':
        break;
      case 'tasks-in-progress-page':
        btnImg.src = './icon/completed.svg';
        nextStepButton.addEventListener('click', () => {
          this.arrForNextStep = getTest('completedTasks');
          this.arrForNextStep.push({ value: this.taskValue, id: this.taskId });
          postTest('completedTasks', this.arrForNextStep);
          this.arrForNextStep = [];
        });
        this.container.appendChild(nextStepButton);
        break;
      default:
        btnImg.src = './icon/beginTask.svg';
        nextStepButton.addEventListener('click', () => {
          this.arrForNextStep = getTest('tasksInProgress');
          this.arrForNextStep.push({ value: this.taskValue, id: this.taskId });
          postTest('tasksInProgress', this.arrForNextStep);
          this.arrForNextStep = [];
        });
        this.container.appendChild(nextStepButton);
        break;
    }
  }

  public removeCurrentTask(btn: HTMLButtonElement): void {
    const taskBox = btn.closest('.task-menu__task'); // поиск таски для удаления через btn
    taskBox?.remove(); // удаляет дом-элемент(саму таску)
    this.taskArr = getTest(this.pageId);
    this.taskArr.forEach((elem, index) => {
      if (elem.id === this.taskId) {
        this.taskArr.splice(index, 1);
      }
    });
    postTest(this.pageId, this.taskArr);
    this.taskArr = [];
  }

  public createButtonsWrapper(): HTMLElement {
    this.createButtons();
    return this.container;
  }
}

export default ButtonsWrapper;
