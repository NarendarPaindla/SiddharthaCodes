
import java.util.Scanner;
public class Main
{
	public static void main(String[] args) {
    Scanner sc=new Scanner(System.in);
    System.out.print("Enter byte: ");
    byte b=sc.nextByte();
    System.out.print("Enter Short: ");
    short s=sc.nextShort();
    System.out.print("Enter int: ");
    int i=sc.nextInt();
    System.out.print("Enter Long: ");
    long l=sc.nextLong();
    System.out.print("Enter float: ");
    float f=sc.nextFloat();
    System.out.print("Enter double: ");
    double d=sc.nextDouble();
    System.out.print("Enter boolean: ");
    boolean bool=sc.nextBoolean();
    System.out.print("Enter char: ");
    char ch=sc.next().charAt(0);
    System.out.print("Enter single word: ");
    String word=sc.next();
    sc.nextLine();
    System.out.print("Enter full line: ");
    String line=sc.nextLine();
      System.out.println("\n--- You entered ---");
        System.out.println("byte: " + b);
        System.out.println("short: " + s);
        System.out.println("int: " + i);
        System.out.println("long: " + l);
        System.out.println("float: " + f);
        System.out.println("double: " + d);
        System.out.println("boolean: " + bool);
        System.out.println("char: " + ch);
        System.out.println("word: " + word);
         System.out.println("full line: " + line);
	}
}