$(function(){
    var location = 0;
	
	$('#keyboard li').click(function(){
        var $this = $(this);
        
        // Delete
		if ($this.hasClass('delete')) {
            if(location >= 0) {
                $('#' + location).html('<img src="./symbols/0.png"/>')
                $('#' + location).removeClass();
                $('#' + location).addClass('0');
                if(location > 0) {
                    location--;
                }
            }
		}
		
		if ($this.hasClass('symbol')) {
            character = $this.attr('class').split(' ')[1];
            addLetter(character);
        }
    });

    $('.encrypt-button').click(function(){
        var message = $('#write').val();

        var numRows = message.length / 17;
        console.log("num rows: " + numRows);
        for(var i = 1; i < numRows; i++) {
            console.log("adding row with " + (i * 17));
            addRow(i * 17);
        }

        var groupsOfNine = message.length / (17 * 9);

        console.log("go9: " + groupsOfNine);
        var startingYValue = 0;
        for(var i = 0; i < groupsOfNine; i++) {
            // Each group of nine lines
            var numNeededPerPass = numRows - startingYValue;
            if(numNeededPerPass > 9) {
                numNeededPerPass = 9;
            }
            console.log("num needed per pass: " + numNeededPerPass);
            var currentMaxYValue = startingYValue + numNeededPerPass;
            for(var j = 0; j < 17; j++) {
                // For each value along the top row of the group of nine
                var xValue = j;
                var yValue = startingYValue;
                console.log("starting x: " + xValue);
                console.log("starting y: " + yValue);
                for(var k = 0; k < numNeededPerPass; k++) {
                    // for each value in the diagonal
                    if(location < message.length) {
                        // Getting next letter
                        var symbolValue = getSymbolFromLetter(message[location]);

                        var imageValue;
                        if(symbolValue == message[location].toUpperCase()) {
                            imageValue = 0;
                        }
                        else {
                            imageValue = symbolValue;
                        }

                        var currentId = yValue * 17 + xValue;

                        $('#' + currentId).html('<img src="./symbols/' + imageValue + '.png"/>');
                        $('#' + currentId).removeClass();
                        $('#' + currentId).addClass(symbolValue);
                        
                        xValue+=2;
                        yValue++;
                        if(xValue == 17) {
                            xValue = 0;
                        }
                        else if(xValue == 18) {
                            xValue = 1;
                        }
                        if(yValue > currentMaxYValue) {
                            yValue--;
                            xValue = 0;
                        }

                        location++;
                        
                    }
                    else {
                        return;
                    }
                }
            }
            startingYValue += 9;
        }
    });
    
 

    $('.export-button').click(function(){
        var message = "";
        console.log("location: " + location);
        for(var i = 0; i <= location; i++) {
            var value = $('#' + i).attr('class');
            if(value != undefined) {
                message = message + value;
                if(i!=location) {
                    message += " ";
                }
            } 
        }
        download(message);
    });

    $('.reset-button').click(function(){
        reset();
    });

    function reset() {
        while(location >= 0) {
            $('#' + location).html('<img src="./symbols/0.png"/>')
            $('#' + location).removeClass();
            $('#' + location).addClass('0');
            location--;
        }
        location = 0;
    }

    function addLetter(character) {
        $('#' + location).html('<img src="./symbols/' + character + '.png"/>');
        $('#' + location).removeClass();
        $('#' + location).addClass(character);

        location++;

        if(location % 17 == 0) {
            addRow(location);
        }
    }

    function addRow(location) {
        $('.encrypted').html($('.encrypted').html() + 
            '<tr align="center"><td scope="col" class="0" id="'
            + location +
            '"><img src="./symbols/0.png"/></td><td scope="col" class="0" id="'
            + (location + 1) +
            '"><img src="./symbols/0.png"/></td><td scope="col" class="0" id="'
            + (location + 2) +
            '"><img src="./symbols/0.png"/></td><td scope="col" class="0" id="'
            + (location + 3) +
            '"><img src="./symbols/0.png"/></td><td scope="col" class="0" id="'
            + (location + 4) +
            '"><img src="./symbols/0.png"/></td><td scope="col" class="0" id="'
            + (location + 5) +
            '"><img src="./symbols/0.png"/></td><td scope="col" class="0" id="'
            + (location + 6) +
            '"><img src="./symbols/0.png"/></td><td scope="col" class="0" id="'
            + (location + 7) +
            '"><img src="./symbols/0.png"/></td><td scope="col" class="0" id="'
            + (location + 8) +
            '"><img src="./symbols/0.png"/></td><td scope="col" class="0" id="'
            + (location + 9) +
            '"><img src="./symbols/0.png"/></td><td scope="col" class="0" id="'
            + (location + 10) +
            '"><img src="./symbols/0.png"/></td><td scope="col" class="0" id="'
            + (location + 11) +
            '"><img src="./symbols/0.png"/></td><td scope="col" class="0" id="'
            + (location + 12) +
            '"><img src="./symbols/0.png"/></td><td scope="col" class="0" id="' 
            + (location + 13) +
            '"><img src="./symbols/0.png"/></td><td scope="col" class="0" id="'
            + (location + 14) +
            '"><img src="./symbols/0.png"/></td><td scope="col" class="0" id="'
            + (location + 15) +
            '"><img src="./symbols/0.png"/></td><td scope="col" class="0" id="'
            + (location + 16) +
            '"><img src="./symbols/0.png"/></td><td scope="col" class="0" id="'
            + (location + 17) +
            + '"><img src="./symbols/0.png"/></td></tr>'
        )
    }

    document.getElementById('customFile').addEventListener('change', readFileAsString)
    function readFileAsString() {
        var files = this.files;
        if (files.length === 0) {
            console.log('No file is selected');
            return;
        }

        // import
        var reader = new FileReader();
        reader.onload = function(event) {
            var encryptedMessage = event.target.result;
            var values = encryptedMessage.split(" ");
            reset();
            for(var i = 0; i < values.length; i++) {
                addLetter(values[i]);
            }
        };
        reader.readAsText(files[0]);
    }
});



