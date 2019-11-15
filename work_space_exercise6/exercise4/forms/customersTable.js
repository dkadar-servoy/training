/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A63B3DEF-4185-471F-A811-D678FBB1CB1F"}
 */
var selectedCompany = '';

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
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param customerId
 *
 * @properties={typeid:24,uuid:"C3F2732A-8F06-4344-BB49-9DD2C73AD446"}
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
 * @properties={typeid:24,uuid:"8DE29C72-F857-4953-8D82-960A8BA2C15B"}
 */
function onDataChangeFilterCompanies(oldValue, newValue, event) {
	selectedCompany = newValue;
	if(!selectedCompany == ''){
		filterFoundset(newValue);
	} else {
		foundset.loadAllRecords();
	}
	return true
}
