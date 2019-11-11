/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"F986CB18-C09D-4844-842D-7D68E6537AE5"}
 */
var selectedCustomer = '';

/**
 * @param {String} customerId
 *
 * @properties={typeid:24,uuid:"16B1F8F0-DC0A-4A3C-BF6E-C81C8E8FBE15"}
 * @AllowToRunInFind
 */
function filterFoundset(customerId){
	if(foundset.find()){
		foundset.customerid = customerId;
		foundset.search();
	}
	selectedCustomer = customerId;
}