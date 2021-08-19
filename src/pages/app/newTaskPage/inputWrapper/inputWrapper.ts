import Component from '../../../../core/templates/components';
import { bindRenderEvent } from '../../../../core/customEvents';
import './inputWrapper.scss';
import { newTaskValue } from '../../../../core/taskData'; /// ///////////////////////
import { getTest, postTest } from '../../../../core/workWithLocaleStorage';

class InputWrapper extends Component {
  private input: HTMLInputElement;

  private addButton: HTMLButtonElement;

  private taskArr: { value: string; id: number }[] = [];

  constructor() {
    super('div', ['task-menu__input-wrapper']);
    this.input = document.createElement('input');
    this.addButton = document.createElement('button');
  }

  private addInputWrapperElements(): void {
    this.input.classList.add('task-menu__input');
    this.addButton.classList.add('task-menu__button');
    const btnImg = document.createElement('img');
    btnImg.classList.add('task-menu__button-image');
    btnImg.src = './icon/addlist.svg';
    this.addButton.addEventListener('click', () => {
      if (this.input.value) {
        this.taskArr = getTest('newTasks');
        const id = new Date().getTime();
        newTaskValue.value = this.input.value;
        newTaskValue.id = id;
        this.taskArr.push({ value: this.input.value, id: id });
        postTest('newTasks', this.taskArr);
        this.taskArr = [];
        bindRenderEvent(this.addButton);
        this.input.value = '';
      }
    });
    this.addButton.appendChild(btnImg);
    this.container.appendChild(this.input);
    this.container.appendChild(this.addButton);
  }

  public createInputWrapper(): HTMLElement {
    this.addInputWrapperElements();
    return this.container;
  }
}

export default InputWrapper;
