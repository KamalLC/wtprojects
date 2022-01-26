const ltp=700;
const closingPrice=660;

function noOfShares(){
	return getValue("unitEntry");
}

function currentValue(){
	return ltp*noOfShares();
}

function investment(){
	return getValue("buyPriceEntry")*noOfShares();
}

function soldAmount(){
	return getValue("soldUnitEntry")*ltp;
}

function overallProfit(){
	return currentValue()-investment();
}

function profitPercent(){
	return Math.floor(overallProfit()*100/investment());
}

function todaysProfit(){
	return (ltp-closingPrice)*noOfShares();
}


/**This function will be executed when the addScript button is clicked
** after the button is clicked a new box containing all the information
**similar to previous script box is needed to be added
**/
function displayEntry(){
	var entry=document.getElementById("entry");
	entry.style.display="block";
}

function enterInfo(){

}

/* this function creates and returns element*/
function create(elementName){
	return document.createElement(elementName);
}
 
function submit(){
	addScript();

	var entry=document.getElementById("entry");
	entry.style.display="none";
}

function getValue(idName){
	return document.getElementById(idName).value;
}

function addScript(){
	var parent=document.getElementById("script");
	var div=create("div");
	div.classList.add("child");

	/*adding info in top div*/
	var top=create("div");
	top.classList.add("top");

	/*label for scriptname inside top*/
	var scriptName=create("label");
	scriptName.classList.add("scriptName");
	scriptName.innerHTML=getValue("scriptEntry").toUpperCase();
	top.appendChild(scriptName);

	/*label for script unit inside top*/
	var scriptUnit=create("label");
	scriptUnit.classList.add("ScriptUnits");
	scriptUnit.classList.add("right");
	/*span for unit inside scriptUnit*/
	var scriptUnitNumber=create("span");
	scriptUnitNumber.classList.add("scriptUnitNumber");
	scriptUnitNumber.classList.add("Number");
	scriptUnitNumber.innerHTML=getValue("unitEntry")+" "
	scriptUnit.appendChild(scriptUnitNumber);
	// scriptUnit.appendChild(scriptUnitNumber);
	var unitText=create("span");
	unitText.innerHTML="Units";
	scriptUnit.appendChild(unitText);
	top.appendChild(scriptUnit);

	div.appendChild(top);
	/*top ends here*/



	/*scriptChildBottom Starts here*/
	var scriptChildBottom=create("div");
	scriptChildBottom.classList.add("scriptChildBottom");

	/**
	**Sold Section Starts here
	**/
	var scriptSoldUnit=create("div");
	scriptSoldUnit.classList.add("scriptSoldUnit");
	/*label for sold unit*/
	var scriptSoldUnitNumber=create("label");
	scriptSoldUnitNumber.classList.add("Number");
	scriptSoldUnitNumber.classList.add("prefix");
	scriptSoldUnitNumber.innerHTML=getValue("soldUnitEntry");
	scriptSoldUnit.appendChild(scriptSoldUnitNumber);
	/*label for sold unit text*/
	var scriptSoldUnitText=create("label");
	// scriptSoldUnitText.classList.add("")
	scriptSoldUnitText.innerHTML="Sold Units";

	scriptSoldUnit.appendChild(scriptSoldUnitText);

	scriptChildBottom.appendChild(scriptSoldUnit);
	/**
	**Sold Section Ends here
	**/

	/**
	**LTP Section Starts here
	**/
	var scriptLtp=create("div");
	scriptLtp.classList.add("scriptLtp");
	/*label for ltp number*/
	var scriptLtpNumber=create("label");
	scriptLtpNumber.classList.add("Number");
	scriptLtpNumber.classList.add("prefix");
	scriptLtpNumber.classList.add("green");
	scriptLtpNumber.innerHTML="Rs "+ltp;
	scriptLtp.appendChild(scriptLtpNumber);
	/*label for ltp text*/
	var scriptLtpText=create("label");
	scriptLtpText.innerHTML="LTP";

	scriptLtp.appendChild(scriptLtpText);

	scriptChildBottom.appendChild(scriptLtp);
	/**
	**Ltp Section Ends here
	**/


	/**
	**Current Value Section Starts here
	**/
	var scriptCurrentValue=create("div");
	scriptCurrentValue.classList.add("scriptCurrentValue");
	/*label for sold unit*/
	var scriptCurrentValueNumber=create("label");
	scriptCurrentValueNumber.classList.add("Number");
	scriptCurrentValueNumber.classList.add("prefix");
	scriptCurrentValueNumber.innerHTML="Rs "+currentValue();
	scriptCurrentValue.appendChild(scriptCurrentValueNumber);
	/*label for sold unit text*/
	var scriptCurrentValueText=create("label");
	// scriptCurrentValueText.classList.add("")
	scriptCurrentValueText.innerHTML="Current Value";

	scriptCurrentValue.appendChild(scriptCurrentValueText);

	scriptChildBottom.appendChild(scriptCurrentValue);
	/**
	**Current Value Section Ends here
	**/

	/**
	**scriptInvestment Section Starts here
	**/
	var scriptInvestment=create("div");
	scriptInvestment.classList.add("scriptInvestment");
	/*label for sold unit*/
	var scriptInvestmentNumber=create("label");
	scriptInvestmentNumber.classList.add("Number");
	scriptInvestmentNumber.classList.add("prefix");
	scriptInvestmentNumber.innerHTML="Rs "+investment();
	scriptInvestment.appendChild(scriptInvestmentNumber);
	/*label for sold unit text*/
	var scriptInvestmentText=create("label");
	// scriptInvestmentText.classList.add("")
	scriptInvestmentText.innerHTML="Investment";

	scriptInvestment.appendChild(scriptInvestmentText);

	scriptChildBottom.appendChild(scriptInvestment);
	/**
	**Sold Section Ends here
	**/


	/**
	**Sold amount Section Starts here
	**/
	var scriptSoldAmount=create("div");
	scriptSoldAmount.classList.add("scriptSoldAmount");
	/*label for sold unit*/
	var scriptSoldAmountNumber=create("label");
	scriptSoldAmountNumber.classList.add("Number");
	scriptSoldAmountNumber.classList.add("prefix");
	scriptSoldAmountNumber.innerHTML="Rs "+soldAmount();
	scriptSoldAmount.appendChild(scriptSoldAmountNumber);
	/*label for sold unit text*/
	var scriptSoldAmountText=create("label");
	// scriptSoldAmountText.classList.add("")
	scriptSoldAmountText.innerHTML="Sold Amount";

	scriptSoldAmount.appendChild(scriptSoldAmountText);

	scriptChildBottom.appendChild(scriptSoldAmount);
	/**
	**Sold Amount Section Ends here
	**/


	/**
	**Dividend Section Starts here
	**/
	var scriptDividend=create("div");
	scriptDividend.classList.add("scriptDividend");
	/*label for sold unit*/
	var scriptDividendNumber=create("label");
	scriptDividendNumber.classList.add("Number");
	scriptDividendNumber.classList.add("prefix");
	scriptDividendNumber.innerHTML="Rs 0.0";
	scriptDividend.appendChild(scriptDividendNumber);
	/*label for sold unit text*/
	var scriptDividendText=create("label");
	// scriptDividendText.classList.add("")
	scriptDividendText.innerHTML="Dividend";

	scriptDividend.appendChild(scriptDividendText);

	scriptChildBottom.appendChild(scriptDividend);
	/**
	**Dividend Section Ends here
	**/

	/**
	**Profit Percentage Section Starts here
	**/
	var scriptProfitPercentage=create("div");
	scriptProfitPercentage.classList.add("scriptProfitPercentage");
	/*label for ltp number*/
	var scriptProfitPercentageNumber=create("label");
	scriptProfitPercentageNumber.classList.add("Number");
	scriptProfitPercentageNumber.classList.add("prefix");
	scriptProfitPercentageNumber.classList.add("green");
	scriptProfitPercentageNumber.innerHTML=profitPercent()+"%";
	scriptProfitPercentage.appendChild(scriptProfitPercentageNumber);
	/*label for ltp text*/
	var scriptProfitPercentageText=create("label");
	scriptProfitPercentageText.innerHTML="Profit Percent";

	scriptProfitPercentage.appendChild(scriptProfitPercentageText);

	scriptChildBottom.appendChild(scriptProfitPercentage);
	/**
	**Profit Percentage Section Ends here
	**/

	/**
	**Overall Profit Section Starts here
	**/
	var scriptOverallProfit=create("div");
	scriptOverallProfit.classList.add("scriptOverallProfit");
	/*label for ltp number*/
	var scriptOverallProfitNumber=create("label");
	scriptOverallProfitNumber.classList.add("Number");
	scriptOverallProfitNumber.classList.add("prefix");
	scriptOverallProfitNumber.classList.add("green");
	scriptOverallProfitNumber.innerHTML="Rs "+overallProfit();
	scriptOverallProfit.appendChild(scriptOverallProfitNumber);
	/*label for ltp text*/
	var scriptOverallProfitText=create("label");
	scriptOverallProfitText.innerHTML="Overall Profit";

	scriptOverallProfit.appendChild(scriptOverallProfitText);

	scriptChildBottom.appendChild(scriptOverallProfit);
	/**
	**Overall Profit Section Ends here
	**/



	/**
	**Today's Profit Section Starts here
	**/
	var scriptTodaysProfit=create("div");
	scriptTodaysProfit.classList.add("scriptTodaysProfit");
	/*label for ltp number*/
	var scriptTodaysProfitNumber=create("label");
	scriptTodaysProfitNumber.classList.add("Number");
	scriptTodaysProfitNumber.classList.add("prefix");
	scriptTodaysProfitNumber.classList.add("green");
	scriptTodaysProfitNumber.innerHTML="Rs "+todaysProfit();
	scriptTodaysProfit.appendChild(scriptTodaysProfitNumber);
	/*label for ltp text*/
	var scriptTodaysProfitText=create("label");
	scriptTodaysProfitText.innerHTML="Today's Profit";

	scriptTodaysProfit.appendChild(scriptTodaysProfitText);

	scriptChildBottom.appendChild(scriptTodaysProfit);
	/**
	**Today's Profit Section Ends here
	**/



	div.appendChild(scriptChildBottom);
	parent.appendChild(div);
}

/*
scriptName
units
sold
ltp
currentValue
investment
soldAmount
dividend
profit perc
overall prof
today profit
*/