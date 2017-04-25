import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

const mocItems = `[
    {
        "id": "1",
        "name": "Ivan",
        "sex": "man",
        "birthday": "05-05-2010"
    },
    {
        "id": "2",
        "name": "Vovan",
        "sex": "man",
        "birthday": "05-05-2010"
    },
    {
        "id": "3",
        "name": "Piotr",
        "sex": "man",
        "birthday": "05-05-2010"
    },
    {
        "id": "4",
       "name": "Alex",
        "sex": "man",
        "birthday": "05-05-2010"
    },
    {
        "id": "5",
        "name": "Alexa",
        "sex": "woman",
        "birthday": "05-05-2010"
    },
    {
        "id": "6",
        "name": "Mary",
        "sex": "woman",
        "birthday": "05-05-2010"
    },
    {
        "id": "7",
        "name": "Ingrid",
        "sex": "woman",
        "birthday": "05-05-2010"
    }
]`;

@Injectable()
export class ItemService {
    items: Item[];
    currentId: number;
    currentItem: Item;

    constructor () {
        this.items = JSON.parse(mocItems);
        this.currentItem = this.items[0];
    }

    getList() {
        return this.items;
    }

    setCurrentItem(id: number) {
        console.log('current item is' + id);
        this.currentId = id;
        this.currentItem = this.items.filter( item => item.id == this.currentId)[0] || this.items[0];
    }

    getCurrentItem () {
        return this.items.filter( item => item.id == this.currentId)[0];
    }
}