<?php

    /*
    Plugin Name: rafiqcoder
    Description: We want to remove items from the wordpress admin
    
    */


function hide_menu() {

   	 /* DASHBOARD */
	 // remove_menu_page( 'index.php' ); // Dashboard + submenus
   	 // remove_menu_page( 'about.php' ); // WordPress menu
   	// remove_submenu_page( 'index.php', 'update-core.php');  // Update 

   	 /* REMOVE DEFAULT MENUS */
	// remove_menu_page( 'edit-comments.php' ); //Comments
	// remove_menu_page( 'plugins.php' ); //Plugins
//	 remove_menu_page( 'tools.php' ); //Tools
  	// remove_menu_page( 'users.php' ); //Users
  	 // remove_menu_page( 'edit.php' ); //Posts
	 // remove_menu_page( 'upload.php' ); //Media
	 // remove_menu_page( 'edit.php?post_type=page' ); // Pages
	 // remove_menu_page( 'themes.php' ); // Appearance
  	 // remove_menu_page( 'options-general.php' ); //Settings
	remove_menu_page( 'elementor' ); 
	remove_menu_page( 'edit.php?post_type=elementor_library');  
	remove_menu_page( 'snippets' ); 
	remove_menu_page( 'ovic_addon-dashboard');  
		remove_menu_page( 'wp-mail-smtp');  
	remove_menu_page( 'unlimitedelements');  
	//unlimitedelements
	remove_submenu_page( 'themes.php', 'theme-editor.php');
}
add_action('admin_head', 'hide_menu');

?>