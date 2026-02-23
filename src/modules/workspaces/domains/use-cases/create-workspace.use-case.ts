import { Workspace } from '../entities/workspaces.entitiy';
import { IWorkspaceRepository } from '../repositories/workspaces.repository';

export class CreateWorkspaceUseCase {
  constructor(private readonly workspaceRepository: IWorkspaceRepository) {}

  async execute(name: string, description?: string): Promise<Workspace> {
    const workspace = new Workspace(
      Math.random().toString(36).substring(7),
      name,
      description ?? '',
      new Date(),
    );

    await this.workspaceRepository.save(workspace);
    return workspace;
  }
}
