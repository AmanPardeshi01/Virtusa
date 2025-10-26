import java.util.ArrayList;
// import java.util.List;
import java.util.LinkedHashSet;

public class RemoveDuplicate {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>();
        list.add(22);
        list.add(42);
        list.add(82);
        list.add(39);
        list.add(88);
        list.add(12);
        list.add(22);
        list.add(32);
        list.add(22);

        LinkedHashSet<Integer> unique = new LinkedHashSet<>(list);
        System.out.println("List with duplicate values " + list);
        System.out.println(""+ unique);



    }
}
