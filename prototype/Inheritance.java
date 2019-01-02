import java.util.ArrayList;

public class Inheritance {
    public static void main(String[] args) {
        Manager mgr = new Manager();
        System.out.print(mgr.dept);
    }
}

class Employee {
    public String name = "";
    public String dept = "general";

    public Employee() {

    }
}

class Manager extends Employee {
    public ArrayList<Employee> reports = new ArrayList<>();

    public Manager() {

    }
}

class WorkerBee extends Employee {
    public ArrayList<String> projects = new ArrayList<>();

    public WorkerBee() {

    }
}

class SalesPerson extends WorkerBee {
    public Integer quota = 100;
    public String dept = "Sales";

    public SalesPerson() {

    }
}

class Engineer extends WorkerBee {
    public String machine = "";
    public String dept = "Engineering";

    public Engineer() {

    }

}