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
