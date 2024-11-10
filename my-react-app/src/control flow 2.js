const getresult = (mark) => {
    if (mark > 40){
        return "pass";
    }
        else {
            return "fail";
     }
     
     return marks > 40 ? "pass" : "Fail";
};
console.log (getresult(35));