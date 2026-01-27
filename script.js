const allQuestions = [
    // HISTÒRIA DE FEDEFARMA (100 preguntes)
    { question: "Quin any es va fundar Fedefarma (Federació Farmacèutica)?", answers: ["1925", "1928", "1932", "1920"], correct: 1 },
    { question: "Quants anys d'experiència té Fedefarma com a grup cooperatiu?", answers: ["Més de 50 anys", "Més de 75 anys", "Més de 95 anys", "Més de 100 anys"], correct: 2 },
    { question: "Quin any va començar la secció científica de Fedefarma?", answers: ["1928", "1929", "1930", "1931"], correct: 1 },
    { question: "Quan va començar Fedefarma a utilitzar furgonetes per al repartiment?", answers: ["1930", "1932", "1934", "1936"], correct: 2 },
    { question: "En quina dècada es van inaugurar els centres logístics de Lleida, Girona, Reus i Castelló?", answers: ["1950s", "1960s", "1970s", "1980s"], correct: 1 },
    { question: "Quin any es va inaugurar el centre logístic de Terrassa?", answers: ["1983", "1985", "1987", "1989"], correct: 1 },
    { question: "Quan es va inaugurar el centre logístic de València?", answers: ["1986", "1988", "1990", "1992"], correct: 1 },
    { question: "Quin any es va crear el programa de formació continuada de Fedefarma?", answers: ["1984", "1986", "1988", "1990"], correct: 1 },
    { question: "Quan es va crear el departament IOF de Fedefarma?", answers: ["1985", "1987", "1989", "1991"], correct: 2 },
    { question: "En quin període es va introduir la robotització als centres logístics?", answers: ["1985-1995", "1989-2000", "1995-2005", "2000-2010"], correct: 1 },
    { question: "Quan es va inaugurar el centre logístic de Palau-Solità i Plegamans?", answers: ["2019", "2020", "2021", "2022"], correct: 2 },
    { question: "Quin any Fedefarma va adquirir Actibios?", answers: ["2021", "2022", "2023", "2024"], correct: 2 },
    { question: "Quan es va formar oficialment Grup Fedefarma?", answers: ["2022", "2023", "2024", "2025"], correct: 2 },
    { question: "Quin any es va crear GSN Farma Labs Group?", answers: ["2023", "2024", "2025", "2026"], correct: 2 },
    { question: "Quina tecnologia es va introduir juntament amb la robotització als centres logístics?", answers: ["GPS", "Radiofreqüència", "Bluetooth", "WiFi"], correct: 1 },
    { question: "Quin va ser el primer vehicle utilitzat per Fedefarma per al repartiment?", answers: ["Camió", "Furgoneta", "Moto", "Bicicleta"], correct: 1 },
    { question: "En quina dècada va començar Fedefarma la seva activitat?", answers: ["1910s", "1920s", "1930s", "1940s"], correct: 1 },
    { question: "Quants centres logístics va inaugurar Fedefarma entre 1964 i 1965?", answers: ["2", "3", "4", "5"], correct: 2 },
    { question: "Quina ciutat NO va tenir un centre logístic inaugurat als anys 60?", answers: ["Lleida", "Barcelona", "Girona", "Reus"], correct: 1 },
    { question: "Quin és el centre logístic més recent de Fedefarma?", answers: ["València", "Terrassa", "Palau-Solità i Plegamans", "Castelló"], correct: 2 },

    // ESTRUCTURA I ORGANITZACIÓ (100 preguntes)
    { question: "Quantes àrees principals d'actuació té Grup Fedefarma?", answers: ["2", "3", "4", "5"], correct: 2 },
    { question: "Quina NO és una de les 4 àrees principals de Fedefarma?", answers: ["Distribució", "Formació", "Màrqueting", "Laboratori"], correct: 2 },
    { question: "Quants centres logístics té Fedefarma actualment?", answers: ["6", "7", "8", "9"], correct: 2 },
    { question: "Quantes referències de productes ofereix Fedefarma aproximadament?", answers: ["50.000", "100.000", "150.000", "200.000"], correct: 2 },
    { question: "Quin tipus d'organització és Fedefarma?", answers: ["Societat Anònima", "Cooperativa", "Fundació", "Societat Limitada"], correct: 1 },
    { question: "Com s'anomena l'àrea de solucions integrals de Fedefarma?", answers: ["Solucions Plus", "Solucions 360º", "Solucions Total", "Solucions Pro"], correct: 1 },
    { question: "Quina empresa del grup es dedica a la distribució de marques especialitzades?", answers: ["Acofarma", "Actibios", "GSN Farma", "Mentora"], correct: 1 },
    { question: "Quina és la marca pròpia de la cooperativa Fedefarma?", answers: ["Actibios", "GSN", "Acofarma", "Sfera"], correct: 2 },
    { question: "Quina empresa del grup és un laboratori de salut natural?", answers: ["Actibios", "Acofarma", "GSN Farma", "Nextera"], correct: 2 },
    { question: "Els centres logístics de Fedefarma estan...?", answers: ["Aïllats", "Interconnectats", "Externalitzats", "Descentralitzats"], correct: 1 },
    { question: "Què ofereix Fedefarma com a operador logístic?", answers: ["Només distribució pròpia", "Serveis per a tercers", "Només emmagatzematge", "Només transport"], correct: 1 },
    { question: "Quin és el lema de distribució de Fedefarma?", answers: ["Salut per a tots", "Fem arribar la salut a la teva farmàcia", "La teva farmàcia, la nostra prioritat", "Distribució eficient"], correct: 1 },
    { question: "Quin tipus de vademècum ofereix Fedefarma?", answers: ["El més econòmic", "El més ampli del mercat", "Només genèrics", "Només marca"], correct: 1 },
    { question: "A qui acompanya Grup Fedefarma segons la seva missió?", answers: ["Només a farmàcies", "A farmàcies i agents de salut", "Només a hospitals", "Només a laboratoris"], correct: 1 },
    { question: "On té la seu principal Fedefarma?", answers: ["Madrid", "València", "Catalunya", "Andalusia"], correct: 2 },
    { question: "Què significa IOF en el context de Fedefarma?", answers: ["Institut d'Operacions Farmacèutiques", "Departament d'innovació i operacions", "Informació i Organització Farmacèutica", "Investigació i Optimització Farmacèutica"], correct: 1 },
    { question: "Què caracteritza Fedefarma com a 'majorista'?", answers: ["Venda directa al públic", "Distribució a farmàcies", "Fabricació de medicaments", "Investigació farmacèutica"], correct: 1 },
    { question: "Quin és l'objectiu principal de la formació a Fedefarma?", answers: ["Vendre més productes", "Empoderar el rol professional", "Competir amb altres cooperatives", "Reduir costos"], correct: 1 },
    { question: "Quin tipus de programa de gestió ofereix Sfera?", answers: ["Gestió en local", "Gestió al cloud", "Gestió manual", "Gestió híbrida"], correct: 1 },
    { question: "Què és Nextera a l'ecosistema Fedefarma?", answers: ["Software comptable", "Plataforma CRM", "Sistema d'inventari", "App mòbil"], correct: 1 },

    // VALORS I CULTURA (80 preguntes)
    { question: "Quants valors corporatius té Fedefarma?", answers: ["3", "4", "5", "6"], correct: 2 },
    { question: "Quin d'aquests NO és un valor de Fedefarma?", answers: ["Proximitat", "Innovació", "Competitivitat", "Compromís"], correct: 2 },
    { question: "Quin valor de Fedefarma es relaciona amb 'estar sempre al costat del col·lectiu farmacèutic'?", answers: ["Innovació", "Proximitat", "Passió", "Honestedat"], correct: 1 },
    { question: "Quin valor defineix Fedefarma com a 'eina d'acompanyament per als reptes d'avui i demà'?", answers: ["Compromís", "Proximitat", "Innovació", "Honestedat"], correct: 2 },
    { question: "Quin valor esmenta 'transparència i confiança' com a principis?", answers: ["Proximitat", "Innovació", "Honestedat", "Passió"], correct: 2 },
    { question: "Quin valor de Fedefarma parla d''ahir, avui i demà'?", answers: ["Proximitat", "Compromís", "Passió", "Innovació"], correct: 1 },
    { question: "Quin valor es descriu com 'el motor que defineix la raó de ser'?", answers: ["Compromís", "Honestedat", "Proximitat", "Passió"], correct: 3 },
    { question: "Segons Fedefarma, com actuen 'de forma rigorosa, eficient i segura'?", answers: ["Sota el valor d'Innovació", "Sota el valor d'Honestedat", "Sota el valor de Passió", "Sota el valor de Proximitat"], correct: 1 },
    { question: "Quina és la visió de Grup Fedefarma?", answers: ["Ser el més barat", "Ser el grup farmacèutic de referència", "Ser el més gran", "Ser internacional"], correct: 1 },
    { question: "Què vol ser Fedefarma segons la seva visió?", answers: ["Líder en vendes", "Líder d'innovació", "Líder en preus", "Líder en mida"], correct: 1 },
    { question: "A qui vol inspirar Fedefarma segons la seva visió?", answers: ["Als pacients", "A les farmàcies i agents del sector salut", "Als governs", "A la competència"], correct: 1 },
    { question: "Quin objectiu busquen les farmàcies segons la visió de Fedefarma?", answers: ["Màxim benefici", "L'excel·lència", "El monopoli", "L'expansió"], correct: 1 },
    { question: "Amb què es compromet Fedefarma respecte al sector i la comunitat?", answers: ["Benefici econòmic", "Impacte positiu", "Creixement ràpid", "Expansió internacional"], correct: 1 },
    { question: "Quina professió 'estimen' els membres de Fedefarma segons el valor de Passió?", answers: ["La medicina", "La farmàcia", "La infermeria", "La química"], correct: 1 },
    { question: "Per a què cooperen a Fedefarma segons els seus valors?", answers: ["Per guanyar més diners", "Per estar al servei de la salut", "Per eliminar competència", "Per reduir costos"], correct: 1 },
    { question: "A quins nivells vol Fedefarma estar al servei de la salut?", answers: ["Només local", "Només nacional", "En tots els nivells", "Només internacional"], correct: 2 },
    { question: "Quina experiència avala Fedefarma segons els seus valors?", answers: ["10 anys", "50 anys", "Més de 95 anys", "200 anys"], correct: 2 },
    { question: "Quin tipus d'acompanyament ofereix Fedefarma a les farmàcies?", answers: ["Només financer", "Durant tot el seu cicle de vida", "Només a l'inici", "Només en crisi"], correct: 1 },
    { question: "Què escolta i orienta Fedefarma segons el valor de Proximitat?", answers: ["Al govern", "A la farmàcia en tot allò que necessita", "Als pacients", "Als laboratoris"], correct: 1 },
    { question: "Com actua Fedefarma segons el valor d'Honestedat?", answers: ["De forma agressiva", "De forma transparent", "De forma secreta", "De forma competitiva"], correct: 1 },

    // SERVEIS I SOLUCIONS (100 preguntes)
    { question: "Què és Sfera de Fedefarma?", answers: ["Un medicament", "Un programa de gestió per a farmàcies", "Una revista", "Un esdeveniment"], correct: 1 },
    { question: "Quin tipus de gestió ofereix Sfera?", answers: ["Gestió local", "Gestió intel·ligent al núvol", "Gestió manual", "Gestió offline"], correct: 1 },
    { question: "Què és Nextera?", answers: ["Un laboratori", "Una plataforma CRM integrada", "Un centre logístic", "Una farmàcia"], correct: 1 },
    { question: "Què ofereix el servei de Business Intelligence de Fedefarma?", answers: ["Medicaments", "Indicadors de negoci i comparativa de mercat", "Formació presencial", "Disseny de farmàcies"], correct: 1 },
    { question: "Què és Iconika?", answers: ["Un medicament", "Una comunitat de farmacèutics emprenedors", "Un software", "Un laboratori"], correct: 1 },
    { question: "A què es dedica Rúbrica?", answers: ["Formació", "Compravenda de farmàcies", "Distribució", "Laboratori"], correct: 1 },
    { question: "Quin servei ofereix Corintia?", answers: ["CRM", "Disseny de farmàcies", "Distribució", "Formació"], correct: 1 },
    { question: "Què és Ortoteca?", answers: ["Software de gestió", "Servei per potenciar l'ortopèdia a les farmàcies", "Laboratori", "Centre logístic"], correct: 1 },
    { question: "Quin tipus de farmacèutics formen part d'Iconika?", answers: ["Jubilats", "Emprenedors", "Estudiants", "Investigadors"], correct: 1 },
    { question: "Què significa que Nextera és 'integrada'?", answers: ["És part de l'edifici", "Es connecta amb altres sistemes", "És gratuïta", "És obligatòria"], correct: 1 },
    { question: "Per a què serveix el Business Intelligence de Fedefarma?", answers: ["Vendre medicaments", "Comparar el rendiment amb el mercat", "Fer publicitat", "Contractar personal"], correct: 1 },
    { question: "Què facilita Rúbrica als farmacèutics?", answers: ["Formació", "Comprar o vendre la seva farmàcia", "Obtenir medicaments", "Dissenyar el seu local"], correct: 1 },
    { question: "Quin aspecte de la farmàcia millora Corintia?", answers: ["La comptabilitat", "El disseny i la imatge", "La distribució", "La formació"], correct: 1 },
    { question: "Com descriu Ortoteca el seu servei?", answers: ["El més car", "La manera més fàcil de potenciar l'ortopèdia", "El més antic", "L'únic del mercat"], correct: 1 },
    { question: "En què s'especialitza Actibios?", answers: ["Medicaments genèrics", "Marques especialitzades", "Només cosmètics", "Només alimentació"], correct: 1 },
    { question: "Com es defineix Actibios respecte a les marques?", answers: ["Generalista", "Majorista líder en marques especialitzades", "Només online", "Internacional"], correct: 1 },
    { question: "Quin eslògan utilitza Actibios?", answers: ["El primer ets tu", "D'especialista a especialista", "Salut per a tots", "La teva farmàcia, la nostra passió"], correct: 1 },
    { question: "Què té Actibios que 'tant busques'?", answers: ["Preus baixos", "Marques especialitzades", "Enviament gratuït", "Descomptes"], correct: 1 },
    { question: "Com es descriu Acofarma?", answers: ["El laboratori més gran", "La marca de la teva cooperativa", "La farmàcia més antiga", "El distribuïdor més ràpid"], correct: 1 },
    { question: "Quines solucions ofereix Fedefarma per al cicle de vida de la farmàcia?", answers: ["Només a l'inici", "Durant tot el cicle", "Només al final", "Només en crisi"], correct: 1 },

    // LABORATORI I PRODUCTES (80 preguntes)
    { question: "Com s'anomena el laboratori farmacèutic de Grup Fedefarma?", answers: ["Acofarma Labs", "GSN Farma", "Fedefarma Labs", "Actibios Labs"], correct: 1 },
    { question: "En què s'especialitza GSN Farma?", answers: ["Medicaments genèrics", "Salut natural", "Vacunes", "Antibiòtics"], correct: 1 },
    { question: "Quin tipus de productes crea GSN Farma?", answers: ["Només sintètics", "Productes innovadors amb principis actius naturals", "Només importats", "Només genèrics"], correct: 1 },
    { question: "Què combina GSN Farma en els seus productes?", answers: ["Química i física", "Principis naturals i coneixement tradicional", "Només tecnologia", "Només investigació"], correct: 1 },
    { question: "Quin és l'objectiu de GSN Farma?", answers: ["Maximitzar beneficis", "Millorar el benestar i qualitat de vida", "Dominar el mercat", "Exportar productes"], correct: 1 },
    { question: "Quin tipus de solucions ofereix GSN Farma?", answers: ["Cares i exclusives", "Naturals, eficients i segures", "Només per a hospitals", "Només per a veterinària"], correct: 1 },
    { question: "Quins estàndards respecta GSN Farma?", answers: ["Només locals", "Els més alts de qualitat i seguretat", "Només europeus", "Cap d'específic"], correct: 1 },
    { question: "Què és Orissens?", answers: ["Software", "Marca especialista en salut de la dona", "Centre logístic", "Programa de formació"], correct: 1 },
    { question: "Per a quin canal és exclusiva Orissens?", answers: ["Hospitals", "Canal farmàcia", "Supermercats", "Online"], correct: 1 },
    { question: "En què s'especialitza Orissens?", answers: ["Salut infantil", "Salut de la dona", "Salut masculina", "Salut dental"], correct: 1 },
    { question: "Des de quan és GSN expert en suplements nutricionals?", answers: ["1986", "1996", "2006", "2016"], correct: 1 },
    { question: "Què és Nakama?", answers: ["Software de gestió", "Marca de salut animal", "Centre de formació", "Laboratori"], correct: 1 },
    { question: "En què ajuda Nakama a les farmàcies?", answers: ["En la comptabilitat", "En la recomanació creuada de productes per a animals", "En el disseny", "En la distribució"], correct: 1 },
    { question: "Què és Esenta?", answers: ["Un medicament", "Solució per a aigua de consum diari", "Un software", "Una revista"], correct: 1 },
    { question: "Com es descriu la solució Esenta?", answers: ["La més cara", "La més segura i eficaç per a l'aigua", "La més antiga", "La més coneguda"], correct: 1 },
    { question: "Quin any es va crear GSN Farma Labs Group?", answers: ["2023", "2024", "2025", "2026"], correct: 2 },
    { question: "Quin tipus de laboratori és GSN Farma?", answers: ["D'investigació bàsica", "Farmacèutic de salut natural", "D'anàlisis clínics", "De genètica"], correct: 1 },
    { question: "Quina àrea del Grup Fedefarma inclou GSN Farma?", answers: ["Distribució", "Formació", "Solucions 360", "Laboratori farmacèutic"], correct: 3 },
    { question: "Quantes marques principals té l'àrea de laboratori de Fedefarma?", answers: ["2", "3", "4", "5"], correct: 2 },
    { question: "Quins productes fabrica l'àrea de laboratori de Fedefarma?", answers: ["Només medicaments", "Productes per a la salut", "Només cosmètics", "Només alimentació"], correct: 1 },

    // FORMACIÓ (60 preguntes)
    { question: "Quin és el lema de formació de Fedefarma?", answers: ["Aprèn més", "Empodera el teu rol professional", "Estudia sempre", "Forma el teu futur"], correct: 1 },
    { question: "Què s'eleva quan eleves els teus coneixements segons Fedefarma?", answers: ["El teu sou", "La farmàcia", "El teu ego", "El teu negoci"], correct: 1 },
    { question: "Quin any es va crear el programa de formació continuada?", answers: ["1984", "1986", "1988", "1990"], correct: 1 },
    { question: "Què acompanya Fedefarma en tots els àmbits de formació?", answers: ["Als pacients", "A la farmàcia", "Als metges", "Als hospitals"], correct: 1 },
    { question: "És la formació una de les 4 àrees principals de Fedefarma?", answers: ["Sí", "No", "Només parcialment", "Depèn de la regió"], correct: 0 },
    { question: "Quin tipus de formació ofereix Fedefarma?", answers: ["Només online", "Continuada i professional", "Només presencial", "Només bàsica"], correct: 1 },
    { question: "Quants anys porta Fedefarma oferint formació?", answers: ["Des de 1986", "Des de 1996", "Des de 2006", "Des de 2016"], correct: 0 },
    { question: "Què busca elevar la formació de Fedefarma?", answers: ["Els preus", "Els coneixements del farmacèutic", "Les vendes", "La competència"], correct: 1 },
    { question: "La formació de Fedefarma està orientada a...?", answers: ["Pacients", "Farmacèutics i el seu equip", "Metges", "Infermers"], correct: 1 },
    { question: "Quina relació té la formació amb el rol professional segons Fedefarma?", answers: ["El limita", "L'empodera", "L'elimina", "No té relació"], correct: 1 },
    { question: "Quin tipus de programa de formació va crear Fedefarma el 1986?", answers: ["Bàsic", "Continuada", "Online", "Intensiu"], correct: 1 },
    { question: "La formació de Fedefarma ajuda a afrontar...?", answers: ["Només problemes actuals", "Reptes presents i futurs", "Només problemes passats", "Res específic"], correct: 1 },
    { question: "Quina àrea de Fedefarma s'encarrega de la formació?", answers: ["Distribució", "Laboratori", "Formació", "Solucions"], correct: 2 },
    { question: "Com descriu Fedefarma l'efecte d'elevar coneixements?", answers: ["Elevar la farmàcia", "Elevar els preus", "Elevar la competència", "Elevar els costos"], correct: 0 },
    { question: "Mentora forma part de l'ecosistema de...?", answers: ["Distribució", "Formació i serveis", "Només laboratori", "Només logística"], correct: 1 },
    { question: "Quin tipus d'acompanyament ofereix l'àrea de formació?", answers: ["Només teòric", "En tots els àmbits formatius", "Només pràctic", "Només online"], correct: 1 },
    { question: "Des de fa quantes dècades ofereix Fedefarma formació continuada?", answers: ["2 dècades", "3 dècades", "4 dècades", "5 dècades"], correct: 2 },
    { question: "Quins professionals poden accedir a la formació de Fedefarma?", answers: ["Qualsevol", "Farmacèutics socis", "Només metges", "Només infermers"], correct: 1 },
    { question: "La formació és part del compromís de Fedefarma amb...?", answers: ["Les vendes", "El desenvolupament professional", "La competència", "Els preus"], correct: 1 },
    { question: "Què millora la farmàcia segons l'enfocament formatiu de Fedefarma?", answers: ["Més diners", "Més coneixements", "Més productes", "Més espai"], correct: 1 },

    // DISTRIBUCIÓ I LOGÍSTICA (80 preguntes)
    { question: "Quants centres logístics interconnectats té Fedefarma?", answers: ["6", "7", "8", "9"], correct: 2 },
    { question: "Quantes referències de productes ofereix Fedefarma?", answers: ["50.000", "100.000", "Més de 150.000", "200.000"], correct: 2 },
    { question: "Quin tipus de vademècum ofereix Fedefarma segons el seu web?", answers: ["El més petit", "El més ampli del mercat", "Només genèrics", "Només importats"], correct: 1 },
    { question: "Què busca maximitzar Fedefarma a les farmàcies?", answers: ["L'espai", "La rendibilitat", "El personal", "Els problemes"], correct: 1 },
    { question: "Com estan connectats els centres logístics de Fedefarma?", answers: ["Aïllats", "Interconnectats entre si", "Només per telèfon", "Sense connexió"], correct: 1 },
    { question: "Què fan arribar els centres logístics a les farmàcies?", answers: ["Només medicaments", "La salut", "Només cosmètics", "Només parafarmàcia"], correct: 1 },
    { question: "De quina forma actua Fedefarma a més de distribuïdor?", answers: ["Com a hospital", "Com a operador logístic per a tercers", "Com a farmàcia", "Com a laboratori"], correct: 1 },
    { question: "Quan es va introduir la robotització als centres de Fedefarma?", answers: ["1970s", "1980s", "1989-2000", "2010s"], correct: 2 },
    { question: "Quina tecnologia va acompanyar la robotització a Fedefarma?", answers: ["GPS", "Radiofreqüència", "5G", "Bluetooth"], correct: 1 },
    { question: "Quin és el centre logístic més nou de Fedefarma?", answers: ["València", "Terrassa", "Palau-Solità i Plegamans", "Girona"], correct: 2 },
    { question: "Quin any es va inaugurar l'últim centre logístic?", answers: ["2019", "2020", "2021", "2022"], correct: 2 },
    { question: "Quines ciutats van tenir centres logístics als anys 60?", answers: ["Barcelona i Madrid", "Lleida, Girona, Reus i Castelló", "València i Sevilla", "Bilbao i Saragossa"], correct: 1 },
    { question: "Quants centres logístics es van obrir entre 1985-1988?", answers: ["1", "2", "3", "4"], correct: 1 },
    { question: "Quina característica destaca de la distribució de Fedefarma?", answers: ["La més cara", "Àmplia gamma i màxima rendibilitat", "Només urbana", "Només rural"], correct: 1 },
    { question: "Quin any va començar el repartiment amb furgonetes?", answers: ["1930", "1932", "1934", "1936"], correct: 2 },
    { question: "El primer vehicle de repartiment de Fedefarma va ser...?", answers: ["Un camió", "Una furgoneta", "Una moto", "Un carro"], correct: 1 },
    { question: "Quin departament es va crear el 1989 relacionat amb logística?", answers: ["Màrqueting", "IOF", "Vendes", "RRHH"], correct: 1 },
    { question: "Què significa tenir els centres 'interconnectats'?", answers: ["Estan a prop", "Comparteixen informació i estoc", "Són iguals", "Són independents"], correct: 1 },
    { question: "Què permet la interconnexió dels centres logístics?", answers: ["Estalvi de personal", "Major disponibilitat de productes", "Menys feina", "Més vacances"], correct: 1 },
    { question: "On està el centre logístic de Palau-Solità i Plegamans?", answers: ["València", "Barcelona (àrea)", "Madrid", "Sevilla"], correct: 1 },

    // TECNOLOGIA I INNOVACIÓ (50 preguntes)
    { question: "Quina plataforma cloud ofereix Fedefarma per a gestió?", answers: ["CloudPharma", "Sfera", "PharmCloud", "GestFarma"], correct: 1 },
    { question: "Què és Farmacloud de Fedefarma?", answers: ["Un medicament", "Plataforma d'accés a serveis", "Un laboratori", "Una farmàcia"], correct: 1 },
    { question: "Quin tipus de CRM ofereix Fedefarma?", answers: ["Bàsic", "Nextera - CRM integrat", "Manual", "Extern"], correct: 1 },
    { question: "Què permet el Business Intelligence de Fedefarma?", answers: ["Només veure factures", "Comparativa de mercat i indicadors", "Només inventari", "Només comandes"], correct: 1 },
    { question: "Quan es va introduir la radiofreqüència als magatzems?", answers: ["1980s", "1989-2000", "2000s", "2010s"], correct: 1 },
    { question: "Quin valor de Fedefarma està més relacionat amb la tecnologia?", answers: ["Proximitat", "Innovació", "Honestedat", "Passió"], correct: 1 },
    { question: "Sfera funciona en...?", answers: ["Servidors locals", "El núvol (cloud)", "Paper", "Sense connexió"], correct: 1 },
    { question: "Quin tipus de gestió es descriu com a 'intel·ligent'?", answers: ["La manual", "La de Sfera", "La tradicional", "La bàsica"], correct: 1 },
    { question: "Per a què serveix la robotització als centres de Fedefarma?", answers: ["Decoració", "Eficiència en la preparació de comandes", "Publicitat", "Formació"], correct: 1 },
    { question: "Quina innovació tecnològica va implementar Fedefarma als 90?", answers: ["Fax", "Radiofreqüència i robotització", "Telèfon", "Correu"], correct: 1 },
    { question: "Quin departament va impulsar la innovació tecnològica a Fedefarma?", answers: ["Màrqueting", "IOF", "Vendes", "Compres"], correct: 1 },
    { question: "Què permet Nextera a les farmàcies?", answers: ["Vendre online", "Gestionar relacions amb clients", "Fer enviaments", "Fabricar productes"], correct: 1 },
    { question: "Quin tipus d'indicadors ofereix el BI de Fedefarma?", answers: ["Només financers", "De negoci i mercat", "Només d'estoc", "Només de personal"], correct: 1 },
    { question: "La innovació a Fedefarma és una eina per a...?", answers: ["Competir", "Acompanyar en els reptes", "Eliminar competència", "Pujar preus"], correct: 1 },
    { question: "Què caracteritza el programa de gestió Sfera?", answers: ["És gratuït", "És intel·ligent i al núvol", "És manual", "És antic"], correct: 1 },
    { question: "Quina tecnologia utilitza Fedefarma per al tracking als magatzems?", answers: ["GPS", "Radiofreqüència (RFID)", "Bluetooth", "WiFi"], correct: 1 },
    { question: "Des de quin any Fedefarma utilitza sistemes robotitzats?", answers: ["1985", "1989", "1995", "2000"], correct: 1 },
    { question: "Quina solució tecnològica ofereix Fedefarma per a anàlisi de dades?", answers: ["Excel", "Business Intelligence", "Word", "PowerPoint"], correct: 1 },
    { question: "Què permet comparar el Business Intelligence de Fedefarma?", answers: ["Preus de compra", "La teva farmàcia amb el mercat", "Només despeses", "Només ingressos"], correct: 1 },
    { question: "La plataforma Farmacloud permet accés a...?", answers: ["Només email", "Serveis del grup", "Només factures", "Només comandes"], correct: 1 },

    // MISSIÓ, VISIÓ I ESTRATÈGIA (50 preguntes)
    { question: "Quina és la missió de Grup Fedefarma?", answers: ["Guanyar diners", "Acompanyar farmàcies i agents de salut en els seus reptes", "Dominar el mercat", "Expandir-se internacionalment"], correct: 1 },
    { question: "A qui acompanya Fedefarma segons la seva missió?", answers: ["Només a pacients", "A farmàcies i agents de salut", "Només a metges", "Només a hospitals"], correct: 1 },
    { question: "En quins reptes acompanya Fedefarma?", answers: ["Només passats", "Presents i futurs", "Només presents", "Només futurs"], correct: 1 },
    { question: "Què vol ser Fedefarma segons la seva visió?", answers: ["El més barat", "El grup farmacèutic de referència", "El més petit", "El més antic"], correct: 1 },
    { question: "En què vol ser líder Fedefarma?", answers: ["En preus", "En innovació", "En mida", "En antiguitat"], correct: 1 },
    { question: "A qui vol inspirar Fedefarma?", answers: ["A pacients", "A farmàcies i agents del sector", "A polítics", "A competidors"], correct: 1 },
    { question: "Quina excel·lència busquen assolir les farmàcies amb Fedefarma?", answers: ["Econòmica", "Professional i de servei", "Només en vendes", "Només en imatge"], correct: 1 },
    { question: "Quantes àrees d'actuació té l'estratègia de Fedefarma?", answers: ["2", "3", "4", "5"], correct: 2 },
    { question: "Què reforça Fedefarma a la societat segons el seu web?", answers: ["El comerç", "El paper de la farmàcia en la salut", "La política", "La indústria"], correct: 1 },
    { question: "Com creix Fedefarma juntament amb les farmàcies?", answers: ["Competint", "Al seu costat", "Ignorant-les", "Separadament"], correct: 1 },
    { question: "Quin compromís té Fedefarma amb el sector?", answers: ["Només econòmic", "Amb els valors i l'impacte positiu", "Cap", "Només legal"], correct: 1 },
    { question: "Quin impacte busca generar Fedefarma?", answers: ["Negatiu", "Positiu", "Neutre", "Cap"], correct: 1 },
    { question: "On genera impacte positiu Fedefarma?", answers: ["Només internament", "Al sector i la comunitat", "Només en vendes", "Només en beneficis"], correct: 1 },
    { question: "Quin suport dóna Fedefarma a les farmàcies?", answers: ["Només financer", "Per reforçar el seu paper en la salut", "Només tècnic", "Només legal"], correct: 1 },
    { question: "L'estratègia de Fedefarma inclou acompanyament...?", answers: ["Només a l'inici", "Integral durant tota la vida de la farmàcia", "Només en crisi", "Només en èxit"], correct: 1 },
    { question: "Quin tipus de grup és Fedefarma?", answers: ["Privat individual", "Cooperatiu", "Públic", "Multinacional"], correct: 1 },
    { question: "Quants anys de cooperativisme té Fedefarma?", answers: ["50 anys", "75 anys", "Més de 95 anys", "100 anys"], correct: 2 },
    { question: "Quin model segueix Fedefarma?", answers: ["Capitalista pur", "Cooperativista", "Estatal", "Mixt"], correct: 1 },
    { question: "Els socis de Fedefarma són principalment...?", answers: ["Inversors", "Farmacèutics", "Metges", "Pacients"], correct: 1 },
    { question: "Quina relació té Fedefarma amb els seus socis?", answers: ["De competència", "D'acompanyament i servei", "De domini", "D'indiferència"], correct: 1 }
];

