const puppeteer = require('puppeteer');
//esta manera se trabaja la asincronia utilizando ahora los await
(async () => {
    //nuestro codigo
    console.log('lanzamos un navegador');
    const browser = await puppeteer.launch({ headless: false });

    const page = await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/Node.js');

    var titulo1 = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        console.log(h1.innerHTML); 
        return h1.innerHTML;
    })
    console.log(titulo1)

    console.log('cerramos anvegador');
    // browser.close();
    console.log('navegador cerrado');
})();