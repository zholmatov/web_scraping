const puppeteer = require('puppeteer')


async function getCarBed() {

    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://www.polarisfurniture.com/collections/bedroom/products/gt1-race-carbed-with-led-wheels-white")


    const elements = await page.evaluate(() => {

        return Array.from(document.querySelectorAll("#shopify-section-product-template")).map(x => {
            return x.ATTRIBUTE_NODE
        })
    })

    console.log(elements[0])
    await browser.close()

}

getCarBed()