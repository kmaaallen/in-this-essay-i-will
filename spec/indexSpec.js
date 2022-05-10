import puppeteer from 'puppeteer';

const URL = 'http://localhost:3000/src/index.html';

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

    it('should have no theme classes on the body when first loaded', async () => {
        expect(await page.content()).toContain('<body id="body">');
    });

    it('should have toggle button that toggle between light and dark theme when clicked', async () => {
        expect(await page.content()).toContain('<button id="theme-toggle" onclick="toggleTheme()">Theme <i class="fa-solid fa-circle-half-stroke color-accent"></i></button>');
        await page.click('#theme-toggle');
        expect(await page.$eval('body', (e) => e.classList[0])).toBe('theme-light');
        await page.click('#theme-toggle');
        expect(await page.$eval('body', (e) => e.classList.length)).toBe(0);
    });

});

/*
describe('Theme toggle button', function () {
    it('should call toggleTheme function when clicked', function () {
        spyOn(window, 'toggleTheme');
        document.getElementById('theme-toggle').click();
        expect(window.toggleTheme).toHaveBeenCalled();
    });
    it('on click, should add theme-light class to body if theme-light class not present, and remove if it is present', function () {
        expect(document.getElementById('body').classList).not.toContain('theme-light');
        document.getElementById('theme-toggle').click();
        expect(document.getElementById('body').classList).toContain('theme-light');
        document.getElementById('theme-toggle').click();
        expect(document.getElementById('body').classList).not.toContain('theme-light');
    });
});*/