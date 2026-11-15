import { Page, Locator } from "@playwright/test";

export class AddtoCartPage {
    readonly page: Page;
    readonly TypeProd : Locator;
    readonly SearchBtn: Locator;
    readonly AddcartBtn: Locator;


    constructor(page: Page) {
        this.page = page;
        this.TypeProd = page.locator('#twotabsearchtextbox')
        this.SearchBtn = page.locator('#nav-search-submit-button');
        this.AddcartBtn = page.getByRole('button', {name: 'Add to cart'}).first();

    }

    async EntPrd(data: string) {
        await this.TypeProd.fill(data);
    }
    async CLkSearch() {
        await this.SearchBtn.click();
    }
    async ClkCart() {
        await this.AddcartBtn.click();
    }

    async Addcart(data: string) {
        await this.EntPrd(data);
        await this.CLkSearch();
        await this.ClkCart();
    }


}