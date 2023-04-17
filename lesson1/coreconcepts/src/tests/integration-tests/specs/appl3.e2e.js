describe("Run third lesson App", () => {
  beforeEach(async () => {
    await browser.url("lesson3");
    await browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 10000,
        timeoutMsg: "timeout",
      }
    );
  });

  const path = "./src/tests/integration-tests/screenshots/";
  it("When click a movie image Then shows details", async () => {
    await $("aria/img-preview-movie-14").click();

    await expect($("aria/preview-movie-14")).toExist();
    await browser.saveScreenshot(`${path}T1-ShouldExists-${Date.now()}.png`);

    await $("aria/sort-by-select").selectByVisibleText("Release Date");
    await expect($("aria/preview-movie-14")).not.toExist();
  });

  it("When click a movie info Then shows details", async () => {
    await $("aria/info-bar-movie-1").click();

    await expect($("aria/preview-movie-1")).toExist();
    await browser.saveScreenshot(`${path}T2-ShouldExists-${Date.now()}.png`);

    await $("aria/sort-by-select").selectByVisibleText("Release Date");
    await expect($("aria/preview-movie-1")).not.toExist();

    await $("aria/info-bar-movie-6").click();

    await expect($("aria/preview-movie-6")).toExist();
    await browser.saveScreenshot(`${path}T2C1-ShouldExists-${Date.now()}.png`);

    await $("aria/sort-by-select").selectByVisibleText("Title");
    await expect($("aria/preview-movie-6")).not.toExist();
  });
});
