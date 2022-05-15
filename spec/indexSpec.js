import puppeteer from 'puppeteer';

const URL = 'http://localhost:3000/';

describe('Index', () => {
    var originalTimeout;
    let browser = null;
    let page = null;

    beforeAll(() => {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    });

    afterAll(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    })

    beforeEach(async () => {
        browser = await puppeteer.launch(
            {
                headless: true,
            }
        );
        page = await browser.newPage();
        await page.goto(URL);
    });

    afterEach(async () => {
        await browser.close();
    });
    it('should have correct title', async () => {
        expect(await page.title()).toBe('In this essay I will');
    });

    it('should have contain header with title', async () => {
        expect(await page.content()).toContain('<h1>IN THIS ESSAY I WILL...</h1>');
    });

    it('should have a dark theme active when page first loaded', async () => {
        expect(await page.content()).toContain('<body id="body">');
        expect(await page.content()).toContain('<button id="theme-dark" onclick="selectTheme(\'theme-dark\')" class="active-theme">');
    });

    it('should have a button that adds a light theme to the body and shows when theme active', async () => {
        // Get light button element
        const lightbtn = await page.$("#theme-light");
        // First check light theme not applied
        let firstClassName = await page.evaluate(el => el.className, lightbtn);
        expect(firstClassName).not.toBe('active-theme');
        // Switch to light theme
        await page.click('button#theme-light');
        let secondClassName = await page.evaluate(el => el.className, lightbtn);
        expect(secondClassName).toBe('active-theme');
    });

    it('should have a button that adds a dark theme to the body and shows when theme active', async () => {
        // Get dark button element
        const darkbtn = await page.$("#theme-dark");
        // First switch to light theme to test change back to dark theme
        await page.click('button#theme-light');
        let firstClassName = await page.evaluate(el => el.className, darkbtn);
        expect(firstClassName).not.toBe('active-theme');
        // Switch back to dark theme using button
        await page.click('button#theme-dark');
        let secondClassName = await page.evaluate(el => el.className, darkbtn);
        expect(secondClassName).toBe('active-theme');
    });
});