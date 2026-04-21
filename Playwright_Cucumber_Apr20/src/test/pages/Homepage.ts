import { expect, Locator, Page } from "@playwright/test";

export class Homepage {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async verifyHomepageTitle(title: string) {
    await expect(this.page).toHaveTitle(title)
  }


}