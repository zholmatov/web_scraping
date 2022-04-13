const puppeteer = require('puppeteer')

async function start() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://www.polarisfurniture.com/collections/sectional")
    await page.screenshot({path: "polaris.png", fullPage: true})
    await browser.close()
}

start()