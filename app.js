
$('#jobBtn').click(()=> {
    $('#forJob').addClass('active')
    $('#jobBtn').addClass('active')
    $('#forCandida').removeClass('active')
    $('#candiBtn').removeClass('active')
})

$('#candiBtn').click(()=> {
    $('#forJob').removeClass('active')
    $('#jobBtn').removeClass('active')
    $('#forCandida').addClass('active')
    $('#candiBtn').addClass('active')
})
$('.menu').click(() => {
    $('.nav').toggleClass('active')
    $('.fa-chevron-down').toggleClass('active')
})