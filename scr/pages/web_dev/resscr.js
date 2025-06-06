class Calc{
    constructor(){
        const dig1 = document.getElementById("dig1")
        const dig2 = document.getElementById("dig2")
        let res = document.getElementById("res")
        document.getElementsByName("plus")[0].onclick = function(){
            res.value = Number(dig1.value) + Number(dig2.value)
        };
        document.getElementsByName("minus")[0].onclick = function(){
            res.value = Number(dig1.value) - Number(dig2.value)
        };
        document.getElementsByName("delen")[0].onclick = function(){
            if (dig1.value == 0 || dig2.value == 0) {res.value="Делить на 0 нельзя"}
            else {res.value = Number(dig1.value) / Number(dig2.value)}
        };
        document.getElementsByName("umnoj")[0].onclick = function(){
            res.value = Number(dig1.value) * Number(dig2.value)
        };
        document.getElementsByName("clear")[0].onclick = function(){
            dig1.value =""
            dig2.value =""
            res.value =""
        };
    }
}
new Calc()


/*
const dig1 = document.getElementById("dig1")
const dig2 = document.getElementById("dig2")
let res = document.getElementById("res")
document.getElementsByName("plus")[0].onclick = function(){
    res.value = Number(dig1.value) + Number(dig2.value)
};
document.getElementsByName("minus")[0].onclick = function(){
    res.value = Number(dig1.value) - Number(dig2.value)
};
document.getElementsByName("delen")[0].onclick = function(){
    if (dig1.value == 0 || dig2.value == 0) {res.value="Делить на 0 нельзя"}
    else {res.value = Number(dig1.value) / Number(dig2.value)}
};
document.getElementsByName("umnoj")[0].onclick = function(){
    res.value = Number(dig1.value) * Number(dig2.value)
};
document.getElementsByName("clear")[0].onclick = function(){
    dig1.value =""
    dig2.value =""
    res.value =""
};
*/