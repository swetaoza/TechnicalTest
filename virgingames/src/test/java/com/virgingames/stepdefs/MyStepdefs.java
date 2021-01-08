package com.virgingames.stepdefs;

import com.virgingames.pages.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepdefs {
    @When("^I am on home page$")
    public void iAmOnHomePage() {
    }

    @And("^I click on LoginTab$")
    public void iClickOnLoginTab() {
        new HomePage().cliCKOnLoGInTag();
    }

    @Then("^I redirected to Login Page$")
    public void iRedirectedToLoginPage() {

    }

    @And("^I Enter username \"([^\"]*)\"$")
    public void iEnterUsername(String UserName)  {
       new HomePage().eNtERUseRName(UserName);

    }

    @And("^I Enter Password \"([^\"]*)\"$")
    public void iEnterPassword(String PassWord)  {
        new HomePage().eNteRPassWord(PassWord);
    }

    @And("^I click on LoginButton$")
    public void iClickOnLoginButton() {
        new HomePage().clIcKOnLoGInBUttON();
    }

    @Then("^I get Error message$")
    public void iGetErrorMessage() {
    }
}
