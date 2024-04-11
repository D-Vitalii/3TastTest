function generateMatrix(M, N) {
    const matrix = [];
    let count = 1;
    for (let i = 0; i < M; i++) {
        matrix.push([]);
        for (let j = 0; j < N; j++) {
            matrix[i].push(count++);
        }
    }
    return matrix;
}

function printSpiralOfSize(M, N) {
    const matrix = generateMatrix(M, N);
    let result = [];
    let topRow = 0;
    let bottomRow = M - 1;
    let leftCol = 0;
    let rightCol = N - 1;

    while (topRow <= bottomRow && leftCol <= rightCol) {
        for (let i = leftCol; i <= rightCol; i++) {
            result.push(matrix[topRow][i]);
        }
        topRow++;

        for (let i = topRow; i <= bottomRow; i++) {
            result.push(matrix[i][rightCol]);
        }
        rightCol--;

        if (topRow <= bottomRow) {
            for (let i = rightCol; i >= leftCol; i--) {
                result.push(matrix[bottomRow][i]);
            }
            bottomRow--;
        }

        if (leftCol <= rightCol) {
            for (let i = bottomRow; i >= topRow; i--) {
                result.push(matrix[i][leftCol]);
            }
            leftCol++;
        }
    }

    console.log(result.join(' '));
}

printSpiralOfSize(3, 3);
printSpiralOfSize(3, 4);
printSpiralOfSize(4, 3);
printSpiralOfSize(4, 4);
printSpiralOfSize(5, 5);