// workFlows/UserFlows.ts
import { expect, Locator, Page } from '@playwright/test';
import { HomePage } from '../pages/HomePage'; 
import { uiActions } from '../utils/uiActions';
import { cartPage } from '../pages/cartPage';
import { registerPage } from '../pages/registerPage';
import { Verifications } from '../utils/verifications';
import { productPage } from '../pages/productPage';

export class UserFlows {
  private page: Page;
  private homePage: HomePage;
  private uiActions: uiActions;
  private registerObj: registerPage;
  private productObj: productPage;
  private cartObj: cartPage;
  private verify: Verifications;

  constructor(page: Page) {
    this.page = page;
    this.homePage = new HomePage(page);
    this.uiActions = new uiActions(page);
    this.registerObj = new registerPage(page);
    this.cartObj = new cartPage(page);
    this.verify = new Verifications(page);
    this.productObj = new productPage(page);
  }

  async registerUser(firstName: string, lastName: string, email: string, password: string, confirmPassword): Promise<void> {
    await this.uiActions.click(this.homePage.registerButton); 
    await this.uiActions.click(this.registerObj.genderMaleCheckbox);
    await this.uiActions.fillText(this.registerObj.firstnameInput, firstName);
    await this.uiActions.fillText(this.registerObj.lastnameInput, lastName);
    await this.uiActions.fillText(this.registerObj.emailInput, email);
    await this.uiActions.fillText(this.registerObj.passwordInput, password);
    await this.uiActions.fillText(this.registerObj.confirmPasswordInput, confirmPassword);
    await this.uiActions.click(this.registerObj.registerButton);
    await this.verify.assertInnerTextIsEqual(this.registerObj.messageSuccses, 'Your registration completed');
    await this.uiActions.click(this.registerObj.continueButton);
    await this.verify.assertTextIsEqual(this.homePage.accountMail, email);
  }


  async addItemToCart(): Promise<void> {
    await this.uiActions.click(this.homePage.digitalDownloads);

    const randomProduct = await this.getRandomProduct();
    const randomProductName = await randomProduct.locator('.product-title').innerText();
    const randomProductPrice = await randomProduct.locator('.price').innerText();
    const addToCart = randomProduct.getByRole('button', {name: 'Add to cart'});
    
    await this.uiActions.click(addToCart);
    await this.uiActions.waitForElement(this.productObj.notificationSuccess);
    await this.uiActions.click(this.homePage.shoppingCart);
    await this.verify.assertListSize(this.cartObj.cartList, 1);
    
    const cartItem = this.cartObj.cartList.first();
    const cartItemName = await cartItem.locator('.product-name');
    const cartItemPrice = await cartItem.locator('.product-unit-price');
    const cartItemSubtotal = await cartItem.locator('.product-subtotal');
    
    await this.verify.assertTextContent(cartItemName, randomProductName);
    await this.verify.assertTextContent(cartItemPrice, randomProductPrice);
    await this.verify.assertTextContent(cartItemSubtotal, randomProductPrice);
  }

  async getRandomProduct(): Promise<Locator> {
    const numberOfProducts = await this.productObj.productList.count();
    const randomProduct = Math.floor(Math.random() * numberOfProducts);
    return await this.productObj.productList.nth(randomProduct);
  }

}
