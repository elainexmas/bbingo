 $(document).ready(function(){
   
   var usedArray = new Array(76);
   var baseArray = new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4);
   var number = 0;
   var base = 0;
   
   init();
   
	function init(){
		 for(var i = 0; i<24; i++){
			fillCard(i);
		 }
	 }
	  	 
	 function fillCard(i){
		 base = baseArray[i] * 15;
		 number = base + Math.floor(Math.random()*15)+1;	
		 
		 
		 if(usedArray[number] != true){
			$('#cell'+i).html(number);
				usedArray[number] = true;
			}else{
				fillCard(i);
			}
	 }
	 
	 function resetUsedNumbersArray(){
		for(var j = 0; j < usedArray.length; j++){
		usedArray[j] = false;
		}	
	 }
	 
	 
	 $('#newCard').click(function(){
		resetUsedNumbersArray();
		init();
	 });
	 
	 $('td').click(function(){
		
		var toggle = this.style;
		toggle.backgroundColor = toggle.backgroundColor? "":"#333";
		toggle.color = toggle.color? "":"#fff";
	 });

 });

