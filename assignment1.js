//Developed by Timothy Issac Thomas
//Copyright 2022





function CalculateImperial() {
    var gender, stone, pound, feet, inch, age, level, fOp, sOp, tOp, total, calories, height, weight;


    gender = document.getElementById("genderI").value;
    stone = document.getElementById("stoneI").value;
    pound = document.getElementById("poundI").value;
    feet = document.getElementById("feetI").value;
    inch = document.getElementById("inchI").value;
    age = document.getElementById("ageI").value;
    level = radioCheck2();


    height = parseInt(feet) * 12 + parseInt(inch);
    weight = parseInt(stone) * 14 + parseInt(pound);

    if (level != 0)
    {
        if (gender == "maleI") {
            fOp = 6.2 * weight;
            sOp = 12.7 * height;
            tOp = 6.76 * age;
            total = 66 + fOp + sOp - tOp;
            calories = total * level;
        }

        else if (gender == "femaleI") {
            fOp = 4.35 * weight;
            sOp = 4.7 * height;
            tOp = 4.7 * age;
            total = 655 + fOp + sOp - tOp;
            calories = total * level;
        }


        alert('Your body will burn ' + total.toFixed(2) + ' calories each day. Based upon this, your daily calorie requirement would be ' + calories.toFixed(2) + ' calories.');
        myMessage(total, calories);


    }

    else
    {
        alert("Enter or check all parts!");
    }
}


function CalculateMetric() {

    var gender, weight, height, age, level, fOp, sOp, tOp, total, calories, level;


    gender = document.getElementById("GenderM").value;
    age = document.getElementById("ageM").value;
    height = document.getElementById("heightM").value;
    weight = document.getElementById("weightM").value;
    level = radioCheck1();
    bmr = (66.5 + (13.75 * weight) + (5.003 * height) - (6.755 * age));

    if (level != 0)
    {

        if (gender == "maleM") {
            fOp = 13.76 * weight;
            sOp = 5.003 * height;
            tOp = 6.755 * age;
            total = 66.5 + fOp + sOp - tOp;
            calories = total * level;
        }
        else if (gender == "femaleM") {
            fOp = 9.563 * weight;
            sOp = 1.850 * height;
            tOp = 4.676 * age;
            total = 655 + fOp + sOp - tOp;
            calories = total * level;
        }
        alert('You will burn ' + total.toFixed(2) + ' calories each day. Based upon this, your daily calorie requirement would be ' + calories.toFixed(2) + ' calories.');
        myMessage(total, calories);
    }

    else
    {
        alert("Please enter and check all parts!");
    }
}

function myMessage(val, val2) {
    alert('You will burn ' + val.toFixed(2) + ' calories each day. Based upon this, your daily calorie requirement would be ' + val2.toFixed(2) + ' calories.');
}


function radioCheck1() {
    var radio = document.getElementsByName("activityLevelM");
    var checkOne = 0;
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            checkOne = radio[i].value;
        }
    }
    return checkOne;
}

function radioCheck2() {
    var radio = document.getElementsByName("activityLevelI");
    var checkOne = 0;
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            checkOne = radio[i].value;
        }
    }
    return checkOne;
}
