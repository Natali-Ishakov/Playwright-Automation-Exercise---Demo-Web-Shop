import { Page, Locator, expect } from '@playwright/test';


export class cartPage{
    public page: Page;
    public cartList: Locator;
    public itemPrice :Locator;
  
  
    constructor(page: Page) {
        this.page = page;
        this.cartList = page.locator('.cart-item-row');
        this.itemPrice = page.locator('.cart_price');
    }


}