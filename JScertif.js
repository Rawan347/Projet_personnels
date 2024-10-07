
function afficherResultat(score, nombreDeMots)
{
    let spanScore = document.querySelector(".zoneScore h3");
    spanScore.innerText = `${score} / ${nombreDeMots}`;
}



function afficherProposition(proposition)
{
    let motEcrit = document.querySelector("#zoneMotsEcrire p");
    motEcrit.innerText = proposition;
}


function lancerJeu()
{
    let score = 0;
    let i = 0;
    let listeProposition = listeMots;

    let boutonValider = document.getElementById("Validation");
    let inputTexte = document.querySelector(".zoneTexte #texteZone");
    // let motEcrit = document.querySelector("#zoneMotsEcrire p");
    let boutonDeChoix = document.querySelectorAll(".optionSource input");

    afficherProposition(listeProposition[i]);

    boutonValider.addEventListener("click", () =>
    {
        if (inputTexte.value === listeProposition[i])
        {
            score++;
        }

        i++;

        afficherResultat(score, i);

        inputTexte.value = "";

        if (listeMots[i] === undefined)
        {
            afficherProposition("Le jeu est terminé !");
            boutonValider.disabled = true;

            for (let index = 0; index < boutonDeChoix.length; index++)
            {
                boutonDeChoix[index].addEventListener("click", (event) =>
                {
                    alert("Le jeu va être relancer");
                   window.location.reload();
                });
            }
        }

        else
        {
            afficherProposition(listeProposition[i]);
        }

    });

    let boutonRadio = document.querySelectorAll(".optionSource input");

    for (let index = 0; index < boutonRadio.length; index++)
    {
        boutonRadio[index].addEventListener("change", (event) =>
        {
            if (event.target.value === "1")
            {
                listeProposition = listeMots;
            }

            else
            {
                listeProposition = listePhrases;
            }

            afficherProposition(listeProposition[i]);
        });
    }

    afficherResultat(score, i);
}



function popOpen()
{
    let partager = document.getElementById("share");
    let formulaire = document.querySelector("#popup");
    partager.addEventListener("click", () =>
    {
        formulaire.style.visibility = "visible";
    });
}



function popClose()
{
    let fermer = document.getElementById("close");
    let formulaire = document.querySelector("#popup");

    fermer.addEventListener("click", () =>
    {
        formulaire.style.visibility = "hidden";
    });
}

function checkForm()
{
    let formulaire = document.querySelector("form");
    // let baliseNom = document.getElementById("nom").value;
    // let baliseEmail = document.getElementById("email").value;

    formulaire.addEventListener("submit", (event) =>
    {
        event.preventDefault();

        let baliseNom = document.getElementById("nom").value;
        let baliseEmail = document.getElementById("email").value;

        if (baliseNom.trim() === "" || baliseEmail.trim() === "")
        {
            console.log("Un des deux champs n'est pas rempli");
        }
        else
        {
            console.log("Les deux champs sont remplis");
        }

        let regEmail = new RegExp("[a-z0-9._-]+@[gmail|yahoo]+\.[com|fr]");

        if (regEmail.test(baliseEmail))
        {
            console.log("Le champ email est bien rempli");
        }
        else
        {
            console.log("Le champ email n'est pas bien rempli");
        }
    });

}









