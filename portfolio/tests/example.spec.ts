import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright';

test('screenshot homepage', async ({ page }) => {
  await page.goto('http://localhost:8000/');
  await page.waitForSelector('role=listitem');
  await percySnapshot(page, 'homepage');
});

test('first article page', async ({ page }) => {
  await page.goto('http://localhost:8000/blog/getting-started/');
  await page.waitForSelector('text=Add Post');
  await percySnapshot(page, 'article 1');
});
