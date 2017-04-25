import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'list-header',
    templateUrl: './list-header.component.html',
    styleUrls: ['./list-header.component.scss']
})

export class ListHeaderComponent {
    @Output() filterChanged = new EventEmitter();
    @Output() addItem = new EventEmitter();
    handleFilterChange(value: string) {
        this.filterChanged.emit(value);
    }
}