exports.Dashboard = class Dashboard {
  constructor(page) {
    this.page = page
    this.searchBar =  page.locator('[formcontrolname="searchText"]')
    this.searchIcon = page.locator('.fa-search')
    this.searchItem = page.locator('.sl-item')
    this.filterIcon = page.locator('.sb-filter')
    this.filterPopup = page.locator('.filter-popup')
    this.notificationIcon = page.locator('.fa-bell')
    this.notificationTitle = page.locator('.dd-title', { hasText: 'Notications' })
    this.siteModalIcon = page.locator('.hw-u-edit')
    this.dialogTitle = page.locator('.mat-dialog-title')
    this.binTab = page.locator('.ct-item', { hasText: 'Bin' })
    this.favoritesTab = page.locator('.ct-item', { hasText: 'Favorites' })
  }

  async typeOnSearchBar (text) {
    await this.searchBar.fill(text)
  }
  async clickSearchIcon () {
    await this.searchIcon.click()
  }
  async clickFilter () {
    await this.filterIcon.click()
  }
  async clickNotificationIcon () {
    await this.notificationIcon.click()
  }

  async clickSiteModalIcon () {
    await this.siteModalIcon.click
  }

  async clickBinTab () {
    await this.binTab.click()
  }

  async clickFavoritesTab () {
    await this.favoritesTab.click()
  }
}
