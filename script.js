//your JS code here. If required.
function isleapyear(x) {
	if(x%400===0){
		return true;
	}
	if(x%100===0){
		return false;
	}
	if(x%4===0){
		return true;
	}
	return false;
	
}
function daysofAYear(year){
	if(isleapyear(year)){
		return 366;
	}
	return 365;
}


let year=prompt("enter year :");
alert(daysofAYear(year));






