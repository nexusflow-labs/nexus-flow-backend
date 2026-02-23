import { Workspace } from '../entities/workspaces.entitiy';
import { IWorkspaceRepository } from '../repositories/workspaces.repository';

export class ListWorkspacesUseCase {
  constructor(private readonly workspaceRepository: IWorkspaceRepository) {}

  async execute(): Promise<Workspace[]> {
    return await this.workspaceRepository.findAll();
  }
}
