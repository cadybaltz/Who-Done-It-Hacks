$(function(){
    var location = 0;
	
	$('#keyboard li').click(function(){
		var $this = $(this);
		if ($this.hasClass('delete')) {
            $('.' + location).html('<img src="./symbols/0.png"/>')
            location--;
		}
		
		if ($this.hasClass('symbol')) {
            character = $this.attr('id');

            // Add the character
            $('.' + location).html('<img src="./symbols/' + character + '.png"/>')

            location++;

            console.log(location)
        
            if(location % 17 == 0) {
                console.log("here")
                $('.encrypted').html($('.encrypted').html() + 
                    '<tr align="center"><td scope="col" class="'
                    + location +
                    '"><img src="./symbols/0.png"/></td><td scope="col" class="'
                    + (location + 1) +
                    '"><img src="./symbols/0.png"/></td><td scope="col" class="'
                    + (location + 2) +
                    '"><img src="./symbols/0.png"/></td><td scope="col" class="'
                    + (location + 3) +
                    '"><img src="./symbols/0.png"/></td><td scope="col" class="'
                    + (location + 4) +
                    '"><img src="./symbols/0.png"/></td><td scope="col" class="'
                    + (location + 5) +
                    '"><img src="./symbols/0.png"/></td><td scope="col" class="'
                    + (location + 6) +
                    '"><img src="./symbols/0.png"/></td><td scope="col" class="'
                    + (location + 7) +
                    '"><img src="./symbols/0.png"/></td><td scope="col" class="'
                    + (location + 8) +
                    '"><img src="./symbols/0.png"/></td><td scope="col" class="'
                    + (location + 9) +
                    '"><img src="./symbols/0.png"/></td><td scope="col" class="'
                    + (location + 10) +
                    '"><img src="./symbols/0.png"/></td><td scope="col" class="'
                    + (location + 11) +
                    '"><img src="./symbols/0.png"/></td><td scope="col" class="'
                    + (location + 12) +
                    '"><img src="./symbols/0.png"/></td><td scope="col" class="' 
                    + (location + 13) +
                    '"><img src="./symbols/0.png"/></td><td scope="col" class="'
                    + (location + 14) +
                    '"><img src="./symbols/0.png"/></td><td scope="col" class="'
                    + (location + 15) +
                    '"><img src="./symbols/0.png"/></td><td scope="col" class="'
                    + (location + 16) +
                    '"><img src="./symbols/0.png"/></td><td scope="col" class="'
                    + (location + 17) +
                    + '"><img src="./symbols/0.png"/></td></tr>'
                )
            }
        }
	});
});