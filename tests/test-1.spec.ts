import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dorangehrmlogin%26oq%3Dorangehrmlogin%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCDY5MzNqMGoyqAIAsAIB%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3Dj_kRapelL9Su4-EPsLqZ6QM&q=EgQxzKTRGJDzx9AGIjBkYiRzMo62kN-ZlNuk4O1H2bEtyJxWH9K4tF7bv4SDoqRThWZI-DDH3ufGB82Pk9cyAVJaAUM');
});