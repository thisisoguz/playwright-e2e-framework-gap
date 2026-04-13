import {expect, Locator, Page} from '@playwright/test';

export class ListingPage {
  readonly page: Page;
  readonly productCard: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productCard = page.locator('.product-item').filter({ has: page.locator('a[href]') });
  }
  
  async verifyWomenListingOpened(): Promise<void> {
    await expect(this.page).toHaveURL(/\/kadin-[^/]+\/?$/);
  }
  
  async verifyAtLeastOneProductIsDisplayed(): Promise<void> {
    await expect(this.productCard.first()).toBeVisible();
    const productCount = await this.productCard.count();
    expect(productCount).toBeGreaterThan(0);
  }

  async clickFirstProduct(): Promise<void> {
    await expect(this.productCard.first()).toBeVisible();
    await this.productCard.first().highlight();
    await this.productCard.first().click();
  }
}