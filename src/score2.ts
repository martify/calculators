
const isValidAge = (age: unknown): boolean => 
    typeof age === 'number' && age > 0 && age < 150




function calcScore2(age: number, systBT: number, nonHDL: number, smoker: boolean, male: boolean) {
    // For male
    if (male) {
        // None smoker
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
            else if (age < 50) {
                if (systBT < 120) {
                    if(nonHDL >= 6) {
                        return 4
                    }
                    else if (nonHDL < 4) return 2
                    else return 3
                }
                else if (systBT < 140 && systBT >= 120) {
                    if (nonHDL < 4) return 3
                    else if (nonHDL >= 6) return 5
                    else return 4
                }                    
                else if (systBT < 160 && systBT >= 140) {
                    if (nonHDL < 4) return 4
                    else if (nonHDL >= 6) return 6
                    else return 5                        
                }
                else {
                    if (nonHDL < 4) return 5
                    else if (nonHDL >= 6) return 8
                    else if (nonHDL >= 5) return 7
                    else return 6
                }
            }
            // Age 55
            else if (age < 55) {
                if (systBT < 120) {
                    if(nonHDL >= 6) {
                        return 5
                    }
                    else if (nonHDL < 4) return 3
                    else return 4
                }
                else if (systBT < 140 && systBT >= 120) {
                    if (nonHDL < 4) return 4
                    else if (nonHDL >= 6) return 6
                    else return 5
                }                   
                else if (systBT < 160 && systBT >= 140) {
                    if (nonHDL < 4) return 5
                    else if (nonHDL >= 6) return 8
                    else if (nonHDL >= 5) return 7
                    else return 6                        
                }
                else {
                    if (nonHDL < 4) return 7
                    else if (nonHDL >= 6) return 10
                    else if (nonHDL >= 5) return 9
                    else return 8
                }
            }
            // Age 60
            else if (age < 60) {
                if (systBT < 120) {
                    if(nonHDL < 4) return 4
                    else if (nonHDL < 5) return 5
                    else return 6
                }
                else if (systBT < 140 && systBT >= 120) {
                    if (nonHDL < 4) return 5
                    else if (nonHDL >= 6) return 8
                    else if (nonHDL >= 5) return 7
                    else return 6
                }                    
                else if (systBT < 160 && systBT >= 140) {
                    if (nonHDL < 4) return 7
                    else if (nonHDL >= 6) return 10
                    else if (nonHDL >= 5) return 9
                    else return 8                        
                }
                else {
                    if (nonHDL < 4) return 9
                    else if (nonHDL >= 6) return 12
                    else if (nonHDL >= 5) return 11
                    else return 10
                }
            }
            // Age 65
            else if (age < 65) {
                if (systBT < 120) {
                    if(nonHDL < 4) return 6
                    else if (nonHDL >= 6) return 8
                    else return 7
                }
                else if (systBT < 140 && systBT >= 120) {
                    if (nonHDL < 4) return 7
                    else if (nonHDL >= 6) return 10
                    else if (nonHDL >= 5) return 9
                    else return 8
                }                   
                else if (systBT < 160 && systBT >= 140) {
                    if (nonHDL < 4) return 9
                    else if (nonHDL >= 6) return 12
                    else if (nonHDL >= 5) return 11
                    else return 10                        
                }
                else {
                    if (nonHDL < 4) return 11
                    else if (nonHDL >= 6) return 15
                    else if (nonHDL >= 5) return 13
                    else return 12
                }
            }
            // Age 70
            if (systBT < 120) {
                if(nonHDL < 4) return 8
                else if (nonHDL < 5) return 9
                else return 10
            }
            else if (systBT < 140 && systBT >= 120) {
                if (nonHDL < 4) return 10
                else if (nonHDL >= 6) return 13
                else if (nonHDL >= 5) return 12
                else return 11
            }
            else if (systBT < 160 && systBT >= 140) {
                if (nonHDL < 4) return 12
                else if (nonHDL >= 6) return 15
                else if (nonHDL >= 5) return 14
                else return 13
                
            }
            else {
                if (nonHDL < 4) return 14
                else if (nonHDL >= 6) return 18
                else if (nonHDL >= 5) return 17
                else return 15
            }
        }
    //Smoker
        // Age 45
        if (age < 45) {
            if (systBT < 120) {
                if (nonHDL < 4) return 3
                else if (nonHDL >= 6) return 6
                else if (nonHDL >= 5) return 5
                else return 4
            }
            else if (systBT < 140 && systBT >= 120) {
                if (nonHDL < 4) return 4
                else if (nonHDL >= 6) return 8
                else if (nonHDL >= 5) return 6
                else return 5
            }   
            else if (systBT < 160 && systBT >= 140) {
                if (nonHDL < 4) return 6
                else if (nonHDL >= 6) return 10
                else if (nonHDL >= 5) return 8
                else return 7
            }
            else {
                if (nonHDL < 4) return 8
                else if (nonHDL >= 6) return 13
                else if (nonHDL >= 5) return 11
                else return 9
            }
        }
        //age 50
        else if (age < 50) {
            if (systBT < 120) {
                if (nonHDL < 4) return 4
                else if (nonHDL >= 6) return 7
                else if (nonHDL >= 5) return 6
                else return 5
            }
            else if (systBT < 140 && systBT >= 120) {
                if (nonHDL < 4) return 5
                else if (nonHDL >= 6) return 9
                else if (nonHDL >= 5) return 8
                else return 7
            }                    
            else if (systBT < 160 && systBT >= 140) {
                if (nonHDL < 4) return 7
                else if (nonHDL >= 6) return 12
                else if (nonHDL >= 5) return 10
                else return 8                     
            }
            else {
                if (nonHDL < 4) return 9
                else if (nonHDL >= 6) return 15
                else if (nonHDL >= 5) return 13
                else return 11
            }
        }
        // Age 55
        else if (age < 55) {
            if (systBT < 120) {
                if (nonHDL < 4) return 5
                else if (nonHDL >= 6) return 8
                else if (nonHDL >= 5) return 7
                else return 6
            }
            else if (systBT < 140 && systBT >= 120) {
                if (nonHDL < 4) return 7
                else if (nonHDL >= 6) return 11
                else if (nonHDL >= 5) return 9
                else return 8
            }                   
            else if (systBT < 160 && systBT >= 140) {
                if (nonHDL < 4) return 9
                else if (nonHDL >= 6) return 14
                else if (nonHDL >= 5) return 12
                else return 10                        
            }
            else {
                if (nonHDL < 4) return 11
                else if (nonHDL >= 6) return 17
                else if (nonHDL >= 5) return 15
                else return 13

            }
        }
        // Age 60
        else if (age < 60) {
            if (systBT < 120) {
                if (nonHDL < 4) return 7
                else if (nonHDL >= 6) return 10
                else if (nonHDL >= 5) return 9
                else return 8
            }
            else if (systBT < 140 && systBT >= 120) {
                if (nonHDL < 4) return 9
                else if (nonHDL >= 6) return 13
                else if (nonHDL >= 5) return 11
                else return 10
            }                    
            else if (systBT < 160 && systBT >= 140) {
                if (nonHDL < 4) return 11
                else if (nonHDL >= 6) return 16
                else if (nonHDL >= 5) return 14
                else return 13                       
            }
            else {
                if (nonHDL < 4) return 14
                else if (nonHDL >= 6) return 20
                else if (nonHDL >= 5) return 17
                else return 16
            }
        }
        // Age 65
        else if (age < 65) {
            if (systBT < 120) {
                if (nonHDL < 4) return 9
                else if (nonHDL >= 6) return 11
                else if (nonHDL >= 5) return 12
                else return 10
            }
            else if (systBT < 140 && systBT >= 120) {
                if (nonHDL < 4) return 11
                else if (nonHDL >= 6) return 15
                else if (nonHDL >= 5) return 14
                else return 13
            }                   
            else if (systBT < 160 && systBT >= 140) {
                if (nonHDL < 4) return 14
                else if (nonHDL >= 6) return 18
                else if (nonHDL >= 5) return 17
                else return 15                        
            }
            else {
                if (nonHDL < 4) return 17
                else if (nonHDL >= 6) return 22
                else if (nonHDL >= 5) return 20
                else return 18
            }
        }
        // Age 70
        if (systBT < 120) {
            if (nonHDL < 4) return 12
            else if (nonHDL >= 6) return 15
            else if (nonHDL >= 5) return 14
            else return 13
        }
        else if (systBT < 140 && systBT >= 120) {
            if (nonHDL < 4) return 14
            else if (nonHDL >= 6) return 18
            else if (nonHDL >= 5) return 17
            else return 15
        }
        else if (systBT < 160 && systBT >= 140) {
            if (nonHDL < 4) return 17
            else if (nonHDL >= 6) return 21
            else if (nonHDL >= 5) return 20
            else return 18
            
        }
        else {
            if (nonHDL < 4) return 20
            else if (nonHDL >= 6) return 25
            else if (nonHDL >= 5) return 23
            else return 22
        }

    }
