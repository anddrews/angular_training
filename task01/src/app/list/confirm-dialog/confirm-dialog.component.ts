import {Component, Input, EventEmitter, Output} from '@angular/core';
import { ItemService } from '../../services';
import { Item } from "../../models/item.model";

@Component({
    selector: 'confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls:['./confirm-dialog.component.scss']
})

export class ConfirmDialogComponent {
    @Input() id: number;
    @Input() isShow: boolean;
    @Output() closeModal = new EventEmitter();

    constructor(private itemService: ItemService) {}

    deleteItem() {
        this.itemService.deleteItem(this.id);
        this.closeModal.emit(false);
    }

    cancelDelete() {
        this.closeModal.emit(false);
    }

}