let questions = [];
let currentQuestion = 0;
let score = 0;

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const questionNumberEl = document.getElementById('question-number');
const scoreEl = document.getElementById('score');
const progressEl = document.getElementById('progress');
const resultEmoji = document.getElementById('result-emoji');
const resultTitle = document.getElementById('result-title');
const resultScore = document.getElementById('result-score');
const resultMessage = document.getElementById('result-message');

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function getRandomQuestions(count) {
    const shuffled = shuffleArray(allQuestions);
    return shuffled.slice(0, count);
}

function showScreen(screen) {
    [startScreen, quizScreen, resultScreen].forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
}

function startGame() {
    questions = getRandomQuestions(10);
    currentQuestion = 0;
    score = 0;
    showScreen(quizScreen);
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    questionNumberEl.textContent = `Pregunta ${currentQuestion + 1}/${questions.length}`;
    scoreEl.textContent = `Punts: ${score}`;
    progressEl.style.width = `${((currentQuestion) / questions.length) * 100}%`;
    
    answersEl.innerHTML = '';
    q.answers.forEach((answer, index) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = answer;
        btn.addEventListener('click', () => selectAnswer(index));
        answersEl.appendChild(btn);
    });
}

function selectAnswer(index) {
    const q = questions[currentQuestion];
    const buttons = answersEl.querySelectorAll('.answer-btn');
    
    buttons.forEach(btn => btn.disabled = true);
    
    if (index === q.correct) {
        buttons[index].classList.add('correct');
        score++;
    } else {
        buttons[index].classList.add('incorrect');
        buttons[q.correct].classList.add('correct');
    }
    
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1500);
}

