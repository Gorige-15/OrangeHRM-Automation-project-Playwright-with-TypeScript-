import { Page, expect } from '@playwright/test';

export class SkillPage {
  constructor(private page: Page) {}

  async addSkill(name: string) {
    await this.page.locator('text=Qualifications').click();
    await this.page.locator('text=Skills').click();
    await this.page.locator('button:has-text("Add")').click();
    await this.page.locator('input.oxd-input.oxd-input--active').last().fill(name);
    await this.page.locator('button:has-text("Save")').click();

  }

  async deleteSkill(name: string) {
    await this.page.locator('div.oxd-table').waitFor({ state: 'visible' });
    const row = this.page.locator(`div.oxd-table-row:has-text("${name}")`);
    await row.waitFor({ state: 'visible' });
    await row.locator('i.bi-trash').click();
    await this.page.locator('button:has-text("Yes, Delete")').click();
    await expect(this.page.locator(`div.oxd-table-card:has-text("${name}")`)).toHaveCount(0);
  }
}
