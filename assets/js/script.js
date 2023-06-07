$(function() {

  var eventText = {
    0: '',
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
    10: '',
    11: '',
    12: '',
    13: '',
    14: '',
    15: '',
    16: '',
    17: '',
    18: '',
    19: '',
    20: '',
    21: '',
    22: '',
    23: '',
  };
  
  var dayLength = Object.keys(eventText).length;
  
  var timeBlockClasses = ['row', 'time-block'];
  var timeShowClasses = ['col-2', 'col-md-1', 'hour', 'text-center', 'py-3'];
  var textAreaClasses = ['col-8', 'col-md-10', 'description'];
  var saveButtonClasses = ['btn', 'saveBtn', 'col-2', 'col-md-1'];
  var saveButtonIconClasses = ['fas', 'fa-save'];
  var today = dayjs();

  $('#currentDay').text(today.format('dddd - MMMM DD - YYYY'));
  var currentHour = today.format('H')

  var eventTextStored = JSON.parse(localStorage.getItem('eventText'));

  if (eventTextStored) {
    eventText = eventTextStored
  };

  for (i=0; i < dayLength; i++) {

    if (i >= 9 && i <= 17) {
      var timeBlock = document.createElement('div');
      $(timeBlock).attr('id', `hour-${i}`);
      $(timeBlock).addClass(timeBlockClasses);
      $('.container-lg').append(timeBlock);

      if (currentHour > i) {
        $(timeBlock).addClass('past');
      } else if (currentHour == i) {
        $(timeBlock).addClass('present');
      } else if (currentHour < i) {
        $(timeBlock).addClass('future');
      }

      var timeShow = document.createElement('div');
      $(timeShow).addClass(timeShowClasses);
      timeShow.innerText = i % 12 || 12;
      $(timeBlock).append(timeShow);

      var textArea = document.createElement('textarea')
      $(textArea).attr('rows', 3)
      $(textArea).addClass(textAreaClasses);
      $(timeBlock).append(textArea);
      textArea.value = eventText[i]

      var saveButton = document.createElement('button')
      $(saveButton).attr('aria-label', 'save')
      $(saveButton).addClass(saveButtonClasses);
      $(timeBlock).append(saveButton);
      saveButton.addEventListener('click', saveEventHandler);

      var saveButtonIcon = document.createElement('i')
      $(saveButtonIcon).attr('aria-hidden', 'true')
      $(saveButtonIcon).addClass(saveButtonIconClasses);
      $(saveButton).append(saveButtonIcon);
    };

    //when adding full day functionality, 
    //code is in 24hr format, 
    //then possible to be converted to 12hr format in gui based on user option?
    
  };

  function saveEventHandler(e) {
    var eventID = e.target.parentElement.firstChild.innerText;
    var rawEventText = e.target.previousSibling.value;
    if (rawEventText) {
      eventText[eventID] = rawEventText

      localStorage.setItem('eventText',JSON.stringify(eventText))
    };
  };

  
});

