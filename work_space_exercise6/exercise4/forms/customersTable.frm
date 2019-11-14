customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/example_data/customers",
encapsulation:44,
extendsID:"F96A0A48-9268-404D-9020-DEC7231AB995",
items:[
{
cssPosition:"40%,0,0,0,200,100",
extendsID:"E6C29AC0-8C09-4CB8-961E-D068B33503B4",
json:{
containedForm:"DAE8CF27-9D95-43BC-8D48-F800B11EE251",
cssPosition:{
bottom:"0",
height:"100",
left:"0",
right:"0",
top:"40%",
width:"200"
},
relationName:"customer_to_orders"
},
typeid:47,
uuid:"376E067F-A84A-42C0-A4B7-D889F2BEF2E5"
},
{
extendsID:"EC52014A-CBEB-4BCD-A2A2-BC236094F62D",
height:411,
typeid:19,
uuid:"5CA82B1D-689F-4503-BADE-E0DCE4FA1761"
},
{
cssPosition:"2%,1%,-1,75%,200,22",
json:{
cssPosition:{
bottom:"-1",
height:"22",
left:"75%",
right:"1%",
top:"2%",
width:"200"
},
dataProviderID:"customerid",
onDataChangeMethodID:"385B6680-2874-43BC-B109-36385A0E80A1",
placeholderText:"Search",
valuelistID:"05F6923C-35BD-41BA-99C6-41AFC2DAA774"
},
name:"typeahead_2",
typeName:"bootstrapcomponents-typeahead",
typeid:47,
uuid:"66724018-C4C3-4B82-9B30-40ED589ABCA5"
},
{
cssPosition:"35%,0%,60%,0%,80,20",
extendsID:"4CA3F6C9-0505-4A9F-ABBA-F3C56DF729A9",
typeid:7,
uuid:"6F64BC41-A694-4797-942A-69CE81143A72",
visible:true
},
{
cssPosition:"7%,0,65%,0,200,100",
customProperties:"methods:{\
onCellDoubleClick:{\
arguments:null,\
parameters:null\
}\
}",
extendsID:"112E5F0F-6F3C-482C-8CF1-236D01F1BC5F",
json:{
columns:[
{
headerText:"Edit",
svyUUID:"7B3094E1-5D1C-40E0-8B03-CC1C3BEE366E"
},
{
headerText:"Delete",
svyUUID:"1D80207E-8CEC-4834-8CA2-7177C19B0980"
},
{
dataprovider:"customerid",
headerText:"Customer ID",
svyUUID:"15D94E03-DF26-4C6E-A74C-955086A7C636"
},
{
dataprovider:"companyname",
headerText:"Name",
svyUUID:"E84AD5DF-6E5E-437E-86DD-A234BCE35906"
}
],
cssPosition:{
bottom:"65%",
height:"100",
left:"0",
right:"0",
top:"7%",
width:"200"
},
onCellDoubleClick:"E195EA0B-D6BA-45C7-858F-D33C32A97FA0"
},
typeid:47,
uuid:"EF2C7AB9-A754-4172-81E6-EC28FD8A3029"
}
],
name:"customersTable",
navigatorID:"-1",
showInMenu:true,
size:"640,411",
typeid:3,
uuid:"69A4A21D-8812-4355-B7BC-FA15B5698D37"