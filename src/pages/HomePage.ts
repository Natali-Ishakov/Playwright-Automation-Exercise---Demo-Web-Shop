import { Page, Locator, expect } from '@playwright/test';


export class HomePage{
    public page: Page;
    public logo: Locator;
    public navbar: Locator;
    public loginButton: Locator;
    public signupButton: Locator;
    public cartButton: Locator;
    public productsButton: Locator;
    public contactUsButton: Locator;
    public deleteAccountButton: Locator;
  
    constructor(page: Page) {
      this.page = page;
      this.logo = page.locator('img[src="/static/images/home/logo.png"]');
      this.navbar = page.locator('#header');
      this.loginButton = page.getByRole('link', { name: 'Signup / Login' }); 
      this.signupButton = this.loginButton;
      this.cartButton = page.getByRole('link', { name: 'Cart' });
      this.productsButton = page.getByRole('link', { name: 'Products' });
      this.contactUsButton = page.getByRole('link', { name: 'Contact us' });
      this.productsButton = page.getByRole('link', { name: 'Products' }); 
      this.deleteAccountButton = page.locator('a[href="/delete_account"]');
    }


}