import { Injectable, Param } from '@nestjs/common';
import { CreateCompraDto } from './compra.dto';
import {Compra} from './interfaces/Compra'

@Injectable()
export class ComprasService {
    compras: Compra[] = [{
        id: '32312',
        customerName: 'Leon Cangini',
        items: [{
            quantity: 1,
            idItem: '231312',
            price: 43,
        }],
        total: 43,
        date: new Date(),
        discount: false,
        },
        {
            id: '32356',
            customerName: 'Eduardo Cangini',
            items: [{
                quantity: 2,
                idItem: '231312',
                price: 43,
            }],
            total: 86,
            date: new Date(),
            discount: false,
        }]
    getCompras(): Compra[] {
        return this.compras
    }
    getCompraByid (id: number): Compra | string {
        try {
            if (id) return this.compras.find(compra => parseInt(compra.id) === id)
        } catch (error) {
            return 'no hay compra con ese id'
        }
    }
    getCompraByProduct (idItem: number): any{
        let count = 0
        let total = 0
        this.compras.forEach(compra => {
            const itemComprado = Object.values(compra.items)[0]
            parseInt(itemComprado.idItem) === idItem? count += itemComprado.quantity  : count
            parseInt(itemComprado.idItem) === idItem? total += (itemComprado.price * itemComprado.quantity) : total
        })
        return [count, total]
    } 
    createCompra(body): any {
        console.log(body)
        const nuevaCompra = body
        return `Compra ${nuevaCompra.id} fue registrada por un total de ${nuevaCompra.total}`
        
    }

}
