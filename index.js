const express = require('express');
const app = express();
const PORT = 8080;


const stegen = "https://www.fcbarcelona.com/photo-resources/2022/07/01/7788f3eb-6769-4e8c-9270-745b379ad9bf/ter_stegen.png?width=670&height=790";
const peña = "https://www.fcbarcelona.com/photo-resources/2022/08/02/fb7d77ce-a2ca-4b0b-a78f-4b9dcfc63f51/inaki_pena.png?width=670&height=790";

const dest = "https://www.fcbarcelona.com/photo-resources/2022/07/01/4f633d67-3ba0-4207-a62d-2828d3c6c311/dest.png?width=670&height=790";
const pique = "https://www.fcbarcelona.com/photo-resources/2022/07/01/74a12d82-ffbb-443f-812a-14344ef974d5/pique.png?width=670&height=790";
const araujo = "https://www.fcbarcelona.com/photo-resources/2022/07/01/5e7ec920-d018-41e8-b783-9990cd53fc78/araujo.png?width=670&height=790";
const alba = "https://www.fcbarcelona.com/photo-resources/2022/07/01/525076ed-ed92-4fdd-8736-4a4b92085fa8/jordi-alba.png?width=670&height=790";
const eric = "https://www.fcbarcelona.com/photo-resources/2022/07/01/6b8b46d6-f198-4461-9dd3-b9856ac68e81/eric.png?width=670&height=790";
const christensen = "https://www.fcbarcelona.com/photo-resources/2022/07/12/d57dea25-70aa-4f67-be5c-99a1187bc231/christensen-copia.png?width=670&height=790";
const kounde = "https://www.fcbarcelona.com/photo-resources/2022/08/02/6fa62992-a2c3-4db8-be4b-33aeadd5107f/kounde.png?width=670&height=790";
const alonso = "https://pbs.twimg.com/media/FRneLW6X0AA4qKb.jpg:large";
const foyth = "https://pbs.twimg.com/media/FaSaT6ZX0AEVWQL.jpg:small";
const roberto = "https://www.fcbarcelona.com/photo-resources/2022/07/01/3a445166-0bc6-4b48-8ce8-1da5c8eb3a7d/s.-roberto.png?width=670&height=790";

const pedri = "https://www.fcbarcelona.com/photo-resources/2022/07/01/6c5b1089-95a7-4599-bb04-c91235363747/pedri.png?width=670&height=790";
const frenkie = "https://www.fcbarcelona.com/photo-resources/2022/07/01/1c44f8dd-2de6-4f10-9f5b-2d3b93c62f5b/frenkie.png?width=670&height=790";
const kessie = "https://www.fcbarcelona.com/photo-resources/2022/07/07/d7319120-a654-422f-8d87-52ab2edd00c7/kessie.png?width=670&height=790";
const pjanic = "https://www.fcbarcelona.com/photo-resources/2022/08/02/0924372e-4014-435c-aabe-509db03d6396/pjanic.png?width=670&height=790";
const sergio = "https://www.fcbarcelona.com/photo-resources/2022/07/01/74678079-46a6-4e71-9888-a5e191bdc0c8/sergio.png?width=670&height=790";
const bernardo = "https://o.remove.bg/downloads/c8f587b1-ad8b-4f52-a493-9767b84ae2b4/FZt1iH4WAAApVoO-removebg-preview.png";
const torre = "https://pbs.twimg.com/media/FTtL_CDWYAUXgPJ.jpg:large";
const gavi = "https://assets.laliga.com/squad/2022/t178/p500046/1024x1113/p500046_t178_2022_0_001_000.png";

const dembele = "https://www.fcbarcelona.com/photo-resources/2022/07/18/17bbc66d-9494-40c2-87bf-0659d2fecfaf/DEMBELE.png?width=670&height=790";
const ansu = "https://www.fcbarcelona.com/photo-resources/2022/07/01/7cfd0ddd-2b61-4f3b-a235-ede3dd1838f7/ansu.png?width=670&height=790";
const ferran = "https://www.fcbarcelona.com/photo-resources/2022/07/01/5bc2d0c9-3de0-4c56-832d-9e40abfb0ed3/ferrann-torres.png?width=670&height=790";
const raphina = "https://www.fcbarcelona.com/photo-resources/2022/07/24/4089f82c-191e-499f-ac63-84eadeeb853e/raphinha.png?width=670&height=790";
const Lewandowski = "https://images.mediotiempo.com/yBthRmHVDRTB_eS9KsadB8rlAeg=/936x566/uploads/media/2022/07/23/robert-lewandowski-fcbarcelona-es.jpg";



