package com.qa.stepDefination;

import org.junit.Assert;

import com.qa.pages.HomePage;
import com.qa.pages.LoginPage;
import com.qa.util.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class HomePageSteps extends TestBase {
	
	LoginPage loginpage;
	HomePage homePage;

	@Given("^user opens browser$")
	public void user_opens_browser() throws Throwable {
	    TestBase.initialization(); 
	}

	@Then("^user is on login Page$")
	public void user_is_on_login_Page() throws Throwable {
		loginpage = new LoginPage();
	    String title = loginpage.validateLoginPageTitle();
	    System.out.println(title);
	   
	}

	@Then("^user logs into app$")
	public void user_logs_into_app() throws Throwable {
	   homePage = loginpage.login(prop.getProperty("username"),  prop.getProperty("password"));
	   
		
	}

	

	@Then("^validate home page title$")
	public void validate_home_page_title() throws Throwable {
		String hometitle = homePage.verifyHomePageTitile();
		System.out.println(hometitle);
	}

	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {
	    driver.quit();
	}
	
	
}
