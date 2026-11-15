
import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs'; 
import { Loginpage } from '../pages/Loginpage';
import { AddtoCartPage } from '../pages/AddtoCartPage';

// Load .env from project root
dotenv.config({
    path: path.resolve(process.cwd(), '.env')
});
console.log(process.cwd(), fs.existsSync('.env')); 

test('login to app', async ({ page }) => {

    const email = process.env.AMAZON_EMAIL;
    const password = process.env.AMAZON_PASSWORD;

    // Check environment variables
    console.log('Email loaded:', !!email);
    console.log('Password loaded:', !!password);

    if (!email || !password) {
        throw new Error('Email or Password is missing in .env');
    }

    const loginpage = new Loginpage(page);

    await loginpage.NavToLogin();

    await loginpage.Login(email, password);

    await page.getByText('Amazon.in Prime').isVisible();
    // await page.locator('#signInSubmit').click();
//    await page.locator('#twotabsearchtextbox').fill('iphone 17');
//    await page.locator('#nav-search-submit-button').click();
//    await page.getByRole('button', {name: 'Add to cart'}).first().click();
    const Cpage = new AddtoCartPage(page)
    await Cpage.Addcart("iphone 16");
    await page.getByText('Go to Cart').click();
    await page.getByRole('button', {name: 'Proceed to Buy'}).click();
    //await page.getByText('Cart').click();
    await expect(page.getByText('2-21/1 Plot No.7 Road No.7 Peerzadiguda, Kasedella bakery opposite HP petrol bunk boduppal, HYDERABAD, TELANGANA, 500092, India')).toBeVisible();
     
   // await expect(page.getByText('iPhone 17 256 GB: 15.93 cm (6.3″) Display with Promotion, A19 Chip, Center Stage Front Camera for Smarter Group Selfies, Improved Scratch Resistance, All-Day Battery Life; Black')).toBeVisible();
    




});




// import {test, expect} from'@playwright/test';
// import dotenv from 'dotenv';
// import { Loginpage } from '../pages/Loginpage';

// dotenv.config();

// test('login to app', async({page}) => {
//     const loginpage = new Loginpage(page);
//     await loginpage.NavToLogin();
//     await loginpage.Login(process.env.AMAZON_EMAIL!, process.env.AMAZON_PASSWORD!);
//     await expect(page.getByText('Amazon.in Prime')).toBeVisible();


// });
