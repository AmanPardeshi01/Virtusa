import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

class Employee {
    int id;
    String name;

    // Constructor
    public Employee(int id, String name) {
        this.id = id;
        this.name = name;
    }

    // toString() method for easy printing
    public String toString() {
        return "Employee ID: " + id + ", Name: " + name;
    }
}


public class SortName {
     public static void main(String[] args) {
        // Step 1: Create a list of employees
        List<Employee> employees = new ArrayList<>();
        employees.add(new Employee(103, "Rohan"));
        employees.add(new Employee(101, "Aman"));
        employees.add(new Employee(104, "Neha"));
        employees.add(new Employee(102, "Karan"));

        System.out.println("Before Sorting:");
        for (Employee e : employees) {
            System.out.println(e);
        }

        // Step 2: Sort by name using Comparator
        Collections.sort(employees, new Comparator<Employee>() {
            public int compare(Employee e1, Employee e2) {
                return e1.name.compareToIgnoreCase(e2.name);
            }
        });

        System.out.println("\nAfter Sorting by Name:");
        for (Employee e : employees) {
            System.out.println(e);
        }
    }
}