app.listen(
    PORT,
    () => console.log(`FC Barcelona API is alive on port ${PORT}`)
)


app.get('/players', (req, res) => {
    res.status(200).send({
        year: 2022,
        player_number: 27,
        squad: {
            keepers:{
                Marc_André_ter_Stegen: {
                    name: 'Marc-André ter Stegen',
                    nationality: '🇩🇪 Germany',
                    image: stegen,
                    weigth: '85kg',
                    heigth: '187cm',
                    dateOfBird: '30/04/1992',
                    number: 1,
                    FCB_debut: '17/09/2014',
                    FCB_apparences: 328,
                    FCB_cleanshets: 122,
                    FCB_saves: 768
                },
                Iñaki_Peña: {
                    name: 'Iñaki Peña',
                    nationality: '🇪🇸 Spain',
                    image: peña,
                    weigth: '78kg',
                    heigth: '184cm',
                    dateOfBird: '02/03/1999',
                    number: "Not get",
                    FCB_debut: "Not Get",
                    FCB_apparences: 0,
                    FCB_cleanshets: 0,
                    FCB_saves: 0
                },
            },
            Defenders: {
                Dest: {
                    name: 'Sergiño Dest',
                    image: dest,
                    nationality: '🇺🇸 Usa',
                    weigth: '62kg',
                    heigth: '175cm',
                    dateOfBird: '03/11/2000',
                    number: 2,
                    FCB_goals: 3,
                    FCB_assists: 4,
                    FCB_debut: '04/10/2020',
                    FCB_apparences: 72,
                },
                Piqué: {
                    name: 'Gerard Piqué',
                    nationality: '🇪🇸 Spain',
                    image: pique,
                    weigth: '85kg',
                    heigth: '194cm',
                    dateOfBird: '02/02/1987',
                    number: 3,
                    FCB_goals: 52,
                    FCB_assists: 7,
                    FCB_debut: '13/08/2008',
                    FCB_apparences: 606,
                },
                Araújo: {
                    name: 'Ronald Araújo',
                    nationality: '🇺🇾 Uruguay',
                    image: araujo,
                    weigth: '79kg',
                    heigth: '188cm',
                    dateOfBird: '07/03/1999',
                    number: 4,
                    FCB_goals: 6,
                    FCB_assists: 1,
                    FCB_debut: '06/10/2019',
                    FCB_apparences: 83,
                },
                Alba: {
                    name: 'Jordi Alba',
                    nationality: '🇪🇸 Spain',
                    image: alba,
                    weigth: '68kg',
                    heigth: '170cm',
                    dateOfBird: '21/03/1989',
                    number: 18,
                    FCB_goals: 25,
                    FCB_assists: 85,
                    FCB_debut: '19/08/2012',
                    FCB_apparences: 429,
                },
                Eric: {
                    name: 'Eric García',
                    nationality: '🇪🇸 Spain',
                    image: alba,
                    weigth: '76kg',
                    heigth: '182cm',
                    dateOfBird: '09/01/2001',
                    number: 24,
                    FCB_goals: 0,
                    FCB_assists: 0,
                    FCB_debut: '15/08/2021',
                    FCB_apparences: 37,
                },
                Christensen: {
                    name: 'Andreas Christensen',
                    nationality: '🇩🇰 Denmark',
                    image: christensen,
                    weigth: '82kg',
                    heigth: '187cm',
                    dateOfBird: '10/04/1996',
                    number: 15,
                    FCB_goals: 0,
                    FCB_assists: 0,
                    FCB_debut: '13/08/2022',
                    FCB_apparences: 1,
                },
                Kounde: {
                    name: 'Jules Kounde',
                    nationality: '🇫🇷 France',
                    image: kounde,
                    weigth: '70kg',
                    heigth: '178cm',
                    dateOfBird: '12/11/1998',
                    number: 23,
                    FCB_goals: 0,
                    FCB_assists: 0,
                    FCB_debut: 'not yet',
                    FCB_apparences: 0,
                },
                Alonso: {
                    name: 'Marcos Alonso',
                    nationality: '🇪🇸 Spain',
                    image: alonso,
                    weigth: '76kg',
                    heigth: '178cm',
                    dateOfBird: '09/01/1991',
                    number: 19,
                    FCB_goals: 0,
                    FCB_assists: 0,
                    FCB_debut: 'not yet',
                    FCB_apparences: 0,
                },
                Foyth: {
                    name: 'Juan Foyth',
                    nationality: '🇦🇷 Argentina',
                    image: alonso,
                    weigth: '76kg',
                    heigth: '178cm',
                    dateOfBird: '09/01/2000',
                    number: 14,
                    FCB_goals: 0,
                    FCB_assists: 0,
                    FCB_debut: 'not yet',
                    FCB_apparences: 0,
                },
                Roberto: {
                    name: 'Sergi Roberto',
                    nationality: '🇪🇸 Spain',
                    image: roberto,
                    weigth: '68kg',
                    heigth: '170cm',
                    dateOfBird: '07/02/1992',
                    number: 20,
                    FCB_goals: 12,
                    FCB_assists: 37,
                    FCB_debut: '10/11/2010',
                    FCB_apparences: 317,
                },
            },
            Midfielders: {
                Pedri: {
                    name: 'Pedri',
                    nationality: '🇪🇸 Spain',
                    image: pedri,
                    weigth: '60kg',
                    heigth: '174cm',
                    dateOfBird: '25/11/2002',
                    number: 8,
                    FCB_goals: 9,
                    FCB_assists: 7,
                    FCB_debut: '27/09/2020',
                    FCB_apparences: 75,
                },
                Frenkie: {
                    name: 'Frenkie de Jong',
                    nationality: '🇳🇱 Netherlands',
                    image: frenkie,
                    weigth: '74kg',
                    heigth: '180cm',
                    dateOfBird: '12/05/1997',
                    number: 21,
                    FCB_goals: 13,
                    FCB_assists: 15,
                    FCB_debut: '16/08/2019',
                    FCB_apparences: 141,
                },
                Kessié: {
                    name: 'Franck Kessié',
                    nationality: '🇨🇮 Ivory Coast',
                    image: kessie,
                    weigth: '74kg',
                    heigth: '183cm',
                    dateOfBird: '19/12/1996',
                    number: 'to be defined',
                    FCB_goals: 0,
                    FCB_assists: 0,
                    FCB_debut: '13/08/2022',
                    FCB_apparences: 1,
                },
                Pjanic: {
                    name: 'Miralem Pjanic',
                    nationality: '🇧🇦 Bosnia & Herzegovina',
                    image: pjanic,
                    weigth: '74kg',
                    heigth: '183cm',
                    dateOfBird: '02/04/1990',
                    number: 'to be defined',
                    FCB_goals: 0,
                    FCB_assists: 0,
                    FCB_debut: '13/08/2020',
                    FCB_apparences: 30,
                },
                Busquets: {
                    name: 'Sergio Busquets',
                    nationality: '🇪🇸 Spain',
                    image: sergio,
                    weigth: '76kg',
                    heigth: '189cm',
                    dateOfBird: '16/07/1988',
                    number: '5',
                    FCB_goals: 18,
                    FCB_assists: 36,
                    FCB_debut: '13/09/2008',
                    FCB_apparences: 682,
                },
                Bernardo: {
                    name: 'Bernardo Silva',
                    nationality: '🇵🇹 Portugal',
                    image: bernardo,
                    weigth: '64kg',
                    heigth: '177cm',
                    dateOfBird: '12/05/1996',
                    number: 'to be defined',
                    FCB_goals: 0,
                    FCB_assists: 0,
                    FCB_debut: 'not yet',
                    FCB_apparences: 0,
                },
                Torre: {
                    name: 'Pablo Torre',
                    nationality: '🇪🇸 Spain',
                    image: torre,
                    weigth: '60kg',
                    heigth: '174cm',
                    dateOfBird: '25/11/2002',
                    number: 'not yet',
                    FCB_goals: 0,
                    FCB_assists: 0,
                    FCB_debut: 'not yet',
                    FCB_apparences: 0,
                },
                Gavi: {
                    name: 'Gavi',
                    nationality: '🇪🇸 Spain',
                    image: gavi,
                    weigth: '60kg',
                    heigth: '174cm',
                    dateOfBird: '25/11/2004',
                    number: 30,
                    FCB_goals: 3,
                    FCB_assists: 7,
                    FCB_debut: '13/09/2021',
                    FCB_apparences: 35,
                },

            },
            Forwards: {
                Dembélé: {
                    name: 'Ousmane Dembélé',
                    nationality: '🇫🇷 France',
                    image: dembele,
                    weigth: '67kg',
                    heigth: '178cm',
                    dateOfBird: '15/05/1997',
                    number: 7,
                    FCB_goals: 32,
                    FCB_assists: 33,
                    FCB_debut: '09/09/2017',
                    FCB_apparences: 151,
                },
                Ansu: {
                    name: 'Ansu Fati',
                    nationality: '🇪🇸 Spain',
                    image: ansu,
                    weigth: '66kg',
                    heigth: '178cm',
                    dateOfBird: '31/10/2002',
                    number: 10,
                    FCB_goals: 19,
                    FCB_assists: 3,
                    FCB_debut: '25/08/2019',
                    FCB_apparences: 59,
                },
                Ferran: {
                    name: 'Ferran Torres',
                    nationality: '🇪🇸 Spain',
                    image: ferran,
                    weigth: '77kg',
                    heigth: '184cm',
                    dateOfBird: '29/02/2000',
                    number: 11,
                    FCB_goals: 7,
                    FCB_assists: 6,
                    FCB_debut: '12/01/2022',
                    FCB_apparences: 26,
                },
                Raphinha: {
                    name: 'Raphinha',
                    nationality: '🇧🇷 Brazil',
                    image: raphina,
                    weigth: '68kg',
                    heigth: '176cm',
                    dateOfBird: '25/11/2002',
                    number: '22',
                    FCB_goals: 0,
                    FCB_assists: 0,
                    FCB_debut: '13/9/2022',
                    FCB_apparences: 1,
                },
                Lewandowski: {
                    name: 'Robert Lewandowski',
                    nationality: '🇵🇱 Poland',
                    image: Lewandowski,
                    weigth: '81kg',
                    heigth: '185cm',
                    dateOfBird: '21/08/1988',
                    number: '22',
                    FCB_goals: 0,
                    FCB_assists: 0,
                    FCB_debut: '13/9/2022',
                    FCB_apparences: 1,
                },
                Coaching_Staff: {
                    Xavi: {
                        nationality: '🇪🇸 Spain',
                        dateOfBird: '25/01/1980'
                    },
                    assistantCoach: "ÒSCAR HERNÁNDEZ",
                    assistantCoach: "SERGIO ALEGRE",
                    fitnessCoach: "IVÁN TORRES",
                    goalKeppingCoach: "JOSÉ RAMÓN DE LA FUENTE",
                    analyst: "SERGIO GARCIA, TONI LOBO & DAVID PRATS"
                }
            }
        }
    })
})

