<?php
// define the jetpack_sharing_display_markup callback 

    function filter_jetpack_sharing_display_markup( $sharing_content ) { 
        // make filter magic happen here... 
		if (preg_match_all ( '/title="([^"]*)"/', $sharing_content, $matches, PREG_PATTERN_ORDER)) {
			$i = 0;
			$extract = $matches[0];
			foreach ($extract as $title){
				$mots = explode(" ", $title);
				$count = count($mots);
				$reseau = substr($mots[$count-1], 0, -1); // last word without " character
				$replacement = 'title="'.$reseau.' - nouvelle fenêtre"';
				$sharing_content = str_replace ($title, $replacement, $sharing_content);
			}
		}
        return 'avant '.$sharing_content.' après'; 
    }; 
             
    // add the filter 
    add_filter( 'jetpack_sharing_display_markup', 'filter_jetpack_sharing_display_markup', 10, 1 ); 
?>