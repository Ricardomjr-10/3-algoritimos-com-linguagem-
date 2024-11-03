const romanToInt = (algarismo) => {
    const roman = {
        I: 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000

    }
    
   let res = 0
   for (let i = 0; i < algarismo.length; i++) {
   if (roman[algarismo[i + 1]] > roman[algarismo[i]]){
    res -= roman[algarismo[i]]
   } else {
    res += roman[algarismo[i]]
   }
   }
    return res
}

console.log(romanToInt("MCMXCIV"))