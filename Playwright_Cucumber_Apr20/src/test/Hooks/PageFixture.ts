import { Page } from "@playwright/test";
import { Loginpage } from "../pages/Loginpage";
import { Homepage } from "../pages/Homepage";



export class PageFixture
{
      page:Page
      loginpage:Loginpage 
      homepage:Homepage 
      
    constructor(page:Page)
    {
        this.page = page
        this.loginpage = new Loginpage(page)
        this.homepage = new Homepage(page)
        
    }
}