const puppeteer = require('puppeteer')

async function start() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://www.polarisfurniture.com/collections/living-room-sets")

    // const test = ["red", "blue", "green"]
    // await fs.writeFile("test.txt", test.join("\r\n"))

    // const polarisSectional = await page.evaluate(() => {
    //     return Array.from(document.querySelectorAll("#shopify-section-collection-template > section > div.container.container--flush > div.layout > div:nth-child(2) > div > div > div > div.product-list.product-list--collection.product-list--with-sidebar img")).map(x => {
    //         return elements = {
    //             imageSource: x.srcset
    //         }
    //     })
    // })

    // console.log("items", polarisSectional)

    // const allElements = await page.evaluate("#shopify-section-collection-template > section > div.container.container--flush > div.layout > div:nth-child(2) > div > div.card.we-border-0 > div > div.product-list.product-list--collection.product-list--with-sidebar div", x => {
    //     elements = {
    //         myText: x.innerText
    //     }
    //     return elements
    // })
    // console.log(images)

    const elems = await page.evaluate(() => {
        return Array.from(document.querySelectorAll("#shopify-section-collection-template > section > div.container.container--flush > div.layout > div:nth-child(2) > div > div.card.we-border-0 > div > div.product-list.product-list--collection.product-list--with-sidebar div")).map(x => {
            return elements = {
                imageSrc: x.src,
                text: x.img.innerText,
                innerHtml: x.innerHTML
            }
        })
    })

    console.log(elems)
    await browser.close()
}

start()

// await page.screenshot({path: "polaris.png", fullPage: true})
