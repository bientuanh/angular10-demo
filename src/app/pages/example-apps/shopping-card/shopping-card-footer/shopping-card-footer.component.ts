import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-card-footer',
  templateUrl: './shopping-card-footer.component.html',
  styleUrls: ['../shopping-card.component.scss'],
})
export class ShoppingCardFooterComponent implements OnInit {
  @Input() subTotal: number;
  @Input() tax: number;
  @Input() total: number;
  @Input() promoMoney: any;

  @Output() handleClickPromoCodeBtnEventEmitter: EventEmitter<any> = new EventEmitter();
  @Output() handleClickCheckOutEventEmitter: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClickPromoCodeBtn(promoCode: string): void {
    this.handleClickPromoCodeBtnEventEmitter.emit(promoCode);
  }

  onClickCheckOutBtn(): void {
    this.handleClickCheckOutEventEmitter.emit();
  }
}
