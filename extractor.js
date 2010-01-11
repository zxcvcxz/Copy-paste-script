/* ==================
 * = SalesForce....
 * ==================*/

/* ToDo-s
 * ToDo: Buyer Max Checking
 * ToDo: DC subareas, calif subareas
 * ToDo: Feature End Date * plus weekends
 * ToDo: Feature Date
 * ToDo: expirationDate
 * ToDo: look at Vendor Drop Down
 * ToDo: VendorURL Pretty
 * ToDo: Nice Fades for highlights, and they remove onClick
 * ToDo: Deal Vendor Location multi Location?
 * ToDo: Change if loop for location to a switch Statement
* */


var sfData = {};

sfData["division"]=document.getElementById('00N800000033J4U_ileinner').innerHTML;
sfData["sfOpportunityId"]=document.getElementById('00N80000004KNJg_ileinner').innerHTML;
sfData["feature"]=document.getElementById('opp5_ileinner').innerHTML;
sfData["featureDate"]=document.getElementById('00N8000000364aj_ileinner').innerHTML;
sfData["featureEndDate"]=document.getElementById('00N800000040dNR_ileinner').innerHTML;
sfData["vendorName"]=document.getElementById('opp4_ileinner').childNodes[0].text;
sfData["redemptionAddress"]=document.getElementById('00N80000003LdTB_ileinner').innerHTML;
sfData["billingAddress"]=document.getElementById('00N80000003LriJ_ileinner').innerHTML;
sfData["unitSellPrice"]=document.getElementById('00N80000002Xktz_ileinner').innerHTML;
sfData["unitValue"]=document.getElementById('00N80000002Xkur_ileinner').innerHTML;
sfData["unitBuyPrice"]=document.getElementById('00N80000002XktR_ileinner').innerHTML;
sfData["dealMin"]=document.getElementById('00N80000002XktQ_ileinner').innerHTML;
sfData["dealMax"]=document.getElementById('00N80000002Xkty_ileinner').innerHTML;
sfData["buyerMax"]=document.getElementById('00N80000003j6sZ_ileinner').innerHTML;
/* This code will return false values if the vendor website isn't first in the list */
sfData["vendorURL"]=document.getElementById('00N80000003YC5j_ileinner').getElementsByTagName('a')[0].text;
sfData["emailListTo"]=document.getElementById('00N80000003Lrwt_ileinner').childNodes[0].childNodes[0].text;
sfData["dealTitle"]=document.getElementById('opp3_ileinner').innerHTML;
sfData["conditions"]=document.getElementById('00N80000002XjZV_ileinner').innerHTML;
sfData["instructions"]=document.getElementById('00N800000033zfJ_ileinner').innerHTML;
sfData["rawExpirationDate"]=document.getElementById('00N800000033zV8_ileinner').innerHTML;
/* Value configuration */

/* Price Shaping */
sfData['unitValue']=sfData['unitValue'].slice(sfData.unitValue.indexOf('$')+1,sfData.unitValue.indexOf('.'));
sfData['unitSellPrice']=sfData['unitSellPrice'].slice(sfData.unitSellPrice.indexOf('$')+1);
sfData['unitBuyPrice']=sfData['unitBuyPrice'].slice(sfData.unitBuyPrice.indexOf('$')+1);

/* Multi-Line Shaping pt1*/
sfData['redemptionAddress']=sfData['redemptionAddress'].replace(/<br>/g, "\\n");
sfData['billingAddress']=sfData['billingAddress'].replace(/<br>/g, "\\n");
sfData['conditions']=sfData['conditions'].replace(/<br>/g, "\\n");
sfData['instructions']=sfData['instructions'].replace(/<br>/g, "\\n");