function decryptMessage(message) {
    var messageString = "";
    for(var i = 0; i < message.length; i++) {
        if(message[i] == "7" || message[i] == "39" || message[i] == "43" || message[i] == "66" || message[i] == "72") {
            messageString += "A";
        }
        else if(message[i] == "58" || message[i] == "63") {
            messageString += "B";
        }
        else if(message[i] == "67") {
            messageString += "C";
        }
        else if(message[i] == "18" || message[i] == "29" || message[i] == "47") {
            messageString += "D";
        }
        else if(message[i] == "16" || message[i] == "30" || message[i] == "42" || message[i] == "59" || message[i] == "60" || message[i] == "73") {
            messageString += "E";
        }
        else if(message[i] == "34") {
            messageString += "F";
        }
        else if(message[i] == "40") {
            messageString += "G";
        }
        else if(message[i] == "8") {
            messageString += "H";
        }
        else if(message[i] == "24" || message[i] == "36" || message[i] == "44" || message[i] == "65" || message[i] == "71") {
            messageString += "I";
        }
        else if(message[i] == "19" || message[i] == "61" || message[i] == "70") {
            messageString += "L";
        }
        else if(message[i] == "14") {
            messageString += "M";
        }
        else if(message[i] == "10" || message[i] == "21" || message[i] == "26" || message[i] == "32" || message[i] == "53") {
            messageString += "N";
        }
        else if(message[i] == "41" || message[i] == "46" || message[i] == "50" || message[i] == "57") {
            messageString += "O";
        }
        else if(message[i] == "20" || message[i] == "64") {
            messageString += "P";
        }
        else if(message[i] == "13" || message[i] == "33" || message[i] == "48" || message[i] == "52"  || message[i] == "54") {
            messageString += "R";
        }
        else if(message[i] == "4" || message[i] == "9" || message[i] == "38" || message[i] == "49") {
            messageString += "S";
        }
        else if(message[i] == "2" || message[i] == "3" || message[i] == "5" || message[i] == "22" || message[i] == "23" || message[i] == "35") {
            messageString += "T";
        }
        else if(message[i] == "11" || message[i] == "28" || message[i] == "68") {
            messageString += "U";
        }
        else if(message[i] == "17") {
            messageString += "V";
        }
        else if(message[i] == "6" || message[i] == "51") {
            messageString += "W";
        }
        else if(message[i] == "15" || message[i] == "31") {
            messageString += "Y";
        }
        // Note: the following were not given in the key
        else if(message[i] == "1" || message[i] == "12" || message[i] == "25" || message[i] == "27") {
            messageString += "X";
        }
        else if(message[i] == "37") {
            messageString += "I";
        }
        else if(message[i] == "45") {
            messageString += "Q";
        }
        else if(message[i] == "56") {
            messageString += "\\";
        }
        else if(message[i] == "62") {
            messageString += "E";
        }
        else if(message[i] == "69") {
            messageString += "R";
        }
        else {
            messageString += message[i];
        }
    }
    return messageString;
}

