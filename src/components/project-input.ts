export class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;

  titleField: HTMLInputElement;
  descField: HTMLInputElement;
  peopleField: HTMLInputElement;
  constructor() {
    this.templateElement = document.querySelector("#project-input");
    this.hostElement = document.querySelector("#app");

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );

    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = "user-input";
    // this.titleField = this.element.querySelector("#title");
    // this.titleField = this.element.querySelector("#description");
    // this.titleField = this.element.querySelector("#people");

    this.attach();
    // this.configure();
  }

  attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }

  // configure() {
  //   this.element.insertAdjacentElement("afterbegin", this.hostElement);
  // }
}
