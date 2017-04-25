import { Component } from '@angular/core';
import { ItemService } from '../services';
import { Item } from '../models';
import { cloneDeep } from 'lodash';

@Component({
    selector: 'item-detail',
    templateUrl: './item-detail.component.html',
    styleUrls: ['./item-detail.component.scss']
})

export class ItemDetailComponent {
    item: Item;
    isEdit: boolean;

    constructor( private listService: ItemService) {
        this.item = this.listService.currentItem;
    }

    ngDoCheck() {
        if(this.item.id !== this.listService.currentItem.id){
            this.item = cloneDeep(this.listService.currentItem);
        }
        if(this.isEdit != this.listService.isEditMode) {
            this.isEdit = this.listService.isEditMode;
        }
    }

    saveItem() {
        this.listService.endEditMode(this.item);
    }

    cancelEdit() {
        this.item = new Item();
        this.listService.endEditMode();
    }

}