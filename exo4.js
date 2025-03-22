
// Fonction pour créer une matrice carrée aléatoire de taille n
function createRandomMatrix(n) {
    const matrix = [];
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            // Génère un nombre aléatoire entre 0 et 9
            row.push(Math.floor(Math.random() * 10));
        }
        matrix.push(row);
    }
    return matrix;
}

// Fonction pour afficher une matrice de manière formatée
function displayMatrix(matrix) {
    console.log("Matrice :");
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join("\t"));
    }
    console.log("");
}

// Fonction pour additionner deux matrices
function addMatrices(matrixA, matrixB) {
    const n = matrixA.length;
    const result = [];
    
    // Vérifier si les matrices sont de même taille
    if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
        console.error("Les matrices doivent être de même taille pour l'addition.");
        return null;
    }
    
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            row.push(matrixA[i][j] + matrixB[i][j]);
        }
        result.push(row);
    }
    
    return result;
}

// Fonction pour soustraire deux matrices
function subtractMatrices(matrixA, matrixB) {
    const n = matrixA.length;
    const result = [];
    
    // Vérifier si les matrices sont de même taille
    if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
        console.error("Les matrices doivent être de même taille pour la soustraction.");
        return null;
    }
    
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            row.push(matrixA[i][j] - matrixB[i][j]);
        }
        result.push(row);
    }
    
    return result;
}

// Fonction pour multiplier deux matrices
function multiplyMatrices(matrixA, matrixB) {
    const n = matrixA.length;
    const result = [];
    
    // Vérifier si les matrices sont de même taille
    if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
        console.error("Les matrices doivent être de même taille pour la multiplication.");
        return null;
    }
    
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            let sum = 0;
            for (let k = 0; k < n; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            row.push(sum);
        }
        result.push(row);
    }
    
    return result;
}

// Fonction pour transposer une matrice
function transposeMatrix(matrix) {
    const n = matrix.length;
    const result = [];
    
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            row.push(matrix[j][i]);
        }
        result.push(row);
    }
    
    return result;
}

// Fonction pour vérifier si une matrice est symétrique
function isSymmetric(matrix) {
    const n = matrix.length;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] !== matrix[j][i]) {
                return false;
            }
        }
    }
    
    return true;
}

// Fonction pour calculer le déterminant d'une matrice 2×2
function determinant2x2(matrix) {
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
}

// Fonction pour calculer le déterminant d'une matrice 3×3
function determinant3x3(matrix) {
    const a = matrix[0][0] * (matrix[1][1] * matrix[2][2] - matrix[1][2] * matrix[2][1]);
    const b = matrix[0][1] * (matrix[1][0] * matrix[2][2] - matrix[1][2] * matrix[2][0]);
    const c = matrix[0][2] * (matrix[1][0] * matrix[2][1] - matrix[1][1] * matrix[2][0]);
    
    return a - b + c;
}

// Fonction pour calculer le déterminant d'une matrice (compatible 2×2 et 3×3)
function calculateDeterminant(matrix) {
    const n = matrix.length;
    
    if (n === 2) {
        return determinant2x2(matrix);
    } else if (n === 3) {
        return determinant3x3(matrix);
    } else {
        console.error("Le calcul du déterminant n'est implémenté que pour les matrices 2×2 et 3×3.");
        return null;
    }
}

