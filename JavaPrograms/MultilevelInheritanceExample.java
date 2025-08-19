// Parent Class
class Animal {
    void eat() {
        System.out.println("This animal eats food.");
    }
}

// Intermediate Class
class Mammal extends Animal {
    void walk() {
        System.out.println("This mammal walks.");
    }
}

// Child Class
class Dog extends Mammal {
    void bark() {
        System.out.println("The dog barks.");
    }
}

public class MultilevelInheritanceExample {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat(); // Inherited from Animal
        dog.walk(); // Inherited from Mammal
        dog.bark(); // Specific to Dog
    }
}