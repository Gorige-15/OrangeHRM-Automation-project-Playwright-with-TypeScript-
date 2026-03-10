import { Page } from '@playwright/test';

export class LocationPage {
  constructor(private page: Page) {}

  async addLocation(location: any) {
    await this.page.getByText('Organization').click();
    await this.page.getByText('Locations').click();
    await this.page.getByRole('button', { name: 'Add' }).click();
    await this.page.locator('div.orangehrm-card-container').waitFor({ state: 'visible' });

    await this.page.getByPlaceholder('Type here ...').nth(0).fill(location.name);
    await this.page.getByPlaceholder('Type here ...').nth(1).fill(location.city);
    await this.page.getByPlaceholder('Type here ...').nth(2).fill(location.state);
    await this.page.getByPlaceholder('Type here ...').nth(3).fill(location.zip);

    await this.page.locator('div.oxd-select-text').click();
    await this.page.getByRole('option', { name: location.country, exact: true }).click();

    await this.page.getByPlaceholder('Type here ...').nth(4).fill(location.phone);
    await this.page.getByPlaceholder('Type here ...').nth(5).fill(location.fax);
    await this.page.getByPlaceholder('Type here ...').nth(6).fill(location.address);
    await this.page.getByPlaceholder('Type here ...').nth(7).fill(location.notes);

    await this.page.locator('button:has-text("Save")').click();
  }

  async deleteLocation(name: string) {
    await this.page.locator('div.oxd-table').waitFor({ state: 'visible' });
    const row = this.page.locator(`div.oxd-table-row:has-text("${name}")`);
    await row.waitFor({ state: 'visible' });
    await row.locator('i.bi-trash').click();
    await this.page.locator('button:has-text("Yes, Delete")').click();
  }
}
