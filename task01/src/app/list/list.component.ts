import { Component } from '@angular/core';
import { Item } from '../models';
import { ItemService } from '../services';
import _ from 'lodash';

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
})

export class ListComponent {
    items: Item[];
    filter: string;

    constructor (private itemsList: ItemService) {
        this.items = this.itemsList.getList();
    }

    ngDoCheck() {
        if(!_.isEqual(this.items.length,this.itemsList.items.length)){
            this.items = this.itemsList.getList();
        }
    }

    filterChanged(e) {
       this.filter = e || '';
    }

}