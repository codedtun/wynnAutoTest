import AxeBuilder from "@axe-core/playwright";
import { expect, Page, } from "@playwright/test";
import { CommonPage } from "../../base_fwk/common/CommonPage";
import { CommonScenario } from "../../base_fwk/common/CommonScenario";
import { locators } from "../DropDownPage/DropDownLocators";


export class DropDownPage extends CommonPage {

  constructor(public page: Page, readonly scenario: CommonScenario) {
    super(page, scenario);
  }

  async selectOption() {
    await this.page.locator(locators.dropDownOpt).click();
    await this.page.locator(locators.dropDownOpt).selectOption("Option 2");
  }

  async verifySelectedOption() {
    const text = await this.page.locator(locators.dropDownOpt)
    await expect(text).toBeVisible();
  }

}