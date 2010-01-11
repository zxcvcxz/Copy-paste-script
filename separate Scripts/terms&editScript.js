javascript:

/* Insert ATTRIBUTESFORINSERTION here */
var attributesForInsertion = {};
attributesForInsertion['division'] = "21";
attributesForInsertion['sfOpportunityId'] = "0068000000SBVkA";
attributesForInsertion['feature'] = "Feature";
attributesForInsertion['featureDate'] = "1/18/2010";
attributesForInsertion['featureEndDate'] = " ";
attributesForInsertion['vendorName'] = "Mpls Women's Expo";
attributesForInsertion['redemptionAddress'] = "Minneapolis Convention Center, Hall D\n1301 South 2nd Ave. Minneapolis, MN";
attributesForInsertion['billingAddress'] = "Attn. Blaine Kunz \n4424 Oak Chase Rd, Egan, MN 55123";
attributesForInsertion['unitSellPrice'] = "7";
attributesForInsertion['unitValue'] = "15";
attributesForInsertion['unitBuyPrice'] = "3.75";
attributesForInsertion['dealMin'] = "20";
attributesForInsertion['dealMax'] = " ";
attributesForInsertion['buyerMax'] = "1";
attributesForInsertion['vendorURL'] = "http://www.mplswomensexpo.com/mpls/";
attributesForInsertion['emailListTo'] = "emilyatwe@yahoo.com";
attributesForInsertion['dealTitle'] = "Mpls Women's Expo- $7.00 ticket for $15.00";
attributesForInsertion['conditions'] = "Limit 1 per person. Only good for 1 day of the show. Expires the night of the event. May buy multiple tickets as gifts.";
attributesForInsertion['instructions'] = "1. Print Groupon \n2. Bring it to the event on either 1/29, 1/30, or 1/31 \n3. Enjoy!";
attributesForInsertion['rawExpirationDate'] = "Expires the night of the event";

/* Terms/Edit Page */
$('campaign_division_id').value=attributesForInsertion['division'];
$('campaign_opportunity_id').value=attributesForInsertion['sfOpportunityId'];
if (attributesForInsertion["feature"]=="Feature") $('campaign_top_deal').checked="TRUE";
var launchDate = new Date(attributesForInsertion['featureDate']);
var endDate = new Date(attributesForInsertion['featureEndDate']); 
$('campaign_schedule_date_1i').value=launchDate.getFullYear();
$('campaign_schedule_date_2i').value=launchDate.getMonth()+1;
$('campaign_schedule_date_3i').value=launchDate.getDate();
$('campaign_deadline_date_1i').value=endDate.getFullYear();
$('campaign_deadline_date_2i').value=endDate.getMonth()+1;
$('campaign_deadline_date_3i').value=endDate.getDate();
$('campaign_title').value=attributesForInsertion['vendorName'];
$('campaign_campaign_money_pledge_remit_to').value=attributesForInsertion['billingAddress'];
$('campaign_campaign_money_pledge_campaign_constraints_unit_price').value=attributesForInsertion['unitSellPrice'];
$('campaign_campaign_money_pledge_campaign_constraints_unit_value').value=attributesForInsertion['unitValue'];
$('campaign_campaign_money_pledge_campaign_constraints_unit_buy_price').value=attributesForInsertion['unitBuyPrice'];
$('campaign_campaign_money_pledge_campaign_constraints_min_pledges').value=attributesForInsertion['dealMin'];
$('campaign_campaign_money_pledge_campaign_constraints_max_pledges').value=attributesForInsertion['dealMax'];
$('campaign_campaign_money_pledge_member_constraints_minimum').value=1;
$('campaign_campaign_money_pledge_member_constraints_maximum').value=attributesForInsertion['buyerMax'];
$$('div.field.campaign_campaign_money_pledge__member_constraints_maximum.text')[0].childNodes[0].innerHTML+="<br /><span style='color:gray''>" + attributesForInsertion['conditions'] + "</span>";
$('campaign_campaign_money_pledge_member_constraints_suggested').value=1;
$('campaign_deal_vendor_name').value=attributesForInsertion['vendorName'];
var anchorText = attributesForInsertion['vendorURL'];
if (anchorText.indexOf('http://') != -1) anchorText=anchorText.slice(7);
if (anchorText.charAt(anchorText.length - 1)=="/") anchorText=anchorText.slice(0,anchorText.length-1);
$('campaign_deal_vendor_website_label').value=anchorText;
$('campaign_deal_vendor_website_url').value=attributesForInsertion['vendorURL'];
$('campaign_location_note').value=attributesForInsertion['redemptionAddress'];

/* color fields which need attention */
$('campaign_campaign_money_pledge_remit_to').style.color="black";
$('campaign_campaign_money_pledge_campaign_constraints_unit_buy_price').style.color="black";
if (launchDate.getDay()==5) {
	$('campaign_deadline_date_3i').style.backgroundColor='pink'; 
	$$('div.launch_date')[0].childNodes[1].innerHTML+=' <span style="color:red">Friday Deal!</span>'; };
if (launchDate.getDay()==6) {
	$('campaign_deadline_date_3i').style.backgroundColor='pink'; 
	$$('div.launch_date')[0].childNodes[1].innerHTML+=' <span style="color:red">Saturday Deal!</span>'; };
if (attributesForInsertion['division']==4 || attributesForInsertion['division']==6 ) {
	$('campaign_division_id').style.backgroundColor='pink';};
$$('div.field.campaign_requires_shipping_address.check')[0].style.backgroundColor='pink';
$$('div.field.campaign_requires_shipping_address.check')[0].onmouseover = function() { this.style.backgroundColor ="white";};
$('campaign_deadline_date_3i').onchange = function() { this.style.backgroundColor ="white";};
$('campaign_release_date_1i').style.backgroundColor='pink';
$('campaign_release_date_1i').onmouseover = function() { this.style.backgroundColor ="white";};
$('campaign_release_date_2i').style.backgroundColor='pink';
$('campaign_release_date_2i').onmouseover = function() { this.style.backgroundColor ="white";};
$('campaign_release_date_3i').style.backgroundColor='pink';
$('campaign_release_date_3i').onmouseover = function() { this.style.backgroundColor ="white";};
$('date_hour').style.backgroundColor='pink';
$('date_hour').onmouseover = function() { this.style.backgroundColor ="white";};
$('campaign_vendor_id').style.backgroundColor='pink';
$('campaign_vendor_id').onmouseover = function() { this.style.backgroundColor ="white";};
$('campaign_campaign_money_pledge_remit_to').style.backgroundColor="pink";
$('campaign_campaign_money_pledge_remit_to').onmouseover = function() { this.style.backgroundColor ="white";};
$('campaign_campaign_money_pledge_member_constraints_maximum').style.backgroundColor='pink';
$('campaign_campaign_money_pledge_member_constraints_maximum').setAttribute('onclick', 'this.style.backgroundColor="white"');
$('map_test_link').style.backgroundColor="pink";
$('map_test_link').setAttribute('onclick', 'this.style.backgroundColor="white"');
$('campaign_location_note').style.backgroundColor="pink";
$('campaign_location_note').setAttribute('onclick', 'this.style.backgroundColor="white"');

/* end color */

return null;