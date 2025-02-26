import { Page, Locator } from '@playwright/test';

export class registerPage {
    private page: Page;
    public nameInput: Locator;
    public emailInput: Locator;
    public passwordInput: Locator;
    public confirmPasswordInput: Locator;
    public firstNameInput: Locator;
    public lastNameInput: Locator;
    public addressInput: Locator;
    public countryDropdown: Locator;
    public mobileInput: Locator;
    public registerButton: Locator;
    public createAccountButton: Locator; 
    public errorMessage: Locator;
    public loginLink: Locator;
    public accountInformationTitle: Locator;
    public registrationSuccessMessage: Locator;
    public stateInput: Locator;
    public cityInput: Locator;
    public zipCodeInput: Locator;
    public accountCreated: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.getByRole('textbox', {name: 'Name'});
    this.emailInput = page.locator('input[data-qa="signup-email"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.confirmPasswordInput = page.locator('input[name="confirmPassword"]');
    this.registerButton = page.getByRole('button', {name: 'Signup'});
    this.errorMessage = page.locator('.error-message');
    this.loginLink = page.locator('a[href="/login"]');
    this.accountInformationTitle = page.locator('h2.title:has-text("Enter Account Information")');

     this.firstNameInput = page.locator('input[name="first_name"]');
     this.lastNameInput = page.locator('input[name="last_name"]');
     this.addressInput = page.locator('input[name="address1"]');
     this.countryDropdown = page.locator('select[name="country"]');
     this.stateInput = page.locator('input[name="state"]');
     this.mobileInput = page.locator('input[name="mobile_number"]');
    this.registerButton = page.getByRole('button', { name: 'Signup' });
    this.createAccountButton = page.getByRole('button', { name: 'Create Account' });
    this.registrationSuccessMessage = page.locator('.signup-success');
    this.cityInput = page.locator('input[name="city"]');    
    this.zipCodeInput = page.locator('input[name="zipcode"]');
    this.accountCreated = page.locator('[data-qa="account-created"]')


  }
}
