import { Page ,expect} from '@playwright/test';

export class JobCategoryPage {
  constructor(private page: Page) {}

  async addJobCategory(name: string) {
    await this.page.locator('.oxd-main-menu-item--name').first().click();
    await this.page.locator('.bi-chevron-down').nth(1).click();
    await this.page.locator('text=Job Categories').click();
    await this.page.locator('button:has-text("Add")').click();
    await this.page.locator('input.oxd-input.oxd-input--active').last().fill(name);
    await this.page.locator('button:has-text("Save")').click();
  }
   
  async deleteJobCategory(name: string) {
    await this.page.locator('div.oxd-table').waitFor({ state: 'visible' });
    const row = this.page.locator(`div.oxd-table-row:has-text("${name}")`);
    await row.waitFor({ state: 'visible' });
    await row.locator('i.bi-trash').click();
    await this.page.locator('button:has-text("Yes, Delete")').click();
  }
}



