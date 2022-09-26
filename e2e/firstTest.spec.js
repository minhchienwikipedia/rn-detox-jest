// For more info on how to write Detox tests, see the official docs:
// https://github.com/wix/Detox/blob/master/docs/README.md

const { reloadApp } = require("./reload")

describe("Example", () => {
  beforeEach(async () => {
    await reloadApp()
  })

  it("check home screen", async () => {
    await expect(element(by.id("HomeScreen"))).toBeVisible()
    await element(by.id("add-button")).tap()
    await expect(element(by.id("AddItemScreen"))).toBeVisible()
  })

  it("check add item", async () => {
    await element(by.id("inputTitle")).typeText("Auto test 1")
    await element(by.id("inputContent")).typeText("Auto description 1")
    await element(by.id("btnConfirm")).tap()
    await expect(element(by.id("HomeScreen"))).toBeVisible()
  })

  it("check delete item", async () => {
    await element(by.id("todoList")).tap({ x: 0, y: 0 })
    await element(by.id("btnCancel")).tap()
    await element(by.id("todoList")).tap({ x: 0, y: 0 })
    await element(by.id("btnDelete")).tap()
    await expect(element(by.id("HomeScreen"))).toBeVisible()
  })
})
