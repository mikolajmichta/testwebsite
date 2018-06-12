/* Bootstrap tooltips */

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


/* Smooth scrolling on links*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/* Make menu vertical on small screen */
$(window).resize(function () {
    if ($(window).width() < 420) {
        $('#mainNavBar').removeClass('btn-group');
        $('#mainNavBar').addClass('btn-group-vertical');
    } else {
        $('#mainNavBar').addClass('btn-group');
        $('#mainNavBar').removeClass('btn-group-vertical');
    }
});


/* Img replacement */

async function getCorgi() {
    let response = await fetch(`https://dog.ceo/api/breed/corgi/cardigan/images/random`);
    let jsonCorgi = await response.json();
    return jsonCorgi.message;
}

async function replaceImg() {
    $('.img-fluid').each(async function () {
        let doggo = await getCorgi()
        $(this).attr(`src`, doggo)
    })
}

$(`#corgi-head`).on(`click`, replaceImg);

