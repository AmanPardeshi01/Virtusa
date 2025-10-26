import java.util.List;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

public class FindDuplicate {
    public static void main(String[] args) {
        List<Integer> numbers = new ArrayList<>();
        numbers.add(5);
        numbers.add(3);
        numbers.add(8);
        numbers.add(1);
        numbers.add(2);
        numbers.add(7);
        numbers.add(3);
        numbers.add(7);
        numbers.add(4);
        numbers.add(6);
        numbers.add(2);

        Set<Integer> duplicates = new HashSet<>();
        Set<Integer> uniqueNumber = new HashSet<>();
        for(Integer number : numbers){
            if(!uniqueNumber.add(number)){
                duplicates.add(number);
            }
        }
        System.out.println("Duplicate Numbers: " + duplicates);

    }
}
