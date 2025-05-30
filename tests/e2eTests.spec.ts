import test, { expect } from "../base_fwk/fixtures/baseTest"
import { testData } from "./testData";

test.describe('E2E tests', () => {

  test("verify user is on landing page", async ({ page, dashBoardPage, }, testinfo) => {
    await dashBoardPage.visitPage();
    await dashBoardPage.verifyPage();
  });

  test("user is able to select from a list of options", async ({ page, dropDownPage, dashBoardPage }, testinfo) => {
    await dashBoardPage.visitPage();
    await dashBoardPage.clickDropdown();
    await dropDownPage.selectOption();
    await dropDownPage.verifySelectedOption();
  });

  test("user is able to upload a file", async ({ page, dashBoardPage, uploadPage }, testinfo) => {
    await dashBoardPage.visitPage();
    await dashBoardPage.clickFileUpload();
    await uploadPage.uploadFile();
  });

})