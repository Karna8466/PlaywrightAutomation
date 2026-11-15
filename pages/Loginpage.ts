import {Page, Locator} from '@playwright/test';
export class Loginpage {

    readonly page: Page;
    //locators
    readonly SignInButton : Locator;
    readonly Email: Locator;
    readonly CBtn: Locator;
    readonly password: Locator;
    //readonly Mauth: Locator;
    readonly SubmitBtn: Locator;


    constructor(page: Page) {
        this.page = page
        this.SignInButton = page.getByText('Hello, sign in');
        this.Email = page.getByLabel('Enter mobile number or email');
        this.CBtn = page.getByRole('button', {name: 'Continue'});
        this.password = page.getByLabel('Password');
       // this.Mauth = page.getByRole('button', {name: 'Cancel'});
        this.SubmitBtn = page.locator('#signInSubmit');
    }
    async NavToLogin() {
        await this.page.goto('https://www.amazon.in/');

    }
    async ClkSignIn() {
        await this.SignInButton.click();
    }
    async Entemail(email: string) {
        await this.Email.fill(email);
    }
    async Ectn() {
        await this.CBtn.click();

    }
    async Epassword(Pass: string) {
        await this.password.fill(Pass);
    }
    // async Auth() {
    //     await this.Mauth.click();
    // }
    async SbtBtn() {
        await this.SubmitBtn.click();
    }

    //Complete Login flow
    async Login(email: string, Pass: string) {
       await this.ClkSignIn();
       await this.Entemail(email);
       await this.Ectn();
       await this.Epassword(Pass);
       //await this.Auth();
       await this.SbtBtn();
       

    }


}
