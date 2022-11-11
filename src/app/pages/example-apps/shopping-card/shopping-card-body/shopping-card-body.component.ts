import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IItem } from 'src/app/shared/models/shopping-cart/item-interface';

@Component({
  selector: 'app-shopping-card-body',
  templateUrl: './shopping-card-body.component.html',
  styleUrls: ['../shopping-card.component.scss'],
})
export class ShoppingCardBodyComponent implements OnInit {
  @Input() items: IItem[];

  @Output() handleRemoveItem: EventEmitter<any> = new EventEmitter();
  @Output() handleChangeQuantity: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClickRemoveItem(id: number): void {
    this.handleRemoveItem.emit(id);
  }

  updateQuantity(itemID, inputEle): void {
    const data = {
      itemID,
      inputEle,
    };
    this.handleChangeQuantity.emit(data);
  }
}
