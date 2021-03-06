/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"B96ABCA5-351D-4A20-81F2-289EFF8A295B"}
 */
function onClickSelectPreviousCustomer(event) {
	var index = foundset.getSelectedIndex() - 1;
	foundset.setSelectedIndex(index);
}

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"5697806E-B264-4C85-8112-C8ED4BD5DF6F"}
 */
function onClickGoToNextCustomer(event) {
	var index = foundset.getSelectedIndex() + 1;
	foundset.setSelectedIndex(index);
}

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"37C6D22D-6A35-4BB0-8F5E-56480505E11C"}
 */
function onClickGoBack(event) {
	application.showForm(forms.customersTable);
}