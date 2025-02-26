import { Page, Locator } from '@playwright/test';

export class loginPage {
  private page: Page;
  public emailInput: Locator;
  public passwordInput: Locator;
  public loginButton: Locator;
  public errorMessage: Locator;
  public signupLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('input[data-qa="login-email"]');
    this.passwordInput = page.locator('input[data-qa="login-password"]');
    this.loginButton = page.locator('button[data-qa="login-button"]');
    this.errorMessage = page.locator('.error-message');
    this.signupLink = page.locator('a[href="/signup"]');
  }
}
