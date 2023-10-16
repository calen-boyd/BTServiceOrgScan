trigger MethodByGroupingTrigger on Method_by_Grouping__c (before delete, before update) {
    if(trigger.isbefore && trigger.isdelete) {
        MethodRelatedListsTriggerHandler.isDeletableRecord(trigger.old, 'Method__c');
    }
    
    if(trigger.isbefore && trigger.isupdate){
        MethodRelatedListsTriggerHandler.isDeletableRecord(trigger.new, 'Method__c');
    }
}