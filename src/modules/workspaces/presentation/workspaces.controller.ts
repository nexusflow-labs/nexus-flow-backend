import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreateWorkspaceUseCase } from '../domains/use-cases/create-workspace.use-case';
import { CreateWorkspaceDto } from './dtos/create-workspace.dto';
import { ListWorkspacesUseCase } from '../domains/use-cases/list-workspaces.use-case';
import { GetWorkspaceUseCase } from '../domains/use-cases/get-workspace.use-case';

@Controller('workspaces')
export class WorkspacesController {
  constructor(
    private readonly createWorkspaceUseCase: CreateWorkspaceUseCase,
    private readonly listWorkspacesUseCase: ListWorkspacesUseCase,
    private readonly getWorkspaceUseCase: GetWorkspaceUseCase,
  ) {}

  @Get()
  async list() {
    return this.listWorkspacesUseCase.execute();
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    return this.getWorkspaceUseCase.execute(id);
  }

  @Post()
  async create(@Body() dto: CreateWorkspaceDto) {
    return this.createWorkspaceUseCase.execute(dto.name, dto.description);
  }
}
