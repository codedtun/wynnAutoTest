import { expect, Page } from "@playwright/test";
import { CommonPage } from "../../base_fwk/common/CommonPage";
import { CommonScenario } from "../../base_fwk/common/CommonScenario";
import { locators } from "./UploadPageLocators";
export class UploadPage extends CommonPage {
    constructor(public page: Page, readonly scenario: CommonScenario) {
        super(page, scenario);
    }

    async selectUploadFile() {
        await this.page.locator(locators.uploadFileOpt).click();
    }

    async uploadFile() {
        const handle = await this.page.locator('#file-upload');
        await handle.setInputFiles("uploadables/Profile.docx")
    }

    async fileUploaded() {
        const heading = await this.page.locator('File Uploaded!')
        await expect(heading).toBeVisible();
    }

}