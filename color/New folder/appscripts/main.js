/* Input and Events */
console.log('FUNCTION RUNNING')

let colorDisplay = document.getElementById('displayDiv')
let RSlider = document.getElementById('RSlider')
let GSlider = document.getElementById('GSlider')
let BSlider = document.getElementById('BSlider')
let RText = document.getElementById('RText')
let GText = document.getElementById('GText')
let BText = document.getElementById('BText')
let hexText = document.getElementById('hexText')


let changeColor= function(RValue, GValue, BValue){
	colorString= "rgb(" + RValue + "," + GValue + "," + BValue +  ")"
	console.log(colorString)
	return colorString
}

let RGBtoHexConvert = function(RValue, GValue, BValue){
	convertedValue = function (TargetValue){
		if (TargetValue<10){
			var FinalTargetValue=TargetValue
		}
		else if (TargetValue === 10){
			var FinalTargetValue= 'A'
		}
		else if (TargetValue === 11){
			var FinalTargetValue= 'B'
		}
		else if (TargetValue === 12){
			var FinalTargetValue= 'C'
		}
		else if (TargetValue === 13){
			var FinalTargetValue= 'D'
		}
		else if (TargetValue === 14){
			var FinalTargetValue= 'E'
		}
		else if (TargetValue === 15){
			var FinalTargetValue= 'F'
		}
		return FinalTargetValue}

	R1Prelim=Math.floor(RValue/16)
	console.log(R1Prelim)
	R1Final = convertedValue(R1Prelim)
	R2Prelim=RValue%16
	R2Final = convertedValue(R2Prelim)

	G1Prelim=Math.floor(GValue/16)
	G1Final = convertedValue(G1Prelim)
	G2Prelim=GValue%16
	G2Final = convertedValue(G2Prelim)

	B1Prelim=Math.floor(BValue/16)
	B1Final = convertedValue(B1Prelim)
	B2Prelim=BValue%16
	B2Final = convertedValue(B2Prelim)

	hexCode = "#" + R1Final + R2Final + G1Final + G1Final + B1Final + B2Final
	console.log(hexCode)
	return hexCode
}

let hextoRGBConvert = function(hexcode){
	convertedValue = function (TargetValue){
		if (TargetValue === 'A'){
			var FinalTargetValue=10
		}
		else if (TargetValue === 'B'){
			var FinalTargetValue=11
		}
		else if (TargetValue === 'C'){
			var FinalTargetValue=12
		}
		else if (TargetValue === 'D'){
			var FinalTargetValue=13
		}
		else if (TargetValue === 'E'){
			var FinalTargetValue=14
		}
		else if (TargetValue === 'F'){
			var FinalTargetValue=15
		}
		else {var FinalTargetValue=TargetValue}
		return FinalTargetValue}

	if (hexcode.length === 4){
		var RPrelim = hexcode[1]
		var RFinal = convertedValue(RPrelim)*16
		var GPrelim = hexcode[2]
		var GFinal = convertedValue(GPrelim)*16
		var BPrelim = hexcode[3]
		var BFinal = convertedValue(BPrelim)*16
	}
	else if (hexcode.length === 7){
		var R1Prelim = hexcode[1]
		var R1Final = convertedValue(R1Prelim)*16
		var R2Prelim = hexcode[2]
		var R2Final = convertedValue(R2Prelim)
		var RFinal = Number(R1Final) + Number(R2Final)

		var G1Prelim = hexcode[3]
		var G1Final = convertedValue(G1Prelim)*16
		var G2Prelim = hexcode[4]
		var G2Final = convertedValue(G2Prelim)
		var GFinal = Number(G1Final) + Number(G2Final)

		var B1Prelim = hexcode[5]
		var B1Final = convertedValue(B1Prelim)*16
		var B2Prelim = hexcode[6]
		var B2Final = convertedValue(B2Prelim)
		var BFinal = Number(B1Final) + Number(B2Final)
	}

	var RGBObject = {
		"R": RFinal,
		"G": GFinal,
		"B": BFinal}

	return RGBObject
}


RSlider.addEventListener('click', function(ev){
	let RValue = RSlider.value
	console.log(RValue)
	RText.value = RValue
	colorDisplay.style.backgroundColor=changeColor(RText.value, GText.value, BText.value)
	hexText.value = RGBtoHexConvert(RText.value, GText.value, BText.value)
})

GSlider.addEventListener('click', function(ev){
	let GValue = GSlider.value
	console.log(GValue)
	GText.value = GValue
	colorDisplay.style.backgroundColor=changeColor(RText.value, GText.value, BText.value)
	hexText.value = RGBtoHexConvert(RText.value, GText.value, BText.value)
})

BSlider.addEventListener('click', function(ev){
	let BValue = BSlider.value
	console.log(BValue)
	BText.value = BValue
	colorDisplay.style.backgroundColor=changeColor(RText.value, GText.value, BText.value)
	hexText.value = RGBtoHexConvert(RText.value, GText.value, BText.value)
})

RText.addEventListener('input', function(ev){
	let RValue = RText.value
	console.log(RValue)
	console.log(Number.isInteger(RValue))
	RSlider.value = RValue
	colorDisplay.style.backgroundColor=changeColor(RText.value, GText.value, BText.value)
	hexText.value = RGBtoHexConvert(RText.value, GText.value, BText.value)
})

GText.addEventListener('input', function(ev){
	let GValue = GText.value
	console.log(GValue)
	GSlider.value = GValue
	colorDisplay.style.backgroundColor=changeColor(RText.value, GText.value, BText.value)
	hexText.value = RGBtoHexConvert(RText.value, GText.value, BText.value)
})

BText.addEventListener('input', function(ev){
	let BValue = BText.value
	console.log(BValue)
	BSlider.value = BValue
	colorDisplay.style.backgroundColor=changeColor(RText.value, GText.value, BText.value)
	hexText.value = RGBtoHexConvert(RText.value, GText.value, BText.value)
})

hexText.addEventListener('input',function(ev){
	let hexValue = hexText.value
	colorDisplay.style.backgroundColor=hexValue
	RGBObject = hextoRGBConvert(hexValue)
	RText.value = RGBObject["R"]
	GText.value = RGBObject["G"]
	BText.value = RGBObject["B"]
}

	)