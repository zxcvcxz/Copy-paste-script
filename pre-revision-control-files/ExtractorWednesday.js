/* ==================
 * = SalesForce....
 * ==================*/


var sfData = {
	
	division: "", 
	sfOpportunityId: "", 
	feature: "", 
	rawFeatureDate: "", 
	rawFeatureEndDate: "", 
	vendorName: "", 
	redemptionAddress: "", 
	billingAddress: "", 
	unitSellPrice: "", 
	unitValue: "", 
	unitBuyPrice: "", 
	dealMin: "", 
	dealMax: "", 
	buyerMax: "", 
	vendorURL: "", 
	emailListTo: "", 
	dealTitle: "", 
	conditions: "", 
	instructions: "", 
	rawExpirationDate: "" 
};

sfData["division"]=document.getElementById('00N800000033J4U_ileinner').innerHTML;
sfData["sfOpportunityId"]=document.getElementById('00N80000004KNJg_ileinner').innerHTML;
sfData["feature"]=document.getElementById('opp5_ileinner').innerHTML;
sfData["rawFeatureDate"]=document.getElementById('00N8000000364aj_ileinner').innerHTML;
sfData["rawFeatureEndDate"]=document.getElementById('00N800000040dNR_ileinner').innerHTML;
sfData["vendorName"]=document.getElementById('opp4_ileinner').childNodes[0].text;
sfData["redemptionAddress"]=document.getElementById('00N80000003LdTB_ileinner').innerHTML;
sfData["billingAddress"]=document.getElementById('00N80000003LriJ_ileinner').innerHTML;
sfData["unitSellPrice"]=document.getElementById('00N80000002Xktz_ileinner').innerHTML;
sfData["unitValue"]=document.getElementById('00N80000002Xkur_ileinner').innerHTML;
sfData["unitBuyPrice"]=document.getElementById('00N80000002XktR_ileinner').innerHTML;
sfData["dealMin"]=document.getElementById('00N80000002XktQ_ileinner').innerHTML;
sfData["dealMax"]=document.getElementById('00N80000002Xkty_ileinner').innerHTML;
sfData["buyerMax"]=document.getElementById('00N80000003j6sZ_ileinner').innerHTML;
/* This code will return false values if the vendor email isn't first in the list */
sfData["vendorURL"]=document.getElementById('00N80000003YC5j_ileinner').childNodes[0].text;
/* The email address needs to be parsed from this blob */
sfData["emailListTo"]=document.getElementById('00N80000003Lrwt_ileinner').innerHTML;
sfData["dealTitle"]=document.getElementById('opp3_ileinner').innerHTML;
sfData["conditions"]=document.getElementById('00N80000002XjZV_ileinner').innerHTML;
sfData["instructions"]=document.getElementById('00N800000033zfJ_ileinner').innerHTML;
sfData["rawExpirationDate"]=document.getElementById('00N800000033zV8_ileinner').innerHTML;




/* Groupon Terms Page */

/* Value configuration */