/* Should be a switch */
if (sfData['division']=="Albuquerque") {
	sfData['division']=41; 
}
else if (sfData['division']=="Atlanta") {
	sfData['division']=7;
}
else if (sfData['division']=="Austin") {
	sfData['division']=17;
}
else if (sfData['division']=="Baltimore") {
	sfData['division']=25;
}
else if (sfData['division']=="Boston") {
	sfData['division']=2;
}
else if (sfData['division']=="Charlotte") {
	sfData['division']=23;
}
else if (sfData['division']=="Chicago") {
	sfData['division']=1;
}
else if (sfData['division']=="Cincinnati") {
	sfData['division']=38;
}
else if (sfData['division']=="Cleveland") {
	sfData['division']=32;
}
else if (sfData['division']=="Columbus") {
	sfData['division']=30;
}
else if (sfData['division']=="Dallas") {
	sfData['division']=10;
}
else if (sfData['division']=="Denver") {
	sfData['division']=12;
}
else if (sfData['division']=="Detroit") {
	sfData['division']=42;
}
else if (sfData['division']=="Fort Worth") {
	sfData['division']=44;
}
else if (sfData['division']=="Fresno") {
	sfData['division']=45;
}
else if (sfData['division']=="Houston") {
	sfData['division']=13;
}
else if (sfData['division']=="Indianapolis") {
	sfData['division']=26;
}
else if (sfData['division']=="Jacksonville") {
	sfData['division']=33;
}
else if (sfData['division']=="Kansas City") {
	sfData['division']=29;
}
else if (sfData['division']=="Las Vegas") {
	sfData['division']=22;
}
else if (sfData['division']=="London") {
	sfData['division']=48;
}
else if (sfData['division']=="LA") {
	sfData['division']=6;
}
else if (sfData['division']=="Louisville") {
	sfData['division']=37;
}
else if (sfData['division']=="Memphis") {
	sfData['division']=34;
}
else if (sfData['division']=="Miami") {
	sfData['division']=19;
}
else if (sfData['division']=="Milwaukee") {
	sfData['division']=43;
}
else if (sfData['division']=="Minneapolis") {
	sfData['division']=21;
}
else if (sfData['division']=="Nashville") {
	sfData['division']=24;
}
else if (sfData['division']=="New York") {
	sfData['division']=3;
}
else if (sfData['division']=="Oklahoma City") {
	sfData['division']=40;
}
else if (sfData['division']=="Omaha") {
	sfData['division']=36;
}
else if (sfData['division']=="Philadelphia") {
	sfData['division']=16;
}
else if (sfData['division']=="Phoenix") {
	sfData['division']=15;
}
else if (sfData['division']=="Pittsburgh") {
	sfData['division']=31;
}
else if (sfData['division']=="Portland") {
	sfData['division']=20;
}
else if (sfData['division']=="Raleigh") {
	sfData['division']=39;
}
else if (sfData['division']=="Sacramento") {
	sfData['division']=46;
}
else if (sfData['division']=="San Antonio") {
	sfData['division']=35;
}
else if (sfData['division']=="San Diego") {
	sfData['division']=14;
}
else if (sfData['division']=="San Francisco") {
	sfData['division']=5;
}
else if (sfData['division']=="San Jose") {
	sfData['division']=28;
}
else if (sfData['division']=="Seattle") {
	sfData['division']=11;
}
else if (sfData['division']=="St. Louis") {
	sfData['division']=27;
}
else if (sfData['division']=="Tampa") {
	sfData['division']=18;
}
else if (sfData['division']=="Toronto") {
	sfData['division']=49;
}
else if (sfData['division']=="Vancouver") {
	sfData['division']=50;
}
else if (sfData['division']=="Virginia Beach") {
	sfData['division']=47;
}
else if (sfData['division']=="DC") {
	sfData['division']=4;
}

/* write the datastructure to the page for c/p */
document.write("<p> var attributesForInsertion = {};<br />"); 
for (i in sfData) {
	document.write("attributesForInsertion[\'" + i + "\'] = \"" + sfData[i] + "\";<br />");
	}



/* Groupon Terms Page */

var attributesForInsertion = {};

/* Paste ATTRIBUTESFORINSERTION object HERE */ 

