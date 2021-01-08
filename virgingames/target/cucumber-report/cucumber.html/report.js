$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurfile/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Functional Testing",
  "description": "In Order to check Login Functionality Is Working\r\n\r\nI as a user want to check login functionality for invalid username and password",
  "id": "functional-testing",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6781158200,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "click on Login Tag",
  "description": "",
  "id": "functional-testing;click-on-login-tag",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on home page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on LoginTab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I redirected to Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 73174400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginTab()"
});
formatter.result({
  "duration": 2605977600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iRedirectedToLoginPage()"
});
formatter.result({
  "duration": 29200,
  "status": "passed"
});
formatter.after({
  "duration": 810311600,
  "status": "passed"
});
formatter.before({
  "duration": 5699706300,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "I enter Invalid credential",
  "description": "",
  "id": "functional-testing;i-enter-invalid-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on home page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on LoginTab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Enter username \"mahadevhar\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Enter Password \"swetaoza\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on LoginButton",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I get Error message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 20700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginTab()"
});
formatter.result({
  "duration": 1748146800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mahadevhar",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterUsername(String)"
});
formatter.result({
  "duration": 10060312600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027field-username\u0027]\"}\n  (Session info: chrome\u003d87.0.4280.88)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-NGO77N7\u0027, ip: \u0027192.168.0.14\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\44773\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64903}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 5f19e4a983dfe846622c98937e9501cf\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027field-username\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\r\n\tat com.virgingames.utilities.Utility.sendTextToElement(Utility.java:67)\r\n\tat com.virgingames.pages.HomePage.eNtERUseRName(HomePage.java:33)\r\n\tat com.virgingames.stepdefs.MyStepdefs.iEnterUsername(MyStepdefs.java:26)\r\n\tat ✽.And I Enter username \"mahadevhar\"(src/test/java/resources/featurfile/Login.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "swetaoza",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.iGetErrorMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1066715600,
  "status": "passed"
});
});