

window.addEventListener( "load", ev => {
	/* [ properties ]
    =============================== */
	let links = document.querySelectorAll( "appbar ul li" );


	/* [ events ]
    =============================== */
	links.forEach( link => link.addEventListener( "click", ev => {
		window.open( link.getAttribute( "src" ), "_blank" );
	} ) );

    
} );