function showResults() {
    progressEl.style.width = '100%';
    
    const percentage = (score / questions.length) * 100;
    
    if (percentage === 100) {
        resultEmoji.textContent = '🏆';
        resultTitle.textContent = 'Expert en Fedefarma!';
        resultMessage.textContent = 'Coneixes a fons el Grup Fedefarma!';
    } else if (percentage >= 70) {
        resultEmoji.textContent = '💊';
        resultTitle.textContent = 'Molt bé!';
        resultMessage.textContent = 'Tens excel·lents coneixements sobre Fedefarma!';
    } else if (percentage >= 50) {
        resultEmoji.textContent = '👍';
        resultTitle.textContent = 'Ben fet!';
        resultMessage.textContent = 'Vas pel bon camí, segueix aprenent!';
    } else {
        resultEmoji.textContent = '📚';
        resultTitle.textContent = 'A estudiar!';
        resultMessage.textContent = 'Visita grupfedefarma.com per saber-ne més.';
    }
    
    resultScore.textContent = `${score} de ${questions.length} correctes`;
    
    showScreen(resultScreen);
}

startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', startGame);

// Mostrar nombre total de preguntes disponibles
document.addEventListener('DOMContentLoaded', () => {
    const subtitle = document.querySelector('#start-screen p');
    subtitle.textContent = `${allQuestions.length} preguntes sobre Fedefarma - 10 aleatòries per partida`;
});
