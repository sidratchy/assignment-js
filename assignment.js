// https://github.com/sidratchy/assignment-js

// Answer to the question no 1:

function kilometerToMeter(kilometer) {

    if (kilometer < 0) {

        return 'Error...Distance is not negative. Please input positive number';
    }
    else {

        var meter = kilometer * 1000;

        return meter;
    }
}


//Answer to the question no: 2

function budgetCalculator(watch, phone, laptop) {

    if (watch < 0 || phone < 0 || laptop < 0) {

        return 'Error...Please Enter positive Value';
    }
    else {
        var watchTotal = watch * 50;
        var phoneTotal = phone * 100;
        var laptopTotl = laptop * 500;

        var totalBudget = watchTotal + phoneTotal + laptopTotl;

        return totalBudget;
    }

}

//Answer to the question no:3

function hotelCost(days) {

    var totalCost = 0;

    if (days < 0) {
        return 'Error...The day cannot be negative';
    }
    else if (days <= 10) {
        totalCost = days * 100;


    }
    else if (days <= 20) {
        var tenDaysCost = 10 * 100;
        var remainingDays = days - 10;
        var underTwentyCost = remainingDays * 80;
        totalCost = tenDaysCost + underTwentyCost;

    }
    else {
        var firstTenDays = 10 * 100;
        var lastTenDays = 10 * 80;
        var remainingDays = days - 20;
        above20 = remainingDays * 50;
        totalCost = firstTenDays + lastTenDays + above20;

    }
    return totalCost;
}

//Anser to the question no:4

function megaFriend(friends) {

    var megaFriendName = "";

    if (friends == '') {
        return 'Error.. Your field is empty';
    }

    else {

        for (var i = 0; i < friends.length; i++) {
            if (friends[i].length > megaFriendName.length) {
                megaFriendName = friends[i];
           
            }
        }
        return megaFriendName;
    }
}


