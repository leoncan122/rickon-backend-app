import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, ParseIntPipe, Post, Put, ServiceUnavailableException, UseGuards, UsePipes } from '@nestjs/common';
import {Compra} from './interfaces/Compra'
import { ComprasService } from './compras.service';
import { ValidationPipe } from './validation.pipe';
import { CreateCompraDto } from './compra.dto';
import { JwtAuthGuard} from '../auth/jwt-auth.guard';

@Controller('compras')
export class ComprasController {

    constructor(private comprasService: ComprasService) {}
    
    @Get('')
    async getCompras(): Promise<Compra[]>{
        const response = await this.comprasService.getCompras()
        return response
    }
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getCompraById(
        //it would be rejected in case the param is a string 
        @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
        id: number,
      ): Promise<Compra | string> {
        const response = await this.comprasService.getCompraByid(id)
        if (!response) throw new NotFoundException()
        return response
    }

    @Get('productos/:id')
    async getCompraByProduct(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
    id: number,): Promise<any> {
        const response = await this.comprasService.getCompraByProduct(id)
        if (!response) throw new NotFoundException()
        return response
    }

    @Post()
    async createCompra(
        @Body(new ValidationPipe()) createCompraDto: CreateCompraDto
    ): Promise<any> {
        console.log(createCompraDto)
        const response = await this.comprasService.createCompra(createCompraDto)
        if (!response) throw new ServiceUnavailableException()
        return response
    }
    
    @Delete(':id')
    async cancelCompra(@Param() id: string) {
        return `cancelando compra ${id}`
    }
    
    
}
