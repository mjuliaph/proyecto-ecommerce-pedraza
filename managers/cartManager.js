import fs from 'fs';

export default class CartManager{
    constructor() {
        this.carts = [];
        this.path = './files/carts.json';
    }
}