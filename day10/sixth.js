let a=+prompt("Enter number")   
        spell=""
        switch(a){
            case 0:
                spell="zero"
                break;
            case 1:
                spell="one"
                break;
            case 2:
                spell="two"
                break;
            case 3:
                spell="three"
                break;
            case 4:
                spell="four"
                break;
            case 5:
                spell="five"
                break;
            case 6:
                spell="six"
                break;
            case 7:
                spell="seven"
                break;
            case 8:
                spell="eight"
                break;
            case 9:
                spell=""
                break;
            case 10:
                spell="ten"
                break;
        }
        document.write(`The spelling of ${a} is ${spell}`)