import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  async login(username: string, password: string) {
    await this.page.locator('input[name="username"]').fill(username);
    await this.page.locator('input[name="password"]').fill(password);
    await this.page.locator('button[type="submit"]').click();
    await this.page.waitForLoadState('networkidle');
  }

  async logout() {
    await this.page.locator('p.oxd-userdropdown-name').click();
    await this.page.locator('a.oxd-userdropdown-link').last().waitFor();
    await this.page.locator('a.oxd-userdropdown-link').last().click();
  }
  
}


