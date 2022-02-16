export enum ProjectStatus {
  Active,
  Finished,
}

export class Project {
  constructor(
    public projectId: string,
    public title: string,
    public description: string,
    public people: string,
    public status: ProjectStatus
  ) {}
}
