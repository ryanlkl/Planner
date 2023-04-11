
var today = new Date();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var events = {};

function generateCalendar(month, year) {
	var calendar = document.getElementById('calendar');
	var html = '<table>';
	html += '<tr><th colspan="7"><button id="back" class="calendarButton"><</button>' + months[month] + ' ' + year + '<button id="forward" class="calendarButton">></button></th></tr>';
	html += '<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>';
	var date = new Date(year, month, 1);
	var firstDay = date.getDay();
	var lastDay = new Date(year, month + 1, 0).getDate();
	var day = 1;
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
				html += '>';
                html += day + '</td>';
				day++;
			}
		}
		html += '</tr>';
	}
	html += '</table>';
	calendar.innerHTML = html;

	document.getElementById('back').onclick = function() {
		if (currentMonth === 0) {
			currentMonth = 11
			currentYear -= 1;
			generateCalendar(currentMonth, currentYear);
		} else {
			currentMonth -= 1;
			generateCalendar(currentMonth, currentYear);
		}
	}

	document.getElementById('forward').onclick = function() {
		if (currentMonth === 11) {
			currentMonth = 0;
			currentYear += 1;
			generateCalendar(currentMonth, currentYear);
		} else {
			currentMonth += 1;
			generateCalendar(currentMonth, currentYear);
		}
	}

}

generateCalendar(currentMonth, currentYear);
