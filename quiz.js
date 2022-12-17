
//var array_1 =[document.getElementsByClassName("button_select-1"),document.getElementsByClassName("button_select-2"),document.getElementsByClassName("button_select-3")];
const correct_select_1_q1 = document.getElementById("button_select-1-q1");
var correct_select_2_q1 = document.getElementById("button_select-2-q1");
var correct_select_3_q1 = document.getElementById("button_select-3-q1");


function select_true(a) {
    function correct() {
        const correct = document.getElementsByClassName("button_answer");
        console.log(correct);
        const elementsArray = Array.from(correct);
        console.log(elementsArray);
        elementsArray.forEach(function (value) {
            console.log(value);
            value.classList.add("correct");
            value.classList.remove("button_answer");
            value.classList.remove("button_answer-f");
        
        });
    }
    a.addEventListener("click", correct);
}
function select_false(a){
    function mistake() {
        const mistake = document.getElementsByClassName("button_answer-f");
        console.log(mistake);
        const elementsArray_1 = Array.from(mistake);
        console.log(elementsArray_1);
        elementsArray_1.forEach(function (value) {
            console.log(value);
            value.classList.add("mistake");
            value.classList.remove("button_answer-f");
            value.classList.remove("button_answer");
        });
    }
    a.addEventListener("click", mistake);
}

select_true(correct_select_1_q1);
select_false(correct_select_2_q1);
select_false(correct_select_3_q1);