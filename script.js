// ========================================
// NIKA'S SHOP
// ========================================


// ========================================
// LISTE DES PRODUITS
// ========================================

const produits = [

    {
        nom: "gedzner",

        categorie: "textiles",

        prix: 12000,

        images: [
            "Rouge.jpeg",
            "blanc.jpeg",
            "rose bonbon 2.jpeg",
            "Gris.jpeg",
            "Diez meuve.jpeg",
            "rose foncée.jpeg",
            "vert foncée.jpeg",
            "shomaux.jpeg",
            "WhatsApp Image 2026-09-14 at 22.40.20.jpeg",
            "Bleu ciel.jpeg",
            "marron claire.jpeg",
            "bleu.jpeg"
        ],

        description:
            "gedzner original suisse gold autriche vendu par metres.",

        couleurs: [
            "bleu",
            "Blanc",
            "Marron",
            "rose",
            "vert",
            "bleu ciel",
            "rose bonbon",
            "Gris",
            "rouge",
            "meuve",
            "rose foncé",
            "vert foncé",
            "vert senegal",
            "shomaux"
        ]
    },


    {
        nom: "Tissu Brodé Africain Premium",

        categorie: "Textiles",

        prix: 15000,

        images: [
            "brodé blanc.jpeg",
            "brodé noir.jpeg",
            "brodé rouge bordeau.jpeg",
            "brodé rose.jpeg",
            "brodé vert.jpeg",
            "brodé jaune.jpeg",
            "brodé bleu.jpeg",
            "chomaux.jpeg",
            "brodé orange.jpeg"
        ],

        description:
            "Magnifique tissu brodé africain premium vendu par 5 metres.",

        couleurs: [
            "Noir",
            "Rouge bordeaux",
            "Blanc",
            "Rose",
            "Vert",
            "Jaune",
            "Bleu",
            "Chomaux",
            "Orange"
        ]
    },


    {
        nom: "Bazin riche",

        categorie: "Textiles",

        prix: 4000,

        images: [
            "basin Rose foncé.jpeg",
            "Bazin Blanc.jpeg",
            "Bazin bleu ciel.jpeg",
            "Bazin bleu foncé.jpeg",
            "bazin chomaux.jpeg",
            "bazin gris.jpeg",
            "bazin jaune poussin.jpeg",
            "bazin meuve.jpeg",
            "Bazin Noir.jpeg",
            "bazin orange.jpeg",
            "bazin rose bonbon.jpeg",
            "Bazin vert Ditakh.jpeg"
        ],

        description:
            "Basin Riche Pris Gold Original Qualité vendu par Métre.",

        couleurs: [
            "blanc",
            "bleu ciel",
            "bleu foncé",
            "Marron",
            "vert Ditakh",
            "Gris",
            "rose foncé",
            "chomaux",
            "Jaune",
            "Noir",
            "Meuve foncé",
            "Orange",
            "meuve",
            "Jaune poussin",
            "Rose bonbon"
        ]
    },


    {
        nom: "Ensemble femme",

        categorie: "Textiles",

        prix: 10000,

        images: [
            "rose.jpeg",
            "robe.jpeg",
            "robe verte.jpeg",
            "robe jaune.jpeg",
            "vert menthe.jpeg"
        ],

        description:
            "Robe 👗 Rass inde 💯% Coton Taille M L XL XXL.",

        couleurs: [
            "Rose",
            "Jaune",
            "Noir",
            "Rouge Bordeaux",
            "Vert",
            "Vert menthe"
        ],

        tailles: [
            "M",
            "L",
            "XL",
            "XXL"
        ]
    },


    {
        nom: "Crème visage",

        categorie: "Skin care",

        prix: 10000,

        images: [
            "skin care.jpg",
            "skin femme.jpg"
        ],

        description:
            "Crème visage pour votre routine beauté.",

        genres: [
            "Homme",
            "Femme"
        ]
    },


    {
        nom: "Sac tendance",

        categorie: "Sacs",

        prix: 18000,

        images: [
            "sac.jpg",
            "sac2.jpg",
            "sac 3.jpg"
        ],

        description:
            "Sac tendance pour compléter votre style.",

        couleurs: [
            "Noir",
            "Marron",
            "Beige"
        ]
    },


    {
        nom: "Chaussures élégantes",

        categorie: "Chaussures",

        prix: 22000,

        images: [
            "Assics bleu.jpg",
            "assics rose.jpg"
        ],

        description:
            "Chaussures élégantes et confortables.",

        couleurs: [
            "Bleu",
            "Rose"
        ]
    },


    {
        nom: "Ensemble collier boucle d'oreille",

        categorie: "Bijoux",

        prix: 8500,

        images: [
            "ensemble collier boucle d'oreil blanc.jpeg",
            "collier blanc.jpeg",
            "collier.jpeg",
            "Col.jpeg"
        ],

        description:
            "Magnifique ensemble collier et boucles d'oreilles.",

        couleurs: [
            "Argenté"
        ]
    }

];


