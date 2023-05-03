describe("Run sixth lesson App", () => {
  const path = "./src/tests/integration-tests/screenshots/l6-";

  it("When url is to search star wars shows only Star Wars Movies", async () => {
    await browser.url(
      "/?search=Star+Wars&searchBy=title&sortBy=title&sortOrder=asc&limit=20"
    );
    await browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 10000,
        timeoutMsg: "timeout",
      }
    );

    await browser.saveScreenshot(`${path}T1-ShouldExists-${Date.now()}.png`);

    await expect($("aria/img-preview-movie-181808")).toExist();
    await expect($("aria/img-preview-movie-140607")).toExist();
    await expect($("aria/img-preview-movie-11")).toExist();
  });

  it("When url is to search documentary Then show 13 movies", async () => {
    await browser.url(
      "/?search=Documentary&searchBy=genres&sortBy=title&sortOrder=asc&limit=20"
    );
    await browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 10000,
        timeoutMsg: "timeout",
      }
    );

    await expect($("aria/movies-counter-found")).toHaveText("13 movies found");
  });

  it("When url is to search documentary and sort by title Then show Earth: One Amazing Day as second", async () => {
    await browser.url(
      "/?search=Documentary&searchBy=genres&sortBy=title&sortOrder=asc&limit=20"
    );
    await browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 10000,
        timeoutMsg: "timeout",
      }
    );

    const secondMovie = await $(
      "//body/div/div/div[4]/div/div/div[2]/div[2]/div[1]"
    );
    await expect(secondMovie).toHaveText("Earth: One Amazing Day");
  });

  it("When url is to search documentary and sort by release date Then show Jackass: The Movie as second", async () => {
    await browser.url(
      "/?search=Documentary&searchBy=genres&sortBy=release_date&sortOrder=asc&limit=20"
    );
    await browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 10000,
        timeoutMsg: "timeout",
      }
    );

    const secondMovie = await $(
      "//body/div/div/div[4]/div/div/div[2]/div[2]/div[1]"
    );
    await expect(secondMovie).toHaveText("Jackass: The Movie");
  });

  it("When url Sort by release date then show chaplin movies first", async () => {
    await browser.url("/?sortBy=release_date&sortOrder=asc&limit=20");
    await browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 10000,
        timeoutMsg: "timeout",
      }
    );

    await expect($("aria/img-preview-movie-962")).toExist();
    await browser.saveScreenshot(`${path}T2-ShouldExists-${Date.now()}.png`);
  });

  it("When url is movie info Then shows details", async () => {
    await browser.url("/505177");
    await browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 10000,
        timeoutMsg: "timeout",
      }
    );
    await $("aria/info-bar-movie-505177").click();

    await expect($("aria/preview-movie-505177")).toExist();
    await browser.saveScreenshot(`${path}T3-ShouldExists-${Date.now()}.png`);
  });

  it("When click close on a movie info Then shows search form", async () => {
    await browser.url("/505177");
    await browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 10000,
        timeoutMsg: "timeout",
      }
    );

    await $("aria/btn-close-dialog").click();

    await expect($('[class="search-input-text"]')).toExist();
    await expect($("button=Search")).toExist();
    await browser.saveScreenshot(`${path}T3-ShouldExists-${Date.now()}.png`);
  });
});