// Female
if (!male) {
    // None smoker
    if (!smoker) {
        // Age 45
        if (age < 45) {
            if (systBT < 120) {
                return 1
            }
            else if (systBT < 140 && systBT >= 120) {
                if (nonHDL >= 6) return 2
                else return 1
            }                   
            else if (systBT < 160 && systBT >= 140) {
                if (nonHDL < 4) return 1
                else return 2                     
            }
            else {
                if (nonHDL < 5) return 2
                else return 3
            }
        }
        //age 50
        else if (age < 50) {
            if (systBT < 120) {
                if(nonHDL < 6) {
                    return 1
                }
                else return 2
            }
            else if (systBT < 140 && systBT >= 120) {
                return 2
            }                    
            else if (systBT < 160 && systBT >= 140) {
                if (nonHDL < 5) return 2
                else return 3                        
            }
            else {
                if (nonHDL < 6) return 3
                else return 4
            }
        }
        // Age 55
        else if (age < 55) {
            if (systBT < 120) {
                return 2
            }
            else if (systBT < 140 && systBT >= 120) {
                if (nonHDL < 5) return 2
                else return 3 
            }                   
            else if (systBT < 160 && systBT >= 140) {
                if (nonHDL < 5) return 3
                else return 4                        
            }
            else {
                if (nonHDL < 4) return 4
                else return 5
            }
        }
        // Age 60
        else if (age < 60) {
            if (systBT < 120) {
                return 3
            }
            else if (systBT < 140 && systBT >= 120) {
                if (nonHDL < 4) return 3
                else return 4
            }                    
            else if (systBT < 160 && systBT >= 140) {
                if (nonHDL < 4) return 4
                else return 5                        
            }
            else {
                if (nonHDL < 4) return 5
                else if (nonHDL >= 6) return 7
                else return 6
            }
        }
        // Age 65
        else if (age < 65) {
            if (systBT < 120) {
                if(nonHDL < 6) return 4
                else return 5
            }
            else if (systBT < 140 && systBT >= 120) {
                if (nonHDL < 6) return 5
                else return 6
            }                   
            else if (systBT < 160 && systBT >= 140) {
                if (nonHDL < 5) return 6
                else return 7                        
            }
            else {
                if (nonHDL < 4) return 7
                else if (nonHDL >= 6) return 9
                else return 8
            }
        }
        // Age 70
        if (systBT < 120) {
            if(nonHDL < 4) return 5
            else return 6
        }
        else if (systBT < 140 && systBT >= 120) {
            if (nonHDL < 6) return 7
            else return 8
        }
        else if (systBT < 160 && systBT >= 140) {
            if (nonHDL < 4) return 8
            else return 9
            
        }
        else {
            if (nonHDL < 5) return 10
            else if (nonHDL >= 6) return 12
            else return 11
        }
    }
    //Smoker
        // Age 45
    if (age < 45) {
        if (systBT < 120) {
            if (nonHDL < 6) return 2
            else return 3
        }
        else if (systBT < 140 && systBT >= 120) {
            if (nonHDL < 6) return 3
            else return 4
        }   
        else if (systBT < 160 && systBT >= 140) {
            if (nonHDL < 4) return 3
            else if (nonHDL < 5) return 4
            else return 5
        }
        else {
            if (nonHDL < 5) return 5
            else if (nonHDL < 6) return 6
            else return 7
        }
    }
    //age 50
    else if (age < 50) {
        if (systBT < 120) {
            if (nonHDL < 6) return 3
            else return 4
        }
        else if (systBT < 140 && systBT >= 120) {
            if (nonHDL < 4) return 3
            else if (nonHDL >= 6) return 5
            else return 4
        }                    
        else if (systBT < 160 && systBT >= 140) {
            if (nonHDL < 5) return 5
            else return 6                   
        }
        else {
            if (nonHDL < 4) return 6
            else if (nonHDL >= 6) return 9
            else if (nonHDL >= 5) return 8
            else return 7
        }
    }
    // Age 55
    else if (age < 55) {
        if (systBT < 120) {
            if (nonHDL < 4) return 3
            else if (nonHDL >= 6) return 5
            else return 4
        }
        else if (systBT < 140 && systBT >= 120) {
            if (nonHDL < 5) return 5
            else return 6
        }                   
        else if (systBT < 160 && systBT >= 140) {
            if (nonHDL < 5) return 6
            else if (nonHDL >= 6) return 8
            else return 7                        
        }
        else {
            if (nonHDL < 5) return 8
            else if (nonHDL >= 6) return 10
            else return 9

        }
    }
    // Age 60
    else if (age < 60) {
        if (systBT < 120) {
            if (nonHDL < 5) return 5
            else return 6
        }
        else if (systBT < 140 && systBT >= 120) {
            if (nonHDL < 4) return 6
            else if (nonHDL >= 6) return 8
            else return 7
        }                    
        else if (systBT < 160 && systBT >= 140) {
            if (nonHDL < 5) return 8
            else if (nonHDL >= 6) return 10
            else return 9                       
        }
        else {
            if (nonHDL < 4) return 10
            else if (nonHDL >= 6) return 12
            else return 11
        }
    }
    // Age 65
    else if (age < 65) {
        if (systBT < 120) {
            if (nonHDL < 4) return 6
            else if (nonHDL >= 6) return 8
            else return 7
        }
        else if (systBT < 140 && systBT >= 120) {
            if (nonHDL < 4) return 8
            else if (nonHDL >= 6) return 10
            else return 9
        }                   
        else if (systBT < 160 && systBT >= 140) {
            if (nonHDL < 4) return 10
            else if (nonHDL >= 6) return 12
            else return 11                        
        }
        else {
            if (nonHDL < 4) return 12
            else if (nonHDL >= 6) return 15
            else if (nonHDL >= 5) return 14
            else return 13
        }
    }
    // Age 70
    if (systBT < 120) {
        if (nonHDL < 6) return 9
        else return 10
    }
    else if (systBT < 140 && systBT >= 120) {
        if (nonHDL < 4) return 10
        else if (nonHDL >= 5) return 12
        else return 11
    }
    else if (systBT < 160 && systBT >= 140) {
        if (nonHDL < 5) return 13
        else if (nonHDL >= 6) return 15
        else return 14
        
    }
    else {
        if (nonHDL < 4) return 15
        else if (nonHDL >= 6) return 18
        else if (nonHDL >= 5) return 17
        else return 16
    }
}
}

