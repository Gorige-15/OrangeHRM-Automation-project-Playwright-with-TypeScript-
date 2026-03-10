import { Page } from '@playwright/test';

export class Utils {
  constructor(private page: Page) {}

  generateRandomPhoneNumber(): string {
    const prefix = "9";
    const randomDigits = Math.floor(100000000 + Math.random() * 900000000).toString();
    return prefix + randomDigits.substring(1);
  }
}
