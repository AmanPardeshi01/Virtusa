import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;

public class ReverseQueue {
    public static void main(String[] args) {
        // Step 1: Create a queue
        Queue<Integer> queue = new LinkedList<>();

        // Add elements
        queue.add(10);
        queue.add(20);
        queue.add(30);
        queue.add(40);
        queue.add(50);

        System.out.println("Original Queue: " + queue);

        // Step 2: Reverse using Stack
        Stack<Integer> stack = new Stack<>();

        // Move all elements from queue to stack
        while (!queue.isEmpty()) {
            stack.push(queue.remove());
        }

        // Move back from stack to queue (reversed order)
        while (!stack.isEmpty()) {
            queue.add(stack.pop());
        }

        System.out.println("Reversed Queue: " + queue);
    }
}
