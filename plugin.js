CKEDITOR.plugins.baidumap = {  
    requires: ['dialog'],
	lang : ['en', 'zh-cn', 'zh'], 
    init:function(editor) { 
		var b="gmap";
		var c=editor.addCommand(b,new CKEDITOR.dialogCommand(b));
		c.modes={wysiwyg:1,source:0};
		c.canUndo=false;
		
		editor.ui.addButton("baidumap",{
			label:editor.lang.baidumap.title,
			command:b,		
			icon:this.path+"baidumap.png"
		});

		CKEDITOR.dialog.add(b,this.path+"dialogs/baidumap.js");
	}
}

CKEDITOR.plugins.add('baidumap',  CKEDITOR.plugins.baidumap);
