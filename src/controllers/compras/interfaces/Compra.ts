export interface Compra {
    id: string;
    customerName: string;
    items: [{
        idItem: string;
        quantity: number;
        price: number;
    }],
    total: number;
    date: Date;
    discount?: boolean;
}