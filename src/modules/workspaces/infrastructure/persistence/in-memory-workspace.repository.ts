import { Workspace } from '../../domains/entities/workspaces.entitiy';
import { IWorkspaceRepository } from '../../domains/repositories/workspaces.repository';

export class InMemoryWorkspaceRepository implements IWorkspaceRepository {
  private workspaces: Workspace[] = [];

  save(workspace: Workspace): Promise<void> {
    this.workspaces.push(workspace);
    return Promise.resolve();
  }

  findAll(): Promise<Workspace[]> {
    return Promise.resolve(this.workspaces);
  }

  async findById(id: string): Promise<Workspace | null> {
    return Promise.resolve(this.workspaces.find((w) => w.id === id) || null);
  }
}
