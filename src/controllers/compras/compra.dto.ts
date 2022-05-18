import { IsString, IsInt, IsDate, IsBoolean, IsArray } from 'class-validator';
export class CreateCompraDto {
        @IsString()
        id: string;
        
        @IsString()
        customerName: string;
        
        @IsArray()
        items: [{
            idItem: string;
            quantity: number;
            price: number;
        }];

        @IsInt()
        total: number;
        
        @IsString()
        date: string;

        @IsBoolean()
        discount: boolean;
}