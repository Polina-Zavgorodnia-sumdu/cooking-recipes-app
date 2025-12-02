import { test, expect } from '@playwright/test';

test('повний сценарій: перегляд → пошук → деталі', async ({ page }) => {
  await page.goto('/items');

  await expect(page.locator('app-item-card').first()).toBeVisible();

  await page.fill('input[placeholder="Пошук страви..."]', 'борщ');
  await expect(page.locator('app-item-card')).toHaveCount(1);

  await page.locator('app-item-card .details-link').click();
  await expect(page.locator('h2')).toContainText('Борщ');
});