// ========================================
// VARIABLES POUR LE DÉTAIL
// ========================================

let produitDetailActuel = null;

let imageDetailActuelle = 0;

let couleurSelectionnee = "";

let tailleSelectionnee = "";

let genreSelectionne = "";


// ========================================
// AFFICHER LES PRODUITS
// ========================================

function afficherProduits(liste = produits) {

    const productGrid =
        document.getElementById("productGrid");

    productGrid.innerHTML = "";

    liste.forEach((produit, index) => {

        const carte =
            document.createElement("div");

        carte.className = "carte-produit";

        // IMAGE

        let imageHTML = "";

        if (produit.images && produit.images.length > 0) {

            imageHTML = `
                <img
                    src="${produit.images[0]}"
                    alt="${produit.nom}"
                    class="image-produit"
                >
            `;

        } else {

            imageHTML = `
                <div class="image-placeholder">
                    📷
                    <span>Image à ajouter</span>
                </div>
            `;
        }

        // CARTE

        carte.innerHTML = `

            ${imageHTML}

            <div class="info-produit">

                <h3>
                    ${produit.nom}
                </h3>

                <p class="categorie-produit">
                    ${produit.categorie}
                </p>

                <p class="prix-produit">
                    ${produit.prix.toLocaleString("fr-FR")} FCFA
                </p>

                <button
                    class="bouton-produit"
                    onclick="voirProduit(${index})"
                >
                    Voir le produit
                </button>

            </div>

        `;

        productGrid.appendChild(carte);

    });

}


// ========================================
// FILTRER LES PRODUITS
// ========================================

function filtrerProduits(categorie) {

    if (categorie === "Tous") {

        afficherProduits(produits);

        return;
    }

    const produitsFiltres =
        produits.filter(
            produit =>
                produit.categorie === categorie
        );

    afficherProduits(produitsFiltres);
}


// ========================================
// AFFICHER LE DÉTAIL
// ========================================

function voirProduit(index) {

    produitDetailActuel = produits[index];

    imageDetailActuelle = 0;

    couleurSelectionnee = "";

    tailleSelectionnee = "";

    genreSelectionne = "";

    const produit = produitDetailActuel;

    document.getElementById("nomDetail").textContent =
        produit.nom;

    document.getElementById("categorieDetail").textContent =
        produit.categorie;

    document.getElementById("prixDetail").textContent =
        produit.prix.toLocaleString("fr-FR") + " FCFA";

    document.getElementById("descriptionDetail").textContent =
        produit.description ||
        "Aucune description disponible.";

    afficherImageDetail();

    afficherCouleurs();

    afficherTailles();

    afficherGenres();

    document.getElementById("detailProduit").style.display =
        "flex";
}


// ========================================
// AFFICHAGE INITIAL
// ========================================

afficherProduits();


// ========================================
// AFFICHER L'IMAGE DU PRODUIT
// ========================================

