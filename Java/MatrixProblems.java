package Java;

public class MatrixProblems {
    public void gameOfLife(int[][] board) {
        int rows = board.length;
        int cols = board[0].length;

        int[][] newBoard = new int[rows][cols];
        for (int y = 0; y < rows; y++) {
            System.arraycopy(board[y], 0, newBoard[y], 0, cols);
        }

        for (int y = 0; y < rows; y++) {
            for (int x = 0; x < board[y].length; x++) {
                int neighbors = countNeighbors(x, y, board);
                if (board[y][x] == 1) {
                    if (neighbors < 2 || neighbors > 3)
                        newBoard[y][x] = 0;

                    continue;
                }

                if (neighbors == 3)
                    newBoard[y][x] = 1;
            }
        }

        for (int y = 0; y < rows; y++) {
            System.arraycopy(newBoard[y], 0, board[y], 0, cols);
        }
    }

    private int countNeighbors(int x, int y, int[][] board) {
        int count = 0;
        for (int j = y - 1; j < y + 2; j++) {
            for (int i = x - 1; i < x + 2; i++) {
                if (i == x && j == y)
                    continue;
                if (i < 0 || i >= board[0].length)
                    continue;
                if (j < 0 || j >= board.length)
                    continue;

                if (board[j][i] == 1)
                    count++;
            }
        }

        return count;
    }
}
