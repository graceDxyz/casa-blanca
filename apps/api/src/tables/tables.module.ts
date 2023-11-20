import { Module } from '@nestjs/common';
import { TablesService } from './tables.service';
import { TablesResolver } from './tables.resolver';

@Module({
  providers: [TablesResolver, TablesService],
})
export class TablesModule {}
