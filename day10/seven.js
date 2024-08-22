let x=prompt("Enter day")
        let day=""
        switch(x){
        case "":
            day="first day"
            break
        case "tuesday":
            day="second day"
            break
        case "wednesday":
            day="third day"
            break
        case "thursday":
            day="fourth day"
            break
        case "friday":
            day="fifth day"
            break
        case "saturday":
            day="sixth day"
            break
        case "sunday" :
            day="seventh day"
            break
        default:
            day:"not a week day"
        
        }
        document.write(`This is  ${day}`)