/* Terms/Edit Page */
$('campaign_division_id').value=attributesForInsertion['division'];
$('campaign_opportunity_id').value=attributesForInsertion['sfOpportunityId'];
if (attributesForInsertion["feature"]=="Feature") $('campaign_top_deal').checked="TRUE";
/* color fields which need Attention */
$$('div.field.campaign_requires_shipping_address.check')[0].style.backgroundColor='pink';
var launchDate = new Date(attributesForInsertion['featureDate']);
var endDate = new Date(attributesForInsertion['featureEndDate']);
/* $('campaign_schedule_date_1i')
$('campaign_schedule_date_2i') */
$('campaign_schedule_date_3i').value=launchDate.getDay();
$('campaign_deadline_date_1i')
$('campaign_deadline_date_2i')
$('campaign_deadline_date_3i').value=endDate.getDay();
$('campaign_release_date_1i').style.backgroundColor='pink';
$('campaign_release_date_2i').style.backgroundColor='pink';
$('campaign_release_date_3i').style.backgroundColor='pink';
$('campaign_release_date_3i').style.backgroundColor='pink';
$('date_hour').style.backgroundColor='pink';
$('campaign_vendor_id').style.backgroundColor='pink';
$$('div.field.campaign_local.check')[0].style.backgroundColor='pink';
$('map_test_link').style.backgroundColor="pink";
/* end color */
$('campaign_title').value=attributesForInsertion['vendorName'];
$('campaign_campaign_money_pledge_remit_to').value=attributesForInsertion['billingAddress'];
$('campaign_campaign_money_pledge_remit_to').style.color="black";
$('campaign_campaign_money_pledge_campaign_constraints_unit_price').value=attributesForInsertion['unitSellPrice'];
$('campaign_campaign_money_pledge_campaign_constraints_unit_value').value=attributesForInsertion['unitValue'];
$('campaign_campaign_money_pledge_campaign_constraints_unit_buy_price').value=attributesForInsertion['unitBuyPrice'];
$('campaign_campaign_money_pledge_campaign_constraints_min_pledges').value=attributesForInsertion['dealMin'];
$('campaign_campaign_money_pledge_campaign_constraints_max_pledges').value=attributesForInsertion['dealMax'];
$('campaign_campaign_money_pledge_member_constraints_minimum').value=1;
$('campaign_campaign_money_pledge_member_constraints_maximum').value=attributesForInsertion['buyerMax'];
$('campaign_campaign_money_pledge_member_constraints_suggested').value=1;
$('campaign_deal_vendor_name').value=attributesForInsertion['vendorName'];
$('campaign_deal_vendor_location').value=attributesForInsertion['redemptionAddress'];
$('campaign_deal_vendor_website_label').value=attributesForInsertion['vendorURL'];
$('campaign_deal_vendor_website_url').value=attributesForInsertion['vendorURL'];
$('campaign_deal_vendor_map_url').value='http://maps.google.com/maps?q='+encodeURI($('campaign_deal_vendor_location').value);
/* Coupon Page */
/* color fields which need attention */
$('coupon_title').style.backgroundColor='pink';
$('coupon_subtitle').style.backgroundColor='pink';
$('coupon_expires_date_1i').style.backgroundColor='pink';
$('coupon_expires_date_2i').style.backgroundColor='pink';
$('coupon_expires_date_3i').style.backgroundColor='pink';
$$('div.field.coupon_map')[0].style.backgroundColor='pink';
$('coupon_condition_data').style.backgroundColor='pink';
$('coupon_instructions').style.backgroundColor='pink';
/* end coupon page coloring */
$('coupon_title').value=attributesForInsertion['dealTitle'];
$('coupon_subtitle').value=attributesForInsertion['dealTitle'];
$('coupon_condition_data').value=attributesForInsertion['conditions'];
$('coupon_instructions').value=attributesForInsertion['instructions'];
return null;
/* end coupon page */



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

