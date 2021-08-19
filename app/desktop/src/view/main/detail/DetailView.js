/*const tree1= Ext.create('Ext.tree.Panel', {
  renderTo: document.body,
  title: 'Simple Tree',
  width: 300,
  height: 250,
  root: {
      text: 'Root',
      expanded: true,
      children: [
          {
              text: 'Child 1',
              leaf: true
          },
          {
              text: 'Child 2',
              leaf: true
          },
          {
              text: 'Child 3',
              expanded: true,
              children: [
                  {
                      text: 'Grandchild',
                      leaf: true
                  }
              ]
          }
      ]
  }
}); */

/*Ext.define('Myapp1.view.main.detail.DetailView', {
	extend: 'Ext.Container',
	xtype: 'detailview',
  cls: 'detailview',
  layout: 'fit',
  items: [
    {
      xtype: 'container', 
      style: 'background:white', 
      html: '<div style="padding:10px;font-size:24px;">detailview</div>'
    }
  ]
}) */


Ext.define('MyApp1.view.Main', {
	extend: 'Ext.grid.Grid',
	title: 'Businesses',
  layout: 'fit',
	 
	columns: [
		{ xtype: 'rownumberer', width: 55},
		{ text: 'Name',  dataIndex: 'name', flex : 2},
		{ text: 'Address', dataIndex: 'full_address', flex : 3  },
		{ text: 'City', dataIndex: 'city', flex: 1 }
	],
	 
	store: {
		type: 'virtual',
		pageSize: 200,
		proxy : { type : 'ajax', url : '//nameless-tundra-27404.herokuapp.com/go/?fn=bigdata', reader : { type : 'json', rootProperty : 'data' } },
		autoLoad: true
	}
	 
	});
	//Ext.application({
	//name: 'MyApp1',
	//mainView: 'MyApp1.view.Main'
	//});
