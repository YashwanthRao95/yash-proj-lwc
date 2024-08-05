public with sharing class ImperativeMethodLWC {
    
    @AuraEnabled(cacheable=false)
    public static List<Account> imperativeCall(){
        try {
            List<Account> accountLists = new List<Account>([SELECT id, Name, Industry, Phone, AnnualRevenue FROM Account LIMIT 20]);

            return accountLists;

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable=true)
    public static AccountChildWrapper conAndOppLists(){
        try {
            List<Contact> conList = new List<Contact>([SELECT id, LastName, FirstName FROM Contact LIMIT 10]);
            List<Opportunity> oppList = new List<Opportunity>([SELECT id, Name, CloseDate FROM Opportunity LIMIT 10]);
            AccountChildWrapper wrapper = new AccountChildWrapper(conList, oppList);
            return wrapper;
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    public class AccountChildWrapper{
        @AuraEnabled
        public List<Contact> contactList {get; set;}

        @AuraEnabled
        public List<Opportunity> oppList {get; set;}

        AccountChildWrapper(List<Contact> conList, List<Opportunity> opportunityList){
            this.oppList = opportunityList;
            this.contactList = conList;
        }
    }
}