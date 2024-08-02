import { LightningElement } from 'lwc';

export default class TableTestComponent extends LightningElement {
    // Sample data
    data = [
        { id: 1, name: 'BEANS GREEN LOW SODIUM', quantity: 10, price: 100 },
        { id: 2, name: 'CARROTS', quantity: 5, price: 200 },
        { id: 3, name: 'CORN KERNEL NO SALT ADDED', quantity: 8, price: 150 }
    ];
}