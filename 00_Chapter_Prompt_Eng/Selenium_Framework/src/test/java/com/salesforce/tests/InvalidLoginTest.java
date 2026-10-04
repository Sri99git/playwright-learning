package com.salesforce.tests;

import com.salesforce.pages.LoginPage;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import java.time.Duration;

public class InvalidLoginTest {

    private WebDriver driver;
    private LoginPage loginPage;

    @BeforeMethod
    public void setUp() {
        try {
            WebDriverManager.chromedriver().setup();
            ChromeOptions options = new ChromeOptions();
            options.addArguments("--start-maximized");
            options.addArguments("--disable-notifications");
            driver = new ChromeDriver(options);
            driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
            driver.get("https://login.salesforce.com/?locale=in");
            loginPage = new LoginPage(driver);
        } catch (Exception e) {
            throw new RuntimeException("Failed to initialize test setup: " + e.getMessage(), e);
        }
    }

    @Test
    public void testInvalidLoginDisplaysErrorMessage() {
        try {
            loginPage.enterUsername("invalid_user@invalid_domain.com");
            loginPage.enterPassword("WrongPassword123");
            loginPage.clickLogin();

            Assert.assertTrue(loginPage.isErrorMessageDisplayed(), "Error message container was not visible upon invalid login.");

            String actualError = loginPage.getErrorMessage();
            Assert.assertTrue(
                actualError.contains("Please check your username and password") || actualError.contains("check your username and password"),
                "Unexpected error message text received: " + actualError
            );
        } catch (AssertionError e) {
            throw e;
        } catch (Exception e) {
            Assert.fail("Invalid login execution encountered an unexpected exception: " + e.getMessage(), e);
        }
    }

    @AfterMethod
    public void tearDown() {
        if (driver != null) {
            try {
                driver.quit();
            } catch (Exception e) {
                System.err.println("Error quitting driver: " + e.getMessage());
            }
        }
    }
}
