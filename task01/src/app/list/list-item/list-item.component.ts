import {Component, Input}  from '@angular/core';
import { Item } from '../../models';
import {ItemService} from "../../services/list.service";

@Component({
    selector: 'list-item',
    templateUrl: 'list-item.component.html',
    styleUrls: ['list-item.component.scss'],
})

export class ListItemComponent {
    @Input() item: Item;

    constructor(private listService: ItemService) { }

    handleClick(id: number) {
        this.listService.setCurrentItem(id);
    }
}
