customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/example_data/orders",
extendsID:"F96A0A48-9268-404D-9020-DEC7231AB995",
items:[
{
cssPosition:"8%,0,50%,0,200,100",
extendsID:"112E5F0F-6F3C-482C-8CF1-236D01F1BC5F",
json:{
columns:[
{
dataprovider:"orderid",
headerText:"Order ID",
svyUUID:"C0EACF0A-AAAB-4A23-8688-E2162B64AAB9"
}
],
cssPosition:{
bottom:"50%",
height:"100",
left:"0",
right:"0",
top:"8%",
width:"200"
}
},
typeid:47,
uuid:"1BCA1E80-5B3D-4AA1-B04B-D1C256A0DBCD"
},
{
cssPosition:"2%,-1,-1,1%,80,20",
onActionMethodID:"74B3A82D-42B1-433F-968C-3EBD8C1EABFD",
text:"Back",
typeid:7,
uuid:"4AB2678C-D1AC-40FA-A168-85DD09DE5C96"
},
{
cssPosition:"2%,-1,-1,25%,80,20",
onActionMethodID:"0CA1CBB4-B347-494E-A0EF-32491CAD9F6A",
text:"Previous",
typeid:7,
uuid:"75C2C7DD-AEBE-40ED-B7E5-A4688FBD1C1F"
},
{
extendsID:"E6C29AC0-8C09-4CB8-961E-D068B33503B4",
json:{
containedForm:"D910CF71-782B-4C21-91E8-C30F770232FB",
relationName:"order_to_order_details"
},
typeid:47,
uuid:"C0C6A654-7BF3-4E27-BD1F-00252A7A6DF6"
},
{
cssPosition:"2%,-1,-1,35%,80,20",
onActionMethodID:"F1A27D39-937F-44BF-B7F8-23871588B0E8",
text:"Next",
typeid:7,
uuid:"E24CF302-2E40-4F04-A255-4E26F402FF36"
},
{
cssPosition:"2%,1%,-1,75%,233,20",
dataProviderID:"selectedCustomer",
displayType:2,
editable:false,
onDataChangeMethodID:"E5511DB8-A655-450E-A1BB-81AC729AC001",
typeid:4,
uuid:"F094C4F9-22AD-40FF-A444-025CCA4D77B9",
valuelistID:"05F6923C-35BD-41BA-99C6-41AFC2DAA774"
}
],
name:"ordersTable",
typeid:3,
uuid:"D7D2D80C-B134-47F4-BB7D-BF2770BDC729"