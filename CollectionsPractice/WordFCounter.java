import java.util.HashMap;
import java.util.Map;

public class WordFCounter {
    public static void main(String[] args) {
        String text = "Hello World Hello everyone Welcome to the World of Java Java programming";
        Map<String, Integer> wordCount = new HashMap<>();

        String[] words = text.split("\\s+");
        for (String word : words) {
            // Remove punctuation and convert to lowercase for accurate counting
            word = word.replaceAll("[^a-zA-Z]", "").toLowerCase();

            // Step 3: Update the count in the map
            wordCount.put(word, wordCount.getOrDefault(word, 0) + 1);
        }

        // Output the word count map
        System.out.println(wordCount);

    }
}
