"use strict";
exports.__esModule = true;
exports.ProjectInput = void 0;
var ProjectInput = /** @class */ (function () {
    function ProjectInput() {
        this.templateElement = document.querySelector("#project-input");
        this.hostElement = document.querySelector("#app");
        var importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = "user-input";
        // this.titleField = this.element.querySelector("#title");
        // this.titleField = this.element.querySelector("#description");
        // this.titleField = this.element.querySelector("#people");
        this.attach();
        // this.configure();
    }
    ProjectInput.prototype.attach = function () {
        this.hostElement.insertAdjacentElement("afterbegin", this.element);
    };
    return ProjectInput;
}());
exports.ProjectInput = ProjectInput;
