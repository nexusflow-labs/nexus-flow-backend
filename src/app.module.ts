import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { WorkspacesModule } from './modules/workspaces/workspaces.module';
import { LoggerMiddleware } from './infrastructure/common/middlewares/logger.middleware';
import { requestTracker } from './infrastructure/common/middlewares/request-tracker.middleware';
import { ContextMiddleware } from './infrastructure/common/middlewares/context.middleware';
import { UserModule } from './modules/users/users.module';
import { MemberModule } from './modules/members/members.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { TasksModule } from './modules/tasks/tasks.module';

@Module({
  imports: [WorkspacesModule, UserModule, MemberModule, ProjectsModule, TasksModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(requestTracker, ContextMiddleware, LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
