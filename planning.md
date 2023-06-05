GIVEN I am using a daily planner to create a schedule

WHEN I open the planner
THEN the current day is displayed at the top of the calendar

WHEN I scroll down
THEN I am presented with time blocks for standard business hours of 9am to 5pm

WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future

WHEN I click into a time block
THEN I can enter an event

WHEN I click the save button for that time block
THEN the text for that event is saved in local storage

WHEN I refresh the page
THEN the saved events persist

## Technical Acceptance Criteria: 40%
- Satisfies all of the above acceptance criteria plus the following:

- Uses the Day.js library to work with date and time.

## Deployment: 32%
- Application deployed at live URL.

- Application loads with no errors.

- Application GitHub URL submitted.

- GitHub repo contains application code.

## Application Quality: 15%
- Application user experience is intuitive and easy to navigate.

- Application user interface style is clean and polished.

- Application resembles the mock-up functionality provided in the Challenge instructions.

## Repository Quality: 13%
- Repository has a unique name.

- Repository follows best practices for file structure and naming conventions.

- Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

- Repository contains multiple descriptive commit messages.

- Repository contains a quality README file with description, screenshot, and link to deployed application.

## Mock-up

<img src='assets\images\05-third-party-apis-homework-demo.gif'>

## Pseudocode

var eventText = {
    12am
    1am
    2am
    3am
    4am
    5am
    6am
    7am
    8am
    9am: '';
    10am: '';
    11am: '';
    12pm: '';
    1pm: '';
    2pm: '';
    3pm: '';
    4pm: '';
    5pm: '';
    6pm
    7pm
    8pm
    9pm
    10pm
    11pm
}

### dayjs get day to display at top

var today = dayjs()

$('#currentDay').text = today.format('dddd/MMM/DD/YYYY')$

### create 9AM-5PM time blocks
### dayjs get time to colour time slots

for (i=0; i > keys(eventText).length; i++) {
    create time block with i % 12 || 12

    if (hour >= 9 || hour <= 17) {
        timeBlock = div, document create element -jqeury?
        add attributes
        timeShow = div appended under timeBlock
        add attributes
        timeSHow.text =`${today.format('hh A')}`
        textArea = textarea appended under timeBlock
        add attributes
        textArea.text = eventText[i]
        saveButton = button appended under timeBlock
    }

 //when adding full day functionality, code is in 24hr format, then possible to be converted to 12hr format in gui based on user option?
    
    if (hour > i) {
        set block to colour grey
    } else if (hour = i) {
        set block colour red
    } else if (hour < i) {
        set block colour green
    }
}

### create event listener for saving text in slots

on.click.function(e) {
    dialog.areYouSure?
    e.parent().text.push.JSON
}

### code at top to pull stored events

var eventTextStored = JSON.parse(localStorage.getItem('eventText'))

### if I have time, which I won't. I'd like to make an option to plan future days, maybe a calendar?