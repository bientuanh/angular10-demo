import { Component, OnInit } from '@angular/core';
import { IItem } from 'src/app/shared/models/shopping-cart/item-interface';
import { IPromoInfo } from 'src/app/shared/models/shopping-cart/promo-info.interface';
import { IShoppingCartPage } from 'src/app/shared/models/shopping-cart/shopping-cart-page.interface';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.scss'],
})
export class ShoppingCardComponent implements OnInit {
  items: IItem[] = [
    {
      id: 1,
      name: 'PRODUCT ITEM NUMBER 1',
      price: 5.99,
      description: 'Description for product item number 1',
      quantity: 2,
      thumbnail: 'assets/images/iphone-8-plus-red.jpg',
    },
    {
      id: 2,
      name: 'PRODUCT ITEM NUMBER 2',
      price: 9.99,
      description: 'Description for product item number 2',
      quantity: 5,
      thumbnail: 'assets/images/iPhone-8-plus-den.png',
    },
    {
      id: 3,
      name: 'PRODUCT ITEM NUMBER 2',
      price: 120.99,
      quantity: 1,
      description: 'Description for product item number 2',
      thumbnail: 'assets/images/iphone8-plus-silver.png',
    },
  ];

  promoCodes: IPromoInfo[] = [
    {
      code: 'anhbt1234',
      percentSale: 5,
    },
    {
      code: 'tuanhdeptrai',
      percentSale: 10,
    },
  ];

  subTotal = 0;
  itemNumbers = 0;
  tax = 0;
  total = 0;
  promoMoney = 0;
  promoInfo: IPromoInfo = {};
  shoppingCartInfo: IShoppingCartPage = {};

  constructor() {}

  ngOnInit(): void {
    this.updateAllState();
  }

  onClickRemoveItem(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
    this.updateAllState();
  }

  onChangeQuantity(data: any): void {
    this.items = this.items.map(item => {
      if (item.id === data.itemID) {
        return {
          ...item,
          quantity: +data.inputEle.value,
        };
      } else {
        return item;
      }
    });

    this.updateAllState();
  }

  onClickPromoCodeBtn(promoCode: string): void {
    this.promoMoney = 0;

    for (const promoInfo of this.promoCodes) {
      if (promoInfo.code === promoCode) {
        this.promoInfo = promoInfo;
        this.promoMoney = +(this.subTotal * (promoInfo.percentSale / 100)).toFixed(2);
      }
    }

    if (this.promoMoney === 0) {
      alert('You enter wrong promo code, please enter anhbt1234 for 5% sale !');
    } else {
      this.updateAllState();
    }
  }

  onClickCheckOutBtn(): void {
    console.log(this.items);
    this.shoppingCartInfo.listItem = this.items;
    this.shoppingCartInfo.totalMoney = this.total;
    console.log(this.shoppingCartInfo);
    alert(this.shoppingCartInfo);
  }

  private getSubTotal(): number {
    return +this.items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  }

  private getItemNumbers(): number {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  private getTax(): number {
    return +(this.subTotal * 0.1).toFixed(2);
  }

  private getTotal(): number {
    return +(this.subTotal - this.tax - this.promoMoney).toFixed(2);
  }

  private updateAllState(): void {
    this.itemNumbers = this.getItemNumbers();
    this.subTotal = this.getSubTotal();
    this.tax = this.getTax();

    if (this.promoInfo.code) {
      this.promoMoney = +(this.subTotal * (this.promoInfo.percentSale / 100)).toFixed(2);
    }
    this.total = this.getTotal();
  }
}
