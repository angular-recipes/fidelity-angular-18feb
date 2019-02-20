import { Item } from './item';

export class Cart {
    constructor(
        public items: Item[],
        public totalPrice: number
    ) {
        this.totalPrice = 0;
    }

    addItem(item: Item) {
        let newItem = this.items.find(i => i.name == item.name);
        if(newItem) {
            newItem.qty++;
        } else {
            this.items.push(item);
        }
        this.totalPrice += item.price;
    }
}
