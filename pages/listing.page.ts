import {expect, Locator, Page} from '@playwright/test';

export class ListingPage {
  readonly page: Page;
  readonly ProductCard: Locator;

  constructor(page: Page) {
    this.page = page;
    this.ProductCard = page.locator('.product-item').filter({ has: page.locator('a[href]') });
  }
  
  async verifyWomenListingOpened(): Promise<void> {
    await expect(this.page).toHaveURL(/\/kadin-[^/]+\/?$/);
  }
  
  async verifyAtLeastOneProductIsDisplayed(): Promise<void> {
    await expect(this.ProductCard.first()).toBeVisible();
    const productCount = await this.ProductCard.count();
    expect(productCount).toBeGreaterThan(0);
  }

  async clickFirstProduct(): Promise<void> {
    await expect(this.ProductCard.first()).toBeVisible();
    await this.ProductCard.first().highlight();
    await this.ProductCard.first().click();
  }
}