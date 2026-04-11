import { expect, Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly linkWomenCategory: Locator;

  constructor(page: Page) {
    this.page = page;
    this.linkWomenCategory = page.locator('a[href="/kadin/"]');
  }

  async navigate() {
    await this.page.goto("https://gap.com.tr/", { waitUntil: "domcontentloaded" });
  }    

  async clickWomenCategory(): Promise<void> {
    await expect(this.linkWomenCategory).toBeVisible();
    await this.linkWomenCategory.highlight();
    await this.linkWomenCategory.click();
  }

}