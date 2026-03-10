import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { JobCategoryPage } from '../pages/JobCategoryPage';
import { LocationPage } from '../pages/LocationPage';
import { SkillPage } from '../pages/SkillPage';
import { Utils } from '../utils/Utils';
import testData from '../data/testData.json';


test('skillset automation', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  const loginPage = new LoginPage(page);
  const jobCategoryPage = new JobCategoryPage(page);
  const locationPage = new LocationPage(page);
  const skillPage = new SkillPage(page);
  const utils = new Utils(page);

  await loginPage.goto();
  await loginPage.login(testData.credentials.username, testData.credentials.password);

  await jobCategoryPage.addJobCategory(testData.jobCategory.name);
  await jobCategoryPage.deleteJobCategory(testData.jobCategory.name);

  testData.location.phone = utils.generateRandomPhoneNumber();
  await locationPage.addLocation(testData.location);
  await locationPage.deleteLocation(testData.location.name);

  await skillPage.addSkill(testData.skill.name);
  await skillPage.deleteSkill(testData.skill.name);

  await loginPage.logout();
  await browser.close();
});