function afficherImageDetail() {

    const image =
        document.getElementById("imageDetail");

    if (
        produitDetailActuel.images &&
        produitDetailActuel.images.length > 0
    ) {

        image.src =
            produitDetailActuel.images[imageDetailActuelle];

    } else {

        image.removeAttribute("src");

        image.alt =
            "Image non disponible";
    }
}


// ========================================
// AFFICHER LES COULEURS
// ========================================

function afficherCouleurs() {

    const zone =
        document.getElementById("couleursDetail");

    zone.innerHTML = "";

    const couleurs =
        produitDetailActuel.couleurs || [];

    if (couleurs.length === 0) {

        document.getElementById("blocCouleurs").style.display =
            "none";

        return;
    }

    document.getElementById("blocCouleurs").style.display =
        "block";

    couleurs.forEach(function(couleur) {

        const bouton =
            document.createElement("button");

        bouton.type = "button";

        bouton.className =
            "bouton-option";

        bouton.textContent =
            couleur;

        bouton.onclick = function() {

            couleurSelectionnee =
                couleur;

            document
                .querySelectorAll("#couleursDetail .bouton-option")
                .forEach(function(bouton) {

                    bouton.classList.remove("selectionne");

                });

            bouton.classList.add("selectionne");

            document.getElementById("couleurChoisie").textContent =
                "Couleur choisie : " + couleur;
        };

        zone.appendChild(bouton);

    });

}


// ========================================
// AFFICHER LES TAILLES
// ========================================

function afficherTailles() {

    const zone =
        document.getElementById("taillesDetail");

    zone.innerHTML = "";

    const tailles =
        produitDetailActuel.tailles || [];

    if (tailles.length === 0) {

        document.getElementById("blocTailles").style.display =
            "none";

        return;
    }

    document.getElementById("blocTailles").style.display =
        "block";

    tailles.forEach(function(taille) {

        const bouton =
            document.createElement("button");

        bouton.type = "button";

        bouton.className =
            "bouton-option";

        bouton.textContent =
            taille;

        bouton.onclick = function() {

            tailleSelectionnee =
                taille;

            document
                .querySelectorAll("#taillesDetail .bouton-option")
                .forEach(function(bouton) {

                    bouton.classList.remove("selectionne");

                });

            bouton.classList.add("selectionne");

            document.getElementById("tailleChoisie").textContent =
                "Taille choisie : " + taille;
        };

        zone.appendChild(bouton);

    });

}


// ========================================
// AFFICHER LES GENRES
// ========================================

function afficherGenres() {

    const blocGenres =
        document.getElementById("blocGenres");

    const zone =
        document.getElementById("genresDetail");

    // Sécurité si le HTML n'a pas encore le bloc
    if (!blocGenres || !zone) {
        return;
    }

    zone.innerHTML = "";

    const genres =
        produitDetailActuel.genres || [];

    // Pas de genre pour les autres produits
    if (genres.length === 0) {

        blocGenres.style.display =
            "none";

        return;
    }

    blocGenres.style.display =
        "block";

    genres.forEach(function(genre) {

        const bouton =
            document.createElement("button");

        bouton.type = "button";

        bouton.className =
            "bouton-option";

        bouton.textContent =
            genre;

        bouton.onclick = function() {

            genreSelectionne =
                genre;

            document
                .querySelectorAll("#genresDetail .bouton-option")
                .forEach(function(bouton) {

                    bouton.classList.remove("selectionne");

                });

            bouton.classList.add("selectionne");

            const texte =
                document.getElementById("genreChoisi");

            if (texte) {

                texte.textContent =
                    "Genre choisi : " + genre;
            }
        };

        zone.appendChild(bouton);

    });

}


// ========================================
// FERMER LE DÉTAIL
// ========================================

function fermerDetail() {

    document.getElementById("detailProduit").style.display =
        "none";
}


// ========================================
// IMAGE PRÉCÉDENTE
// ========================================

