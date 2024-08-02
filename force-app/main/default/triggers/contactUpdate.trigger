trigger contactUpdate on Contact (after update) {
    Map<id, List<Contact>> mapAccountContact = new Map<id, List<Contact>>();
    List<Id> accIds = new List<Id>();
    for(Contact con: Trigger.new){
        accIds.add(con.AccountId);
        if(mapAccountContact.get(con.AccountId) != null) {
            List<Contact> conList = mapAccountContact.get(con.AccountId);
            conList.add(con);
            mapAccountContact.put(con.AccountId, conList);
        }else {
            List<Contact> conList = new List<Contact>();
            conList.add(con);
            mapAccountContact.put(con.AccountId, conList);
        }
    }
    
    //Contact_Updates__c is the field I created on the Account --- I am done with the code .. I think this should work .. probably
    //I checked the coding is working fine ... I checked.. 
    List<Account> accList = [SELECT id,Contact_Updates__c FROM Account WHERE id=: accIds];
   
    for(Account acc : accList){
        if(mapAccountContact.get(acc.id) != NULL){
            Integer conListLength = mapAccountContact.get(acc.id).size();
            if(acc.Contact_Updates__c == NULL){
                acc.Contact_Updates__c = 0;
            }
            acc.Contact_Updates__c += conListLength;
        }
    }
    update accList;
}