( function( $ ) {

	wp.customize( 'simple_css[css]', function( value ) {
		value.bind( function( newval ) {
			$( '#simple-css-output' ).text( newval );
		} );
	} );
	
} )( jQuery );