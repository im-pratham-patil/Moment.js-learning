const moment = require('moment');
const log = console.log;

// gets current data and time
// log("current date and time ", moment());

// set a specific date
// log(moment(new Date('1998/02/26')));

// String + format

// log(moment('26-02-20','DD-MM-YY'));
// log(moment('26-02-2020','DD-MM-YYYY'));

// let date = moment.utc(new Date());
// log(date.format());
// log(date.utc().format());

/******************GETTER and SETTERs */

// log("get seconds ", moment().seconds());
// log("get seconds ", moment().second());

// log("get miliseconds ", moment().millisecond());
// log("get miliseconds ", moment().milliseconds());

// log("get minutes", moment().minute());
// log("get minutes", moment().minutes());

// log("get hours", moment().hour());
// log("get hours", moment().hours());

// log("get date of the month", moment().date());
// log("get day of the week", moment().day());

// log("get the week day", moment().weekday('saturday').date())
// log("iso week day", moment().isoWeekday('sunday').date())

// log("day of the year", moment().dayOfYear());
// log('week of the year', moment().week());
// log("month", moment().month('january'));
// log("quartor of the year", moment().quarter());
// log("year", moment().year())
// log("week year", moment().weekYear())
// log("week in a year", moment().weeksInYear());

// log('\n\n******** get method *************\n\n');
// log('year', moment().get('year'))
// log('month', moment().get('month'))
// log('day', moment().get('day'))
// log('hour', moment().get('hour'))
// log('minute', moment().get('minute'))
// log('seconds', moment().get('seconds'))
// log('miliseconds', moment().get('millisecond'))

// log('\n\n***** Date manipulation *****\n\n');
// log("add days to current moments", moment().add(7, 'days'));
// log("add year to current moments", moment().add(7, 'year'));
// log("add month to current moments", moment().add(7, 'months'));
// log("add weeks to current moments", moment().add(7, 'weeks'));
// log("add hours to current moments", moment().add(7, 'hours'));
// log("add minutes to current moments", moment().add(60, 'minutes'));
// log("add seconds to current moments", moment().add(60, 'seconds'));
// log("get current date timestamp", moment().unix())
// log("substract year from current moments", moment().subtract(1, 'year'));

// log('\n\n**** start of time *********\n\n');

// log(moment().startOf('year'));    // set to January 1st, 12:00 am this year
// log(moment().startOf('month'));   // set to the first of this month, 12:00 am
// log(moment().startOf('quarter'));  // set to the beginning of the current quarter, 1st day of months, 12:00 am
// log(moment().startOf('week'));    // set to the first day of this week, 12:00 am
// log(moment().startOf('isoWeek')); // set to the first day of this week according to ISO 8601, 12:00 am
// log(moment().startOf('day'));     // set to 12:00 am today
// log(moment().startOf('date'));     // set to 12:00 am today
// log(moment().startOf('hour'));    // set to now, but with 0 mins, 0 secs, and 0 ms
// log(moment().startOf('minute'));  // set to now, but with 0 seconds and 0 milliseconds

// difference between dates

// let d1 = moment();
// let d2 = moment('1998-02-26', 'yyyy-mm-dd')
// log(d1.diff(d2, 'years'));  // same as moment().milliseconds(0);

// log(moment().format('Do MMM YYYY hh:mm:ssA'))
// log(moment().format('LLLL'))

/** Time from now */

// log("time from now ", moment().from('2021-05-25','yyyy-mm-dd'));
let a = moment([2007, 0, 8])
let b = moment()
// log(a.from(b));

// log(moment().calendar(''))

/*******Calculation differences */

// log(b.diff(a, 'day'))
// log(b.diff(a, 'month'))
// log(b.diff(a, 'year'))
// log(b.diff(a, 'hour'))
// log(b.diff(a, 'minute'))
// log(b.diff(a, 'seconds'))
// log(b.diff(a, 'millisecond'))
// log("days in month", moment().daysInMonth());
// log("convert to javascript date", moment().toDate().toLocaleString());
// let freezObj = Object.freeze(moment().toObject())
// freezObj.date = 21;
// log(JSON.stringify(freezObj));


/************************** Querying the string */

// log(a.isBefore(b)) // isbefore
// log(a.isAfter()) // isafter
// log(moment().isSame(moment())) // is same
// log(moment().isSameOrBefore(b)) // issameorbefore.
// log(moment().isSameOrAfter(b)) // is sameorafter.
// log(moment().isBetween(moment('1998-12-25'), moment('2022-12-06'))); // isbetween
// log(moment('2016').isLeapYear()); // check for leap year
// log(moment.isMoment(new Date())) // check for moment object. // false.
// log(moment.isDate(moment('1998-02-02').toDate())) // is date object

/** Duration between 2 date's using diff */
let duration = moment.duration(b.diff(moment('2020-12-05')))
console.log("diffrence in years     ", duration.asYears())
console.log("diffrence in months    ", duration.asMonths())
console.log("diffrence in days      ", duration.asDays())
console.log("diffrence in hours     ", duration.asHours())
console.log("diffrence in minutes   ", duration.asMinutes())

