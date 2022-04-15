const puppeteer = require('puppeteer')
const helper = require("./getBedroomInfo")


const getBedroomsInfo = async function() {

    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://www.polarisfurniture.com/collections/bedroom-1")

    const elements = await page.evaluate(() => {

        let bedroomURLs = []
        Array.from(document.querySelectorAll(".product-list.product-list--collection.product-list--with-sidebar > div > a")).map(x => {
            bedroomURLs.push(x.href)
        })

        return bedroomURLs
    })

    const infos = await elements.map(async (pageURL) => {
        const info = await helper.getBedroom(pageURL)
        return info
    })

    const bedroomInfos = await Promise.all(infos)

    console.log(bedroomInfos)
    await browser.close()

}

getBedroomsInfo()