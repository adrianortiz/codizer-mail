$(document).ready(function () {

    $('.selectpicker').selectpicker({
      style: 'btn-order-by',
      size: 4
    });

    for (var i = 0; i < 12; i++) {
        $('#menu-contacts-list').append('<button type="button" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="./public/media/girl-b.jpg" /><ul><li>Alejandra Magos Mendoza</li><li>Diseñadora</li></ul></button>');
    }

    for (var i = 2; i < 12; i++) {
        $('#inbox-list').append('<li> <a href="#inbox-'+ i +'" data-toggle="tab"> <ul> <li> <div class="icon-dot blue-border"></div>John Smith<span>02/05/16</span> </li> <li> <p>Da el siguiente paso con el curso Design Patterns, A Pragma</p> </li> </ul> </a> </li>');
        $('.inbox-preview').append('<div class="tab-pane" id="inbox-'+ i +'">Soy el correo inbox '+ i +'.</div>');
    }

});
