$(function() {
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend
  // testing
  // TODO: your code here!
  $('p').each((i, p)=> {
    var words = $(p).text().split(' ');
    var content = '';
    words.forEach(word => {
      content+= `<span>${word}</span>  `;
    });
    $(p).html(content);
  });
  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!

  $('span').each((i, span)=> {
    setInterval(()=> {
      var r = Math.floor( Math.random() * 256 );
      var g = Math.floor( Math.random() * 256 );
      var b = Math.floor( Math.random() * 256 );
      $(span).css({ backgroundColor: `rgb(${r}, ${g}, ${b})` });
    }, 1000);
  });

});