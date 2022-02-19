import { Project, ProjectStatus } from '../models/project';

type Listener<T> = (items: T[]) => void;

class State<T> {
  listeners: Listener<T>[] = [];
  addListeners(listenerFn: Listener<T>) {
    this.listeners.push(listenerFn);
  }
}

class ProjectState extends State<Project> {
  projects: Project[] = [];
  private static instance: ProjectState;
  constructor() {
    super();
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  addProject(title: string, desc: string, numOfPeople: number) {
    const newProject = new Project(
      Math.random().toString(),
      title,
      desc,
      numOfPeople,
      ProjectStatus.Active
    );
    this.projects.push(newProject);
    console.log(newProject);

    this.updateListeners();
  }

  private updateListeners() {
    this.listeners.map(listenerFn => listenerFn(this.projects.slice()));
  }
}
export const projectState = ProjectState.getInstance();
