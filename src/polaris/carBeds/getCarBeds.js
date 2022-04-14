const puppeteer = require('puppeteer')


async function getCarBedsInfo() {

    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://www.polarisfurniture.com/collections/bedroom")

    // https://www.polarisfurniture.com/

    const elements = await page.evaluate(() => {

        return Array.from(document.querySelectorAll("#shopify-section-collection-template > section > div.container.container--flush > div.layout > div:nth-child(2) > div > div > div > div.product-list.product-list--collection.product-list--with-sidebar div")).map(x => {
            return Array.from(x.querySelectorAll("a div")).map(y => {
                return y.innerHTML
            })
        })
    })

    const elements2 = await page.evaluate(() => {

        return Array.from(document.querySelectorAll("#shopify-section-collection-template > section > div.container.container--flush > div.layout > div:nth-child(2) > div > div > div > div.product-list.product-list--collection.product-list--with-sidebar")).map(x => {
            return x.innerHTML
        })
    })

    console.log(elements2)
    await browser.close()

}

getCarBedsInfo()