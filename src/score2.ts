

function getScore2(age: number, systBT: number, cholesterol: number, hdl: number, smoker: boolean, male: boolean) {
    const nonHDL = cholesterol - hdl
    if (male) {
        if (!smoker) {
            // Age 45
            if (age < 45) {
                if (systBT < 120) {
                    if(nonHDL >= 6) {
                        return 3
                    }
                    else return 2
                }
                else if (systBT < 140 && systBT >= 120) {
                    if (nonHDL < 4) return 2
                    else if (nonHDL >= 6) return 4
                    else return 3
                }
                
                else if (systBT < 160 && systBT >= 140) {
                    if (nonHDL < 4) return 3
                    else if (nonHDL >= 6) return 5
                    else return 4
                    
                }
                else {
                    if (nonHDL < 4) return 4
                    else if (nonHDL >= 6) return 7
                    else if (nonHDL >= 5) return 6
                    else return 5

                }
            }
            //age 50
            
        }
    }
}