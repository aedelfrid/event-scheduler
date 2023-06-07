$(function () {

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
  var timeShowClasses = ['col-2', 'col-md-1', 'hour', 'text-center', 'py-3']
  var textAreaClasses = ['col-8', 'col-md-10', 'description']
  var saveButtonClasses = ['btn', 'saveBtn', 'col-2', 'col-md-1']
  var saveButtoniClasses = ['fas', 'fa-save']
  var today = dayjs();

  $('#currentDay').text(today.format('dddd - MMMM DD - YYYY'));

  var eventTextStored = JSON.parse(localStorage.getItem('eventText'));

  if (eventTextStored) {
    eventText = eventTextStored
  };

  for (i=0; i < dayLength; i++) {
    //create time block with i % 12 || 12


    if (i >= 9 && i <= 17) {
      //timeBlock = div, document create element -jqeury?
      var timeBlock = document.createElement('div');
      //add attributes
      $(timeBlock).attr('id', `hour-${i}`);
      $(timeBlock).addClass(timeBlockClasses);
      //timeBlock appended under div 'container-lg'
      $('.container-lg').append(timeBlock);
      //timeShow = div appended under timeBlock
      var timeShow = document.createElement('div');
      //add attributes
      //$(timeShow).attr()
      $(timeShow).addClass(timeShowClasses);
      timeShow.innerText = i % 12 || 12;
      $(timeBlock).append(timeShow);
      // textArea = textarea appended under timeBlock
      var textArea = document.createElement('textarea')
      // add attributes
      $(textArea).attr('rows', 3)
      $(textArea).addClass(textAreaClasses);
      $(timeBlock).append(textArea);
      textArea.innertext = eventText[i]
      //saveButton = button appended under timeBlock
      var saveButton = document.createElement('button')
      $(saveButton).attr('aria-label', 'save')
      $(saveButton).addClass(saveButtonClasses);
      $(timeBlock).append(saveButton);

      var saveButtoni = document.createElement('i')
      $(saveButtoni).attr('aria-hidden', 'true')
      $(saveButtoni).addClass(saveButtoniClasses);
      $(saveButton).append(saveButtoni);
        
    };

 //when adding full day functionality, code is in 24hr format, then possible to be converted to 12hr format in gui based on user option?
    
    //if (hour > i) {
        //set block to colour grey
    //} else if (hour = i) {
        //set block colour red
    //} else if (hour < i) {
        //set block colour green
    //}
  }
});

function saveEventHandler(e) {

};