import test from "@playwright/test";
import { HomePage } from "../../pages/home.page";
import { ListingPage } from "../../pages/listing.page";
import { cookieBannerComponent } from "../../components/cookie-banner.component";

test.describe("Main Category Opens Listing", () => {
  test("SMK-002 @smoke user can reach a listing page from a main category", async ({ page }) => {
    const homePage = new HomePage(page);
    const listingPage = new ListingPage(page);
    const cookieBanner = new cookieBannerComponent(page);

    
    await test.step("Navigate to homepage and accept cookies", async () => {
      await homePage.navigate();
      await cookieBanner.acceptIfVisible();
    });

    await test.step("Click women main category", async () => {
      await homePage.clickWomenCategory();
    });

    await test.step("Verify women listing page is opened", async () => {
      await listingPage.verifyWomenListingOpened();
    });

    await test.step("Verify at least one product is displayed in listing", async () => {
      await listingPage.verifyAtLeastOneProductIsDisplayed();
    });
  });
});
