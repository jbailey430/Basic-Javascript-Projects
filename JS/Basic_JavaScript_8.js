function full_Sentence() {
    var part_1 = "This is";
    var part_2 = " the sentence I";
    var part_3 = " made for this";
    var part_4 = " assignment";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("String_sentence").innerHTML = whole_sentence;
}

function slice_Method () {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function to_Uppercase () {
    var str = "Make this uppercase!"
    var res = str.toUpperCase();
    document.getElementById("toUppercase").innerHTML = res;
}

function search_Function() {
    var str = "Visit TheTechAcademy!";
    var n = str.search("TheTechAcademy");
    document.getElementById("mySearch").innerHTML = n;
}

function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML= X.toString();
}

function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function fixed_Function() {
    var num = 5.56789;
    var n = num.toFixed(2);
    document.getElementById("toFixed").innerHTML = n;
}

function value_Function () {
    var num = 15;
    var n =num.valueOf()
    document.getElementById("myValue").innerHTML = n;
}