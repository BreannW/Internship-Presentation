    
      document.getElementById('DEFsubmitbtn').addEventListener("click", CalcDef);

	function CalcDef(event) {
	        event.preventDefault();
	       /* if (document.getElementById('NumberOfTrucks').value === '') {
	            document.getElementById("NOT").innerHTML =
	                'Number of Trucks Requiring DEF:  <span style="color:red">*</span>';
	            document.getElementById('NumberOfTrucks').focus();
				
	        } 
			
			
			if  (document.getElementById('MilesPerVeh').value === '') {
	            document.getElementById('AMPV').innerHTML =
	                'Annual Mileage per Vehicle<span style="color:red">*</span>';
	            document.getElementById('MilesPerVeh').focus();
				
	        }
			
	        if (document.getElementById('AverageMPG').value === '') {
	            document.getElementById("AMPG").innerHTML =
	                'Average Miles per Gallon <span style="color:red">*</span>';
	            document.getElementById('AverageMPG').focus();
	        } 
			*/
			
			
	            var NumberOfTrucks = document.getElementById('NumberOfTrucks').value;
	            if (NumberOfTrucks.match(/[a-z]/i)) {
	                document.getElementById("NOT").innerHTML =
	                    'Number of Trucks Requiring DEF: <br> <label style="color:red; font-weight:100;">Please only use numbers</label>';
	            } else {
				if (document.getElementById('NumberOfTrucks').value === '') {
	            document.getElementById("NOT").innerHTML =
	                'Number of Trucks Requiring DEF:  <span style="color:red">*</span>';
	            document.getElementById('NumberOfTrucks').focus();
				
	        } 
	          else
{			  document.getElementById("NOT").innerHTML = 'Number of Trucks Requiring DEF:';
}
	            }
				
				
				
				
	            //remove commas and convert string to number
	            NumberOfTrucks = NumberOfTrucks.replace(/\,/g, '');
	            NumberOfTrucks = parseInt(NumberOfTrucks, 10);
	            var MilesPerVeh = document.getElementById('MilesPerVeh').value;
	            if (MilesPerVeh.match(/[a-z]/i)) {
	                document.getElementById("AMPV").innerHTML =
	                    'Annual Mileage per vehicle: <br> <label style="color:red; font-weight:100;">Please only use numbers</label>';
	            } else {
				if  (document.getElementById('MilesPerVeh').value === '') {
	            document.getElementById('AMPV').innerHTML =
	                'Annual Mileage per Vehicle<span style="color:red">*</span>';
	            document.getElementById('MilesPerVeh').focus();
				
	        }
			else
			{
	                document.getElementById("AMPV").innerHTML =
	                    'Annual Mileage per vehicle:';
						}
	            }
	            //remove commas and convert string to number
	            MilesPerVeh = MilesPerVeh.replace(/\,/g, '');
	            MilesPerVeh = parseInt(MilesPerVeh, 10);
	            var AverageMPG = document.getElementById('AverageMPG').value;
	            if (AverageMPG.match(/[a-z]/i)) {
	                document.getElementById("AMPG").innerHTML =
	                    'Average Miles per Gallon: <br> <label style="color:red; font-weight:100;">Please only use numbers</label>';
	            } else {
				   if (document.getElementById('AverageMPG').value === '') {
	            document.getElementById("AMPG").innerHTML =
	                'Average Miles per Gallon <span style="color:red">*</span>';
	            document.getElementById('AverageMPG').focus();
	        } 
			else{
	                document.getElementById("AMPG").innerHTML =
	                    'Average Miles per Gallon:';
						}
	            }
	            //remove commas and convert string to number
	            AverageMPG = AverageMPG.replace(/\,/g, '');
	            AverageMPG = parseInt(AverageMPG, 10);
	            var AllMiles = (NumberOfTrucks * MilesPerVeh);
	            var divGals = (AllMiles / AverageMPG);
	            var DEFNum = +document.getElementById('DEFU').value;
	            // make the percentage point a decimal 
	            var DEFUsage = (DEFNum / 100);
	            var DEFUsedAnnually = (divGals * DEFUsage)
	                //round our result up
	            var DEFUsedAnnually = Math.ceil(DEFUsedAnnually);
	            //add a comma so it displays in the calculator 
	            DEFUsedAnnually = DEFUsedAnnually.toString().replace(
	                /\B(?=(\d{3})+(?!\d))/g, ",");
	            document.getElementById('DEFNeeded').innerHTML = DEFUsedAnnually;
	            //remove the comma from the var to do threshold calculations 
	            DEFUsedAnnually = DEFUsedAnnually.replace(/\,/g, '');
	            DEFUsedAnnually = parseInt(DEFUsedAnnually, 10);
	           
			    if (DEFUsedAnnually >= 0 && DEFUsedAnnually <= 600) {
	                document.getElementById("TankP").innerHTML =
	                    "We recommend</br>2.5 Gallon jugs";
	                // if result is greater than or equal to 601 and less than or equal to 1319
	            } else if (DEFUsedAnnually >= 601 && DEFUsedAnnually <= 1319) {
	                document.getElementById("TankP").innerHTML =
	                    "We recommend a</br>55 Gallon Drum";
	                // if result is greater than or equal to 1320 and less than or equal to 9,900
	            } else if (DEFUsedAnnually >= 1320 && DEFUsedAnnually <= 9900) {
	                document.getElementById("TankP").innerHTML =
	                    "We reccommend</br>330 Gallon Totes";
	                // if result is greater than or equal to 9,901 and less than or equal to 40,000
	            } else if (DEFUsedAnnually >= 9901 && DEFUsedAnnually <= 40000) {
	                document.getElementById("TankP").innerHTML =
	                    "We recommend a</br>1,000 to 2,000 Gallon Mini Bulk Tank";
	                // if result is greater than or equal to 40,001 and less than or equal to 80,000
	            } else if (DEFUsedAnnually >= 40001 && DEFUsedAnnually <= 80000) {
	                document.getElementById("TankP").innerHTML =
	                    "We reccommend a</br>3,000 to 4,000 Gallon Mini Bulk Tank";
	                // if result is greater than or equal to 80001 and less than or equal to 150,000
	            } else if (DEFUsedAnnually >= 80001 && DEFUsedAnnually <= 150000) {
	                document.getElementById("TankP").innerHTML =
	                    "We reccommend a</br>5,000 Gallon Bulk Tank";
	                // if its over 150,001 
	            } else {
	                document.getElementById("TankP").innerHTML =
	                    'We recommend you contact one of our </br><a style="color: #f58220;"  class="DEFCalcLink" href="mailto:DEFSolutions@atlasoil.com">DEF Specialists</a></br>for proper sizing.';
	            }
	        
	        if (document.getElementById('OTRradio').checked) {
	            document.getElementById("OTRText").innerHTML =
	                '<br>Send your OTR drivers with a bottle of DEF! <a style="color: #f58220;" class="DEFCalcLink" href="mailto:DEFSolutions@atlasoil.com">Ask about our pre-packaged DEF goods today!</a>';
	        } else if (document.getElementById('Local').checked) {
	            document.getElementById("OTRText").innerHTML = " ";
	        } else if (document.getElementById('Both').checked) {
	            document.getElementById('OTRText').innerHTML =
	                '<br>Send your OTR drivers with a bottle of DEF! <a style="color: #f58220;" class="DEFCalcLink" href="mailto:DEFSolutions@atlasoil.com">Ask about our pre-packaged DEF goods today!</a>';
	        }
	    }
	    /* function SizedTank() {
if (DEFUsedAnnually >=0 && DEFUsedAnnually <= 2560) { document.getElementById("tankSize").innerHTML = "55 Gal Drum";
	} else if (DEFUsedAnnually >= 2561 && DEFUsedAnnually <= 6400) { document.getElementById("tankSize").innerHTML = "257 Gallon Tote";
	} else if (DEFUsedAnnually >= 6401 && DEFUsedAnnually <= 19200) { document.getElementById("tankSize").innerHTML = "1-2k Gallon Mini";
	} else if (DEFUsedAnnually >= 19201 && DEFUsedAnnually <= 38400) { document.getElementById("tankSize").innerHTML = "3-4k Gallon Mini";
	} else if (DEFUsedAnnually >=38401 && DEFUsedAnnually <=76800){ document.getElementById("tankSize").innerHTML = "5K UST";
	} else { document.getElementById("tank").innerHTML = "Please Contact a Sales Representative"; } 
	
		
		
}*/
	    /* IE11 Fix for SP2010 */
	if (typeof(UserAgentInfo) != 'undefined' && !window.addEventListener) {
	    UserAgentInfo.strBrowser = 1;
	}
	/* if (typeof console == "undefined") {
    this.console = { log: function (msg) { alert(msg); } };
} */
	 // IE9 fix
	if (!window.console) {
	    var console = {
	        log: function() {},
	        warn: function() {},
	        error: function() {},
	        time: function() {},
	        timeEnd: function() {}
	    }
	}
	