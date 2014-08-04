$(document).ready(function(){
    var options = [];
    var frequencies = [];

    function loadData() {
        return $.ajax({
            type: "GET",
            url: "data.txt",
            dataType: "text"
        });
    }
    
    function processData(allText){
        var allTextLines = allText.split(/\n/);
        var lines = [];
        
        for(var i = 0; i < allTextLines.length; i++){
            var data = allTextLines[i].split(',');
            if (data.length != 2) {
            	if (allTextLines[i].length > 0) {
            	    console.log('Skipping invalid line:', allTextLines[i]);
            	}
            	continue;
            }
            options.push(data[0]);
            frequencies.push(data[1]);
        }
    }

    var usedArray;
    var baseArray = [];
    var clickedCells = [];
   
    loadData().done(processData).done(init);

    function init(){
        prepareBaseArray();
        fillCard();
    }

    function fillCard(){
        var i = 0;
        while(i < 25){
            number = Math.floor(Math.random()*baseArray.length);
            if(usedArray[number] != true){
                var name = baseArray[number];
                $('#cell'+i).html(name);
                usedArray[number] = true;
                i++;
            }
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
    
    function resetCells(){
        var cells = document.getElementsByTagName("TD");
        for (i = 0; i < cells.length; i++){
            if(cells[i].id != "free"){
                cells[i].style.backgroundColor = "#eee";
                cells[i].style.color = "#333";
            }
        }
        clickedCells = [];
    }

    $('#newCard').click(function(){
        //resetCells();
        //usedArray = new Array(baseArray.length);
        //fillCard();
        location.reload();
    });
	 
    $('td').click(function(){
        if(this.id != "end"){
            var toggle = this.style;
            toggle.backgroundColor = toggle.backgroundColor? "":"#333";
            toggle.color = toggle.color? "":"#fff";

            // add logic
            clickedCells.push(this.id);
            checkForWin();
        }
   })
 
    function checkForWin(){
        // diagonals
        if(clickedCells.indexOf("cell0") > -1 && clickedCells.indexOf("cell6") > -1 && clickedCells.indexOf("cell18") > -1 && clickedCells.indexOf("cell24") > -1){
            alert("BINGO!")
        }
        if(clickedCells.indexOf("cell20") > -1 && clickedCells.indexOf("cell16") > -1 && clickedCells.indexOf("cell8") > -1 && clickedCells.indexOf("cell4") > -1)
            alert("BINGO!")
       // rows
        if(clickedCells.indexOf("cell0") > -1 && clickedCells.indexOf("cell5") > -1 && clickedCells.indexOf("cell10") > -1 && clickedCells.indexOf("cell15") > -1 && clickedCells.indexOf("cell20") > -1)
            alert("BINGO!")
        if(clickedCells.indexOf("cell1") > -1 && clickedCells.indexOf("cell6") > -1 && clickedCells.indexOf("cell11") > -1 && clickedCells.indexOf("cell16") > -1 && clickedCells.indexOf("cell21") > -1)
            alert("BINGO!")
            
        if(clickedCells.indexOf("cell2") > -1 && clickedCells.indexOf("cell7") > -1 && clickedCells.indexOf("cell17") > -1 && clickedCells.indexOf("cell22") > -1)
            alert("BINGO!")
        if(clickedCells.indexOf("cell3") > -1 && clickedCells.indexOf("cell8") > -1 && clickedCells.indexOf("cell13") > -1 && clickedCells.indexOf("cell18") > -1 && clickedCells.indexOf("cell23") > -1)
            alert("BINGO!")
        if(clickedCells.indexOf("cell4") > -1 && clickedCells.indexOf("cell9") > -1 && clickedCells.indexOf("cell14") > -1 && clickedCells.indexOf("cell19") > -1 && clickedCells.indexOf("cell24") > -1)
            alert("BINGO!")

        // columns
        if(clickedCells.indexOf("cell0") > -1 && clickedCells.indexOf("cell1") > -1 && clickedCells.indexOf("cell2") > -1 && clickedCells.indexOf("cell3") > -1 && clickedCells.indexOf("cell4") > -1)
            alert("BINGO!")
        if(clickedCells.indexOf("cell5") > -1 && clickedCells.indexOf("cell6") > -1 && clickedCells.indexOf("cell7") > -1 && clickedCells.indexOf("cell8") > -1 && clickedCells.indexOf("cell9") > -1)
            alert("BINGO!")
        if(clickedCells.indexOf("cell10") > -1 && clickedCells.indexOf("cell11") > -1 && clickedCells.indexOf("cell13") > -1 && clickedCells.indexOf("cell14") > -1)
            alert("BINGO!")
        if(clickedCells.indexOf("cell15") > -1 && clickedCells.indexOf("cell16") > -1 && clickedCells.indexOf("cell17") > -1 && clickedCells.indexOf("cell18") > -1 && clickedCells.indexOf("cell19") > -1)
            alert("BINGO!")
        if(clickedCells.indexOf("cell20") > -1 && clickedCells.indexOf("cell21") > -1 && clickedCells.indexOf("cell22") > -1 && clickedCells.indexOf("cell23") > -1 && clickedCells.indexOf("cell24") > -1)
            alert("BINGO!")
    }
    
});

