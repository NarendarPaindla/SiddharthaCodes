public class Account{
     private String accountNumber;
     private double balance;
     public Account(String accountNumber,double balance){
     this.accountNumber=accountNumber;
     this.balance=balance;
}

public String getAcountNumber(){
return accountNumber;
}

public void setAccountNumber(String accountNumber){
this.accountNumber=accountNumber;
}


public void display(){
  System.out.println("Number: " + accountNumber + ", Balance" + balance);
}
}