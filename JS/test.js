let x = 0
let y = 0
let height = 4 // height of the grid
let width = 4  // width of the grid

let y3 = ["# ", "# ", "# ", "# "]
let y2 = ["# ", "# ", "# ", "# "]
let y1 = ["# ", "# ", "# ", "# "]
let y0 = ["# ", "# ", "# ", "# "]

function Draw() {
	if(y == 0) {
		y0.length = 0
		for(i = width; i!=0; i--){y0.push("# ")}
		y0.splice(x, 1, "@ ")

		y1 = ["# ", "# ", "# ", "# "]
		y2 = ["# ", "# ", "# ", "# "]
		y3 = ["# ", "# ", "# ", "# "]
		
	}

	if(y == 1) {
		y1.length = 0
		for(i = width; i!=0; i--){y1.push("# ")}
		y1.splice(x, 1, "@ ")

		y0 = ["# ", "# ", "# ", "# "]
		y2 = ["# ", "# ", "# ", "# "]
		y3 = ["# ", "# ", "# ", "# "]

	}

	if(y == 2) {
		y2.length = 0
		for(i = width; i!=0; i--){y2.push("# ")}
		y2.splice(x, 1, "@ ")

		y1 = ["# ", "# ", "# ", "# "]
		y0 = ["# ", "# ", "# ", "# "]
		y3 = ["# ", "# ", "# ", "# "]

	}

	if(y == 3) {
		y3.length = 0
		for(i = width; i!=0; i--){y3.push("# ")}
		y3.splice(x, 1, "@ ")

		y1 = ["# ", "# ", "# ", "# "]
		y2 = ["# ", "# ", "# ", "# "]
		y0 = ["# ", "# ", "# ", "# "]

	}
	
	document.getElementById("y3").innerHTML = y3
	document.getElementById("y2").innerHTML = y2
	document.getElementById("y1").innerHTML = y1
	document.getElementById("y0").innerHTML = y0
	document.getElementById("xy").innerHTML = ["x", x, "y", y]
}

Draw()

function up() {
	y++
	if(y > height - 1){
		y = height - 1
	}
	Draw()
}

function down() {
	y--
	if(y < 0){
		y = 0
	}
	Draw()
}

function left() {
	x--
	if(x < 0){
		x = 0
	}
	Draw()
}

function right() {
	x++
	if(x > width - 1){
		x = width - 1
	}
	Draw()
}
