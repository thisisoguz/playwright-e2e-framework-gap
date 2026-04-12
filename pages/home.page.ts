import { expect, Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly womenCategory: Locator;

  constructor(page: Page) {
    this.page = page;
    this.womenCategory = page.getByRole("navigation").getByRole("link", {name: "Kadın", exact: true});
  }

  async navigate() {
    await this.page.goto("https://gap.com.tr/", { waitUntil: "domcontentloaded" });
  }    

  async clickWomenCategory(): Promise<void> {
    await expect(this.womenCategory).toBeVisible();
    await this.womenCategory.highlight();
    await this.womenCategory.click();

    if (/\/kadin\/?$/.test(this.page.url())) {
      const firstWomenListingLink = this.page.locator('a[href^="/kadin-"]').first();
      await expect(firstWomenListingLink).toBeVisible();
      await firstWomenListingLink.highlight();
      await firstWomenListingLink.click();
    }
  }
}