function imagePrecedente() {

    if (
        !produitDetailActuel ||
        !produitDetailActuel.images ||
        produitDetailActuel.images.length === 0
    ) {

        return;
    }

    imageDetailActuelle--;

    if (imageDetailActuelle < 0) {

        imageDetailActuelle =
            produitDetailActuel.images.length - 1;
    }

    afficherImageDetail();
}


// ========================================
// IMAGE SUIVANTE
// ========================================

function imageSuivante() {

    if (
        !produitDetailActuel ||
        !produitDetailActuel.images ||
        produitDetailActuel.images.length === 0
    ) {

        return;
    }

    imageDetailActuelle++;

    if (
        imageDetailActuelle >=
        produitDetailActuel.images.length
    ) {

        imageDetailActuelle = 0;
    }

    afficherImageDetail();
}


// ========================================
// AJOUTER AU PANIER
// ========================================

function ajouterProduitDepuisDetail() {

    if (!produitDetailActuel) {
        return;
    }

    const produit = produitDetailActuel;


    // Vérifier la couleur

    if (
        produit.couleurs &&
        produit.couleurs.length > 0 &&
        couleurSelectionnee === ""
    ) {

        alert("⚠️ Veuillez sélectionner une couleur.");

        return;
    }


    // Vérifier la taille

    if (
        produit.tailles &&
        produit.tailles.length > 0 &&
        tailleSelectionnee === ""
    ) {

        alert("⚠️ Veuillez sélectionner une taille.");

        return;
    }


    // Vérifier le genre
    // Uniquement pour les produits qui ont un tableau genres

    if (
        produit.genres &&
        produit.genres.length > 0 &&
        genreSelectionne === ""
    ) {

        alert("⚠️ Veuillez sélectionner un genre.");

        return;
    }


    // Vérifier si le produit existe déjà

    const produitExistant = panier.find(function(article) {

        return (
            article.nom === produit.nom &&
            article.couleur === couleurSelectionnee &&
            article.taille === tailleSelectionnee &&
            article.genre === genreSelectionne
        );

    });


    if (produitExistant) {

        produitExistant.quantite++;

    } else {

        panier.push({

            nom: produit.nom,

            categorie: produit.categorie,

            prix: produit.prix,

            image:
                produit.images &&
                produit.images.length > 0
                    ? produit.images[0]
                    : "",

            couleur: couleurSelectionnee,

            taille: tailleSelectionnee,

            genre: genreSelectionne,

            quantite: 1

        });

    }

    mettreAJourPanier();

    fermerDetail();
}


// ========================================
// OUVRIR LE PANIER
// ========================================

function ouvrirPanier() {

    document.getElementById("fenetrePanier").style.display =
        "flex";
}


// ========================================
// FERMER LE PANIER
// ========================================

function fermerPanier() {

    document.getElementById("fenetrePanier").style.display =
        "none";
}


// ========================================
// COMMANDER SUR WHATSAPP
// ========================================

function commander() {

    if (panier.length === 0) {

        alert("Votre panier est vide.");

        return;
    }

    let message =
        "🛍️ *COMMANDE NIKA'S SHOP*\n\n";

    let total = 0;


    panier.forEach(function(produit, index) {

        if (!produit.quantite) {

            produit.quantite = 1;
        }

        const sousTotal =
            produit.prix * produit.quantite;

        message +=
            "━━━━━━━━━━━━━━\n" +
            "🛍️ *Produit " +
            (index + 1) +
            "*\n" +
            "Nom : " +
            produit.nom +
            "\n";


        // COULEUR

        if (produit.couleur) {

            message +=
                "🎨 Couleur : " +
                produit.couleur +
                "\n";
        }


        // TAILLE

        if (produit.taille) {

            message +=
                "📏 Taille : " +
                produit.taille +
                "\n";
        }


        // GENRE

        if (produit.genre) {

            message +=
                "👤 Genre : " +
                produit.genre +
                "\n";
        }


        message +=
            "🔢 Quantité : " +
            produit.quantite +
            "\n" +

            "💰 Prix unitaire : " +
            produit.prix.toLocaleString("fr-FR") +
            " FCFA\n" +

            "💵 Sous-total : " +
            sousTotal.toLocaleString("fr-FR") +
            " FCFA\n\n";

        total += sousTotal;

    });


    message +=
        "━━━━━━━━━━━━━━\n" +

        "💰 *TOTAL : " +
        total.toLocaleString("fr-FR") +
        " FCFA*\n\n" +

        "📦 Je souhaite passer cette commande.\n" +

        "Merci Nika's Shop ! 💕";


    const numero =
        "221781281826";


    const url =
        "https://wa.me/" +
        numero +
        "?text=" +
        encodeURIComponent(message);


    window.open(url, "_blank");
}


