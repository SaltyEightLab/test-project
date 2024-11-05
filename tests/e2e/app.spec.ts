import { test, expect } from '@playwright/test';

test.describe('基本的なアプリケーションテスト', () => {
  test.beforeEach(async ({ page }) => {
    // 各テストの前にトップページに移動
    await page.goto('http://localhost:3000');
  });

  test('メインコンポーネントが表示される', async ({ page }) => {
    // お問い合わせフォームの確認
    const contactForm = await page.getByRole('heading', {
      name: 'お問い合わせフォーム',
    });
    await expect(contactForm).toBeVisible();
  });
});
