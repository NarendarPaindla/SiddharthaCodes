
import java.util.*;
public class Student
{
    String name;
    int rollno;
    String branch;
    public  void display(String name){
        System.out.println("hello"+name);
    }
   
	public static void main(String[] args) {
		Student s1=new Student();
        s1.name="narendar";
        System.out.println(s1.name);
        s1.display("rohit");
	}
}