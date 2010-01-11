
javascript: 

var attributesForInsertion = {};
attributesForInsertion['division'] = "17";
attributesForInsertion['sfOpportunityId'] = "0068000000TKk1G";
attributesForInsertion['feature'] = "Side Deal";
attributesForInsertion['FeatureDate'] = "1/18/2010";
attributesForInsertion['FeatureEndDate'] = "1/20/2010";
attributesForInsertion['vendorName'] = "International Studio of Music";
attributesForInsertion['redemptionAddress'] = "2008 Frontier Trail, Round Rock, Texas 78681";
attributesForInsertion['billingAddress'] = "P O Box 293, Round Rock, Texas 78680";
attributesForInsertion['unitSellPrice'] = "60";
attributesForInsertion['unitValue'] = "120";
attributesForInsertion['unitBuyPrice'] = "40.00";
attributesForInsertion['dealMin'] = "10";
attributesForInsertion['dealMax'] = " ";
attributesForInsertion['buyerMax'] = " ";
attributesForInsertion['vendorURL'] = "http://xld.com/wp/piano.htm";
attributesForInsertion['emailListTo'] = "lillian.martinez@usa.net";
attributesForInsertion['dealTitle'] = "SIDE DEAL: International Studio of Music - $40 for 2 months of piano classes ($120 value)";
attributesForInsertion['conditions'] = "three students are necessary to form a group class";
attributesForInsertion['instructions'] = "1. Print Groupon \n2. Call to schedule classes, 512-246-2597, make sure to give them your Groupon voucher #. \n3. Bring Groupon to first class";
attributesForInsertion['rawExpirationDate'] = "1 month from feature";
/* Paste ATTRIBUTESFORINSERTION object Here */

$('coupon_title').value=attributesForInsertion['dealTitle'];
$('coupon_condition_data').value=attributesForInsertion['conditions'];
$('coupon_instructions').value=attributesForInsertion['instructions']; 
/* color fields which need attention */
$('coupon_title').style.backgroundColor='pink';
$('coupon_title').setAttribute('onclick', 'this.style.backgroundColor="white"');
$('coupon_subtitle').style.backgroundColor='pink';
$('coupon_subtitle').onmouseover = function() { this.style.backgroundColor ="white";};
$('coupon_expires_date_1i').style.backgroundColor='pink';
$('coupon_expires_date_1i').onmouseover = function() { this.style.backgroundColor ="white";};
$('coupon_expires_date_2i').style.backgroundColor='pink';
$('coupon_expires_date_2i').onmouseover = function() { this.style.backgroundColor ="white";};
$('coupon_expires_date_3i').style.backgroundColor='pink';
$('coupon_expires_date_3i').onmouseover = function() { this.style.backgroundColor ="white";};
$$('div.field.coupon_map')[0].style.backgroundColor='pink';
$$('div.field.coupon_map')[0].onmouseover = function() { this.style.backgroundColor ="white";};
$('coupon_condition_data').style.backgroundColor='pink';
$('coupon_condition_data').setAttribute('onclick', 'this.style.backgroundColor="white"');
$('coupon_instructions').style.backgroundColor='pink'; 
$('coupon_instructions').setAttribute('onclick', 'this.style.backgroundColor="white"');return null;
/* end coupon page coloring */

/* end coupon page */