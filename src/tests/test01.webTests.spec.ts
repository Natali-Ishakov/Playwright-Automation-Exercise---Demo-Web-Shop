import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { uiActions } from '../utils/uiActions';
import {UserFlows} from '../workFlows/userFlows';

test.describe('Automation Exercise - Web Tests', ()=>{

  test.beforeEach(async ({page})=>{
    await page.goto('https://demowebshop.tricentis.com/');
    await expect(page).toHaveTitle('Demo Web Shop');
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/');
  });

  test('Verify home page elements are visible', async ({ page }) => {
    const homePageObj = new HomePage(page);
    const actions = new uiActions(page);
    await actions.waitForElement(homePageObj.headerLinks);
    await actions.waitForElement(homePageObj.logo);
    await actions.waitForElement(homePageObj.searchInput);
    await actions.waitForElement(homePageObj.searchButton);
    await actions.waitForElement(homePageObj.registerButton);
    await actions.waitForElement(homePageObj.shoppingCart);
    
  });

  test('Register a new user and add product to cart', async ({page})=>{
    const flows = new UserFlows(page);
    const userName = crypto.randomUUID();
    await flows.registerUser(userName, 'doe', `${userName}@gmail.com`, '123456', '123456');
    await flows.addItemToCart();
  })  
})