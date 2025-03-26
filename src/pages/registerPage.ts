import { Page, Locator } from '@playwright/test';

export class registerPage {
    private page: Page;
    public genderMaleCheckbox: Locator;
    public firstnameInput : Locator;
    public lastnameInput : Locator;
    public emailInput : Locator;
    public passwordInput : Locator;
    public confirmPasswordInput : Locator;
    public registerButton : Locator;
    public messageSuccses : Locator;
    public continueButton : Locator;
 

  constructor(page: Page) {
    this.page = page;
    this.genderMaleCheckbox = page.locator('#gender-male');
    this.firstnameInput = page.locator('#FirstName');
    this.lastnameInput = page.locator('#LastName');
    this.emailInput = page.locator('#Email');
    this.passwordInput = page.locator('#Password');
    this.confirmPasswordInput = page.locator('#ConfirmPassword');
    this.registerButton = page.getByRole('button', {name: 'Register'});
    this.messageSuccses = page.locator('.result').first();
    this.continueButton = page.getByRole('button', {name: 'Continue'});


  }
}
