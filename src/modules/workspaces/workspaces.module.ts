import { Module } from '@nestjs/common';
import { WorkspacesController } from './presentation/workspaces.controller';
import { InMemoryWorkspaceRepository } from './infrastructure/persistence/in-memory-workspace.repository';
import { IWorkspaceRepository } from './domains/repositories/workspaces.repository';
import { CreateWorkspaceUseCase } from './domains/use-cases/create-workspace.use-case';
import { ListWorkspacesUseCase } from './domains/use-cases/list-workspaces.use-case';
import { GetWorkspaceUseCase } from './domains/use-cases/get-workspace.use-case';

@Module({
  controllers: [WorkspacesController],
  providers: [
    {
      provide: IWorkspaceRepository,
      useClass: InMemoryWorkspaceRepository,
    },
    // use‑case factories so Nest can inject the repository
    {
      provide: CreateWorkspaceUseCase,
      inject: [IWorkspaceRepository],
      useFactory: (repo: IWorkspaceRepository) =>
        new CreateWorkspaceUseCase(repo),
    },
    {
      provide: ListWorkspacesUseCase,
      inject: [IWorkspaceRepository],
      useFactory: (repo: IWorkspaceRepository) =>
        new ListWorkspacesUseCase(repo),
    },
    {
      provide: GetWorkspaceUseCase,
      inject: [IWorkspaceRepository],
      useFactory: (repo: IWorkspaceRepository) => new GetWorkspaceUseCase(repo),
    },
  ],
})
export class WorkspacesModule {}
