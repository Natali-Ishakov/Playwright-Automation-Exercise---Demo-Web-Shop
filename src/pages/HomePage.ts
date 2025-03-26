import { Page, Locator, expect } from '@playwright/test';


export class HomePage{
    public page: Page;
    public logo: Locator;
    public searchInput: Locator;
    public searchButton: Locator;
    public registerButton: Locator;
    public shoppingCart: Locator;
    public accountMail: Locator;
    public headerLinks: Locator;
    public digitalDownloads: Locator;
    
    constructor(page: Page) {
      this.page = page;
      this.headerLinks = page.locator('.header-links'); 
      this.logo = page.getByRole('img', {name: 'Tricentis Demo Web Shop'});
      this.searchInput = page.locator('#small-searchterms');
      this.searchButton = page.getByRole('button', {name: 'Search'});
      this.registerButton = page.getByRole('link', {name: 'Register'}).first();
      this.shoppingCart = page.locator('#topcartlink');
      this.accountMail = this.headerLinks.locator('.account');
      this.digitalDownloads = page.getByRole('link', {name: 'Digital downloads'}).first();


    }


}