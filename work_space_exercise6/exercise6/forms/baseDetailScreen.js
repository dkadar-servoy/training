/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
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
 * @protected
 *
 * @properties={typeid:24,uuid:"5697806E-B264-4C85-8112-C8ED4BD5DF6F"}
 */
function onClickGoToNextCustomer(event) {
	var index = foundset.getSelectedIndex() + 1;
	foundset.setSelectedIndex(index);
}

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D10EFB3B-0513-4186-80A1-DF5434EC02CE"}
 */
var origin = '';

/**
 * @param {String} data
 *
 * @properties={typeid:24,uuid:"14D34B1E-9FCB-491D-A89E-5714FAFDFD56"}
 */
function setOrigin(data){
	origin = data;
}

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"37C6D22D-6A35-4BB0-8F5E-56480505E11C"}
 */
function onClickGoBack(event) {
	history.back();
}

/**
 * @param {JSFoundSet} fs
 *
 * @properties={typeid:24,uuid:"BCF3C187-9CAC-415B-9313-FE79355BAF21"}
 * @AllowToRunInFind
 */
function setFoundset(fs){
	foundset.loadRecords(fs);
}
