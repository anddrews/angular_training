import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

const mocItems = `[
    {
        "id": "1",
        "name": "Ivan",
        "sex": "mail",
        "birthday": "05-05-2010"
    },
    {
        "id": "2",
        "name": "Vovan",
        "sex": "mail",
        "birthday": "05-05-2010"
    },
    {
        "id": "3",
        "name": "Piotr",
        "sex": "mail",
        "birthday": "05-05-2010"
    },
    {
        "id": "4",
        "name": "Alex",
        "sex": "mail",
        "birthday": "05-05-2010"
    },
    {
        "id": "5",
        "name": "Alexa",
        "sex": "femail",
        "birthday": "05-05-2010"
    },
    {
        "id": "6",
        "name": "Mary",
        "sex": "femail",
        "birthday": "05-05-2010"
    },
    {
        "id": "7",
        "name": "Ingrid",
        "sex": "femail",
        "birthday": "05-05-2010"
    }
]`;

@Injectable()
export class ItemService {
    items: Item[];
    currentItem: Item;
    isEditMode: boolean = false;

    constructor () {
        this.items = JSON.parse(mocItems);
        this.currentItem = new Item();
    }

    getList() {
        return this.items;
    }

    setCurrentItem(id: number) {
        this.currentItem = this.items.filter( item => item.id == id)[0];
    }

    getCurrentItem () {
        return this.currentItem;
    }

    openEditMode(id: number) {
        this.currentItem = this.items.filter( item => item.id == id)[0];
        this.isEditMode = true;
    }
    endEditMode(item?: Item) {
        if (item) {
            const tmp = this.items;
            this.items.forEach( (el, index) => { if(el.id == item.id) {
                tmp[index] = item;
            }});
        }
        this.isEditMode = false;
    }

    deleteItem(id: number) {
        this.items = this.items.filter(item => item.id != id);
    }

    createNewItem(){
        this.items.push(new Item());
        this.currentItem = this.items[this.items.length - 1];
        this.isEditMode = true;
    }

}