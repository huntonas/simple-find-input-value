$(document).ready( function() {
	var form_app_values = new Array();

	//Load Up the Array
	form_app_values = 
		[
			[".yearCost", 0],
			[".instCont", 0],
			[".centConfCont", 0],
			[".annualConfCont", 0],
			[".otherCont", 0],
			[".grantTotal", 0]
		];

	//Triggered when user LEAVES any of these input fields
	$(".grantTotal, .otherCont, .annualConfCont, .centConfCont, .instCont, .yearCost").focusout( function() {
		for (i=0; i < form_app_values.length; i++) {
			form_app_values[i][1] = getInputVals(form_app_values, i);
		}

		//Insert Calculated value into the 'Total' input field
		$(form_app_values[5][0]).val(getGTotal(form_app_values));

		//Gets the values in the input fields
		function getInputVals (form_app_values, i) {
			 return $(form_app_values[i][0]).val();
		}

		//Gets the grand total 
		function getGTotal (form_app_values) {
			var contTotals = getTotals(form_app_values);
			form_app_values[5][1] = form_app_values[0][1] - contTotals;
			return form_app_values[5][1];
		}


		//Adds up all the values in the input fields except the grantTotal
		function getTotals (form_app_values) {
			var totals = 0;
			for(c=1; c < 5; c++) {
				totals += Number(form_app_values[c][1]);
			}
			return totals;
		}
	})
});