const data = {
    year: 2022,
    player_number: 27,
    squad: {
        keepers:{
            Marc_André_ter_Stegen: {
                name: 'Marc-André ter Stegen',
                nationality: '🇩🇪 Germany',
                image: stegen,
                weigth: '85kg',
                heigth: '187cm',
                dateOfBird: '30/04/1992',
                number: 1,
                FCB_debut: '17/09/2014',
                FCB_apparences: 328,
                FCB_cleanshets: 122,
                FCB_saves: 768
            },
            Iñaki_Peña: {
                name: 'Iñaki Peña',
                nationality: '🇪🇸 Spain',
                image: peña,
                weigth: '78kg',
                heigth: '184cm',
                dateOfBird: '02/03/1999',
                number: "Not get",
                FCB_debut: "Not Get",
                FCB_apparences: 0,
                FCB_cleanshets: 0,
                FCB_saves: 0
            },
        },
        Defenders: {
            Dest: {
                name: 'Sergiño Dest',
                image: dest,
                nationality: '🇺🇸 Usa',
                weigth: '62kg',
                heigth: '175cm',
                dateOfBird: '03/11/2000',
                number: 2,
                FCB_goals: 3,
                FCB_assists: 4,
                FCB_debut: '04/10/2020',
                FCB_apparences: 72,
            },
            Piqué: {
                name: 'Gerard Piqué',
                nationality: '🇪🇸 Spain',
                image: pique,
                weigth: '85kg',
                heigth: '194cm',
                dateOfBird: '02/02/1987',
                number: 3,
                FCB_goals: 52,
                FCB_assists: 7,
                FCB_debut: '13/08/2008',
                FCB_apparences: 606,
            },
            Araújo: {
                name: 'Ronald Araújo',
                nationality: '🇺🇾 Uruguay',
                image: araujo,
                weigth: '79kg',
                heigth: '188cm',
                dateOfBird: '07/03/1999',
                number: 4,
                FCB_goals: 6,
                FCB_assists: 1,
                FCB_debut: '06/10/2019',
                FCB_apparences: 83,
            },
            Alba: {
                name: 'Jordi Alba',
                nationality: '🇪🇸 Spain',
                image: alba,
                weigth: '68kg',
                heigth: '170cm',
                dateOfBird: '21/03/1989',
                number: 18,
                FCB_goals: 25,
                FCB_assists: 85,
                FCB_debut: '19/08/2012',
                FCB_apparences: 429,
            },
            Eric: {
                name: 'Eric García',
                nationality: '🇪🇸 Spain',
                image: alba,
                weigth: '76kg',
                heigth: '182cm',
                dateOfBird: '09/01/2001',
                number: 24,
                FCB_goals: 0,
                FCB_assists: 0,
                FCB_debut: '15/08/2021',
                FCB_apparences: 37,
            },
            Christensen: {
                name: 'Andreas Christensen',
                nationality: '🇩🇰 Denmark',
                image: christensen,
                weigth: '82kg',
                heigth: '187cm',
                dateOfBird: '10/04/1996',
                number: 15,
                FCB_goals: 0,
                FCB_assists: 0,
                FCB_debut: '13/08/2022',
                FCB_apparences: 1,
            },
            Kounde: {
                name: 'Jules Kounde',
                nationality: '🇫🇷 France',
                image: kounde,
                weigth: '70kg',
                heigth: '178cm',
                dateOfBird: '12/11/1998',
                number: 23,
                FCB_goals: 0,
                FCB_assists: 0,
                FCB_debut: 'not yet',
                FCB_apparences: 0,
            },
            Alonso: {
                name: 'Marcos Alonso',
                nationality: '🇪🇸 Spain',
                image: alonso,
                weigth: '76kg',
                heigth: '178cm',
                dateOfBird: '09/01/1991',
                number: 19,
                FCB_goals: 0,
                FCB_assists: 0,
                FCB_debut: 'not yet',
                FCB_apparences: 0,
            },
            Foyth: {
                name: 'Juan Foyth',
                nationality: '🇦🇷 Argentina',
                image: alonso,
                weigth: '76kg',
                heigth: '178cm',
                dateOfBird: '09/01/2000',
                number: 14,
                FCB_goals: 0,
                FCB_assists: 0,
                FCB_debut: 'not yet',
                FCB_apparences: 0,
            },
            Roberto: {
                name: 'Sergi Roberto',
                nationality: '🇪🇸 Spain',
                image: roberto,
                weigth: '68kg',
                heigth: '170cm',
                dateOfBird: '07/02/1992',
                number: 20,
                FCB_goals: 12,
                FCB_assists: 37,
                FCB_debut: '10/11/2010',
                FCB_apparences: 317,
            },
        },
        Midfielders: {
            Pedri: {
                name: 'Pedri',
                nationality: '🇪🇸 Spain',
                image: pedri,
                weigth: '60kg',
                heigth: '174cm',
                dateOfBird: '25/11/2002',
                number: 8,
                FCB_goals: 9,
                FCB_assists: 7,
                FCB_debut: '27/09/2020',
                FCB_apparences: 75,
            },
            Frenkie: {
                name: 'Frenkie de Jong',
                nationality: '🇳🇱 Netherlands',
                image: frenkie,
                weigth: '74kg',
                heigth: '180cm',
                dateOfBird: '12/05/1997',
                number: 21,
                FCB_goals: 13,
                FCB_assists: 15,
                FCB_debut: '16/08/2019',
                FCB_apparences: 141,
            },
            Kessié: {
                name: 'Franck Kessié',
                nationality: '🇨🇮 Ivory Coast',
                image: kessie,
                weigth: '74kg',
                heigth: '183cm',
                dateOfBird: '19/12/1996',
                number: 'to be defined',
                FCB_goals: 0,
                FCB_assists: 0,
                FCB_debut: '13/08/2022',
                FCB_apparences: 1,
            },
            Pjanic: {
                name: 'Miralem Pjanic',
                nationality: '🇧🇦 Bosnia & Herzegovina',
                image: pjanic,
                weigth: '74kg',
                heigth: '183cm',
                dateOfBird: '02/04/1990',
                number: 'to be defined',
                FCB_goals: 0,
                FCB_assists: 0,
                FCB_debut: '13/08/2020',
                FCB_apparences: 30,
            },
            Busquets: {
                name: 'Sergio Busquets',
                nationality: '🇪🇸 Spain',
                image: sergio,
                weigth: '76kg',
                heigth: '189cm',
                dateOfBird: '16/07/1988',
                number: '5',
                FCB_goals: 18,
                FCB_assists: 36,
                FCB_debut: '13/09/2008',
                FCB_apparences: 682,
            },
            Bernardo: {
                name: 'Bernardo Silva',
                nationality: '🇵🇹 Portugal',
                image: bernardo,
                weigth: '64kg',
                heigth: '177cm',
                dateOfBird: '12/05/1996',
                number: 'to be defined',
                FCB_goals: 0,
                FCB_assists: 0,
                FCB_debut: 'not yet',
                FCB_apparences: 0,
            },
            Torre: {
                name: 'Pablo Torre',
                nationality: '🇪🇸 Spain',
                image: torre,
                weigth: '60kg',
                heigth: '174cm',
                dateOfBird: '25/11/2002',
                number: 'not yet',
                FCB_goals: 0,
                FCB_assists: 0,
                FCB_debut: 'not yet',
                FCB_apparences: 0,
            },
            Gavi: {
                name: 'Gavi',
                nationality: '🇪🇸 Spain',
                image: gavi,
                weigth: '60kg',
                heigth: '174cm',
                dateOfBird: '25/11/2004',
                number: 30,
                FCB_goals: 3,
                FCB_assists: 7,
                FCB_debut: '13/09/2021',
                FCB_apparences: 35,
            },

        },
        Forwards: {
            Dembélé: {
                name: 'Ousmane Dembélé',
                nationality: '🇫🇷 France',
                image: dembele,
                weigth: '67kg',
                heigth: '178cm',
                dateOfBird: '15/05/1997',
                number: 7,
                FCB_goals: 32,
                FCB_assists: 33,
                FCB_debut: '09/09/2017',
                FCB_apparences: 151,
            },
            Ansu: {
                name: 'Ansu Fati',
                nationality: '🇪🇸 Spain',
                image: ansu,
                weigth: '66kg',
                heigth: '178cm',
                dateOfBird: '31/10/2002',
                number: 10,
                FCB_goals: 19,
                FCB_assists: 3,
                FCB_debut: '25/08/2019',
                FCB_apparences: 59,
            },
            Ferran: {
                name: 'Ferran Torres',
                nationality: '🇪🇸 Spain',
                image: ferran,
                weigth: '77kg',
                heigth: '184cm',
                dateOfBird: '29/02/2000',
                number: 11,
                FCB_goals: 7,
                FCB_assists: 6,
                FCB_debut: '12/01/2022',
                FCB_apparences: 26,
            },
            Raphinha: {
                name: 'Raphinha',
                nationality: '🇧🇷 Brazil',
                image: raphina,
                weigth: '68kg',
                heigth: '176cm',
                dateOfBird: '25/11/2002',
                number: '22',
                FCB_goals: 0,
                FCB_assists: 0,
                FCB_debut: '13/9/2022',
                FCB_apparences: 1,
            },
            Lewandowski: {
                name: 'Robert Lewandowski',
                nationality: '🇵🇱 Poland',
                image: Lewandowski,
                weigth: '81kg',
                heigth: '185cm',
                dateOfBird: '21/08/1988',
                number: '22',
                FCB_goals: 0,
                FCB_assists: 0,
                FCB_debut: '13/9/2022',
                FCB_apparences: 1,
            },
            Coaching_Staff: {
                Xavi: {
                    nationality: '🇪🇸 Spain',
                    dateOfBird: '25/01/1980'
                },
                assistantCoach: "ÒSCAR HERNÁNDEZ",
                assistantCoach: "SERGIO ALEGRE",
                fitnessCoach: "IVÁN TORRES",
                goalKeppingCoach: "JOSÉ RAMÓN DE LA FUENTE",
                analyst: "SERGIO GARCIA, TONI LOBO & DAVID PRATS"
            }
        }
    },
}
