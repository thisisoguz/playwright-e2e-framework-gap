import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/home.page";
import { ListingPage } from "../../pages/listing.page";
import { cookieBannerComponent } from "../../components/cookie-banner.component";

test.describe("Listing - Product Discovery", () => {

  test("SMK-003 @smoke listing page renders and allows sorting", async ({ page }) => {
    const homePage = new HomePage(page);
    const listingPage = new ListingPage(page);
    const cookieBanner = new cookieBannerComponent(page);

    await homePage.navigate();
    await cookieBanner.acceptIfVisible();
    await homePage.clickWomenCategory();
    await listingPage.verifyWomenListingOpened();
    await listingPage.verifyAtLeastOneProductIsDisplayed();

    const sortDropdown = page.locator(".js-sorter button");
    await expect(sortDropdown).toBeVisible();
    await expect(sortDropdown).toHaveText(/Önerilen/i);
    await sortDropdown.highlight();
    await sortDropdown.click();

    const dropdownList = page.locator(".pz-select-w__list");
    await expect(dropdownList).toBeVisible();

    const priceAscending = page.locator(".pz-select-w__list li", {
      hasText: "Artan Fiyat",
    }); await expect(priceAscending).toBeVisible();
    await priceAscending.click();

    await expect(listingPage.productCard.first()).toBeVisible();
  });
});