// Démonstration des fonctionnalités
function demoMatrixOperations() {
    console.log("======= DÉMONSTRATION DES OPÉRATIONS SUR LES MATRICES =======");
    
    // Taille de la matrice à utiliser pour la démonstration
    const n = 3;
    console.log(`Utilisation de matrices ${n}×${n} pour la démonstration\n`);
    
    // Créer deux matrices aléatoires
    const matrixA = createRandomMatrix(n);
    const matrixB = createRandomMatrix(n);
    
    // Afficher les matrices
    console.log("Matrice A :");
    displayMatrix(matrixA);
    
    console.log("Matrice B :");
    displayMatrix(matrixB);
    
    // Addition
    console.log("ADDITION (A + B) :");
    const addition = addMatrices(matrixA, matrixB);
    displayMatrix(addition);
    
    // Soustraction
    console.log("SOUSTRACTION (A - B) :");
    const subtraction = subtractMatrices(matrixA, matrixB);
    displayMatrix(subtraction);
    
    // Multiplication
    console.log("MULTIPLICATION (A × B) :");
    const multiplication = multiplyMatrices(matrixA, matrixB);
    displayMatrix(multiplication);
    
    // Transposition
    console.log("TRANSPOSÉE DE A :");
    const transposedA = transposeMatrix(matrixA);
    displayMatrix(transposedA);
    
    // Vérification de symétrie
    console.log("VÉRIFICATION DE SYMÉTRIE :");
    console.log(`La matrice A est${isSymmetric(matrixA) ? "" : " non"} symétrique.`);
    
    // Créer une matrice symétrique pour démonstration
    const symmetricMatrix = createRandomMatrix(n);
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            symmetricMatrix[j][i] = symmetricMatrix[i][j];
        }
    }
    
    console.log("\nMatrice symétrique créée pour démonstration :");
    displayMatrix(symmetricMatrix);
    console.log(`Cette matrice est${isSymmetric(symmetricMatrix) ? "" : " non"} symétrique.`);
    
    // Déterminant
    if (n <= 3) {
        console.log("DÉTERMINANT :");
        console.log(`Le déterminant de la matrice A est : ${calculateDeterminant(matrixA)}`);
        console.log(`Le déterminant de la matrice B est : ${calculateDeterminant(matrixB)}`);
    }
}

// Exécuter la démonstration
demoMatrixOperations();

// Interface console simple pour tester différentes opérations
function runConsoleInterface() {
    const n = parseInt(prompt("Entrez la taille des matrices (n pour matrice n×n) :"));
    
    if (isNaN(n) || n <= 0) {
        console.error("Taille invalide. Veuillez entrer un nombre positif.");
        return;
    }
    
    const matrixA = createRandomMatrix(n);
    const matrixB = createRandomMatrix(n);
    
    console.log("Matrice A générée aléatoirement :");
    displayMatrix(matrixA);
    
    console.log("Matrice B générée aléatoirement :");
    displayMatrix(matrixB);
    
    console.log("Choisissez une opération :");
    console.log("1. Addition (A + B)");
    console.log("2. Soustraction (A - B)");
    console.log("3. Multiplication (A × B)");
    console.log("4. Transposée de A");
    console.log("5. Transposée de B");
    console.log("6. Vérifier si A est symétrique");
    console.log("7. Vérifier si B est symétrique");
    
    if (n <= 3) {
        console.log("8. Calculer le déterminant de A");
        console.log("9. Calculer le déterminant de B");
    }
    
    const choice = parseInt(prompt("Entrez votre choix (1-9) :"));
    
    switch (choice) {
        case 1:
            console.log("Résultat de A + B :");
            displayMatrix(addMatrices(matrixA, matrixB));
            break;
        case 2:
            console.log("Résultat de A - B :");
            displayMatrix(subtractMatrices(matrixA, matrixB));
            break;
        case 3:
            console.log("Résultat de A × B :");
            displayMatrix(multiplyMatrices(matrixA, matrixB));
            break;
        case 4:
            console.log("Transposée de A :");
            displayMatrix(transposeMatrix(matrixA));
            break;
        case 5:
            console.log("Transposée de B :");
            displayMatrix(transposeMatrix(matrixB));
            break;
        case 6:
            console.log(`La matrice A est${isSymmetric(matrixA) ? "" : " non"} symétrique.`);
            break;
        case 7:
            console.log(`La matrice B est${isSymmetric(matrixB) ? "" : " non"} symétrique.`);
            break;
        case 8:
            if (n <= 3) {
                console.log(`Le déterminant de A est : ${calculateDeterminant(matrixA)}`);
            } else {
                console.error("Le calcul du déterminant n'est implémenté que pour les matrices 2×2 et 3×3.");
            }
            break;
        case 9:
            if (n <= 3) {
                console.log(`Le déterminant de B est : ${calculateDeterminant(matrixB)}`);
            } else {
                console.error("Le calcul du déterminant n'est implémenté que pour les matrices 2×2 et 3×3.");
            }
            break;
        default:
            console.error("Choix invalide.");
    }
}

// Décommenter la ligne suivante pour utiliser l'interface console interactive
runConsoleInterface();