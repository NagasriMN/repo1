var store = Ext.create('Ext.data.Store', {
    fields: ['name','progress'],
    data: [
        { name: 'Test 1', progress: 0.10 },
        { name: 'Test 2', progress: 0.23 },
        { name: 'Test 3', progress: 0.86 },
        { name: 'Test 4', progress: 0.31 }
    ]
});

var grid1= Ext.create({
    xtype: 'grid',
    title: 'Widget Column Demo',
    store: store,

    columns: [{
        text: 'Test Number',
        dataIndex: 'name',
        width: 100},

        {text: 'Progress',
        width: 120,
        dataIndex: 'progress',
        widget: {
            xtype: 'progressbarwidget',
            textTpl: '{value:percent}'
        }

    
         } ],
    
    width: 220,
    height: 250,
    renderTo: document.body
}); 

Ext.define('Myapp1.view.main.center.CenterView', {
	extend: 'Ext.Container',
	xtype: 'centerview',
	cls: 'centerview',
//	layout: 'card'
   // items: [grid1]
}); 





/*	items:[{
        xtype:'panel',
       viewModel: {
          type: 'test'
        },
        fullscreen:true,

    //layout:'hbox',
    defaultType:'textfield',
    defaults:{
        flex:1
    },
    items:[{
        html:'User Form',
        style:'background-color:white'
    },
{
    fieldLabel:'First Name',
    name:'firstName',
    bind: '{firstname}'
},
{
    fieldLabel: 'Last Name',
    name:'lastName'
},
{
    xtype :'datefield',
    fieldLabel:'Date of Birth',
    name:'birthDate',
    msgTarget:'under',
    invalidText:'"{0}" bad. "{1}" good.'
},
/*{
    xtype:'button',
    text:'Save',
	handler: function(){
	console.log('Added');
	}
} */
/*{
    xtype:'button',
    text:'Save',
	handler: function(){
	console.log('test');
	Ext.Ajax.request({
        url: ' http://localhost:3000/posts',
         success:function (response){
              const responseBody = Ext.decode(response.responseText)
             console.log(responseBody);
          }
      })
}
}*/
/*{
    xtype:'button',
    text:'Submit',
    handler:function(){
        Ext.Ajax.on("beforeRequest",function(){
console.log('before');
        });
        Ext.Ajax.request({
                url:' http://localhost:3000/posts/2',
                method: 'DELETE',
               // timeout: 2000,
                success : function(response)
                {
                    Ext.Msg.alert(response);

                },
                failure : function(response){
                    Ext.Msg.alert(response);
                }
        })
	}
}
/*{
	xtype:'button',
    text:'Save',
	handler: function(){
        Ext.Ajax.request({
          url:' http://localhost:3000/posts',
        method: 'Post',
         jsonData:{
         name:'Nagasri'
            },
         success: function (response){
             Ext.Msg.alert(response);
         },
            failure: function (response){
                Ext.Msg.alert(response);
         }
 })

	}
    
} */