/* Should be a switch */
if (sfData['division']=="Albuquerque") {
	newObjectSDSFADSF['division']=41; 
}
else if (sfData['division']=="Atlanta") {
	newObjectSDSFADSF['division']=7;
}
else if (sfData['division']=="Austin") {
	newObjectSDSFADSF['division']=17;
}
else if (sfData['division']=="Baltimore") {
	newObjectSDSFADSF['division']=25;
}
else if (sfData['division']=="Boston") {
	newObjectSDSFADSF['division']=2;
}
else if (sfData['division']=="Charlotte") {
	newObjectSDSFADSF['division']=23;
}
else if (sfData['division']=="Chicago") {
	newObjectSDSFADSF['division']=1;
}
else if (sfData['division']=="Cincinnati") {
	newObjectSDSFADSF['division']=38;
}
else if (sfData['division']=="Cleveland") {
	newObjectSDSFADSF['division']=32;
}
else if (sfData['division']=="Columbus") {
	newObjectSDSFADSF['division']=30;
}
else if (sfData['division']=="Dallas") {
	newObjectSDSFADSF['division']=10;
}
else if (sfData['division']=="Denver") {
	newObjectSDSFADSF['division']=12;
}
else if (sfData['division']=="Detroit") {
	newObjectSDSFADSF['division']=42;
}
else if (sfData['division']=="Fort Worth") {
	newObjectSDSFADSF['division']=44;
}
else if (sfData['division']=="Fresno") {
	newObjectSDSFADSF['division']=45;
}
else if (sfData['division']=="Houston") {
	newObjectSDSFADSF['division']=13;
}
else if (sfData['division']=="Indianapolis") {
	newObjectSDSFADSF['division']=26;
}
else if (sfData['division']=="Jacksonville") {
	newObjectSDSFADSF['division']=33;
}
else if (sfData['division']=="Kansas City") {
	newObjectSDSFADSF['division']=29;
}
else if (sfData['division']=="Las Vegas") {
	newObjectSDSFADSF['division']=22;
}
else if (sfData['division']=="London") {
	newObjectSDSFADSF['division']=48;
}
else if (sfData['division']=="LA") {
	newObjectSDSFADSF['division']=6;
}
else if (sfData['division']=="Louisville") {
	newObjectSDSFADSF['division']=37;
}
else if (sfData['division']=="Memphis") {
	newObjectSDSFADSF['division']=34;
}
else if (sfData['division']=="Miami") {
	newObjectSDSFADSF['division']=19;
}
else if (sfData['division']=="Milwaukee") {
	newObjectSDSFADSF['division']=43;
}
else if (sfData['division']=="Minneapolis") {
	newObjectSDSFADSF['division']=21;
}
else if (sfData['division']=="Nashville") {
	newObjectSDSFADSF['division']=24;
}
else if (sfData['division']=="New York") {
	newObjectSDSFADSF['division']=3;
}
else if (sfData['division']=="Oklahoma City") {
	newObjectSDSFADSF['division']=40;
}
else if (sfData['division']=="Omaha") {
	newObjectSDSFADSF['division']=36;
}
else if (sfData['division']=="Philadelphia") {
	newObjectSDSFADSF['division']=16;
}
else if (sfData['division']=="Phoenix") {
	newObjectSDSFADSF['division']=15;
}
else if (sfData['division']=="Pittsburgh") {
	newObjectSDSFADSF['division']=31;
}
else if (sfData['division']=="Portland") {
	newObjectSDSFADSF['division']=20;
}
else if (sfData['division']=="Raleigh") {
	newObjectSDSFADSF['division']=39;
}
else if (sfData['division']=="Sacramento") {
	newObjectSDSFADSF['division']=46;
}
else if (sfData['division']=="San Antonio") {
	newObjectSDSFADSF['division']=35;
}
else if (sfData['division']=="San Diego") {
	newObjectSDSFADSF['division']=14;
}
else if (sfData['division']=="San Francisco") {
	newObjectSDSFADSF['division']=5;
}
else if (sfData['division']=="San Jose") {
	newObjectSDSFADSF['division']=28;
}
else if (sfData['division']=="Seattle") {
	newObjectSDSFADSF['division']=11;
}
else if (sfData['division']=="St. Louis") {
	newObjectSDSFADSF['division']=27;
}
else if (sfData['division']=="Tampa") {
	newObjectSDSFADSF['division']=18;
}
else if (sfData['division']=="Toronto") {
	newObjectSDSFADSF['division']=49;
}
else if (sfData['division']=="Vancouver") {
	newObjectSDSFADSF['division']=50;
}
else if (sfData['division']=="Virginia Beach") {
	newObjectSDSFADSF['division']=47;
}
else if (sfData['division']=="DC") {
	newObjectSDSFADSF['division']=4;
}



/* color division slider 
document.getElementById('campaign_division_id').value='7'; return false;*/
$('campaign_division_id').style.backgroundColor="pink"; return false;














/* Mike's Code
var attributesForInsertion = {};

sfData.each( function(key, value){
  attributesForInsertion[value] = $(key).value;
});

alert(attributesForInsertion);  This hash gets inserted into the Groupon-specific JS, as input.*/

/* ===============
 * = Groupon....
 * ===============*/
var attributesToInsert = {salesforce_id: 'SOME ID', opportunity_title: 'MY TITLE'};

/* For Terms Page */
do $('campaign_division_id').value=attributesForInsertion.

attributesToInsert.each( function(key, value){
    $(key).value = value;
});
