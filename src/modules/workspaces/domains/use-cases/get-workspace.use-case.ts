import { Workspace } from '../entities/workspaces.entitiy';
import { IWorkspaceRepository } from '../repositories/workspaces.repository';

export class GetWorkspaceUseCase {
  constructor(private readonly workspaceRepository: IWorkspaceRepository) {}

  async execute(id: string): Promise<Workspace | null> {
    return await this.workspaceRepository.findById(id);
  }
}
