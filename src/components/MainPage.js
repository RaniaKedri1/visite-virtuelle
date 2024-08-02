  import React, { useState } from 'react';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import '../styles/MainPage.css';

  const MainPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const thumbnails = [
      { src: "img/LRcam1.jpg", alt: "LRcam1", label: "Living Room 1", scene: "LRcam1" },
      { src: "img/LRcam2.jpg", alt: "LRcam2", label: "Living Room 2", scene: "LRcam2" },
      { src: "img/LRcam3.jpg", alt: "LRcam3", label: "Living Room 3", scene: "LRcam3" },
      { src: "img/LRcam4.jpg", alt: "LRcam4", label: "Living Room 4", scene: "LRcam4" },
      { src: "img/bedroom.jpg", alt: "Bedroom", label: "Bedroom", scene: "bedroom" },
      { src: "img/bathroom.jpg", alt: "Bathroom", label: "Bathroom", scene: "bathroom" },
      { src: "img/EnterKitechen.jpg", alt: "Enter Kitchen", label: "Enter Kitchen", scene: "EnterKitechen" },
      { src: "img/leaveKitchen.jpg", alt: "Leave Kitchen", label: "Leave Kitchen", scene: "leaveKitchen" },
      { src: "img/kidsRoom.jpg", alt: "Kids Room", label: "Kids Room", scene: "kidsRoom" },
    ];

    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % thumbnails.length);
    };

    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + thumbnails.length) % thumbnails.length);
    };

    return (
      <div className="main-page-container">
        <header className="header-section text-center">
          <h1>REFRESH</h1>
          <h2>3 PIECES - PARFAIT ETAT</h2>
          <h3>340 000 €</h3>
        </header>

        <div className="slideshow-container">
          <button className="scroll-button left" onClick={handlePrev}>‹</button>
          <div className="slideshow-slide">
            <img
              src={thumbnails[currentIndex].src}
              alt={thumbnails[currentIndex].alt}
              className="img-fluid"
            />
          </div>
          <button className="scroll-button right" onClick={handleNext}>›</button>
        </div>

        <div className="content-section">
          <p>
            Vente appartement Menton, 3 pièces, 2 chambres, 80 m², 340 000 €
            MENTON - A quelques minutes à pied des bords de mer, du centre ville et de la Gare, dans un immeuble ancien de qualité, il s'agit d'un superbe 3 pièces climatisé d'une surface de 80m2 et composé comme suit:
          </p>
          <p>
            Une entrée avec placard de rangement/buanderie donnant accès à un vaste séjour (32m2) exposé OUEST et baigné de lumière, une agréable cuisine aménagée et équipée avec des matériaux de qualité (plans de travail en pierre), deux grandes chambres (13m2 et 14m2) avec dressings sur mesure, une jolie salle d'eau disposant d'une douche à l'italienne et d'un W.C.
          </p>
        </div>

        <div className="info-section">
          <div>
            <h3>Référence 83356310</h3>
            <p>Pièces: 3 pièces</p>
            <p>Surface: 80 m²</p>
            <p>Surface totale: 80 m²</p>
            <p>Type de chauffage: Climatisation</p>
            <p>Énergie de chauffage: Electrique</p>
            <p>Moyen de chauffage: Individuel</p>
            <p>Type d'eau chaude: Chauffe-eau</p>
            <p>Moyen d'eau chaude: Individuelle</p>
            <p>Eaux usées: Tout à l'égout</p>
            <p>État: Excellent état</p>
            <p>Étage: 1er</p>
            <p>Exposition: Ouest</p>
            <p>Vue: Dégagée Collines Ville</p>
          </div>
          <div>
            <h3>Surfaces</h3>
            <p>1 Entrée: 5 m²</p>
            <p>1 Salle de douche / toilettes: 8 m²</p>
            <p>1 Séjour: 32 m²</p>
            <p>1 Chambre: 14 m²</p>
            <p>1 Chambre: 13 m²</p>
            <p>1 Cuisine: 9 m²</p>
            <h3>Proximités</h3>
            <p>Centre ville: 10 minutes</p>
            <p>Crèche: 5 minutes</p>
            <h3>Mentions légales</h3>
            <p>Honoraires propriétaire</p>
            <p>Charges de copropriété: 1440 € / an</p>
            <p>Montant estimé des dépenses annuelles d'énergie pour un usage standard, établi à partir des prix de l'énergie de l'année 01/01/2021: 890€ ~ 1250€</p>
            <h3>Prestations</h3>
            <p>Air conditionné</p>
            <p>Domotique</p>
            <p>Fenêtre PVC</p>
            <p>Internet</p>
            <p>Triple vitrage</p>
            <p>Fibre optique</p>
            <p>Interphone</p>
          </div>
        </div>

        <div className="content-section">
          <h2 className="text-center">Visite Virtuelle</h2>
          <div id="virtual-tour-container">
            <iframe
              id="virtual-tour-frame"
              src={`/virtual-tour?scene=LRcam2`}
              title="Virtual Tour"
              className="iframe-style"
            ></iframe>
          </div>
        </div>

        <footer className="footer-section text-center">
          <p>Contact Us: info@Refresh.com | +1 234 567 890</p>
          <p>&copy; 2024 Refresh. All rights reserved.</p>
        </footer>
      </div>
    );
  };

  export default MainPage;