function calcScore2OP(age:number, systBT: number, nonHDL: number, smoker: boolean, male: boolean) {
    // For male
    if (male) {
        // None smoker
        if (!smoker) {
            // Age 75
            if (age < 75) {
                if (systBT < 120) {
                    if (nonHDL < 4) return 10
                    else if (nonHDL >= 6) return 13
                    else if (nonHDL >= 5) return 12
                    else return 11
                }
                else if (systBT < 140 && systBT >= 120) {
                    if (nonHDL < 4) return 12
                    else if (nonHDL >= 6) return 16
                    else if (nonHDL >= 5) return 15
                    else return 13
                }                   
                else if (systBT < 160 && systBT >= 140) {
                    if (nonHDL < 4) return 15
                    else if (nonHDL >= 6) return 20
                    else if (nonHDL >= 5) return 18
                    else return 17                  
                }
                else {
                    if (nonHDL < 4) return 19
                    else if (nonHDL >= 6) return 25
                    else if (nonHDL >= 5) return 23
                    else return 21
                }
            }
            //age 80
            else if (age < 80) {
                if (systBT < 120) {
                    if (nonHDL < 4) return 15
                    else if (nonHDL >= 6) return 22
                    else if (nonHDL >= 5) return 19
                    else return 16
                }
                else if (systBT < 140 && systBT >= 120) {
                    if (nonHDL < 4) return 17
                    else if (nonHDL >= 6) return 26
                    else if (nonHDL >= 5) return 23
                    else return 20
                }                    
                else if (systBT < 160 && systBT >= 140) {
                    if (nonHDL < 4) return 21
                    else if (nonHDL >= 6) return 30
                    else if (nonHDL >= 5) return 27
                    else return 23                    
                }
                else {
                    if (nonHDL < 4) return 24
                    else if (nonHDL >= 6) return 35
                    else if (nonHDL >= 5) return 31
                    else return 27
                }
            }
            // Age 85
            else if (age < 85) {
                if (systBT < 120) {
                    if (nonHDL < 4) return 22
                    else if (nonHDL >= 6) return 36
                    else if (nonHDL >= 5) return 31
                    else return 26
                }
                else if (systBT < 140 && systBT >= 120) {
                    if (nonHDL < 4) return 25
                    else if (nonHDL >= 6) return 40
                    else if (nonHDL >= 5) return 34
                    else return 29
                }                   
                else if (systBT < 160 && systBT >= 140) {
                    if (nonHDL < 4) return 27
                    else if (nonHDL >= 6) return 43
                    else if (nonHDL >= 5) return 37
                    else return 32                        
                }
                else {
                    if (nonHDL < 4) return 30
                    else if (nonHDL >= 6) return 47
                    else if (nonHDL >= 5) return 41
                    else return 35
                }
            }
            // Age 90
            else {
                if (systBT < 120) {
                    if (nonHDL < 4) return 32
                    else if (nonHDL >= 6) return 55
                    else if (nonHDL >= 5) return 47
                    else return 39
                }
                else if (systBT < 140 && systBT >= 120) {
                    if (nonHDL < 4) return 34
                    else if (nonHDL >= 6) return 67
                    else if (nonHDL >= 5) return 49
                    else return 41
                }                    
                else if (systBT < 160 && systBT >= 140) {
                    if (nonHDL < 4) return 36
                    else if (nonHDL >= 6) return 59
                    else if (nonHDL >= 5) return 51
                    else return 43                        
                }
                else {
                    if (nonHDL < 4) return 37
                    else if (nonHDL >= 6) return 62
                    else if (nonHDL >= 5) return 53
                    else return 45
                }
            }
        }
    //Smoker
        // Age 75
        if (age < 75) {
            if (systBT < 120) {
                if (nonHDL < 4) return 15
                else if (nonHDL >= 6) return 20
                else if (nonHDL >= 5) return 18
                else return 16
            }
            else if (systBT < 140 && systBT >= 120) {
                if (nonHDL < 4) return 19
                else if (nonHDL >= 6) return 24
                else if (nonHDL >= 5) return 22
                else return 20
            }   
            else if (systBT < 160 && systBT >= 140) {
                if (nonHDL < 4) return 23
                else if (nonHDL >= 6) return 30
                else if (nonHDL >= 5) return 28
                else return 25
            }
            else {
                if (nonHDL < 4) return 28
                else if (nonHDL >= 6) return 36
                else if (nonHDL >= 5) return 34
                else return 31
            }
        }
        //age 80
        else if (age < 80) {
            if (systBT < 120) {
                if (nonHDL < 4) return 19
                else if (nonHDL >= 6) return 29
                else if (nonHDL >= 5) return 25
                else return 22
            }
            else if (systBT < 140 && systBT >= 120) {
                if (nonHDL < 4) return 23
                else if (nonHDL >= 6) return 33
                else if (nonHDL >= 5) return 29
                else return 26
            }                    
            else if (systBT < 160 && systBT >= 140) {
                if (nonHDL < 4) return 27
                else if (nonHDL >= 6) return 38
                else if (nonHDL >= 5) return 34
                else return 30                     
            }
            else {
                if (nonHDL < 4) return 31
                else if (nonHDL >= 6) return 44
                else if (nonHDL >= 5) return 39
                else return 35
            }
        }
        // Age 85
        else if (age < 85) {
            if (systBT < 120) {
                if (nonHDL < 4) return 25
                else if (nonHDL >= 6) return 40
                else if (nonHDL >= 5) return 35
                else return 30
            }
            else if (systBT < 140 && systBT >= 120) {
                if (nonHDL < 4) return 28
                else if (nonHDL >= 6) return 44
                else if (nonHDL >= 5) return 38
                else return 33
            }                   
            else if (systBT < 160 && systBT >= 140) {
                if (nonHDL < 4) return 31
                else if (nonHDL >= 6) return 48
                else if (nonHDL >= 5) return 42
                else return 36                        
            }
            else {
                if (nonHDL < 4) return 34
                else if (nonHDL >= 6) return 53
                else if (nonHDL >= 5) return 46
                else return 40

            }
        }
        // Age 90
        else 
            if (systBT < 120) {
                if (nonHDL < 4) return 32
                else if (nonHDL >= 6) return 55
                else if (nonHDL >= 5) return 46
                else return 39
            }
            else if (systBT < 140 && systBT >= 120) {
                if (nonHDL < 4) return 34
                else if (nonHDL >= 6) return 57
                else if (nonHDL >= 5) return 48
                else return 41
            }                    
            else if (systBT < 160 && systBT >= 140) {
                if (nonHDL < 4) return 35
                else if (nonHDL >= 6) return 59
                else if (nonHDL >= 5) return 51
                else return 43                      
            }
            else {
                if (nonHDL < 4) return 37
                else if (nonHDL >= 6) return 61
                else if (nonHDL >= 5) return 53
                else return 45
            }
        }
// Female
if (!male) {
    // None smoker
    if (!smoker) {
        // Age 75
        if (age < 75) {
            if (systBT < 120) {
                if (nonHDL >= 5) return 8
                else return 7
            }
            else if (systBT < 140 && systBT >= 120) {
                if (nonHDL >= 6) return 11
                else if (nonHDL >= 5) return 10
                else return 9
            }                   
            else if (systBT < 160 && systBT >= 140) {
                if (nonHDL >= 6) return 13
                else if (nonHDL >= 5) return 12
                else return 11                    
            }
            else {
                if (nonHDL < 4) return 13
                else if (nonHDL >= 6) return 16
                else if (nonHDL >= 5) return 15
                else return 14
            }
        }
        //age 80
        else if (age < 80) {
            if (systBT < 120) {
                if (nonHDL < 5) return 12
                else if (nonHDL >= 6) return 14
                else return 13
            }
            else if (systBT < 140 && systBT >= 120) {
                if (nonHDL < 4) return 14
                else if (nonHDL >= 6) return 16
                else return 15
            }                    
            else if (systBT < 160 && systBT >= 140) {
                if (nonHDL < 4) return 16
                else if (nonHDL >= 6) return 19
                else if (nonHDL >= 5) return 18
                else return 17                    
            }
            else {
                if (nonHDL < 4) return 19
                else if (nonHDL >= 6) return 23
                else if (nonHDL >= 5) return 21
                else return 20
            }
        }
        // Age 85
        else if (age < 85) {
            if (systBT < 120) {
                if (nonHDL < 4) return 19
                else if (nonHDL >= 6) return 22
                else if (nonHDL >= 5) return 21
                else return 20
            }
            else if (systBT < 140 && systBT >= 120) {
                if (nonHDL < 4) return 21
                else if (nonHDL >= 6) return 25
                else if (nonHDL >= 5) return 24
                else return 22
            }                   
            else if (systBT < 160 && systBT >= 140) {
                if (nonHDL < 4) return 24
                else if (nonHDL >= 6) return 28
                else if (nonHDL >= 5) return 27
                else return 25                    
            }
            else {
                if (nonHDL < 4) return 27
                else if (nonHDL >= 6) return 31
                else if (nonHDL >= 5) return 30
                else return 28
            }
        }
        // Age 90
        else {
            if (systBT < 120) {
                if (nonHDL < 4) return 30
                else if (nonHDL >= 6) return 34
                else if (nonHDL >= 5) return 33
                else return 32
            }
            else if (systBT < 140 && systBT >= 120) {
                if (nonHDL < 4) return 32
                else if (nonHDL >= 6) return 37
                else if (nonHDL >= 5) return 35
                else return 34
            }                    
            else if (systBT < 160 && systBT >= 140) {
                if (nonHDL < 4) return 35
                else if (nonHDL >= 6) return 39
                else if (nonHDL >= 5) return 38
                else return 36              
            }
            else {
                if (nonHDL < 4) return 37
                else if (nonHDL >= 6) return 42
                else if (nonHDL >= 5) return 40
                else return 39
            }
        }
    }
    //Smoker
        // Age 75
    if (age < 75) {
        if (systBT < 120) {
            if (nonHDL < 4) return 12
            else if (nonHDL >= 6) return 14
            else return 13
        }
        else if (systBT < 140 && systBT >= 120) {
            if (nonHDL < 4) return 15
            else if (nonHDL >= 6) return 18
            else if (nonHDL >= 5) return 17
            else return 16
        }   
        else if (systBT < 160 && systBT >= 140) {
            if (nonHDL < 4) return 18
            else if (nonHDL >= 6) return 22
            else if (nonHDL >= 5) return 20
            else return 19
        }
        else {
            if (nonHDL < 4) return 22
            else if (nonHDL >= 6) return 26
            else if (nonHDL >= 5) return 25
            else return 23
        }
    }
    //age 80
    else if (age < 80) {
        if (systBT < 120) {
            if (nonHDL < 4) return 17
            else if (nonHDL >= 6) return 20
            else if (nonHDL >= 5) return 19
            else return 18
        }
        else if (systBT < 140 && systBT >= 120) {
            if (nonHDL < 4) return 20
            else if (nonHDL >= 6) return 24
            else if (nonHDL >= 5) return 22
            else return 21
        }                    
        else if (systBT < 160 && systBT >= 140) {
            if (nonHDL < 4) return 24
            else if (nonHDL >= 6) return 28
            else if (nonHDL >= 5) return 26
            else return 25           
        }
        else {
            if (nonHDL < 4) return 27
            else if (nonHDL >= 6) return 32
            else if (nonHDL >= 5) return 30
            else return 29
        }
    }
    // Age 85
    else if (age < 85) {
        if (systBT < 120) {
            if (nonHDL < 4) return 24
            else if (nonHDL >= 6) return 28
            else if (nonHDL >= 5) return 27
            else return 25
        }
        else if (systBT < 140 && systBT >= 120) {
            if (nonHDL < 4) return 27
            else if (nonHDL >= 6) return 31
            else if (nonHDL >= 5) return 30
            else return 28
        }                   
        else if (systBT < 160 && systBT >= 140) {
            if (nonHDL < 4) return 30
            else if (nonHDL >= 6) return 35
            else if (nonHDL >= 5) return 33
            else return 32                    
        }
        else {
            if (nonHDL < 4) return 34
            else if (nonHDL >= 6) return 39
            else if (nonHDL >= 5) return 37
            else return 35
        }
    }
    // Age 90
    else {
        if (systBT < 120) {
            if (nonHDL < 4) return 34
            else if (nonHDL >= 6) return 39
            else if (nonHDL >= 5) return 37
            else return 35
        }
        else if (systBT < 140 && systBT >= 120) {
            if (nonHDL < 4) return 36
            else if (nonHDL >= 6) return 41
            else if (nonHDL >= 5) return 39
            else return 38
        }                    
        else if (systBT < 160 && systBT >= 140) {
            if (nonHDL < 4) return 39
            else if (nonHDL >= 6) return 43
            else if (nonHDL >= 5) return 42
            else return 40          
        }
        else {
            if (nonHDL < 4) return 41
            else if (nonHDL >= 6) return 46
            else if (nonHDL >= 5) return 44
            else return 43
        }
    }
}
}

function getScore(age: number, systBT: number, cholesterol: number, hdl: number, smoker: boolean, male: boolean) {
    const nonHDL = cholesterol - hdl
    if  (!isValidAge(age)) {
        throw new Error('Invalid age for Score2')
    }
    if (age < 70) {
        return calcScore2(age, systBT, nonHDL, smoker, male)
    }
    return calcScore2OP(age, systBT, nonHDL, smoker, male)
}

export {getScore, isValidAge}