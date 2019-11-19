/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"EDFE4C0A-9855-4F65-A073-D1F8EB1855C8"}
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
 * @properties={typeid:24,uuid:"2EAC976E-BAE4-4725-99EF-0F397973D960"}
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
 * @properties={typeid:24,uuid:"7E2D794C-4B06-4844-BA29-2B4BEB0E36B3"}
 */
function onClickGoBack(event) {
	history.back();
	//application.showForm(forms.customersTable);
}