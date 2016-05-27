var arr, body, tab, tr, td, tn, row, col;

  arr = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];


  body = document.getElementsByTagName('body')[0];
  tab = document.createElement('table');


  for (row = 0; row < arr.length; row++){
    tr = document.createElement('tr');
    
    for (col = 0; col < arr[row].length; col++){
      td = document.createElement('td');
      tn = document.createTextNode(arr[row][col]);
      td.appendChild(tn);
      tr.appendChild(td);
    }
    tab.appendChild(tr);
    }
 

    body.appendChild(tab);

var counter = 0;

$('td').click(function(){
    $(this).text('x');
    counter += 1;
    $('h2').text(counter);
});


function countdown( elementName, minutes, seconds )
{
    var element, endTime, hours, mins, msLeft, time;

    function twoDigits( n )
    {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer()
    {
        msLeft = endTime - (+new Date);
        if ( msLeft < 1000 ) {
            element.innerHTML = "countdown's over!";
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }

    element = document.getElementById( elementName );
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();
}

countdown( "countdown", 00, 10 );
