
/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"F6B388F1-4DCC-4ADA-BA09-E4066A0220C2"}
 */
function onClickGoToAddDetails(event) {
	const currentTable = controller.getName();
	
	if(currentTable == 'ordersTable'){
		application.showForm(forms.ordersDetailScreen);
		foundset.newRecord();
	} else if(currentTable == 'customersTable'){
		application.showForm(forms.customersAddScreen);
		foundset.newRecord();
	}
}
