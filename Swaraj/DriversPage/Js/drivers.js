const Drivers = [
  {
    name: "MAX",
    club: "VERSTAPPEN",
    flag: "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/Netherlands.jpg.transform/2col/image.jpg",
    car: "Red Bull Racing",
    number:
      "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/MAXVER01.png.transform/2col/image.png",
    image:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col/image.png",
    border: "#3671C6",
  },
  {
    name: "SERGIO",
    club: "PEREZ",
    flag: "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/Mexico.jpg.transform/2col/image.jpg",
    car: "Red Bull Racing",
    number:
      "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/SERPER01.png.transform/2col/image.png",
    image:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/2col/image.png",
    border: "#3671C6",
  },
  {
    name: "GEORGE",
    club: "RUSELL",
    flag: "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/United%20Kingdom.jpg.transform/2col/image.jpg",
    car: "Mercedes",
    number:
      "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/GEORUS01.png.transform/2col/image.png",
    image:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/2col/image.png",
    border: "#6CD3BF",
  },
  {
    name: "LEWIS",
    club: "HAMILTON",
    flag: "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/United%20Kingdom.jpg.transform/2col/image.jpg",
    car: "Mercedes",
    number:
      "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/LEWHAM01.png.transform/2col/image.png",
    image:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/2col/image.png",
    border: "#6CD3BF",
  },
  {
    name: "CHARLES",
    club: "LECLERC",
    flag: "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/Monaco.jpg.transform/2col/image.jpg",
    car: "Ferrari",
    number:
      "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/CHALEC01.png.transform/2col/image.png",
    image:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col/image.png",
    border: "#F91536",
  },
  {
    name: "CARLOS",
    club: "SAINZ",
    flag: "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/Spain.jpg.transform/2col/image.jpg",
    car: "Ferrari",
    number:
      "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/CARSAI01.png.transform/2col/image.png",
    image:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/2col/image.png",
    border: "#F91536",
  },
  {
    name: "OSCAR",
    club: "PIASTRI",
    flag: "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/Australia.jpg.transform/2col/image.jpg",
    car: "McLaren",
    number:
      "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/OSCPIA01.png.transform/2col/image.png",
    image:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png.transform/2col/image.png",
    border: "#F58020",
  },
  {
    name: "LANDO",
    club: "NORIS",
    flag: "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/United%20Kingdom.jpg.transform/2col/image.jpg",
    car: "McLaren",
    number:
      "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/LANNOR01.png.transform/2col/image.png",
    image:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/2col/image.png",
    border: "#F58020",
  },
  {
    name: "LANCE",
    club: "STROLL",
    flag: "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/Canada.jpg.transform/2col/image.jpg",
    car: "Aston Martin",
    number:
      "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/LANSTR01.png.transform/2col/image.png",
    image:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png.transform/2col/image.png",
    border: "#358C75",
  },
  {
    name: "FERNANDO",
    club: "ALONSO",
    flag: "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/Spain.jpg.transform/2col/image.jpg",
    car: "Aston Martin",
    number:
      "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/FERALO01.png.transform/2col/image.png",
    image:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png.transform/2col/image.png",
    border: "#358C75",
  },
  {
    name: "ESTEBAN",
    club: "OCON",
    flag: "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/France.jpg.transform/2col/image.jpg",
    car: "Alpine",
    number:
      "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/ESTOCO01.png.transform/2col/image.png",
    image:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png.transform/2col/image.png",
    border: "#2293D1",
  },
  {
    name: "PIERRE",
    club: "GASLY",
    flag: "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/France.jpg.transform/2col/image.jpg",
    car: "Alpine",
    number:
      "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/PIEGAS01.png.transform/2col/image.png",
    image:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png.transform/2col/image.png",
    border: "#2293D1",
  },
  {
    name: "ALEXANDER",
    club: "ALBON",
    flag: "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/Thailand.jpg.transform/2col/image.jpg",
    car: "Williams",
    number:
      "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/ALEALB01.png.transform/2col/image.png",
    image:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png.transform/2col/image.png",
    border: "#37BEDD",
  },
  {
    name: "LOGAN",
    club: "SERGEANT",
    flag: "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/United%20States.jpg.transform/2col/image.jpg",
    car: "Williams",
    number:
      "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/LOGSAR01.png.transform/2col/image.png",
    image:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LOGSAR01_Logan_Sargeant/logsar01.png.transform/2col/image.png",
    border: "#37BEDD",
  },
  {
    name: "DANIEL",
    club: "RICCIARDO",
    flag: "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/Australia.jpg.transform/2col/image.jpg",
    car: "RB",
    number:
      "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/DANRIC01.png.transform/2col/image.png",
    image:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/D/DANRIC01_Daniel_Ricciardo/danric01.png.transform/2col/image.png",
    border: "#5E8FAA",
  },
  {
    name: "YUKI",
    club: "TSUNODA",
    flag: "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/Japan.jpg.transform/2col/image.jpg",
    car: "RB",
    number:
      "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/YUKTSU01.png.transform/2col/image.png",
    image:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png.transform/2col/image.png",
    border: "#5E8FAA",
  },
  {
    name: "VALTTERI",
    club: "BOTTAS",
    flag: "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/Finland.jpg.transform/2col/image.jpg",
    car: "Kick Sauber",
    number:
      "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/VALBOT01.png.transform/2col/image.png",
    image:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png.transform/2col/image.png",
    border: "#00E701",
  },
  {
    name: "ZHOU",
    club: "GUANYA",
    flag: "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/China.jpg.transform/2col/image.jpg",
    car: "Kick Sauber",
    number:
      "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/GUAZHO01.png.transform/2col/image.png",
    image:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GUAZHO01_Guanyu_Zhou/guazho01.png.transform/2col/image.png",
    border: "#00E701",
  },
  {
    name: "KEVIN",
    club: "MAGNUSSEN",
    flag: "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/Denmark.jpg.transform/2col/image.jpg",
    car: "Hass F1 Team",
    number:
      "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/KEVMAG01.png.transform/2col/image.png",
    image:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/K/KEVMAG01_Kevin_Magnussen/kevmag01.png.transform/2col/image.png",
    border: "#B6BABD",
  },
  {
    name: "NICO",
    club: "HULKENBERG",
    flag: "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/Germany.jpg.transform/2col/image.jpg",
    car: "Hass F1 Team",
    number:
      "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/NICHUL01.png.transform/2col/image.png",
    image:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png.transform/2col/image.png",
    border: "#B6BABD",
  },
];

export default Drivers;
