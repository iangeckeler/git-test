jQuery(document).ready(function(){
$('#myCarousel').carousel('pause')
// define progress var for progress bar
var progress = 0

$('.next-button').click(function(){
    $('#myCarousel').carousel('next')
    //get and update progress values
    progress = progress+33.33
    var newprogressstr = progress.toString()
    var newwidthstr = progress.toString() +'%'
    $('#theprogressbar').attr('aria-valuenow', newprogressstr).css('width',newwidthstr);
})

$('.back-button').click(function(){
    $('#myCarousel').carousel('prev')
    //get and update progress values
    progress = progress-33.33
    var newprogressstr = progress.toString()
    var newwidthstr = progress.toString() +'%'
    $('#theprogressbar').attr('aria-valuenow', newprogressstr).css('width',newwidthstr);})
//final form submit button
$('.form-button').click(function(){
    $('#myCarousel').carousel('next')
    //get and update progress values
    progress = progress+33.33
    var newprogressstr = progress.toString()
    var newwidthstr = progress.toString() +'%'
    $('#theprogressbar').attr('aria-valuenow', newprogressstr).css('width',newwidthstr);})

//reset progress bar
$('.close-button').click(function(){
    //get and update progress values and carousel
    $('#myCarousel').carousel('next')
    progress = 0
    var newprogressstr = progress.toString()
    var newwidthstr = progress.toString() +'%'
    $('#theprogressbar').attr('aria-valuenow', newprogressstr).css('width',newwidthstr);})
})