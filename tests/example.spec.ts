import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Swag Labs");
});

//test('get started link', async ({ page }) => {
  //await page.goto('https://www.saucedemo.com/');

test('get started link', {tag: ['@smoke']}, async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
 
  await page.getByPlaceholder('Username').fill('standard_user');

  await page.getByRole('textbox', {name: 'password'}).fill('secret_sauce');

  await page.locator('xpath = /html/body/div/div/div[2]/div[1]/div/div/form/input').click();

  await page.waitForTimeout(1000);

  await expect(page.locator('.app_logo', { hasText: 'Swag Labs' })).toBeVisible();

  await page.waitForTimeout(5000);

  });

  
test.only('checkout', { tag: ['@smoke'] }, async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');

  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/inventory/);

  await page.locator('#add-to-cart-sauce-labs-backpack').click();
  await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();

  await page.locator('#add-to-cart-sauce-labs-bolt-t-shirt').click();
  await expect(page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]')).toBeVisible();
 
  await expect(page.locator('.shopping_cart_badge')).toHaveText('2');

  await page.locator('.shopping_cart_link').click();
  await expect(page.locator('.title')).toHaveText('Your Cart');
  
  await page.locator('#checkout').click();
  await expect(page.locator('.title')).toHaveText('Checkout: Your Information');

  await page.getByPlaceholder('First Name').fill('uncle');
  await page.getByPlaceholder('Last Name').fill('vic');
  await page.getByPlaceholder('Zip/Postal Code').fill('400317');

  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.locator('.title')).toHaveText('Checkout: Overview');

  await page.getByRole('button', { name: 'Finish' }).click();
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');

  await page.getByRole('button', { name: 'Back Home' }).click();
  await expect(page).toHaveURL(/inventory/);
});

  // Click the get started link.
  //await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
//});
