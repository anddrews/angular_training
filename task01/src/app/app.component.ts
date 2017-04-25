import {
  Component,
  ViewEncapsulation
} from '@angular/core';

import { ItemService } from './services';
import { Item } from './models';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss'
  ],
  templateUrl: './app.component.html',
  providers: [ItemService]
})
export class AppComponent {
  item: Item;
  constructor() {}

  changeCurrentItem(item: Item) {
    this.item = item;
  }
}
