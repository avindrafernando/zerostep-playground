import { test, expect } from "../../fixture";

test.beforeEach(async ({ page }) => {
  await page.goto("https://admin-dashboard-demo-umber.vercel.app");
});

test.describe("Admin Dashboard Demo", () => {
  test("should display the admin dashboard", async ({ ai }) => {
    // Logo
    const logo = await ai("get the logo");
    await expect(logo).toEqual("Lorem Picsum Corp");

    // Users Header
    const usersHeader = await ai(
      "What is the text of the heading on the users page?"
    );
    await expect(usersHeader).toEqual("Users");

    // Search
    const hasSearch = await ai("Is there a search bar?");
    await expect(hasSearch).toEqual(true);

    const searchPlaceholder = await ai(
      "What is the placeholder of the search bar?"
    );
    await expect(searchPlaceholder).toEqual("Search users...");

    // Users Table
    const hasUsersTable = await ai("Is there a table?");
    await expect(hasUsersTable).toEqual(true);

    const usersTableHeaders = await ai(
      "What are the headers of the users table? Return the headers as comma separated values."
    );
    await expect(usersTableHeaders).toEqual("Name, Email, Username");
  });

  test("should edit the username of a user when the edit button is clicked and the form is filled out", async ({
    ai,
  }) => {
    await ai("Click the edit button of the Luigi row");

    await ai("Fill out the username field with Luigi789");

    await ai("Click the save changes button");

    await ai("Click the close button");

    const luigiRowUsername = await ai("get the username of the luigi row");
    await expect(luigiRowUsername).toEqual("Luigi789");
  });
});
