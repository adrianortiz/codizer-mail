$( "#myDiv" ).click(function() {
  alert( "Handler for .click() called." );
});

for (var i = 0; i < 12; i++) {
    $('#menu-contacts-list').prepend('<button type="button" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="./public/media/girl-b.jpg" /><ul><li>Alejandra Magos Mendoza</li><li>Diseñadora</li></ul></button>');
}
