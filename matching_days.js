var weekDays = document.getElementsByClassName('day');
var days = document.querySelectorAll('.day');

function dateOneInput() {
    'use strict';
    for (var i =0; i < weekDays.length; i++){
        weekDays[i].classList.remove('firstMatch');
        weekDays[i].classList.remove('secondMatch');
        weekDays[i].classList.remove('bothMatch');

        var dateOne = document.getElementById('firstDate').value;
        var dateOneValue = new Date(dateOne);
        var dayOneOnly = dateOneValue.getDay();

        var dateTwoValue = document.getElementById('secondDate').value;
        var dateTwoValue = new Date(dateTwoValue);
        var dayTwoOnly = dateTwoValue.getDay();

        if(dayOneOnly === dayTwoOnly){
            days[dayTwoOnly].classList.add('bothMatch');
            }
        else {
            days[dayOneOnly].classList.add('firstMatch');
            days[dayTwoOnly].classList.add('secondMatch');
        }
    }
}