import { test, expect } from "@playwright/test";
import { HeaderComponent } from "../../components/header.component";
import { cookieBannerComponent } from "../../components/cookie-banner.component";
import { LoginPage } from "../../pages/login.page";

test("Login via phone number displays OTP field", async ({ page }) => {
  const header = new HeaderComponent(page);
  const cookieBanner = new cookieBannerComponent(page);
  const loginPage = new LoginPage(page);

  await page.goto("https://gap.com.tr/");
  await cookieBanner.acceptIfVisible();
  await header.clickPersonLogo();
  await expect(page).toHaveURL("https://gap.com.tr/users/auth/?next=/account/");

  await page.mouse.click(20, 20); // Click outside to close any potential pop-ups 

  await loginPage.enterPhoneNumber("5555555555");
  
  await loginPage.clickContinue();
  await expect(loginPage.otpText).toBeVisible();
});
