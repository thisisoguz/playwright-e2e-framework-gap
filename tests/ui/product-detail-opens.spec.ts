import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/home.page";
import { ListingPage } from "../../pages/listing.page";
import { cookieBannerComponent } from "../../components/cookie-banner.component";

test.describe("Product Detail - Product Evaluation", () => {
  test("SMK-005 @smoke user can open product detail page from listing", async ({ page }) => {
    const homePage = new HomePage(page);
    const listingPage = new ListingPage(page);
    const cookieBanner = new cookieBannerComponent(page);

    await homePage.navigate();
    await cookieBanner.acceptIfVisible();
    await homePage.clickWomenCategory();

    await listingPage.verifyWomenListingOpened();
    await listingPage.verifyAtLeastOneProductIsDisplayed();

    const listingUrl = page.url();

    await listingPage.clickFirstProduct();
    await expect(page).not.toHaveURL(listingUrl);

    const productTitle = page.locator("h1");
    await expect(productTitle).toBeVisible;
    await expect(productTitle).not.toHaveText("");
  });
});
