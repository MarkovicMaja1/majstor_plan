import React from "react";
import PickMeals from "../Assets/ceramics.png";
import ChooseMeals from "../Assets/floor.png";
import DeliveryMeals from "../Assets/gips.jpg";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Keramika",
      text: "Naša kompanija pruža vrhunske usluge keramike. Bez obzira da li je u pitanju postavljanje pločica u kupatilu, kuhinji ili na podu, možete računati na nas za kvalitetnu i preciznu instalaciju koja će vaš prostor učiniti lepšim i funkcionalnijim."
    },
    {
      image: ChooseMeals,
      title: "Postavljanje vrata",
      text: "Naši majstori poseduju bogato iskustvo i veštine kako bi osigurali da vaša vrata budu pravilno postavljena, funkcionalna i estetski privlačna."
    },
    {
      image: DeliveryMeals,
      title: "Gipsarski radovi",
      text: "Naš tim majstora pruža širok spektar usluga gipsarskih radova, uključujući gipsane zidove, plafone, dekorativne elemente i još mnogo toga. Sa pažnjom prema detaljima i stručnošću, garantujemo visokokvalitetne rezultate koji će zadovoljiti sve vaše potrebe."
    },
    {
      // Dodajemo novu karticu za Iskop mini bagerom, behaton, uredjenje dvorista
      title: "Iskop mini bagerom, behaton, uredjenje dvorista",
      text: "Osiguravamo profesionalne usluge iskopa mini bagerom, postavljanja behatona i uređenja dvorišta. Bez obzira na vaše potrebe, možete računati na nas za kvalitetnu izradu i uredjenje vašeg prostora."
    },
    {
      // Dodajemo novu karticu za Postavljanje sigurnosnih kamera i automatizacija prostora
      title: "Postavljanje sigurnosnih kamera i automatizacija prostora",
      text: "Nudimo usluge postavljanja sigurnosnih kamera i automatizacije prostora za vašu bezbednost i udobnost. Naš tim stručnjaka će vam pomoći da osigurate svoj prostor i olakšate svakodnevne aktivnosti uz najnovije tehnološke inovacije."
    },
  ];

  // Stil za smanjenje veličine slike ChooseMeals
  const chooseMealsImageStyle = {
    width: "50%", // Postavljanje širine slike na 50% originalne veličine
    height: "auto" // Automatsko podešavanje visine kako bi se očuvale proporcije
  };

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">Šta još nudimo?</h1>
        <p className="primary-text">
          Bez obzira da li vam je potrebna renovacija, popravka ili unapređenje, možete računati na naš tim stručnjaka da ispuni vaše zahteve i ostvari vaše vizije.{" "}
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              {data.title === "Postavljanje vrata" ? (
                // Provera da li je slika ChooseMeals
                <img src={data.image} alt="" style={chooseMealsImageStyle} />
              ) : (
                // Ostale slike ostaju u originalnoj veličini
                <img src={data.image} alt="" />
              )}
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
