// Question 3: Write a function that converts HEX to RGB. 
// Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB 
// and if you enter RGB color format it returns HEX.

//Solucion for Question3

const isValidRGB = (a,b,c) => {
	if (a >= 0 && a<256 && b>= 0 && b<256 && c>=0 && c<256)
		return true;
	else
		return false;
}

const rgbtoString = (a,b,c) => {
	if (isValidRGB(a,b,c))
		return `rgb(${a}, ${b}, ${c})`;
	else
	{
		console.log('invalid value');
		return false;
	} 
}

const hexToString = (a,b,c) => {
	return "#" + a.toString(16) + b.toString(16)+c.toString(16);
}



const colorConvertor = (a,b,c) => {
	let tmp = a.toString();
	let num1, num2, num3;
	if (tmp.length === 7 && tmp[0] === "#")
	{
		num1 = parseInt(tmp[1] + tmp[2],16);
		num2 = parseInt(tmp[3] + tmp[4],16);
		num3 = parseInt(tmp[5] + tmp[6],16);
		return rgbtoString(num1,num2,num3);	
	}
	else if (tmp.length === 6)
	{
		num1 = parseInt(tmp[0] + tmp[1],16);
		num2 = parseInt(tmp[2] + tmp[3],16);
		num3 = parseInt(tmp[4] + tmp[5],16);
		return rgbtoString(num1,num2,num3);	
	}
	else if (isValidRGB(a,b,c))
	{
		return hexToString(a,b,c);
	}
	else 
	{
		console.log('invalid value');
		return false;
	}
}


colorConvertor("#FFABCD");
//"rgb(255, 171, 205)"
colorConvertor("00DEFF");
//"rgb(0, 222, 255)"
colorConvertor(245,49,138);
//"#f5318a"
colorConvertor("wxbwgw")
// invalid value
// false
colorConvertor(922,-1,29);
// invalid value
// false