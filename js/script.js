/*Javascript/jQuery here*/
var bee1 = function($bee1,speed){


    // $bee1.animate({
    //     "left": "80%"  
    // }, speed);
	beeRight();
};

function beeLeft () {
	console.log("LEFT");
	bee1_.css ({"background-image": "url('img/bee2.png')"});
	bee1_.animate({
        "left": "5%"  
    }, speed_, "linear", beeRight);
}
function beeRight () {
	console.log("RIGHT");
	bee1_.css ({"background-image": "url('img/bee.png')"});
	bee1_.animate({
        "left": "80%"  
    }, speed_, "linear", beeLeft);
}

var speed_ = 6000;
var bee1_ = $("#bee1");
$(function(){
    // bee1($("#bee1"), 6000);
    bee1(bee1_, speed_);
});


var bee2 = function($bee2,speed){


    $bee2.animate({
        "left": "100%"  
    }, speed);

};

$(function(){
    bee2($("#bee2"), 8000, 'swing');
});



var dolphinSpeed = 2000;
var dolphin = $("#dolphin");
$(function(){
	console.log(dolphin);
	dolphinBounceUp ();
});
function dolphinBounceUp () {
	console.log ("UP");
	dolphin.animate({
        "top": "500px"  
    }, dolphinSpeed, "linear", dolphinBounceDown);
}
function dolphinBounceDown () {
	console.log ("DOWN");
	dolphin.animate({
        "top": "50px"  
    }, dolphinSpeed, "linear", dolphinBounceUp);
}



var pork = function($pork,speed){
    $pork.animate({
        "left": "40%"  
    }, speed);

};

$(function(){
    pork($("#pork"), 9000);
});


var pork1 = function($pork1,speed){


    $pork1.animate({
        "right": "40%"  
    }, speed);

};

$(function(){
    pork1($("#pork1"), 9000);
});




(function pulse(back) {
    $('#heart').animate(
        {
            // 'font-size': (back) ? '100px' : '140px',
            opacity: (back) ? 3 : 0.5
        }, 700, function(){pulse(!back)});
})(false);




// (function pulse(back) {
//     $('#heart').animate(
//         {
//             'font-size': (back) ? '100px' : '140px',
//             opacity: (back) ? 3 : 0.5,
//             height: (back) ? "50%" : "20%",
//             width: (back) ? "50%" : "20%",
//             'margin-top': (back) ? "0" : "5%",
//             'margin-left': (back) ? "0" : "5%"
            
            
//         }, 700, function(){pulse(!back)});
// })(false);