// ========================================
// PANIER
// ========================================

let panier = [];


function mettreAJourPanier() {

    const liste =
        document.getElementById("listePanier");

    const compteur =
        document.getElementById("nombrePanier");

    const totalElement =
        document.getElementById("totalPanier");


    liste.innerHTML = "";


    // PANIER VIDE

    if (panier.length === 0) {

        liste.innerHTML = `
            <p class="panier-vide">
                🛒 Votre panier est vide.
            </p>
        `;

        compteur.textContent = "0";

        totalElement.textContent = "0 FCFA";

        return;
    }


    let total = 0;

    let nombreArticles = 0;


    panier.forEach(function(produit, index) {

        // Sécurité

        if (!produit.quantite) {

            produit.quantite = 1;
        }


        const sousTotal =
            produit.prix * produit.quantite;


        total += sousTotal;

        nombreArticles += produit.quantite;


        const article =
            document.createElement("div");

        article.className =
            "article-panier";


        article.innerHTML = `

            ${
                produit.image
                ? `<img src="${produit.image}" alt="${produit.nom}">`
                : ""
            }

            <div class="info-panier">

                <h3>
                    ${produit.nom}
                </h3>


                ${
                    produit.couleur
                    ? `<p>Couleur : ${produit.couleur}</p>`
                    : ""
                }


                ${
                    produit.taille
                    ? `<p>Taille : ${produit.taille}</p>`
                    : ""
                }


                ${
                    produit.genre
                    ? `<p>Genre : ${produit.genre}</p>`
                    : ""
                }


                <p class="prix-panier">

                    ${produit.prix.toLocaleString("fr-FR")}
                    FCFA

                </p>


                <!-- QUANTITÉ -->

                <div class="quantite-panier">

                    <button
                        type="button"
                        onclick="diminuerQuantite(${index})">

                        −

                    </button>


                    <span>
                        ${produit.quantite}
                    </span>


                    <button
                        type="button"
                        onclick="augmenterQuantite(${index})">

                        +

                    </button>

                </div>


                <p class="sous-total-panier">

                    Sous-total :

                    <strong>

                        ${sousTotal.toLocaleString("fr-FR")}
                        FCFA

                    </strong>

                </p>


                <button
                    type="button"
                    class="bouton-supprimer"
                    onclick="supprimerDuPanier(${index})">

                    🗑️ Supprimer

                </button>

            </div>

        `;


        liste.appendChild(article);

    });


    // Nombre total d'articles

    compteur.textContent =
        nombreArticles;


    // Total général

    totalElement.textContent =
        total.toLocaleString("fr-FR") +
        " FCFA";
}


// ========================================
// AUGMENTER QUANTITÉ
// ========================================

function augmenterQuantite(index) {

    panier[index].quantite++;

    mettreAJourPanier();
}


// ========================================
// DIMINUER QUANTITÉ
// ========================================

function diminuerQuantite(index) {

    if (panier[index].quantite > 1) {

        panier[index].quantite--;
    }

    mettreAJourPanier();
}


// ========================================
// SUPPRIMER DU PANIER
// ========================================

function supprimerDuPanier(index) {

    panier.splice(index, 1);

    mettreAJourPanier();
}