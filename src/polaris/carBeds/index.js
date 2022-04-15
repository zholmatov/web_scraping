const puppeteer = require('puppeteer')
const helper = require("./getCarBedInfo")


const getCarBedsInfo = async function() {

    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://www.polarisfurniture.com/collections/bedroom")

    const elements = await page.evaluate(() => {

        let bedroomURLs = []
        Array.from(document.querySelectorAll(".product-list.product-list--collection.product-list--with-sidebar > div > a")).map(x => {
            bedroomURLs.push(x.href)
        })

        return bedroomURLs
    })

    const infos = await elements.map(async (pageURL) => {
        const info = await helper.getCarBed(pageURL)
        return info
    })

    const carBedInfos = await Promise.all(infos)

    console.log(carBedInfos)
    await browser.close()

}

getCarBedsInfo()