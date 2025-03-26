import { Page, Locator } from '@playwright/test';

export class productPage {
  public page: Page;
  public productList: Locator;
  public notificationSuccess: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productList = page.locator('.product-item');
    this.notificationSuccess = page.locator('.bar-notification.success');
  }
}
