	var addd =$('#addd')
	var sub =$('#substract');
	var multi =$('#multiply');
	var divid =$('#divide');
	var clear =$('#clear');
	var equal =$('#equal');
	var result = $('#result');
	var input = $('#A');
	var log = $('#log');

	var calculator ={
		sum:0,
		addd:function(value){
			this.sum=this.sum+value;
		},
		sub:function(value){
			this.sum=this.sum-value;
		},
		multi:function(value){
			this.sum=this.sum*value;
		},
		divid:function(value){
			this.sum=this.sum/value;
		},
		clear:function(){
			this.sum = 0;
		},
		equal:function(){
			return this.sum;
		}
	}

	function logg(value,choice){
		log.append('<tr><td>'+choice+'</td><td>'+value+'</td></tr>');
	}

	function displayy(value){
		result.html(value);
	}

	$('button').on('click',function(){
		// console.log(this.className);
		var choice = this.className;

			if(choice === "addd"){
				if(input.val()===""){
					alert('enter value');
				}else{
				console.log(parseInt(input.val()));
				calculator.addd(parseInt(input.val()));
				logg(parseInt(input.val()),choice);
				input.val("");

				}
			}
			else if(choice === "substract"){
				if(input.val()===""){
					alert('enter value');
				}else{
				console.log(parseInt(input.val()));
				calculator.sub(parseInt(input.val()));
				logg(parseInt(input.val()),choice);
				input.val("");
				}
			}
			else if(choice === "multiply"){
				if(input.val()===""){
					alert('enter value');
				}else{
				console.log(parseInt(input.val()));
				calculator.multi(parseInt(input.val()));
				logg(parseInt(input.val()),choice);
				input.val("");
				}
			}
			else if(choice === "divide"){
				if(input.val()===""){
					alert('enter value');
				}else{
				console.log(parseInt(input.val()));
				calculator.divid(parseInt(input.val()));
				logg(parseInt(input.val()),choice);
				input.val("");
				}
			}
			else if(choice === "clear"){
				calculator.clear();
				logg(0,choice);
				input.val("");
			}
			else if(choice === "equal"){
				console.log(calculator.equal());
				displayy(calculator.equal());
				logg(calculator.equal(),choice);
				input.val("");
			}
		
		
	})