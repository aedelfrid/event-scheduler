
$(function () {

  var eventText = {
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
    24: '',
  };
  
  var timeBlockIDs = ['hour-9']
  var timeBlockClasses = ['row', 'time-block']
  var today = dayjs();

  $('#currentDay').text(today.format('dddd - MMMM DD - YYYY'));

  var eventTextStored = JSON.parse(localStorage.getItem('eventText'))

  if (eventTextStored) {
    eventText = eventTextStored
  }

  for (let i=0; i > Object.keys(eventText).length; i++) {
    //create time block with i % 12 || 12


    if (i >= 9 || i <= 17) {
        //timeBlock = div, document create element -jqeury?
        var timeBlock = $('<div><div>').text('hello world')
        //add attributes
        each(timeBlockIDs.length).attr('id', index);
        each(timeBlockClasses.length).addClass(index);
        //timeBlock appended under div 'container-lg'
        $('.container-lg').append(timeBlock)
        //timeShow = div appended under timeBlock
        //add attributes
        //timeSHow.text =`${today.format('hh A')}`
       // textArea = textarea appended under timeBlock
       // add attributes
        //textArea.text = eventText[i]
        //saveButton = button appended under timeBlock
        
    }

 //when adding full day functionality, code is in 24hr format, then possible to be converted to 12hr format in gui based on user option?
    
    if (hour > i) {
        //set block to colour grey
    } else if (hour = i) {
        //set block colour red
    } else if (hour < i) {
        //set block colour green
    }
  }
});