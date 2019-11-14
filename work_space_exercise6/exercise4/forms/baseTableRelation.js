
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
		foundset.newRecord();
	} else if(currentTable == 'customersTable'){
		application.showForm(forms.customersAddScreen);
		foundset.newRecord();
	} else if(currentTable == 'orderDetailsTable'){
		forms.ordersDetailScreen.setFoundset(foundset);
		application.showForm(forms.ordersDetailScreen);
		foundset.newRecord();
	}
}

/**
 * @properties={typeid:24,uuid:"751F14F5-576B-4637-81AB-CE9809C3DC0E"}
 */
function editRecord(){
	const currentTable = controller.getName();
	
	if(currentTable == 'customersTable'){
		application.showForm(forms.customersAddScreen);
	} else if(currentTable == 'orderDetailsTable'){
		forms.ordersDetailScreen.setFoundset(foundset);
		application.showForm(forms.ordersDetailScreen);
	}
}

/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given) or.
 * when the ENTER key is used then only the selected foundset index is given
 * Use the record to exactly match where the user clicked on
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @private
 *
 * @properties={typeid:24,uuid:"C45ADCF3-D720-4621-B495-28F05F4475E7"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
	if(columnindex == 0){
		editRecord();
	} else if(columnindex == 1){
		foundset.deleteRecord();
	}
}
