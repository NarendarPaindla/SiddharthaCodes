interface CanFly {
    void fly();
}

interface CanSwim {
    void swim();
}

class Bird implements CanFly, CanSwim {
    public void fly() {
        System.out.println("The bird flies.");
    }

    public void swim() {
        System.out.println("The bird swims.");
    }
}

public class MultipleInheritanceExample {
    public static void main(String[] args) {
        Bird bird = new Bird();
        bird.fly();
        bird.swim();
    }
}