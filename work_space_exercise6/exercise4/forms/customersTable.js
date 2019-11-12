/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @private
 *
 * @properties={typeid:24,uuid:"E195EA0B-D6BA-45C7-858F-D33C32A97FA0"}
 */
function onCellDoubleClickGoToOrders(foundsetindex, columnindex, record, event) {
	application.showForm(forms.customerDetails);
}

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
}

/**
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"385B6680-2874-43BC-B109-36385A0E80A1"}
 */
function onDataChangeSearch(oldValue, newValue, event) {
	filterFoundset(newValue);
	return true
}
