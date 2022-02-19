import { Component } from '../components/base-component';
import { projectState } from '../state/project-state';

export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleField: HTMLInputElement;
  descField: HTMLInputElement;
  peopleField: HTMLInputElement;

  constructor() {
    super('project-input', 'app', true, 'user-input');
    this.configure();
    this.renderContent();

    this.titleField = this.element.querySelector('#title');
    this.descField = this.element.querySelector('#description');
    this.peopleField = this.element.querySelector('#people');
  }

  configure() {
    this.element.addEventListener('submit', this.submitHandler.bind(this));
  }
  renderContent() {}
  gatherUserInput(): [string, string, number] {
    const enteredTitle = this.titleField.value;
    const enteredDesc = this.descField.value;
    const enteredPeople = this.peopleField.value;

    return [enteredTitle, enteredDesc, +enteredPeople];
  }
  submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();

    const [title, desc, people] = userInput;
    projectState.addProject(title, desc, people);
    this.cleanInputFields();
  }

  cleanInputFields() {
    this.titleField.value = '';
    this.descField.value = '';
    this.peopleField.value = '';
  }
}
