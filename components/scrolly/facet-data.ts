export type Facet = {
  id: string;
  index: string; // "01"
  kicker: string;
  title: string;
  body: string[];
  note?: string;
  image: {
    src: string;
    alt: string;
  };
};

export const FACETS: Facet[] = [
  {
    id: "postava",
    index: "01",
    kicker: "Postava",
    title: "Terasa okrenuta prema rivi",
    body: [
      "Konoba Mediterano stoji na Obali Vladimira Nazora, na glavnoj vodičkoj rivi, korak od mandrača i gatova gdje se čamci ljuljaju cijeli dan.",
      "Stolovi su okrenuti prema moru — jedna strana gleda na promenadu i vrevu ljeta, druga na jarbole i večernje svjetlo koje puca po vodi.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1775153014001-e48a378ea850?auto=format&fit=crop&w=1600&q=80",
      alt: "Čamci privezani u luci u sumrak, tipična dalmatinska rivijera",
    },
  },
  {
    id: "kuhinja",
    index: "02",
    kicker: "Kuhinja",
    title: "Što more donese, to je na tanjuru",
    body: [
      "Ponuda se mijenja s ulovom. Kuhinja surađuje izravno s lokalnim ribarima — riba i školjke stižu isti dan kad su izvađene iz mora, bez zaobilaznih puteva.",
      "Uz svježu ribu, na jelovniku je i pošteno mjesto za goste koji ne jedu meso ni ribu — vegetarijanske i veganske opcije nisu naknadna misao, nego stalna stavka.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1619951873635-513b56e7d52b?auto=format&fit=crop&w=1600&q=80",
      alt: "Svježa riba iz dnevnog ulova na drvenoj polici",
    },
  },
  {
    id: "jelo-dana",
    index: "03",
    kicker: "Jelo koje pamte",
    title: "Lignje s roštilja, prve na popisu",
    body: [
      "Gosti se u recenzijama najčešće vraćaju na isto jelo: lignje s roštilja, jednostavno pripremljene, bez viška, ocjenjuju najvišim ocjenama.",
      "Odmah iza njih slijede špageti sa plodovima mora — gosti ih opisuju kao najbolju verziju koju su probali na cijeloj rivijeri — i salata od hobotnice kao stalni pratitelj stola.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1565878026031-b79b3c9baf01?auto=format&fit=crop&w=1600&q=80",
      alt: "Lignje s roštilja na bijelom tanjuru",
    },
  },
  {
    id: "stol-vino",
    index: "04",
    kicker: "Stol i vino",
    title: "Vinska karta uz miris mora",
    body: [
      "Kratka, pažljivo sastavljena vinska karta prati more na tanjuru — domaća bijela vina uz školjke i ribu, poneki crni rižoto uz teže etikete.",
      "Obitelji s djecom nisu iznimka nego pravilo: porcije su poštene, cijene fer, a osoblje jednako pažljivo prema stolu za dvoje i stolu za šestero.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1707296814743-2e08aff032f2?auto=format&fit=crop&w=1600&q=80",
      alt: "Čaše vina na stolu uz more",
    },
  },
  {
    id: "vecer",
    index: "05",
    kicker: "Večer na rivi",
    title: "Od deset ujutro do dva u noći",
    body: [
      "Konoba radi svaki dan, od jutarnje kave do kasne večere — rijedak raspon koji dopušta i brzi ručak s plaže i dugu večeru pod svjetlima marine.",
      "Konobari su prisutni, ali nikad nametljivi — gosti to prepoznaju kao razliku između mjesta koje žuri i mjesta koje računa da ćete se vratiti.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1778694276945-a3ee92331709?auto=format&fit=crop&w=1600&q=80",
      alt: "Stol postavljen za večeru uz zalazak sunca nad morem",
    },
  },
];
