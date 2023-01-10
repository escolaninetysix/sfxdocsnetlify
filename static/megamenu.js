$(document).ready(function() {

$("li#Training.topbar-dropdown").hover(function() {
	return;
}, function() {
								$("div#toggler [id='Videos By Product']").toggle(false);
});	

$("li#Support.topbar-dropdown").hover(function() {
	return;
}, function() {
							$("div#toggler li[id='Tech Specs']").toggle(false);
							$("div#toggler li#Documentation").toggle(false);
							$("div#toggler li#Community").toggle(false);
							$("div#toggler li#FAQ").toggle(false);
							$("div#toggler li[id='Education Discounts']").toggle(false);
							$("div#toggler li[id='License Instructions']").toggle(false);
							$("div#toggler li[id='Downloads']").toggle(false);
													$("div#toggler [id='Videos By Product']").toggle(false);
	
	
});	

$("li#Products.topbar-dropdown").hover(function() {
	return;
}, function() {
	        $("div#toggler li#Sapphire").toggle(false);
						 $("div#toggler [id='Silhouette']").toggle(false);
           $("div#toggler [id='Mocha Pro']").toggle(false);	
		$("div#toggler [id='More Products']").toggle(false);
$("div#toggler [id='Compare Products']").toggle(false);
		$("div#toggler [id='Continuum']").toggle(false);
								$("div#toggler [id='Videos By Product']").toggle(false);
	
	
});	

//
// products
//
$("div#subnav [id='Boris FX Suite']").hover(function() {
			
			 $("div#toggler [id='Mocha Pro']").toggle(false);
        $("div#toggler li#Sapphire").toggle(false);
		$("div#toggler li#Silhouette").toggle(false);
        $("div#toggler li#Continuum").toggle(false);
		$("div#toggler [id='Compare Products']").toggle(false);
					$("div#toggler [id='More Products']").toggle(false);
									 $("div#toggler [id='Silhouette']").toggle(false);
			}, function() {
        $("div#toggler li#Sapphire").toggle(false);
        $("div#toggler li#Continuum").toggle(false);
		$("div#toggler [id='More Products']").toggle(false);
		$("div#toggler [id='Compare Products']").toggle(false);
				$("div#toggler [id='Mocha Pro']").toggle(false);
						 $("div#toggler [id='Silhouette']").toggle(false);
		

	});
$("div#subnav li#Sapphire").hover(function() {
			$("div#toggler li#Sapphire").attr('style', 'margin-top:-19.7%;width:375px;padding-left:250px;color:white;  white-space: nowrap; overflow: hidden;text-overflow: ellipsis;display:none;');
			$("div#toggler li#Sapphire").toggle(true);
			        $("div#toggler li#Continuum").toggle(false);
        $("div#toggler [id='Mocha Pro']").toggle(false);
		$("div#toggler [id='More Products']").toggle(false);
						 $("div#toggler [id='Silhouette']").toggle(false);
						 $("div#toggler [id='Compare Products']").toggle(false);
			}, function() {		
        $("div#toggler li#Continuum").toggle(false);
						 $("div#toggler [id='Silhouette']").toggle(false);
        $("div#toggler [id='Mocha Pro']").toggle(false);
		$("div#toggler [id='More Products']").toggle(false);
		$("div#toggler [id='Compare Products']").toggle(false);
	});	
$("div#subnav li#Continuum").hover(function() {
			$("div#toggler li#Continuum").attr('style', 'margin-top:-24.5%;width:500px;padding-left:250px;color:white;  white-space: nowrap; overflow: hidden;text-overflow: ellipsis;display:none;');		
		$("div#toggler li#Continuum").toggle(true);
        $("div#toggler li#Sapphire").toggle(false);
        $("div#toggler [id='Mocha Pro']").toggle(false);
		$("div#toggler [id='More Products']").toggle(false);
						 $("div#toggler [id='Silhouette']").toggle(false);
				$("div#toggler [id='Compare Products']").toggle(false);
			}, function() {
        $("div#toggler li#Sapphire").toggle(false);
						 $("div#toggler [id='Silhouette']").toggle(false);
           $("div#toggler [id='Mocha Pro']").toggle(false);
		$("div#toggler [id='More Products']").toggle(false);
		$("div#toggler [id='Compare Products']").toggle(false);
	});
$("div#subnav [id='Mocha Pro']").hover(function() {
			$("div#toggler [id='Mocha Pro']").attr('style', 'margin-top:-32%;width:535px;padding-left:250px;color:white;  white-space: nowrap; overflow: hidden;text-overflow: ellipsis;display:none;');
			$("div#toggler [id='Mocha Pro']").toggle(true);
        $("div#toggler li#Sapphire").toggle(false);
        $("div#toggler li#Continuum").toggle(false);
		$("div#toggler [id='More Products']").toggle(false);
				 $("div#toggler [id='Silhouette']").toggle(false);
				 $("div#toggler [id='Compare Products']").toggle(false);
			}, function() {
        $("div#toggler li#Sapphire").toggle(false);
        $("div#toggler li#Continuum").toggle(false);
						 $("div#toggler [id='Silhouette']").toggle(false);
		$("div#toggler [id='More Products']").toggle(false);
		$("div#toggler [id='Compare Products']").toggle(false);

	});

$("div#subnav li#Silhouette").hover(function() {
				$("div#toggler li#Silhouette").attr('style', 'margin-top:-38.5%;width:565px;padding-left:250px;color:white;  white-space: nowrap; overflow: hidden;text-overflow: ellipsis;display:none;');
		 $("div#toggler [id='Silhouette']").toggle(true);
		 $("div#toggler [id='Mocha Pro']").toggle(false);
        $("div#toggler li#Sapphire").toggle(false);
        $("div#toggler li#Continuum").toggle(false);
		$("div#toggler [id='More Products']").toggle(false);
		$("div#toggler [id='Compare Products']").toggle(false);
			}, function() {

        $("div#toggler li#Sapphire").toggle(false);
        $("div#toggler li#Continuum").toggle(false);
		$("div#toggler [id='Compare Products']").toggle(false);
				$("div#toggler [id='Mocha Pro']").toggle(false);
		$("div#toggler [id='More Products']").toggle(false);
	});
$("div#subnav [id='Optics']").hover(function() {
			
			 $("div#toggler [id='Mocha Pro']").toggle(false);
        $("div#toggler li#Sapphire").toggle(false);
		$("div#toggler li#Silhouette").toggle(false);
        $("div#toggler li#Continuum").toggle(false);
		$("div#toggler [id='Compare Products']").toggle(false);
					$("div#toggler [id='More Products']").toggle(false);
									 $("div#toggler [id='Silhouette']").toggle(false);
			}, function() {
        $("div#toggler li#Sapphire").toggle(false);
        $("div#toggler li#Continuum").toggle(false);
		$("div#toggler [id='More Products']").toggle(false);
		$("div#toggler [id='Compare Products']").toggle(false);
				$("div#toggler [id='Mocha Pro']").toggle(false);
						 $("div#toggler [id='Silhouette']").toggle(false);
		

	});
	
$("div#subnav [id='App Manager']").hover(function() {
			
			 $("div#toggler [id='Mocha Pro']").toggle(false);
        $("div#toggler li#Sapphire").toggle(false);
		$("div#toggler li#Silhouette").toggle(false);
        $("div#toggler li#Continuum").toggle(false);
		$("div#toggler [id='Compare Products']").toggle(false);
					$("div#toggler [id='More Products']").toggle(false);
									 $("div#toggler [id='Silhouette']").toggle(false);
			}, function() {
        $("div#toggler li#Sapphire").toggle(false);
        $("div#toggler li#Continuum").toggle(false);
		$("div#toggler [id='More Products']").toggle(false);
		$("div#toggler [id='Compare Products']").toggle(false);
				$("div#toggler [id='Mocha Pro']").toggle(false);
						 $("div#toggler [id='Silhouette']").toggle(false);
		

	});
	$("div#subnav [id='Compare Products']").hover(function() {
			$("div#toggler [id='Mocha Pro']").toggle(false);
        $("div#toggler li#Sapphire").toggle(false);
		$("div#toggler li#Silhouette").toggle(false);
        $("div#toggler [id='More Products']").toggle(false);
        $("div#toggler li#Continuum").toggle(false);
				 $("div#toggler [id='Silhouette']").toggle(false);
			}, function() {
        $("div#toggler li#Sapphire").toggle(false);
        $("div#toggler [id='More Products']").toggle(false);
        $("div#toggler li#Continuum").toggle(false);
				$("div#toggler [id='Mocha Pro']").toggle(false);
						 $("div#toggler [id='Silhouette']").toggle(false);

	});
	
//	
// videos
//	
	
	
$("div#subnav [id='All Videos']").hover(function() {
				$("div#toggler [id='All Products']").attr('', '');
				$("div#toggler [id='Videos By Product']").toggle(false);
		        $("div#toggler li#Sapphire").toggle(false);
		        $("div#toggler li#Continuum").toggle(false);
        $("div#toggler [id='Mocha Pro']").toggle(false);
			}, function() {
		        $("div#toggler li#Sapphire").toggle(false);
		        $("div#toggler li#Continuum").toggle(false);
        $("div#toggler [id='Mocha Pro']").toggle(false);
						$("div#toggler [id='Videos By Product']").toggle(false);
	});
	$("div#subnav [id='Videos By Product']").hover(function() {
				$("div#toggler [id='Videos By Product']").attr('style', 'margin-top:-15%;width:525px;padding-left:350px;color:white;  white-space: nowrap; overflow: hidden;text-overflow: ellipsis;display:none;');
				$("div#toggler [id='Videos By Product']").toggle(true);
		        $("div#toggler li#Sapphire").toggle(false);
		        $("div#toggler li#Continuum").toggle(false);
        $("div#toggler [id='Mocha Pro']").toggle(false);
			}, function() {
		        $("div#toggler li#Sapphire").toggle(false);
		        $("div#toggler li#Continuum").toggle(false);
        $("div#toggler [id='Mocha Pro']").toggle(false);
	});

$("div#subnav [id='Webinar Replays']").hover(function() {
				$("div#toggler [id='Webinar Replays']").attr('style', '');
				$("div#toggler [id='Videos By Product']").toggle(false);
		        $("div#toggler li#Sapphire").toggle(false);
		        $("div#toggler li#Continuum").toggle(false);
        $("div#toggler [id='Mocha Pro']").toggle(false);
			}, function() {
		        $("div#toggler li#Sapphire").toggle(false);
		        $("div#toggler li#Continuum").toggle(false);
        $("div#toggler [id='Mocha Pro']").toggle(false);
						$("div#toggler [id='Videos By Product']").toggle(false);
	});
$("div#subnav [id='Free Presets and Projects']").hover(function() {
				$("div#toggler [id='Free Presets and Projects']").attr('style', '');
		        $("div#toggler li#Sapphire").toggle(false);
		        $("div#toggler li#Continuum").toggle(false);
								$("div#toggler [id='Videos By Product']").toggle(false);
        $("div#toggler [id='Mocha Pro']").toggle(false);
			}, function() {
		        $("div#toggler li#Sapphire").toggle(false);
		        $("div#toggler li#Continuum").toggle(false);
        $("div#toggler [id='Mocha Pro']").toggle(false);
						$("div#toggler [id='Videos By Product']").toggle(false);
	});
$("div#subnav [id='Training Resources']").hover(function() {
				$("div#toggler [id='Training Resources']").attr('style', '');
		        $("div#toggler li#Sapphire").toggle(false);
		        $("div#toggler li#Continuum").toggle(false);
								$("div#toggler [id='Videos By Product']").toggle(false);
        $("div#toggler [id='Mocha Pro']").toggle(false);
			}, function() {
		        $("div#toggler li#Sapphire").toggle(false);
		        $("div#toggler li#Continuum").toggle(false);
        $("div#toggler [id='Mocha Pro']").toggle(false);
						$("div#toggler [id='Videos By Product']").toggle(false);
	});
$("div#subnav [id='Purchase Training Products']").hover(function() {
				$("div#toggler [id='Purchase Training Products']").attr('style', '');
		        $("div#toggler li#Sapphire").toggle(false);
		        $("div#toggler li#Continuum").toggle(false);
								$("div#toggler [id='Videos By Product']").toggle(false);
        $("div#toggler [id='Mocha Pro']").toggle(false);
			}, function() {
		        $("div#toggler li#Sapphire").toggle(false);
		        $("div#toggler li#Continuum").toggle(false);
        $("div#toggler [id='Mocha Pro']").toggle(false);
						$("div#toggler [id='Videos By Product']").toggle(false);
	});
});
$(document).ready(function() {
// Support

	
$("div#subnav li[id='Contact Support']").hover(function() {
							$("div#toggler li[id='Tech Specs']").toggle(false);
							$("div#toggler li#FAQ").toggle(false);
							$("div#toggler li[id='Education Discounts']").toggle(false);
							$("div#toggler [id='More Products']").toggle(false);
							$("div#toggler li#Community").toggle(false);
							$("div#toggler li[id='License Instructions']").toggle(false);
							$("div#toggler li#Downloads").toggle(false);


		        $("div#toggler li#Sapphire").toggle(false);
		        $("div#toggler li#Continuum").toggle(false);
   
			}, function() {
							$("div#toggler li[id='Tech Specs']").toggle(false);
							$("div#toggler li#FAQ").toggle(false);
							$("div#toggler li[id='Education Discounts']").toggle(false);
							$("div#toggler [id='More Products']").toggle(false);
							$("div#toggler li#Community").toggle(false);
							$("div#toggler li[id='License Instructions']").toggle(false);
							$("div#toggler li#Downloads").toggle(false);
				
   
	});
	
$("div#subnav li[id='License Instructions']").hover(function() {
					$("div#toggler li[id='Tech Specs']").toggle(false);
					$("div#toggler [id='License Instructions']").attr('style', 'margin-top:-34.5%;width:500px;padding-left:300px;color:white;  white-space: nowrap; overflow: hidden;text-overflow: ellipsis;display:none;');
			        $("div#toggler li#Community").toggle(false);
					$("div#toggler li[id='Education Discounts']").toggle(false);					
							$("div#toggler li[id='License Instructions']").toggle(true);
							$("div#toggler li#FAQ").toggle(false);
							$("div#toggler li#Downloads").toggle(false);
							$("div#toggler [id='More Products']").toggle(false);

		        $("div#toggler li#Sapphire").toggle(false);
		        $("div#toggler li#Continuum").toggle(false);
   
			}, function() {
		        $("div#toggler li#Sapphire").toggle(false);
		        $("div#toggler li#Continuum").toggle(false);
  
	});
	
$("div#subnav li#Downloads").hover(function() {
				$("div#toggler li#Downloads").attr('style', 'margin-top:-5%;width:500px;padding-left:300px;color:white;  white-space: nowrap; overflow: hidden;text-overflow: ellipsis;display:none;');
							$("div#toggler li[id='Tech Specs']").toggle(false);
							$("div#toggler li#Downloads").toggle(true);
							$("div#toggler li#Community").toggle(false);
							$("div#toggler li[id='Education Discounts']").toggle(false);
							$("div#toggler li#FAQ").toggle(false);
							$("div#toggler li[id='License Instructions']").toggle(false);
							$("div#toggler [id='More Products']").toggle(false);

		        $("div#toggler li#Sapphire").toggle(false);
		        $("div#toggler li#Continuum").toggle(false);
   
			}, function() {
		        $("div#toggler li#Sapphire").toggle(false);
		        $("div#toggler li#Continuum").toggle(false);
   
	});
$("div#subnav li#Documentation").hover(function() {
				$("div#toggler li#Documentation").attr('style', '');
							$("div#toggler li[id='Tech Specs']").toggle(false);
							$("div#toggler li#Community").toggle(false);
							$("div#toggler li#FAQ").toggle(false);
							$("div#toggler li[id='Education Discounts']").toggle(false);
							$("div#toggler [id='More Products']").toggle(false);
							$("div#toggler li[id='License Instructions']").toggle(false);
							$("div#toggler li[id='Downloads']").toggle(false);

		        $("div#toggler li#Sapphire").toggle(false);
		        $("div#toggler li#Continuum").toggle(false);
   
			}, function() {
		        $("div#toggler li#Sapphire").toggle(false);
		        $("div#toggler li#Continuum").toggle(false);
   
	});
$("div#subnav li#Community").hover(function() {
				$("div#toggler li#Community").attr('style', 'margin-top:-53%;width:510px;padding-left:300px;color:white;  white-space: nowrap; overflow: hidden;text-overflow: ellipsis;display:none;');
							$("div#toggler li[id='Tech Specs']").toggle(false);
							$("div#toggler li#Community").toggle(true);
							$("div#toggler li#FAQ").toggle(false);
							$("div#toggler li[id='Education Discounts']").toggle(false);
							$("div#toggler li[id='License Instructions']").toggle(false);
							$("div#toggler li[id='Downloads']").toggle(false);
							$("div#toggler [id='More Products']").toggle(false);

		        $("div#toggler li#Sapphire").toggle(false);
		        $("div#toggler li#Continuum").toggle(false);
   
			}, function() {
		        $("div#toggler li#Sapphire").toggle(false);
		        $("div#toggler li#Continuum").toggle(false);
   
	});
$("div#subnav li[id='Tech Specs']").hover(function() {
				$("div#toggler li[id='Tech Specs']").attr('style', 'margin-top:-54.5%;width:585px;padding-left:300px;color:white;  white-space: nowrap; overflow: hidden;text-overflow: ellipsis;display:none;');
							$("div#toggler li[id='Tech Specs']").toggle(true);
							$("div#toggler li#FAQ").toggle(false);
							$("div#toggler li[id='Education Discounts']").toggle(false);
							$("div#toggler [id='More Products']").toggle(false);
							$("div#toggler li[id='License Instructions']").toggle(false);
							$("div#toggler li[id='Downloads']").toggle(false);
							$("div#toggler li#Community").toggle(false);

		        $("div#toggler li#Sapphire").toggle(false);
		        $("div#toggler li#Continuum").toggle(false);
   
			}, function() {
		        $("div#toggler li#Sapphire").toggle(false);
		        $("div#toggler li#Continuum").toggle(false);
   
	});
$("div#subnav li[id='Education Discounts']").hover(function() {
				$("div#toggler li[id='Education Discounts']").attr('style', 'margin-top:-86.2%;width:425px;padding-left:300px;color:white;  white-space: nowrap; overflow: hidden;text-overflow: ellipsis;display:none;');
											$("div#toggler li[id='Education Discounts']").toggle(true);
											$("div#toggler li[id='Tech Specs']").toggle(false);
							$("div#toggler li#FAQ").toggle(false);
							$("div#toggler [id='More Products']").toggle(false);
							$("div#toggler li[id='License Instructions']").toggle(false);
							$("div#toggler li[id='Downloads']").toggle(false);
							$("div#toggler li#Community").toggle(false);

		        $("div#toggler li#Sapphire").toggle(false);
		        $("div#toggler li#Continuum").toggle(false);

   
			}, function() {
		        $("div#toggler li#Sapphire").toggle(false);
		        $("div#toggler li#Continuum").toggle(false);
   
	});
$("div#subnav li[id='Release Notes']").hover(function() {
				$("div#toggler li#Release Notes").attr('style', '');
							$("div#toggler li[id='Tech Specs']").toggle(false);
							$("div#toggler li#Community").toggle(false);
							$("div#toggler li#FAQ").toggle(false);
							$("div#toggler li[id='Education Discounts']").toggle(false);
							$("div#toggler [id='More Products']").toggle(false);
							$("div#toggler li[id='License Instructions']").toggle(false);
							$("div#toggler li[id='Downloads']").toggle(false);

		        $("div#toggler li#Sapphire").toggle(false);
		        $("div#toggler li#Continuum").toggle(false);
   
			}, function() {
							$("div#toggler li[id='Tech Specs']").toggle(false);
							$("div#toggler li#FAQ").toggle(false);
							$("div#toggler li[id='Education Discounts']").toggle(false);
							$("div#toggler [id='More Products']").toggle(false);
							$("div#toggler li#Community").toggle(false);
							$("div#toggler li[id='License Instructions']").toggle(false);
							$("div#toggler li#Downloads").toggle(false);
				
	});	
$("div#subnav li[id='Help Center']").hover(function() {
				$("div#toggler li#Help Center").attr('style', '');
							$("div#toggler li[id='Tech Specs']").toggle(false);
							$("div#toggler li#Community").toggle(false);
							$("div#toggler li#FAQ").toggle(false);
							$("div#toggler li[id='Education Discounts']").toggle(false);
							$("div#toggler [id='More Products']").toggle(false);
							$("div#toggler li[id='License Instructions']").toggle(false);
							$("div#toggler li[id='Downloads']").toggle(false);

		        $("div#toggler li#Sapphire").toggle(false);
		        $("div#toggler li#Continuum").toggle(false);
   
			}, function() {
							$("div#toggler li[id='Tech Specs']").toggle(false);
							$("div#toggler li#FAQ").toggle(false);
							$("div#toggler li[id='Education Discounts']").toggle(false);
							$("div#toggler [id='More Products']").toggle(false);
							$("div#toggler li#Community").toggle(false);
							$("div#toggler li[id='License Instructions']").toggle(false);
							$("div#toggler li#Downloads").toggle(false);
				
	});	
});