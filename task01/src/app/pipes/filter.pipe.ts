import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../models';

@Pipe({name: 'filterByName'})
export class FilterPipe implements PipeTransform {
    transform(items: Item[], value: string) {
        if (!items || !value || value === '') return items;
        return items.filter(
            item => item.name.toUpperCase().search(new RegExp('\\S*' + value.toUpperCase() + '\\S*')) != -1
        );

    }
}