customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/example_data/orders",
extendsID:"F96A0A48-9268-404D-9020-DEC7231AB995",
items:[
{
cssPosition:"53%,0%,40%,0%,80,20",
extendsID:"4CA3F6C9-0505-4A9F-ABBA-F3C56DF729A9",
tabSeq:2,
typeid:7,
uuid:"A334AEC9-0172-40D7-8809-AF5EA06BDBA8"
},
{
cssPosition:"60%,0,0,0,200,100",
extendsID:"E6C29AC0-8C09-4CB8-961E-D068B33503B4",
json:{
containedForm:"34ED37A2-B92D-4399-AC9D-8DE7F6874FD2",
cssPosition:{
bottom:"0",
height:"100",
left:"0",
right:"0",
top:"60%",
width:"200"
},
relationName:"order_to_order_details",
tabSeq:3
},
typeid:47,
uuid:"E199C13E-98C8-4818-B108-6B7F0B48831E"
},
{
cssPosition:"0,0,47%,0,200,100",
extendsID:"112E5F0F-6F3C-482C-8CF1-236D01F1BC5F",
json:{
columns:[
{
dataprovider:null,
headerText:"Edit",
svyUUID:"BC9D2667-D063-48B0-8C93-B930A58365FB"
},
{
headerText:"Delete",
svyUUID:"3AEB275E-152B-46C0-8A63-1F3988926B32"
},
{
dataprovider:"orderid",
headerText:"Order ID",
svyUUID:"9F6B9431-F0D9-4642-83D1-29ACE3E79693"
},
{
dataprovider:"order_to_order_details.totalvalue",
headerText:"Total Value",
svyUUID:"D6E87504-F973-4541-A244-978EEFF68DAE"
}
],
cssPosition:{
bottom:"47%",
height:"100",
left:"0",
right:"0",
top:"0",
width:"200"
},
tabSeq:1
},
typeid:47,
uuid:"FBA343B3-A7E9-4077-B41E-6CAD2F019AC6"
}
],
name:"ordersTable",
typeid:3,
uuid:"DAE8CF27-9D95-43BC-8D48-F800B11EE251"