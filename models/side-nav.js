export class SideNav {
  constructor(page) {
    this.page = page
    this.optionAnalytics = page.locator('.icon-analytics')
    this.optionConverter = page.locator('.icon-pro-management')
    this.optionAdmin = page.locator('.icon-administration')
  }

  async clickOptionAnalytics () {
    await this.optionAnalytics.click()
  }

  async clickOptionConverter () {
    await this.optionConverter.click()
  }

  async clickOptionAdmin () {
    await this.optionAdmin.click()
  }
}
