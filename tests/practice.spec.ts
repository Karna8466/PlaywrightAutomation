import {test, expect} from '@playwright/test';
test('practice automation', async({page})=> {
    await page.goto("https://practicetestautomation.com/practice-test-login/");

    await page.getByLabel('Username').fill('student');
    await page.getByLabel('Password').fill('Password123');
    await page.getByRole('button', {name: 'Submit'}).click();
    await page.getByText('Congratulations student. You successfully logged in!').isVisible();
});

test('Verify logout', async({page}) => {
     await page.goto("https://practicetestautomation.com/practice-test-login/");

    await page.getByLabel('Username').fill('student');
    await page.getByLabel('Password').fill('Password123');
    await page.getByRole('button', {name: 'Submit'}).click();
    await page.getByText('Log out').isVisible();
    await page.getByText('Log out').click();


});


        