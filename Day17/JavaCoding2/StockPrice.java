
// Scenario:
// A company is analyzing daily stock prices for a given month. The analysts want to identify the longest consecutive streak of days where the stock price was strictly increasing each day.

// Write a function to determine the length of the longest increasing consecutive subsequence of prices in the given list

import java.util.Scanner;

public class StockPrice {

    public static int longestIncreasingStreak(int[] prices) {
        if (prices.length == 0) {
            return 0;
        }

        int max = 1;
        int currentStreak = 1;

        for (int i = 1; i < prices.length; i++) {
            if (prices[i] > prices[i - 1]) {
                if (prices[i] > prices[i - 1]) {
                    currentStreak++;
                } else {
                    currentStreak = 1;
                }
                max = Math.max(max, currentStreak);
            }
        }
        return max;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] inp = sc.nextLine().split(" ");
        int[] prices = new int[inp.length];
        for (int i = 0; i < inp.length; i++) {
            prices[i] = Integer.parseInt(inp[i]);
        }

        System.out.println(longestIncreasingStreak(prices));
    }

}