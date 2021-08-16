Ext.define('Myapp1.view.main.center.CenterView', {
	extend: 'Ext.Container',
	xtype: 'centerview',
	cls: 'centerview',
	layout: 'card',
	items:[{
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
{
    xtype:'button',
    text:'Save',
	handler: function(){
	console.log('Added');
	}
}
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
        Ext.Msg.alert('message added');
        Ext.Ajax.request({
                url:' http://localhost:3000/posts/3',
                method: 'DELETE',
                success : function(response)
                {
                    Ext.Msg.alert("deleted");

                },
                failure : function(response){
                    Ext.Msg.alert("deleted already");
                }
        })
	}
}*/
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
	]
    }]


});
