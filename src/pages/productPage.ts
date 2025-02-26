import { Page, Locator } from '@playwright/test';

export class productPage {
  public page: Page;
  public productName: Locator;
  public productPrice: Locator;
  public productDescription: Locator;
  public addToCartButton: Locator;
  public quantityInput: Locator;
  public productImage: Locator;
  public successMessage: Locator;
  public searchButton: Locator;
  public searchInput: Locator;
  public addProductButton: Locator;
  public continueShoppingButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.productName = page.locator('[data-testid="product-name"]');
    this.productPrice = page.locator('[data-testid="product-price"]');
    this.productDescription = page.locator('[data-testid="product-description"]');
    this.addToCartButton = page.locator('button[type="button"]')  
    this.quantityInput = page.locator('input[name="quantity"]');
    this.productImage = page.locator('img[alt="Product Image"]');
    this.successMessage = page.locator('.alert-success');
    this.searchButton = page.locator('#submit_search');
    this.searchInput = page.locator('input[name="search"]');
    this.addProductButton = page.locator('.fa.fa-plus-square');
    this.continueShoppingButton = page.getByRole('button', {name: 'Continue Shopping'});


  }
}
