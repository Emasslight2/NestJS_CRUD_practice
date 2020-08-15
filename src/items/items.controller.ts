import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDTO } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('item')
export class ItemsController {
	constructor(private readonly itemsService: ItemsService) {}

	@Get('all')
	async findAll(): Promise<Item[]> {
		return this.itemsService.findAll();
	}

	@Get(':id')
	async findOne(@Param('id') id): Promise<Item> {
		return this.itemsService.findOne(id);
	}

	@Post()
	create(@Body() createItemDTO: CreateItemDTO): Promise<Item> {
		return this.itemsService.create(createItemDTO);
	}

	@Delete(':id')
	delete(@Param('id') id): Promise<Item> {
		return this.itemsService.delete(id);
	}

	@Put(':id')
	update(@Body() updateItemDTO: CreateItemDTO, @Param('id') id): Promise<Item> {
		return this.itemsService.update(id, updateItemDTO);
	}
}
