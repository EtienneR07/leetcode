package Java;

public class Program {
    public static void main(String[] args) {
        MatrixProblems hm = new MatrixProblems();
        hm.gameOfLife(new int[][] { { 0, 1, 0 }, { 0, 0, 1 }, { 1, 1, 1 }, { 0, 0, 0 } });
    }
}
