$(document).ready(function(){
    var usedArray;
    var baseArray = [];
    var clickedCells = [];

    var options = new Array("foo", "bar", "baz", "blorp", "chompy")
    var frequencies = new Array(1,2,3,4,5)

    var number = 0;
    var base = 0;
   
    init();
   
    function init(){
        prepareBaseArray();
        for(var i = 0; i<25; i++){
            fillCard(i);
        }
    }	  	 
    function fillCard(i){
        number = Math.floor(Math.random()*baseArray.length);

        if(usedArray[number] != true){
            var name = baseArray[number];
            $('#cell'+i).html(name);
	    usedArray[number] = true;
	} else {
	    fillCard(i);
        }   
    }
    
    function prepareBaseArray(){
        var product = 1;
        for(var i = 0; i < options.length; i++){
            product *= frequencies[i];
        }

        for(var j = 0; j < options.length; j++){
            
            var contribSize = product / frequencies[j];
            for (var k = 0; k < contribSize; k++){
                baseArray.push(options[j])
            }
        }
        usedArray = new Array(baseArray.length);

    }
    
    function resetUsedNumbersArray(){
        for(var j = 0; j < usedArray.length; j++){
            usedArray[j] = false;
        }	
    }
	 
    function resetCells(){
        var cells = document.getElementsByTagName("TD");
        for (i = 0; i < cells.length; i++){
            cells[i].style.backgroundColor = "#eee";
            cells[i].style.color = "#333";
        }
        clickedCells = [];
    }

    $('#newCard').click(function(){
        resetUsedNumbersArray();
	init();
        resetCells();
    });
	 
    $('td').click(function(){
	var toggle = this.style;
	toggle.backgroundColor = toggle.backgroundColor? "":"#333";
	toggle.color = toggle.color? "":"#fff";

        // add logic
        clickedCells.push(this.id);
        hasWon = checkForWin();
        if(hasWon)
            alert("BINGO");
    });

    function checkForWin(){
        // diagonals
        if(clickedCells.indexOf("cell0") > -1 && clickedCells.indexOf("cell6") > -1 && clickedCells.indexOf("cell18") > -1 && clickedCells.indexOf("cell24") > -1){
            return true;
        }
        if(clickedCells.indexOf("cell20") > -1 && clickedCells.indexOf("cell16") > -1 && clickedCells.indexOf("cell8") > -1 && clickedCells.indexOf("cell4") > -1)
            return true;
        // rows
        if(clickedCells.indexOf("cell0") > -1 && clickedCells.indexOf("cell5") > -1 && clickedCells.indexOf("cell10") > -1 && clickedCells.indexOf("cell15") > -1 && clickedCells.indexOf("cell20") > -1)
            return true;
        if(clickedCells.indexOf("cell1") > -1 && clickedCells.indexOf("cell6") > -1 && clickedCells.indexOf("cell11") > -1 && clickedCells.indexOf("cell16") > -1 && clickedCells.indexOf("cell21") > -1)
            return true;
        if(clickedCells.indexOf("cell2") > -1 && clickedCells.indexOf("cell7") > -1 && clickedCells.indexOf("cell17") > -1 && clickedCells.indexOf("cell22") > -1)
            return true;
        if(clickedCells.indexOf("cell3") > -1 && clickedCells.indexOf("cell8") > -1 && clickedCells.indexOf("cell13") > -1 && clickedCells.indexOf("cell18") > -1 && clickedCells.indexOf("cell23") > -1)
            return true;
        if(clickedCells.indexOf("cell4") > -1 && clickedCells.indexOf("cell9") > -1 && clickedCells.indexOf("cell14") > -1 && clickedCells.indexOf("cell19") > -1 && clickedCells.indexOf("cell24") > -1)
            return true;

        // columns
        if(clickedCells.indexOf("cell0") > -1 && clickedCells.indexOf("cell1") > -1 && clickedCells.indexOf("cell2") > -1 && clickedCells.indexOf("cell3") > -1 && clickedCells.indexOf("cell4") > -1)
            return true;
        if(clickedCells.indexOf("cell5") > -1 && clickedCells.indexOf("cell6") > -1 && clickedCells.indexOf("cell7") > -1 && clickedCells.indexOf("cell8") > -1 && clickedCells.indexOf("cell9") > -1)
            return true;
        if(clickedCells.indexOf("cel10") > -1 && clickedCells.indexOf("cell11") > -1 && clickedCells.indexOf("cell13") > -1 && clickedCells.indexOf("cell14") > -1)
            return true;
        if(clickedCells.indexOf("cell15") > -1 && clickedCells.indexOf("cell6") > -1 && clickedCells.indexOf("cell17") > -1 && clickedCells.indexOf("cell18") > -1 && clickedCells.indexOf("cell19") > -1)
            return true;
        if(clickedCells.indexOf("cell20") > -1 && clickedCells.indexOf("cell21") > -1 && clickedCells.indexOf("cell22") > -1 && clickedCells.indexOf("cell23") > -1 && clickedCells.indexOf("cell24") > -1)
            return true;
        return false;
        
    }
    
});

