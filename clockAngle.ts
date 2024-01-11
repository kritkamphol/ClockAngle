function getClockAngle(hh_mm:string){
        let hm:string[] = hh_mm.split(":")
        let hh:number = parseInt(hm[0])
        let mm:number = parseInt(hm[1])
    if(hh_mm.includes(":") && hh >= 0 && mm >=0){
        if(24 > hh && hh >= 12){
        let hours:number = hh - 12
        let degree_min:number = mm*6
        let degree_hours:number = hours*30 + (degree_min/12)
        let degree:number = Math.abs(degree_hours - degree_min) 
        console.log(degree)
    }else if(6< hh && hh < 12){
        let hours:number = 12 - hh
        let degree_min:number = mm*6
        let degree_hours:number = hours*30 - (degree_min/12)
        let degree:number = Math.abs(degree_hours - degree_min) 
        console.log(degree)
    }else{
        let hours:number = hh
        let degree_min:number = mm*6
        let degree_hours:number = hours*30 + (degree_min/12)
        let degree:number = Math.abs(degree_hours - degree_min) 
        console.log(degree)
    }
    }else{
        console.log('Please fill new time again for example "9:30" ' )
    }
    
    
}
getClockAngle("9:30")