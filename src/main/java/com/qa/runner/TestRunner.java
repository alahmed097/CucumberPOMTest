package com.qa.runner;


import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		//feature is the path of the feature files
		features = "/Users/AliAhmed/eclipse-workspace/CunyFirstCucumberPOMTest/src/main/java/com/qa/features/cunyfirst.feature"
		,glue= {"com/qa/stepDefination"}, //the path of the step defination file
		//format is to generate different type of reporting 
		format = {"pretty", "html:test-output", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}, // 
		monochrome = true, //display the console output in a proper readable format
		strict = true, //it will check if any step is not defined in step definition file
		dryRun = false  // to check the mapping is proper between feature file and step definition file
		)

public class TestRunner {
	

}
