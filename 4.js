var arrInput = [
	{
		name: "Movies", info: "category_name",
		data: [
			{ name: "Interstellar", info: "category_data" },
			{ name: "Dark Knight", info: "category_data" },
						]
	},
	{
		name: "Music", info: "category_name",
		data: [
			{ name: "Adams", info: "category_data" },
			{ name: "Nirvana", info: "category_data" },
						]
	}
]

function rearrangeData(data){
var arr = data

output = []
arrName = []
arrInfo = []
for (i=0; i < arr.length; i++){
	arrName.push(arr[i]['name'])
  arrInfo.push(arr[i]['info'])
	 arrData = arr[i]['data']
  for (j=0; j < arr.length; j++){
  	arrName = arrName.concat(arrData[j]['name'])
    arrInfo = arrInfo.concat(arrData[j]['info'])
  }
}


for (i = 0; i < arrName.length ; i++){
	name = arrName[i]
  info = arrInfo[i]
	output.push({name,info})
}
return output

}

console.log(rearrangeData(arrInput))