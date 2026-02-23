import { Workspace } from '../entities/workspaces.entitiy';

export abstract class IWorkspaceRepository {
  abstract save(workspace: Workspace): Promise<void>;
  abstract findAll(): Promise<Workspace[]>;
  abstract findById(id: string): Promise<Workspace | null>;
}
