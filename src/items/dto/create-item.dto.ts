import { Document } from 'mongoose';

export class CreateItemDTO extends Document {
	readonly name: string;
	readonly description: string;
	readonly quantity: number;
}