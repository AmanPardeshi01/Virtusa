import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.Queue;

class Easy {
    public static void main(String[] args){
        // ArrayList<Integer> list = new ArrayList<>();
        // list.add(60);
        // list.add(70);
        // list.add(30);
        // list.add(40);
        // list.add(50);
        // list.add(80);
        // list.add(10);
        // list.add(20);
        // list.add(90);
        // list.add(100);
        // list.remove(5);
        // System.out.println(list.contains(70));
        // for (Integer i : list) {
        //     System.out.print(i+" ");
        // }


        // HashSet<String> student = new HashSet<>();
        // student.add("Peter");
        // student.add("Eleven");
        // student.add("Steve");
        // student.add("Peter");
        // student.add("Kate");
        // student.add("Sayid");
        // student.remove("kate");

        // System.out.println(student);
        // System.out.println("Size of Student Set is: "+ student.size());


        // HashMap<Integer, String> cls = new HashMap<>();
        // cls.put(1, "Raj");
        // cls.put(2, "Andy");
        // cls.put(3, "Vishal");
        // cls.put(4, "Rohan");
        // cls.put(5, "Abhishek");
        // cls.put(4, "Aniket"); // it will update the value for key 4

        // System.out.println(cls);
        // cls.remove(3);

        // for(Integer name : cls.keySet()){
        //     System.out.println("Key "+ name + " Value: "+ cls.get(name));
        // }


        Queue<String> list = new LinkedList<>();
        list.add("Reading");
        list.add("Writing");
        list.add("Coding");
        list.add("Eating");
        list.add("Sleeping");

        System.out.println(list.poll());
        System.out.println(list.peek());
        System.out.println(list);






    }
}