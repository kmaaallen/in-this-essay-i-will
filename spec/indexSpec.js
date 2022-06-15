import puppeteer from 'puppeteer';

const URL = 'http://127.0.0.1:3000/';

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
        expect(await page.title()).toBe('The Green Project');
    });

    it('should have contain header with title', async () => {
        expect(await page.content()).toContain('<h1>The Green Project</h1>');
    });

    it('should contain an about section', async () => {
        const about = await page.$('#about');
        expect(about).toBeTruthy();
    });

    it('should contain a posts section', async () => {
        const posts = await page.$('#posts');
        expect(posts).toBeTruthy();
    });

    it('should have a dark theme active when page first loaded', async () => {
        expect(await page.content()).toContain('<body id="body">');
        expect(await page.content()).toContain('<button id="theme-dark" onclick="selectTheme(\'theme-dark\')" class="active-theme">');
    });

    it('should have a button that adds a light theme to the body and shows when theme active', async () => {
        // Get light button element
        const lightbtn = await page.$('#theme-light');
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
        const darkbtn = await page.$('#theme-dark');
        // First switch to light theme to test change back to dark theme
        await page.click('button#theme-light');
        let firstClassName = await page.evaluate(el => el.className, darkbtn);
        expect(firstClassName).not.toBe('active-theme');
        // Switch back to dark theme using button
        await page.click('button#theme-dark');
        let secondClassName = await page.evaluate(el => el.className, darkbtn);
        expect(secondClassName).toBe('active-theme');
    });

    it('should have website carbon badge in footer displaying in dark or light theme depending on main theme', async () => {
        // Get website carbon badge
        const wcb = await page.$('#wcb');
        //Should be in dark theme on load
        expect(await page.content()).toContain('<div id="wcb" class="carbonbadge wcb-d">');
        let wcbClass = await page.evaluate(el => el.className, wcb);
        expect(wcbClass).toBe('carbonbadge wcb-d');
        // Change to light theme
        await page.click('button#theme-light');
        let wcbClassSecond = await page.evaluate(el => el.className, wcb);
        expect(wcbClassSecond).toBe('carbonbadge');
    });
});