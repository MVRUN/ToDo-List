import NewTaskPage from './newTaskPage/newTaskPage';
import InProgressTaskPage from './inProgressTaskPage/inProgressTaskPage';
import CompletedTaskPage from './completedTaskPage/completedTaskPage';
import Header from '../../core/components/header/header';
import { PageIds } from '../../core/components/header/nav/nav';

class App {
  private static container: HTMLElement = document.body;

  private static defaultPageId = 'current-page';

  private header: Header;

  constructor() {
    this.header = new Header('header', ['header']);
  }

  private static renderNewPages(idPage: string): void {
    const currentPageId = document.querySelector(`#${App.defaultPageId}`);
    if (currentPageId) {
      currentPageId.remove();
    }
    switch (idPage) {
      case PageIds.taskInProgress:
        App.container.append(new InProgressTaskPage('main', 'main', App.defaultPageId).createInProgressTaskPage());
        break;
      case PageIds.completedTask:
        App.container.append(new CompletedTaskPage('main', 'main', App.defaultPageId).createCompletedTaskPage());
        break;
      default:
        App.container.append(new NewTaskPage('main', 'main', App.defaultPageId).createNewTaskPage());
        break;
    }
  }

  private enableRouteChange(): void {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      App.renderNewPages(hash);
    });
  }

  public run(): void {
    App.container.appendChild(this.header.createHeader());
    App.renderNewPages(window.location.hash.slice(1));
    this.enableRouteChange();
  }
}

export default App;
