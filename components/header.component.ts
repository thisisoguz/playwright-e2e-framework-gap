import { Page, Locator } from "@playwright/test";

export class HeaderComponent {
	readonly page: Page;
	readonly personLogo: Locator;

	constructor(page: Page) {
		this.page = page;
		this.personLogo = page.getByRole("link", { name: "Profil" });
	}

	async clickPersonLogo() {
		await this.personLogo.click();
	}
}