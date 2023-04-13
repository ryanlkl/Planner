
var today = new Date();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();
var changeMonth = today.getMonth();
var changeYear = today.getFullYear();
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var events = {};

function generateCalendar(month, year) {
	var calendar = document.getElementById('calendar');
	var html = '<table>';
	html += '<tr><th colspan="7"><button id="back" class="calendarButton"><</button>' + months[month] + ' ' + year + '<button id="forward" class="calendarButton">></button></th></tr>';
	html += '<button id="today" class="input">Today</button>'
	html += '<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>';
	var date = new Date(year, month, 1);
	var firstDay = date.getDay();
	var lastDay = new Date(year, month + 1, 0).getDate();
	var day = 1;
	let days = ['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty','twentyone','twentytwo','twentythree','twentyfour','twentyfive','twentysix','twentyseven','twentyeight','twentynine','thirty','thirtyone']
	for (var i = 0; i < 6; i++) {
		html += '<tr>';
		for (var j = 0; j < 7; j++) {
			if (i === 0 && j < firstDay) {
				html += '<td></td>';
			} else if (day > lastDay) {
				html += '<td></td>';
			} else {
				var dateString = year + '-' + (month + 1).toString().padStart(2, '0') + '-' + day.toString().padStart(2, '0');
				html += '<td data-date="' + dateString + '"';
				if (today.getFullYear() === year && today.getMonth() === month && today.getDate() === day) {
					html += ' class="today"';
				}
				if (events[dateString]) {
					html += ' class="event"';
				}
				html += '><button class="dates" id="' + days[day - 1] + '">';
                html += day + '</button></td>';
				day++;
			}
		}
		html += '</tr>';
	}
	html += '</table>';
	calendar.innerHTML = html;

	document.getElementById('back').onclick = function() {
		if (changeMonth === 0) {
			changeMonth = 11
			changeYear -= 1;
			generateCalendar(changeMonth, changeYear);
		} else {
			changeMonth -= 1;
			generateCalendar(changeMonth, changeYear);
		}
	}

	document.getElementById('forward').onclick = function() {
		if (changeMonth === 11) {
			changeMonth = 0;
			changeYear += 1;
			generateCalendar(changeMonth, changeYear);
		} else {
			changeMonth += 1;
			generateCalendar(changeMonth, changeYear);
		}
	}

	document.getElementById('today').onclick = function() {
		changeMonth = currentMonth;
		changeYear = currentYear;
		generateCalendar(currentMonth, currentYear);
	}

	let dateButtons = document.getElementsByClassName('dates');
	for (let i = 0; i < dateButtons.length; i++) {
		document.getElementById(`${days[i]}`).onclick = function() {
			document.getElementById('eventForm').classList.remove('hidden');
		}

		document.getElementById('close').onclick = function() {
			document.getElementById('eventForm').classList.add('hidden');
		}
	}
}

generateCalendar(currentMonth, currentYear);
