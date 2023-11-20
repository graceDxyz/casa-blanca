import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TablesService } from './tables.service';
import { Table } from './entities/table.entity';
import { CreateTableInput } from './dto/create-table.input';
import { UpdateTableInput } from './dto/update-table.input';

@Resolver(() => Table)
export class TablesResolver {
  constructor(private readonly tablesService: TablesService) {}

  @Mutation(() => Table)
  createTable(@Args('createTableInput') createTableInput: CreateTableInput) {
    return this.tablesService.create(createTableInput);
  }

  @Query(() => [Table], { name: 'tables' })
  findAll() {
    return this.tablesService.findAll();
  }

  @Query(() => Table, { name: 'table' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.tablesService.findOne(id);
  }

  @Mutation(() => Table)
  updateTable(@Args('updateTableInput') updateTableInput: UpdateTableInput) {
    return this.tablesService.update(updateTableInput.id, updateTableInput);
  }

  @Mutation(() => Table)
  removeTable(@Args('id', { type: () => Int }) id: number) {
    return this.tablesService.remove(id);
  }
}
