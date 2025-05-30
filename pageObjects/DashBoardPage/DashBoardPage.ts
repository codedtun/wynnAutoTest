import { expect, Page } from "@playwright/test";
import { CommonPage } from "../../base_fwk/common/CommonPage";
import { CommonScenario } from "../../base_fwk/common/CommonScenario";
import { locators } from "./DashBoardLocators";
import { testData } from "../../tests/testData";

export class DashBoardPage extends CommonPage {
    constructor(public page: Page, readonly scenario: CommonScenario) {
        super(page, scenario);
    }

    async visitPage() {
        await this.page.goto(testData.baseUrl);
    }

    async verifyPage() {
        await this.page.goto(testData.baseUrl);
        const heading = await this.page.getByText('Welcome to the-internet')
        await expect(heading).toBeVisible();
    }

    async clickDropdown() {
        await this.page.getByText('Dropdown').click();
    }

    async clickFileUpload() {
        await this.page.getByText('File Upload').click();
    }
}
