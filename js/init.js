var editor = ace.edit( 'simple-css-editor' ),
	textarea = jQuery( '#simple-css-textarea' );

editor.session.setMode( 'ace/mode/css' );
editor.getSession().setUseWorker( false );
editor.getSession().setValue( textarea.val() );
editor.getSession().on( 'change', function(){
	textarea.val( editor.getSession().getValue() );
} );

var theme = jQuery( '.simple-css-container' ).data( 'theme' );

if ( 'dark' === theme ) {
	editor.setTheme( 'ace/theme/nord_dark' );
} else {
	editor.setTheme( 'ace/theme/katzenmilch' );
}

jQuery( '.change-theme' ).on( 'change', function() {
	if ( 1 == jQuery( this ).val() ) {
		editor.setTheme( 'ace/theme/nord_dark' );
	} else {
		editor.setTheme( 'ace/theme/katzenmilch' );
	}
} );
