({
    configureTheme : function(cmp) {
        // SET THEME AND DESIGN ATTRIBUTE
        var numColumns = cmp.get("v.numColumns");
   
        var strColumnSpacing=(12/numColumns).toString();
        var strColumnStyle='slds-col slds-size_'+strColumnSpacing+'-of-12';
        cmp.set("v.columnstyle",strColumnStyle);

        var titleSize = cmp.get("v.titleFontSize");
            if (titleSize >= 16 && titleSize <= 60) {
                cmp.set("v.intTitleFontSize", 'font-size: ' + titleSize + 'px;');
            } else {
                cmp.set("v.intTitleFontSize", 'font-size: ' + 42 + 'px;');
            }

            var titleAlign = cmp.get("v.titleAlignment");
            cmp.set("v.intTitleAlignment", 'text-align: ' + titleAlign + ';');

        var newColor = cmp.get("v.backgroundColor");
            
        var parent = cmp.find("parent");
        var feedbackButton = cmp.find("feedback-button");
        
        $A.util.removeClass(parent, 'backgroundColor-light1');
        $A.util.removeClass(parent, 'backgroundColor-light2');
        $A.util.removeClass(parent, 'backgroundColor-dark1');
        $A.util.removeClass(parent, 'backgroundColor-dark2');

        var newFeedbackStyle = '';
        switch(newColor) {
            case "Light 1":
                $A.util.addClass(parent, 'backgroundColor-light1');
                newFeedbackStyle = 'buttonTheme-light1';
                cmp.set("v.hrefColorStyle", 'color: #0070D2')
                break;
            case "Light 2":
                $A.util.addClass(parent, 'backgroundColor-light2');
                newFeedbackStyle = 'buttonTheme-light2';
                cmp.set("v.hrefColorStyle", 'color: #0070D2')
                break;
            case "Dark 1":
                $A.util.addClass(parent, 'backgroundColor-dark1');
                newFeedbackStyle = 'buttonTheme-dark1';
                cmp.set("v.hrefColorStyle", 'color: #FFFFFF')
                break;
            case "Dark 2":
                $A.util.addClass(parent, 'backgroundColor-dark2');
                newFeedbackStyle = 'buttonTheme-dark2';
                cmp.set("v.hrefColorStyle", 'color: #FFFFFF')
                break;
        }
        if (Array.isArray(feedbackButton)) {
            for (const x of feedbackButton) {
                $A.util.removeClass(x, 'buttonTheme-light1');
                $A.util.removeClass(x, 'buttonTheme-light2');
                $A.util.removeClass(x, 'buttonTheme-dark1');
                $A.util.removeClass(x, 'buttonTheme-dark2');
                $A.util.addClass(x, newFeedbackStyle);
            }
        } else {
            $A.util.removeClass(feedbackButton, 'buttonTheme-light1');
            $A.util.removeClass(feedbackButton, 'buttonTheme-light2');
            $A.util.removeClass(feedbackButton, 'buttonTheme-dark1');
            $A.util.removeClass(feedbackButton, 'buttonTheme-dark2');
            $A.util.addClass(feedbackButton, newFeedbackStyle);
        }
    },
	showToast : function(component,type,title,message, mode){
        
        var toastEvent = $A.get("e.force:showToast");
        
        toastEvent.setParams({
            "title": title,
            "message": message,
            "type" : type,
            "mode" : mode,
            "duration" : 8000
            
        });
        toastEvent.fire();        
    }
})