function getSymbolFromLetter(letter) {
    letter = letter.toUpperCase();
    if(letter == "A") {
        array = ["7", "39", "43", "66", "72"]
        return array[Math.floor(Math.random() * array.length)];
    }
    else if(letter == "B") {
        array = ["58", "63"]
        return array[Math.floor(Math.random() * array.length)];
    }
    else if(letter == "C") {
        return "67";
    }
    else if(letter == "D") {
        array = ["18", "29", "47"]
        return array[Math.floor(Math.random() * array.length)];
    }
    else if(letter == "E") {
        array = ["16", "30", "42", "59", "60", "73", "62"] // 62 added
        return array[Math.floor(Math.random() * array.length)];
    }
    else if(letter == "F") {
        return "34";
    }
    else if(letter == "G") {
        return "40";
    }
    else if(letter == "H") {
        return "8";
    }
    else if(letter == "I") {
        array = ["24", "36", "44", "65", "71", "37"] // 37 added
        return array[Math.floor(Math.random() * array.length)];
    }
    else if(letter == "L") {
        array = ["19", "61", "70"]
        return array[Math.floor(Math.random() * array.length)];
    }
    else if(letter == "M") {
        return "14";
    }
    else if(letter == "N") {
        array = ["10", "21", "26", "32", "53"]
        return array[Math.floor(Math.random() * array.length)];
    }
    else if(letter == "O") {
        array = ["41", "46", "50", "57"]
        return array[Math.floor(Math.random() * array.length)];
    }
    else if(letter == "P") {
        array = ["20", "64"]
        return array[Math.floor(Math.random() * array.length)];
    }
    else if(letter == "R") {
        array = ["13", "33", "48", "52", "54", "69"] // 69 added
        return array[Math.floor(Math.random() * array.length)];
    }
    else if(letter == "S") {
        array = ["4", "9", "38", "49", "54"]
        return array[Math.floor(Math.random() * array.length)];
    }
    else if(letter == "T") {
        array = ["2", "3", "5", "22", "23", "35"]
        return array[Math.floor(Math.random() * array.length)];
    }
    else if(letter == "U") {
        array = ["11", "28", "68"]
        return array[Math.floor(Math.random() * array.length)];
    }
    else if(letter == "V") {
        return "17";
    }
    else if(letter == "W") {
        array = ["6", "51"]
        return array[Math.floor(Math.random() * array.length)];
    }
    else if(letter == "Y") {
        array = ["15", "31"]
        return array[Math.floor(Math.random() * array.length)];
    }
    // Note: the following were not given in the key
    else if(letter == "X") {
        array = ["1", "12", "25", "27"]
        return array[Math.floor(Math.random() * array.length)];
    }
    else if(letter == "Q") {
        return "45";
    }
    else if(letter == "\\") {
        return "56";
    }
    else {
        return letter;
    }
}

function download(text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', "EncryptedMessage.txt");
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}

