import { Component } from "../components/base-component";

export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleField: HTMLInputElement;
  descField: HTMLInputElement;
  peopleField: HTMLInputElement;

  constructor() {
    super("project-input", "app", true, "user-input");
    this.configure;
    this.renderConent;

    const titleInput = this.titleField.querySelector("#title");
    const descInput = this.titleField.querySelector("#description");
    const peopleInput = this.titleField.querySelector("#people");
  }

  configure() {
    this.element.addEventListener("submit", this.submitHandler.bind(this));
  }
  renderConent() {}
  gatherUserInput(): [] {}
  submitHandler() {}
}
