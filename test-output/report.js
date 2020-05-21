$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/AliAhmed/eclipse-workspace/CunyFirstCucumberPOMTest/src/main/java/com/qa/features/cunyfirst.feature");
formatter.feature({
  "line": 1,
  "name": "Cuny First Application Test",
  "description": "",
  "id": "cuny-first-application-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Validate Cuny First Home Page test",
  "description": "",
  "id": "cuny-first-application-test;validate-cuny-first-home-page-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user opens browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is on login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user logs into app",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.user_opens_browser()"
});
formatter.result({
  "duration": 7368596624,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_is_on_login_Page()"
});
formatter.result({
  "duration": 126560002,
  "status": "pformatter.result({
  "duration": 70710769743508,
  "error_message": "java.lang.NullPointerException\n\tat com.qa.util.TestBase.initialization(TestBase.java:34)\n\tat com.qa.stepDefination.HomePageSteps.user_opens_browser(HomePageSteps.java:13)\n\tat ✽.Given user opens browser(/Users/AliAhmed/eclipse-workspace/CunyFirstCucumberPOMTest/src/main/java/com/qa/features/cunyfirst.feature:5)\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePageSteps.user_is_on_login_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.user_enters_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.home_page_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});