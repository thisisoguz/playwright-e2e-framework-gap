import { Locator, Page, expect } from "@playwright/test";

export class LoginPage {
	readonly page: Page;
	readonly loginForm: Locator;
	readonly phoneInput: Locator;
	readonly continueButton: Locator;
	readonly otpText: Locator;

	constructor(page: Page) { 
		this.page = page;
		this.loginForm = page.locator("#LoginForm");
		this.phoneInput = this.loginForm.locator("input[name='phone']");
		this.continueButton = this.loginForm.locator('pz-button[type="submit"]').first();
		this.otpText = page.getByRole("heading", { name: "SMS ONAY KODU" }	);
	}

	async navigate() {
		await this.page.goto("https://gap.com.tr/");
	}	

	async enterPhoneNumber(phoneNumber: string) {
		await expect(this.phoneInput).toBeVisible();
		await expect(this.phoneInput).toBeEditable();
		await this.phoneInput.focus();
		await this.phoneInput.fill(phoneNumber);
	}

	async clickContinue() {
		console.log("clickContinue içine girdi");	
		await this.continueButton.highlight();
		console.log("highlight işlemi tamamlandı");
		await this.continueButton.click({force: true});
		console.log("click işlemi tamamlandı");
	}
}
