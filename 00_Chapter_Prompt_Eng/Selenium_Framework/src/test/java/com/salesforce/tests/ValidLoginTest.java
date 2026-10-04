package com.salesforce.tests;

import com.salesforce.pages.LoginPage;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import java.time.Duration;

public class ValidLoginTest {

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
    public void testValidLogin() {
        try {
            loginPage.enterUsername("testuser@enterprise.com");
            loginPage.enterPassword("ValidPass123!");
            loginPage.selectRememberMe();
            loginPage.clickLogin();

            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(15));
            boolean isRedirected = wait.until(ExpectedConditions.not(ExpectedConditions.urlToBe("https://login.salesforce.com/?locale=in")));
            Assert.assertTrue(isRedirected, "User was not redirected after submitting valid credentials.");
        } catch (AssertionError e) {
            throw e;
        } catch (Exception e) {
            Assert.fail("Valid login execution encountered an unexpected exception: " + e.getMessage(), e);
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
