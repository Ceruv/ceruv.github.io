console.log('colourConverters.js loaded')

let generateRgbString= function(rValue, gValue, bValue){
	colorString= "rgb(" + rValue + "," + gValue + "," + bValue +  ")";
	console.log(colorString);
	return colorString;
}

let RGBToHexConvert = function(rValue, gValue, bValue){
	let convertedValue = function (targetValue){
		if (targetValue<10){
			var finaltargetValue=targetValue;
		}
		else if (targetValue === 10){
			var finaltargetValue= 'A';
		}
		else if (targetValue === 11){
			var finaltargetValue= 'B';
		}
		else if (targetValue === 12){
			var finaltargetValue= 'C';
		}
		else if (targetValue === 13){
			var finaltargetValue= 'D';
		}
		else if (targetValue === 14){
			var finaltargetValue= 'E';
		}
		else if (targetValue === 15){
			var finaltargetValue= 'F';
		}
		return finaltargetValue;
	}

	r1Prelim=Math.floor(rValue/16);
	console.log(r1Prelim);
	r1Final = convertedValue(r1Prelim);
	r2Prelim=rValue%16;
	r2Final = convertedValue(r2Prelim);

	g1Prelim=Math.floor(gValue/16);
	g1Final = convertedValue(g1Prelim);
	g2Prelim=gValue%16;
	g2Final = convertedValue(g2Prelim);

	b1Prelim=Math.floor(bValue/16);
	b1Final = convertedValue(b1Prelim);
	b2Prelim=bValue%16;
	b2Final = convertedValue(b2Prelim);

	hexCode = "#" + r1Final + r2Final + g1Final + g1Final + b1Final + b2Final;
	console.log(hexCode);
	return hexCode;
};

let hexToRGBConvert = function(hexcode){
	let convertedValue = function (targetValue){
		if (targetValue === 'A'){
			var finaltargetValue=10;
		}
		else if (targetValue === 'B'){
			var finaltargetValue=11;
		}
		else if (targetValue === 'C'){
			var finaltargetValue=12;
		}
		else if (targetValue === 'D'){
			var finaltargetValue=13;
		}
		else if (targetValue === 'E'){
			var finaltargetValue=14;
		}
		else if (targetValue === 'F'){
			var finaltargetValue=15;
		}
		else {var finaltargetValue=targetValue}
		return finaltargetValue;
	};

	if (hexcode.length === 4){
		var rPrelim = hexcode[1];
		var rFinal = convertedValue(rPrelim)*16;
		var gPrelim = hexcode[2];
		var gFinal = convertedValue(gPrelim)*16;
		var bPrelim = hexcode[3];
		var bFinal = convertedValue(bPrelim)*16;
	}
	else if (hexcode.length === 7){
		var r1Prelim = hexcode[1];
		var r1Final = convertedValue(r1Prelim)*16;
		var r2Prelim = hexcode[2];
		var r2Final = convertedValue(r2Prelim);
		var rFinal = Number(r1Final) + Number(r2Final);

		var g1Prelim = hexcode[3];
		var g1Final = convertedValue(g1Prelim)*16;
		var g2Prelim = hexcode[4];
		var g2Final = convertedValue(g2Prelim);
		var gFinal = Number(g1Final) + Number(g2Final);

		var b1Prelim = hexcode[5];
		var b1Final = convertedValue(b1Prelim)*16;
		var b2Prelim = hexcode[6];
		var b2Final = convertedValue(b2Prelim);
		var bFinal = Number(b1Final) + Number(b2Final);
	}

	var RGBObject = {
		"R": rFinal,
		"G": gFinal,
		"B": bFinal
	};

	return RGBObject;
};

let RGBToHSLConvert = function(rValue, gValue, bValue){
	let rgbDecArray = [rValue/255,gValue/255,bValue/255];
	let maxValue = Math.max(rValue/255,gValue/255,bValue/255);
	let minValue = Math.min(rValue/255,gValue/255,bValue/255);
	let maxIndex = rgbDecArray.indexOf(maxValue);
	let maxMinDiff = maxValue - minValue;
	let maxMinSum = maxValue + minValue;

	let lValue = maxMinSum/2;
	let sValue;
	let hPrelim;
	let hValue

	if(maxValue===minValue){
		sValue=0;
		hValue=0;
	}
	else{
		if(lValue<= 0.5){
			sValue = Math.round(maxMinDiff/maxMinSum);
		}
		else{
			sValue = Math.round(maxMinDiff/(2 - maxValue - minValue));
		}

		if(maxIndex === 0){
			hPrelim = (rgbDecArray[1]- rgbDecArray[2])/maxMinDiff;
		}
		else if (maxIndex === 1){
			hPrelim = (2 + rgbDecArray[2]- rgbDecArray[0])/maxMinDiff;
		}
		else{
			hPrelim = (4 + rgbDecArray[0]- rgbDecArray[1])/maxMinDiff;
		};

		hValue = Math.round(hPrelim*60);		
	};

	let HSLObject = {
		"H":  Math.round(hValue),
		"S":  Math.round(sValue*1000)/10,
		"L":  Math.round(lValue*1000)/10
	};

	return HSLObject;
};

let HSLToRGBConvert = function(hValue, sValue, lValue){
	

	let rValue;
	let gValue;
	let bValue;

	let lPrelim;
	let lPrelim2;
	let hPrelim;

	if(sValue === 0){
		let RGBValue = (lValue/100)*255;
		let RGBObject = {
			"R":RGBValue,
			"G":RGBValue,
			"B": RGBValue
		};
		return RGBObject
	}
	
	if(lValue < 0.5){
		lPrelim = lValue*(1+sValue);
	}
	else{
		lPrelim = (lValue + sValue) - (lValue*sValue);
	};
	
	lPrelim2 = 2*lValue - lPrelim
	hPrelim = hValue/360;

	let rPrelim = hPrelim + 0.333;
	let gPrelim = hPrelim;
	let bPrelim = hPrelim - 0.333;

	let RGBPrelimArray = [rPrelim, gPrelim, bPrelim];

	for(let i = 0; i < RGBPrelimArray.length; i++){
		if(RGBPrelimArray[i]>1){
			RGBPrelimArray[i] += -1; 
		}
		else if(RGBPrelimArray[i]<0){
			RGBPrelimArray[i]+=1;
		}

	};

	for(let i=0; i<RGBPrelimArray.length; i++){
		let valueHolder = RGBPrelimArray[i];
		let finalValueHolder;
		if(6*RGBPrelimArray[i]<1){
			finalValueHolder = lPrelim2 + (lPrelim - lPrelim2)*6*valueHolder;
		}
		else if(2*RGBPrelimArray[i]<1){
			finalValueHolder = lPrelim;
		}
		else if(3*RGBPrelimArray[i]<2){
			finalValueHolder = lPrelim2 + (lPrelim - lPrelim2)*(0.666-valueHolder)*6;
		}
		else{
			finalValueHolder = lPrelim2;
		};

		RGBPrelimArray[i] = Math.round(finalValueHolder);
	};

	let RGBObject = {
		"R":RGBPrelimArray[0],
		"G":RGBPrelimArray[1],
		"B":RGBPrelimArray[2]
	};

	return RGBObject
};

