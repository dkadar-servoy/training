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

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param oldValue old Value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @private
 *
 *
 * @properties={typeid:24,uuid:"E5511DB8-A655-450E-A1BB-81AC729AC001"}
 */

function onDataChangeCustomer(oldValue, newValue, event) {
	foundset.loadAllRecords();
	filterFoundset(newValue);
	return true
}

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"74B3A82D-42B1-433F-968C-3EBD8C1EABFD"}
 */
function onClickBack(event) {
	application.showForm(forms.customersTable);
}
/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"0CA1CBB4-B347-494E-A0EF-32491CAD9F6A"}
 */
function onClickPrevious(event) {
	var index = foundset.getSelectedIndex() - 1;
	foundset.setSelectedIndex(index)
}

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"F1A27D39-937F-44BF-B7F8-23871588B0E8"}
 */
function onClickNext(event) {
	var index = foundset.getSelectedIndex() + 1;
	foundset.setSelectedIndex(index);
}
