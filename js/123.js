//event pada saat link di klik
$('.page-scroll').on('click', function(e) 
{
  //ambil isi href
    var tujuan = $(this).attr('href');
  //tangkap element yang bersangkutan
    var elementTujuan = $(tujuan);

    //pindahkan scroll
    $('body').animate({
      scrollTop: elementTujuan.offset().top - 50
    }, 1250,'swing')

      e.preventDefault();

});