import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { Image } from "./Image";
import { useRef } from "react";

const App = () => {
  const ref = useRef(null);

  const options = {
    smooth: true,
    inertia: 0.9,
    mobile: {
      smooth: true,
    },
    tablet: {
      smooth: true,
    },
  };
  const artists = [
    "AnthonyAzekwoh2",
    "AnthonyAzekwoh",

    "aok_vii",
    "Arclighttt",
    "arrestingyellow",

    "ChukwuAdaeze",
    "chukwuadaeze_",
    "bad_oats",
    "bolusowoolu",
    "castroadefisayo",
    "ChidimmaNwafor_",
    "akachinonyerem_",
    "Akanevans13",
    "AkpomedayeT",
    "Anjoladave",
    "Anny_Inferno",
    "ArtObosa_",
    "artofnuel",
    "art_by_jacinta",
    "Asamaiige",
    "avatarbmb",

    "Chiebuniem_",
    "ChigozieObi_",
    "ChisaLinto",
    "ayoguofficial",

    "Delkrapht",
    "deoluphotograph",
    "Desss_chiiii",
    "drealstephen",
    "011FO110",
    "1Segun1",
    "24kstxxz",
    "9GreenRats",
    "AdjoaFaakye",
    "Adxnna",
    "afrogodd",
    "dumsurfer88",
    "F7nOswRWgAA3IoQ",
    "F7ohRnoXMAAvJsG",
    "fadeadefolalu",
    "fatileee",
    "freddiejacobart",
    "fuckinghelloyin",
    "gangster__B",
    "grizzygrae",
    "huesofgigi",
    "iamrenike",
    "iamrenike2",
    "idrisanjola",
    "imanie",
    "imit0r",
    "Im_Aishat",
    "Isiomah2",
    "Jekeinism",
    "jisticslawal",
    "khay_szn",
    "kosithecreator",
    "kunle_paints",
    "Looooohiiiii",
    "Lucynder_",
    "LUDA_JOSH",
    "mallyxl",
    "miprox_",
    "mister_gamal",
    "moboxx___",
    "Mohd_Sodq",
    "NengusArts",
    "NenjiKami",
    "nkfrom04",
    "obohdraws",
    "OhabTBJ",
    "OlaAgunbiade",
    "olaoluart",
    "Olutoyosi_",
    "Omoteniola_",
    "Powellgraham5",
    "Prescribed_FOB",
    "Romigenic",
    "SamuelOlowomeye",
    "slimmwrites",
    "Strixme",
    "Strixme_2",
    "theartist_Nicol",
    "therisinggemini",
    "the_Kingtesh",
    "TOBYDPHOTOGRAPH",
    "Tolu__c",
    "UfotUbon",
    "ukay_gold",
    "umiamara",
    "Xeunbadejo",
    "Yinkore_",
    "zomvilien",
    "_AdewaleMayowa",
    "_Dvrmvc",
    "_eunice_ukamaka",
    "_taiwolasisi",
    "_vickson_",
  ];
  return (
    <LocomotiveScrollProvider options={options} containerRef={ref}>
      <main data-scroll-container ref={ref}>
        <header className="text-[5rem] text-white font-mono">
          nigerian artistes
        </header>
        <div className="flex flex-col lg:flex-row max-w-[100vw]">
          <div className="flex-1">
            {artists.map(
              (artiste, index) =>
                index % 2 === 0 && <Image key={index} artist={artiste} />
            )}
          </div>
          <div className="flex-1">
            {artists.map(
              (artiste, index) =>
                index % 2 !== 0 && <Image key={index} artist={artiste} />
            )}
          </div>
        </div>
      </main>
    </LocomotiveScrollProvider>
  );
};

export default App;
