import { Before } from "@cucumber/cucumber";
import { chromium, Page } from "@playwright/test";
import { PageFixture } from "./PageFixture";
import { Loginpage } from "../pages/Loginpage";
import { Homepage } from "../pages/Homepage";


let page: Page
export let pagefixture: PageFixture

Before(async function () {
    let browser = await chromium.launch({ headless: false })
    let context = await browser.newContext()
    page = await context.newPage()
    pagefixture = new PageFixture(page)

    //initializing page objects
    pagefixture.loginpage = new Loginpage(pagefixture.page)
    pagefixture.homepage = new Homepage(pagefixture.page)

})