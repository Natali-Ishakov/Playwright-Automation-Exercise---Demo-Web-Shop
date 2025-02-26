// workFlows/UserFlows.ts
import { expect, Page } from '@playwright/test';
import { HomePage } from '../pages/HomePage'; 
import { uiActions } from '../utils/uiActions';
import { productPage } from '../pages/productPage';
import { cartPage } from '../pages/cartPage';
import { registerPage } from '../pages/registerPage';
import { Verifications } from '../utils/verifications';
import { loginPage } from '../pages/loginPage';

export class UserFlows {
  private page: Page;
  private homePage: HomePage;
  private uiActions: uiActions;
  private registerObj: registerPage;
  private productObj: productPage;
  private cartObj: cartPage;
  private verify: Verifications;
  private loginObj: loginPage;

  constructor(page: Page) {
    this.page = page;
    this.homePage = new HomePage(page);
    this.uiActions = new uiActions(page);
    this.registerObj = new registerPage(page);
    this.loginObj = new loginPage(page);
    this.productObj = new productPage(page);
    this.cartObj = new cartPage(page);
    this.verify = new Verifications(page);
  }

  //Flow: להרשם לאתר
  async registerUser(name: string, email: string, password: string,firstName: string,
    lastName: string, address: string,country: string,state: string,city: string,
    zip: string, mobileNumber: string): Promise<void> {
    await this.uiActions.click(this.homePage.loginButton);
    await this.uiActions.fillText(this.registerObj.nameInput, name);
    await this.uiActions.fillText(this.registerObj.emailInput, email);
    await this.uiActions.click(this.registerObj.registerButton);
    await this.uiActions.waitForElement(this.registerObj.accountInformationTitle);
    await this.uiActions.fillText(this.registerObj.passwordInput, password);
    await this.uiActions.fillText(this.registerObj.firstNameInput, firstName);
    await this.uiActions.fillText(this.registerObj.lastNameInput, lastName);
    await this.uiActions.fillText(this.registerObj.addressInput, address);
    await this.uiActions.selectDropdown(this.registerObj.countryDropdown, country);
    await this.uiActions.fillText(this.registerObj.stateInput, state);
    await this.uiActions.fillText(this.registerObj.mobileInput, mobileNumber);
    await this.uiActions.fillText(this.registerObj.cityInput, city);
    await this.uiActions.fillText(this.registerObj.zipCodeInput, zip);
    await this.uiActions.click(this.registerObj.createAccountButton);
    await this.uiActions.waitForElement(this.registerObj.accountCreated);
    await this.verify.assertTextIsEqual(this.registerObj.accountCreated, 'Account Created!');
  }

  async loginUser(email: string, password: string): Promise<void> {
    await this.page.goto('https://www.automationexercise.com/login', { waitUntil: 'domcontentloaded' });
    await this.uiActions.fillText(this.loginObj.emailInput, email);
    await this.uiActions.fillText(this.loginObj.passwordInput, password);
    await this.uiActions.click(this.loginObj.loginButton);
    await expect(this.page).toHaveURL('https://www.automationexercise.com/');
  }

  async deleteUser(email: string, password: string): Promise<void> {
    await this.loginUser(email, password);
    await this.uiActions.click(this.homePage.deleteAccountButton);
  }

  async invalidLogin(email: string, password: string): Promise<void> {
    await this.page.goto('https://www.automationexercise.com/login', { waitUntil: 'domcontentloaded' });
    await this.uiActions.fillText(this.loginObj.emailInput, email);
    await this.uiActions.fillText(this.loginObj.passwordInput, password);
    await this.uiActions.click(this.loginObj.loginButton);
    await expect(this.page).toHaveURL('https://www.automationexercise.com/login');

  }

async addItemToCart(productName: string): Promise<void> {
    await this.page.goto('https://www.automationexercise.com/products', { waitUntil: 'domcontentloaded' });
    await this.page.waitForURL('https://www.automationexercise.com/products');
    await this.uiActions.fillText(this.productObj.searchInput, productName);
    await this.uiActions.click(this.productObj.searchButton);
    await this.uiActions.click(this.productObj.addProductButton);
    await this.uiActions.click(this.productObj.addToCartButton);
    await this.uiActions.click(this.productObj.continueShoppingButton);
    await this.uiActions.click(this.homePage.cartButton);
    await this.uiActions.waitForElement(this.cartObj.productContent);
    await this.verify.assertTextContent(this.cartObj.productContent, 'Men Tshirt');
    await this.verify.assertTextContent(this.cartObj.itemPrice, '400');
    await this.verify.assertTextContent(this.cartObj.totalAmount, '400');
    await this.verify.assertTextContent(this.cartObj.itemQuantity, '1');
  }

  
}
