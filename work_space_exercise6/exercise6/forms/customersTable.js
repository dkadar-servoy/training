/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A63B3DEF-4185-471F-A811-D678FBB1CB1F"}
 */
var searchText = '';

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
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"8DE29C72-F857-4953-8D82-960A8BA2C15B"}
 * @AllowToRunInFind
 */
function onActionSearch(event) {
	if(foundset.find()){
		foundset.customerid = searchText;
		foundset.search();
	}
}
