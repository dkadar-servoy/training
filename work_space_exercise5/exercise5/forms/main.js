
/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"8D866880-28F7-4DEF-95DA-E8A1ED84D89B"}
 */
function onHideOutpu(event) {
	application.output('On Hide');
	return true
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"0A394317-1ABF-45F5-A79C-D5F75D566789"}
 */
function onLoadOutput(event) {
	application.output('On Load');
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"5714789D-7D65-484E-A674-903B14D057BE"}
 */
function onRecordSelectionOutput(event) {
	application.output('Record selection');
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"22F3D901-00C0-499C-BB29-6A83CC2364F8"}
 */
function onShowOutput(firstShow, event) {
	application.output('On Show');
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"0098CB0E-FFA3-4BE7-96E8-980BA4A0C599"}
 */
function onActionGoToSub(event) {
	application.showForm(forms.sub);
}
