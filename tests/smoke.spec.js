const { test, expect } = require("@playwright/test");

test("core skin-routine flow works without browser errors", async ({ page }) => {
  const errors = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));

  await page.goto("/");
  await expect(page).toHaveTitle(/肤序/);
  await expect(page.getByRole("heading", { name: "今日护肤", exact: true })).toBeVisible();

  await page.locator('[data-nav="vanity"]').first().click();
  await expect(page.getByRole("heading", { name: /化妆台不是仓库/ })).toBeVisible();

  await page.locator('[data-action="open-add-product"]').first().click();
  await page.locator('input[name="brand"]').fill("测试品牌");
  await page.locator('input[name="name"]').fill("测试烟酰胺精华");
  await page.locator('select[name="category"]').selectOption("精华");
  await page.locator('input[name="price"]').fill("199");
  await page
    .locator('textarea[name="ingredients"]')
    .fill("水、烟酰胺、甘油、透明质酸钠、泛醇");
  await page.getByRole("button", { name: "保存并检查流程" }).click();

  await expect(page.getByText("测试烟酰胺精华", { exact: true }).first()).toBeVisible();
  await page.getByLabel("查看 测试烟酰胺精华").focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("#productDetailTitle")).toHaveText("测试烟酰胺精华");
  await expect(page.locator(".ingredient-list")).toContainText("烟酰胺");
  await page.getByRole("button", { name: "完成查看" }).click();

  await page.locator('[data-nav="today"]').first().click();
  await page.locator('[data-action="open-checkin"]').first().click();
  await page.locator('textarea[name="note"]').fill("下午额头出油，整体状态稳定");
  await page.getByRole("button", { name: /保存今日记录|更新今日记录/ }).click();
  await expect(page.locator("#toast")).toContainText("已保存");

  await page.locator('[data-nav="analysis"]').first().click();
  await expect(page.getByRole("heading", { name: /把整张化妆台/ })).toBeVisible();
  await expect(page.getByLabel(/化妆台组合结构分 \d+ 分/)).toBeVisible();
  await page.getByRole("tab", { name: /分析工具/ }).click();
  await expect(page.getByRole("heading", { name: /把分析结果/ })).toBeVisible();
  await expect(page.locator(".tool-card")).toHaveCount(6);
  await page.getByRole("button", { name: "查看重叠结果" }).click();
  await expect(page.locator("#toolModalTitle")).toHaveText("成分重叠扫描");
  await page.locator(".modal-footer .secondary-button").click();
  await page.getByRole("button", { name: "查看成本排序" }).click();
  await expect(page.locator("#toolModalTitle")).toHaveText("使用成本排序");
  await page.locator(".modal-footer .secondary-button").click();
  for (const [buttonName, modalTitle] of [
    ["打开本周排期", "活性成分日历"],
    ["查看优先顺序", "产品优先使用顺序"],
    ["查看复杂度", "流程复杂度检查"],
  ]) {
    await page.getByRole("button", { name: buttonName }).click();
    await expect(page.locator("#toolModalTitle")).toHaveText(modalTitle);
    await page.locator(".modal-footer .secondary-button").click();
  }

  await page.getByRole("button", { name: "打开观察报告" }).click();
  await expect(page.getByRole("heading", { name: /把“感觉不错”/ })).toBeVisible();
  await expect(page.locator(".checkin-history")).toContainText("下午额头出油");

  expect(errors).toEqual([]);
});

test("mobile layout remains usable", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "今日护肤", exact: true })).toBeVisible();
  await expect(page.locator(".metric-strip")).toBeVisible();

  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
  );
  expect(overflow).toBe(false);

  for (const view of ["vanity", "analysis", "experiment", "today"]) {
    await page.locator(`.main-nav [data-nav="${view}"]`).click();
    await expect(page.locator(".view")).toBeVisible();
    if (view === "analysis") {
      await page.getByRole("tab", { name: /分析工具/ }).click();
      await expect(page.locator(".tool-card")).toHaveCount(6);
    }
    const viewOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
    );
    expect(viewOverflow, `${view} should not overflow horizontally`).toBe(false);
  }
});
