import {Component, Output, EventEmitter} from '@angular/core';
import { ItemService } from '../../services';

@Component({
    selector: 'list-header',
    templateUrl: './list-header.component.html',
    styleUrls: ['./list-header.component.scss']
})

export class ListHeaderComponent {
    @Output() filterChanged = new EventEmitter();
    @Output() addItem = new EventEmitter();

    constructor(private itemService: ItemService) {}

    handleFilterChange(value: string) {
        this.filterChanged.emit(value);
    }

    createNewItem() {
        this.itemService.createNewItem();
    }
}