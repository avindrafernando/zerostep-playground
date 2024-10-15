import { test, expect } from "@playwright/test";
import { ai } from "@zerostep/playwright";

test.beforeEach(async ({ page }) => {
  await page.goto("https://admin-dashboard-demo-umber.vercel.app");
});

test.describe("Admin Dashboard Demo", () => {
  test("should display the admin dashboard", async ({ page }) => {
    const aiArgs = { page, test };
    // Logo
    const logo = await ai("get the logo", aiArgs);
    await expect(logo).toEqual("Lorem Picsum Corp");

    // Users Header
    const usersHeader = await ai(
      "What is the text of the heading on the users page?",
      aiArgs
    );
    await expect(usersHeader).toEqual("Users");

    // Search
    const hasSearch = await ai("Is there a search bar?", aiArgs);
    await expect(hasSearch).toEqual(true);

    const searchPlaceholder = await ai(
      "What is the placeholder of the search bar?",
      aiArgs
    );
    await expect(searchPlaceholder).toEqual("Search users...");

    // Users Table
    const hasUsersTable = await ai("Is there a table?", aiArgs);
    await expect(hasUsersTable).toEqual(true);

    const usersTableHeaders = await ai(
      "What are the headers of the users table? Return the headers as comma separated values.",
      aiArgs
    );
    await expect(usersTableHeaders).toEqual("Name, Email, Username");
  });
});
