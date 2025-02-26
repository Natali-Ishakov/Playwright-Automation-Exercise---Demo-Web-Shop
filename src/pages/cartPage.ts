import { Page, Locator, expect } from '@playwright/test';


export class cartPage{
    public page: Page;
    public 	productContent: Locator;
    public itemPrice :Locator;
    public totalAmount: Locator;
    public itemQuantity: Locator;
  
  
    constructor(page: Page) {
        this.page = page;
        this.productContent = page.locator('.cart_description');
        this.itemPrice = page.locator('.cart_price');
        this.totalAmount= page.locator('.cart_total_price');
        this.itemQuantity= page.locator('.cart_quantity');
    }


}