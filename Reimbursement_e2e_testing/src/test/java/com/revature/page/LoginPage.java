package com.revature.page;

import java.time.Clock;
import java.time.Duration;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


public class LoginPage {

	private WebDriver driver;
	private WebDriverWait wdw; // Explicit waits
	
	@FindBy(id="user_email") // PageFactory annotation
	private WebElement usernameInput;
	
	@FindBy(id="user_password") // PageFactory annotation
	private WebElement passwordInput;
	
	@FindBy(id="login-btn") // PageFactory annotation
	private WebElement loginButton;
	
	@FindBy(id="login-info")
	private WebElement errorMessage;
	
	public LoginPage(WebDriver driver) {
		this.driver = driver;	
		this.wdw = new WebDriverWait(driver, Duration.ofSeconds(15)); // wait for a maximum of 15 seconds before throwing an exception
		
		// PageFactory initialization
		PageFactory.initElements(driver, this);
	}
	
	public WebElement getUsernameInput() {
		return this.usernameInput;
	}
	
	public WebElement getPasswordInput() {
		return this.passwordInput;
	}

	public WebElement getLoginButton() {
		return this.loginButton;
	}
	
	public WebElement getErrorMessage() {
		return this.wdw.until(ExpectedConditions.visibilityOf(this.errorMessage));
	}
	
}

