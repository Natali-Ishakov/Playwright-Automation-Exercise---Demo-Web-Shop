import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { uiActions } from '../utils/uiActions';
import {UserFlows} from '../workFlows/userFlows';

test.describe('Automation Exercise - Web Tests', ()=>{

  test.beforeEach(async ({page})=>{
    await page.goto('https://www.automationexercise.com/');
    await expect(page).toHaveTitle('Automation Exercise');
    await expect(page).toHaveURL('https://www.automationexercise.com/');
  });

  test('Verify home page elements are visible', async ({ page }) => {
    const homePageObj = new HomePage(page);
    const actions = new uiActions(page);
    await actions.waitForElement(homePageObj.logo);
    await actions.waitForElement(homePageObj.navbar);
    await actions.waitForElement(homePageObj.contactUsButton);
  });

  test('Register a new user', async ({page})=>{
    const flows = new UserFlows(page);
    await flows.registerUser('natali', 'natali@gmail.com', 'a1234', 'natali', 'test',
       'Tel Aviv', 'Israel', 'Tel Aviv','Tel Aviv', '5555555','0502957896');
  })

  test('Login User', async ({page})=>{
    const flows = new UserFlows(page);
    await flows.loginUser('natali@gmail.com', 'a1234');
  })

  test('Login User with incorrect email and password', async ({page})=>{
    const flows = new UserFlows(page);
    await flows.invalidLogin('natal@gmail.com', 'b1234');
  })

  test('delete account', async ({page})=>{
    const flows = new UserFlows(page);
    await flows.deleteUser('natali@gmail.com', 'a1234');
  })

  test('Add product to cart', async ({ page }) => {
    const flows = new UserFlows(page);
    await flows.addItemToCart('Men Tshirt');
  });
  
})