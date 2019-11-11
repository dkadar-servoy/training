
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
 * @properties={typeid:24,uuid:"40C77848-65CE-4BC5-9216-3C4DB4EE840E"}
 */
function onCellDoubleClickGoToOrdersTable(foundsetindex, columnindex, record, event) {
	forms.ordersTable.filterFoundset(foundset.customerid);
	application.showForm(forms.ordersTable);
}
