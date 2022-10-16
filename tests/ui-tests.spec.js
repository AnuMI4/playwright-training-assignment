import { test, expect } from '@playwright/test'
const { Dashboard } = require('../models/dashboard')
const { SideNav } = require('../models/side-nav')
let dashboard
let sideNav
test.describe('UI Tests', () => {
  test.beforeEach( async ({ page }) => {
    dashboard = new Dashboard(page)
    sideNav = new SideNav(page)
    await page.goto('/')
  })

  test('should navigate to landing page', async ({ page }) => {
    await expect(page).toHaveURL('/execution/dashboard')
  })

  test('should be able to search for a procedure', async () => {
    dashboard.typeOnSearchBar('test')
    dashboard.clickSearchIcon()
    await expect(dashboard.searchItem).toBeVisible()
  })

  test('should open filter upon clicking on filter button', async () => {
    dashboard.clickFilter()
    await expect(dashboard.filterPopup).toBeVisible()
  })

  test('should open notifications upon clicking bell icon', async () => {
    dashboard.clickNotificationIcon()
    expect(dashboard.notificationTitle).toBeVisible()
  })

  test('should open site modal upon clicking edit icon', async () => {
    dashboard.clickSiteModalIcon()
    await expect(dashboard.dialogTitle).toHaveText('SELECT CURRENT SITE AND FUNCTIONAL AREA')
  })

  test('should navigate to bin page after clicking bin', async({ page }) => {
    dashboard.clickBinTab()
    await expect(page).toHaveURL('/execution/bin-list')
  })

  test('should navigate to favorite page after clicking favorite', async({ page }) => {
    dashboard.clickFavoritesTab()
    await expect(page).toHaveURL('/execution/favorites')
  })

  test('should navigate to analytics page after clicking analytics', async({ page }) => {
    sideNav.clickOptionAnalytics()
    await expect(page).toHaveURL('/analytics/progress-report')
  })

  test('should navigate to converter page after clicking converter', async({ page }) => {
    sideNav.clickOptionConverter()
    await expect(page).toHaveURL('/converter')
  })

  test('should navigate to admin page after clicking admin', async({ page }) => {
    sideNav.clickOptionAdmin()
    await expect(page).toHaveURL('/admin/permissions')
  })
})