describe("Run fifth lesson App", () => {
  beforeEach(async () => {
    await browser.url("lesson/5");
    await browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 10000,
        timeoutMsg: "timeout",
      }
    );
  });

  const path = "./src/tests/integration-tests/screenshots/l5-";
  it("When Click Search shows only Star Wars Movies", async () => {
    const inputText = "Star Wars";

    await $('[class="search-input-text"]').setValue(inputText);
    await $("button=Search").click();

    await browser.saveScreenshot(`${path}T1-ShouldExists-${Date.now()}.png`);

    await expect($("aria/img-preview-movie-181808")).toExist();
    await expect($("aria/img-preview-movie-140607")).toExist();
    await expect($("aria/img-preview-movie-11")).toExist();
  });

  it("When click Documentary genre button Then show 13 movies", async () => {
    await $("button=Documentary").click();

    await expect($("aria/movies-counter-found")).toHaveText("13 movies found");
  });

  it("When Sort by release date then show chaplin movies first", async () => {
    await $("aria/sort-by-select").selectByVisibleText("Release Date");

    await expect($("aria/img-preview-movie-962")).toExist();
    await browser.saveScreenshot(`${path}T2-ShouldExists-${Date.now()}.png`);
  });

  it("When click a movie info Then shows details", async () => {
    await $("aria/info-bar-movie-505177").click();

    await expect($("aria/preview-movie-505177")).toExist();
    await browser.saveScreenshot(`${path}T3-ShouldExists-${Date.now()}.png`);
  });
});
