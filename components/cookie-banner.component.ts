import { Page, Locator } from "@playwright/test";

export class cookieBannerComponent {
  readonly acceptButton: Locator;

  constructor(page: Page) {
    this.acceptButton = page.getByText("Kabul Et", { exact: false });
  }

  async acceptIfVisible() {
    try {
      await this.acceptButton.waitFor({ state: "visible", timeout: 5000 });
      await this.acceptButton.highlight();
      await this.acceptButton.click();
    } catch (error) {
      console.log("Cookie banner is not visible.");
    }
  }
} 