import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLConfig } from './config/graphql.config';
import { RoomsModule } from './rooms/rooms.module';
import { TablesModule } from './tables/tables.module';

@Module({
  imports: [GraphQLModule.forRoot(GraphQLConfig), RoomsModule, TablesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
