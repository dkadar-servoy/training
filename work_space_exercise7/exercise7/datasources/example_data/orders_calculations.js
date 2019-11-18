/**
 * @properties={type:8,typeid:36,uuid:"7A0FE121-A293-4F7E-8DD7-FE10DE3FD9D2"}
 */
function totalvalue()
{
	var result = 0;
	
	for(var i = 1; i <= order_to_order_details.getSize(); i++){
        result += order_to_order_details.getRecord(i).subvalue;
    }
	
	return result;
}
