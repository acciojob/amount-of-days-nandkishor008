//your JS code here. If required.
function isleapyear(x) {
	if(x%400===0){
		return true;
	}
	else if(x%100===0){
		return false;
	}
	else if(x%4===0){
		return true;
	}
	return false;
	
}
function daysofAYear(year){
	if(isleapyear){
		return 366;
	}
	return 365;
}

daysofAYear(2022);
daysofAYear(2024);
daysofAYear(1900);
daysofAYear(2000);


