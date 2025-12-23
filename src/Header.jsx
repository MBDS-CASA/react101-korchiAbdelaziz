/* 
 Créer un composant Header contenant les éléments suivant :
  - Logo de votre formation
  - Titre : "Introduction à React"
  - Sous-Titre : "A la découverte des premières notions de React"

*/

function Header() {
    return (
        <header>
            <img src="assets/logo.png" alt="Logo de la formation" />
            <h1>Introduction à React</h1>
            <p>A la découverte des premières notions de React</p>
        </header>
    );
}

export default Header;