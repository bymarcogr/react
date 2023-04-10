describe('Run main App', () => {
beforeEach( async () => {
    await browser.url('./');
    await browser.waitUntil(
        () => browser.execute(() => document.readyState === 'complete'),
        {
          timeout: 10000,
          timeoutMsg: 'timeout'
        }
      );
});

const path = "./src/tests/integration-tests/screenshots/";
    it('When click + and - button Then result must change', async () => {
        await $('button=+').click();

        await expect($('aria/number-to-display')).toHaveText('2');
        await browser.saveScreenshot(`${path}T1-ShouldBe2-${Date.now()}.png`);

        await $('button=-').click();
        await $('button=-').click();

        await expect($('aria/number-to-display')).toHaveText('0');       
        await browser.saveScreenshot(`${path}T1-ShouldBe0-${Date.now()}.png`);

    });

    it('When type in search bar click search Then alert should display typed string', async () => {
        const inputText = 'End to End Test';
      
        await $('[class="search"]').setValue(inputText);
        await $('button=Search').click();

        await browser.waitUntil(() => browser.isAlertOpen());

        const msg = await browser.getAlertText();
        expect(msg).toEqual(inputText);
        await browser.saveScreenshot(`${path}T2-SameasEntered-${Date.now()}.png`);
        browser.acceptAlert();

    });

    it('When type in search bar and hit enter Then alert should display typed string', async () => {
        const newInputText = 'New End to End Test';
        await $('[class="search"]').setValue(`${newInputText}\uE007`);
        await browser.waitUntil(() => browser.isAlertOpen());

        const newMsg = await browser.getAlertText();
        expect(newMsg).toEqual(newInputText);
        await browser.saveScreenshot(`${path}T3-SameasEntered-${Date.now()}.png`);
        browser.acceptAlert();
    });

    it('When click Western genre button Then alert should display Western clicked', async () => {
        await $('button=Western').click();
        await browser.waitUntil(() => browser.isAlertOpen());

        const newMsg = await browser.getAlertText();
        expect(newMsg).toEqual("Western");
        await browser.saveScreenshot(`${path}T4-WesternClicked-${Date.now()}.png`);
        browser.acceptAlert();    
    });

    it('When click Mystery genre button Then alert should display Mystery clicked', async () => {
        await $('button=Mystery').click();
        await browser.waitUntil(() => browser.isAlertOpen());

        const newMsg = await browser.getAlertText();
        expect(newMsg).toEqual("Mystery");
        await browser.saveScreenshot(`${path}T5-MysteryClicked-${Date.now()}.png`);
        browser.acceptAlert();    
    });
})