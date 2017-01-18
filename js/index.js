  $(document).ready(function() {
  
    
    
 
  
    
    
    
 //when you click reveal...
    $("#getMessage").on("click", function(ev){
      
       
      //animations and new quote is formed...
   $(".messagebox").slideUp(400); 
    $(".messagebox").slideDown(1000);  
     var R = Math.floor(Math.random()*15);
       $(".message").fadeOut(0, function(){$(".message").fadeIn(1200)} ); 
     $(".authordisplay").fadeOut(0, function(){$(".authordisplay").fadeIn(2000)} ); 
      $(".message").html(A[R]["quote"]);
      $(".authordisplay").html(A[R]["author"]);
      
      
      //twiiter button voodoo happens....
    ev.preventDefault();
    // Remove existing iframe
    $('#tweetBtn iframe').remove();
    // Generate new markup
    var tweetBtn = $('<a></a>')
        .addClass('twitter-share-button')
        .attr('href', 'http://twitter.com/share')
        .attr('data-url', 'e')
        .attr('data-text', A[R]["quote"] + " by " + A[R]["author"]);
      //this puts the button on the screen, i think
    $('#tweetBtn').append(tweetBtn);
    twttr.widgets.load();

      
      
          
      
   
    });

    var A = {
   "1" : {
      "author" : "Chögyam Trungpa",
      "quote"   : "The bad news is you’re falling through the air, nothing to hang on to, no parachute. The good news is there’s no ground."
    } ,
   "2" : {
      "author" : "Jesus",
      "quote"  : "And why do you worry about clothes? See how the flowers of the field grow. They do not labor or spin. Yet I tell you that not even Solomon in all his splendor was dressed like one of these. If that is how God clothes the grass of the field, which is here today and tomorrow is thrown into the fire, will he not much more clothe you—you of little faith?"
   },
    "3"  :{
      "author" : "Chickadee",
      "quote"  : "Bowoahwoahwoah"
    },
      "5" :{
        "author" : "Sparkle",
        "quote"  : "NAAAH, NAAAAAH"
      },
         "6" :{
        "author" : "Lao Tzu",
        "quote"  : "Always and everywhere it is the soft that wears the hard (as water wears stone). Non-being penetrates even where there are no cracks (as in the most homogeneous bodies, such as metal and stone). From that, I conclude the supreme effectiveness of non-action"
      },
         "7" :{
        "author" : "Lao Tzu",
        "quote"  : "A wheel is made of thirty perceptible spokes, but it turns due to the imperceptible central axis of the hub"
      },
         "8" :{
        "author" : "William Blake",
        "quote"  : "Bring out number weight & measure in a year of dearth."
      },
         "9" :{
        "author" : "William Blake",
        "quote"  : "Truth can never be told so as to be understood, and not be believ'd."
      },
         "10" :{
        "author" : "Socrates",
        "quote"  : "True knowledge exists in knowing that you know nothing."
      },
         "11" :{
        "author" : "Ovid",
        "quote"  : "As wave is driven by wave <br> And each, pursued, pursues the wave ahead, <br> So time flies on and follows, flies, and follows,<br> Always, for ever and new. What was before <br> Is left behind; what never was is now; <br> And every passing moment is renewed."
      },
         "12" :{
        "author" : "Sunryu Suzuki",
        "quote"  : "In the beginner's mind there are many possibilities. In the expert's mind there are few."
      },
         "13" :{
        "author" : "William Carlos Williams",
        "quote"  : "But now the stark dignity of <br> entrance—Still, the profound change <br> has come upon them: rooted they <br> grip down and begin to awaken."
      },
         "14" :{
        "author" : "Gerard Manley Hopkins",
        "quote"  : "Man, how fast his firedint, | his mark on mind, is gone! <br> Both are in an unfathomable, all is in an enormous dark <br> Drowned. O pity and indig | nation! Manshape, that shone <br> Sheer off, disseveral, a star, | death blots black out; nor mark <br>Is any of him at all so stark <br> But vastness blurs and time | beats level."
      },
      
      
      
      
 };
  
    

    
  
  });