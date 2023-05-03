describe("Run fourth lesson App", () => {
  beforeEach(async () => {
    await browser.url("lesson/4");
    await browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 10000,
        timeoutMsg: "timeout",
      }
    );
  });

  const path = "./src/tests/integration-tests/screenshots/l4-";
  it("When click Show Generic Dialog should display modal and Close", async () => {
    await $("aria/btn-show-dialog").click();

    await expect($("aria/modal-generic-dialog")).toExist();
    await browser.saveScreenshot(`${path}T1-ShouldExists-${Date.now()}.png`);

    await $("button=Close").click();
    await expect($("aria/modal-generic-dialog")).not.toExist();
  });

  it("When click Show Generic Dialog should display modal and Close with X", async () => {
    await $("aria/btn-show-dialog").click();

    await expect($("aria/modal-generic-dialog")).toExist();
    await browser.saveScreenshot(`${path}T2-ShouldExists-${Date.now()}.png`);

    await $("aria/btn-close-dialog").click();
    await expect($("aria/modal-generic-dialog")).not.toExist();
  });

  it("When click Add Movie should display modal and Close", async () => {
    await $("aria/btn-add-movie").click();

    await expect($("aria/modal-add-movie-dialog")).toExist();
    await browser.saveScreenshot(`${path}T3-ShouldExists-${Date.now()}.png`);

    await $("aria/btn-close-dialog").click();
    await expect($("aria/modal-add-movie-dialog")).not.toExist();
  });

  it("When click Add Movie should display modal and Submit", async () => {
    await $("aria/btn-add-movie").click();

    await expect($("aria/modal-add-movie-dialog")).toExist();
    await browser.saveScreenshot(`${path}T4-ShouldExists-${Date.now()}.png`);

    await $("aria/btn-submit-add-movie").click();
    await expect($("aria/modal-add-movie-dialog")).not.toExist();
  });
});
