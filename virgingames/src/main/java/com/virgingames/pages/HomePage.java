package com.virgingames.pages;

import com.virgingames.utilities.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomePage extends Utility {

    //-----This class contains Home page locators and methods to perform functional test

    //------------**---Locators------**---//
    @FindBy(xpath = "//a[contains(text(),'Login')]")
    WebElement _LogInTag;
    @FindBy(xpath = "//input[@id='field-username']")
    WebElement _UserName;
    @FindBy(xpath = "//input[@id='field-password']")
    WebElement _passWord;
    @FindBy(xpath = "//body/div[@id='app-main']/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/fieldset[1]/ol[1]/li[4]/button[1]")
    WebElement _LoginBuTTon;
    @FindBy(xpath = "//div[contains(text(),'Please try again, your username/email or password ')]")
    WebElement _ErrorMessage;

    //---------**---Methods-----**------//

   //----This Method Will Click on LoginTag
    public void cliCKOnLoGInTag(){
        clickOnElement(_LogInTag);
    }

    //--This will Enter User Name --
    public void eNtERUseRName(String nAme)
    {
        sendTextToElement(_UserName,nAme);
    }

    //---This Will Enter Password---
    public void eNteRPassWord(String pWd){
        sendTextToElement(_passWord,pWd);
    }

    //----This Will Click on LoginButton---
    public void clIcKOnLoGInBUttON(){
        clickOnElement(_LoginBuTTon);
    }

    //----This Will get error message for invalid Login---
    public String gEtInValIDTExt(){
        return getTextFromElement(_ErrorMessage);
    }



}
