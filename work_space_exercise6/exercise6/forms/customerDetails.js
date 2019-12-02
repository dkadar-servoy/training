/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"DAED6EE9-BFC3-4801-AFA3-F8827B201FF6"}
 */
function onLoadDetermineContent(event) {
	if(origin == 'add'){
		!elements.btn_next.visible;
		!elements.btn_previous.visible;
	} else if(origin == 'cell'){
		elements.fc1.containedForm.input.editable = false;
		elements.fc2.containedForm.input.editable = false;
		elements.fc3.containedForm.input.editable = false;
		elements.fc4.containedForm.input.editable = false;
		elements.fc5.containedForm.input.editable = false;
		elements.fc6.containedForm.input.editable = false;
		elements.fc7.containedForm.input.editable = false;
		elements.fc8.containedForm.input.editable = false;
		elements.fc9.containedForm.input.editable = false;
		elements.fc10.containedForm.input.editable = false;
		elements.customerIdFc.containedForm.input.editable = false;
	} else if(origin == 'edit'){} 
}