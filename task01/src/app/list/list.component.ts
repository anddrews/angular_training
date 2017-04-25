import { Component } from '@angular/core';
import { Item } from '../models';
import { ItemService } from '../services';

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
})

export class ListComponent {
    items: Item[];
    filter: string;

    constructor (private itemsList: ItemService) {
        this.items = itemsList.getList();
    }

    filterChanged(e) {
       this.filter = e || '';
    }

    addItem() {
        console.log('add item');
    }
}