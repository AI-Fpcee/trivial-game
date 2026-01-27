// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6XZ4Ooh5cyXZuuWMa273ATOsch45F9Ok",
    authDomain: "fedefarma-trivia.firebaseapp.com",
    databaseURL: "https://fedefarma-trivia-default-rtdb.firebaseio.com",
    projectId: "fedefarma-trivia",
    storageBucket: "fedefarma-trivia.firebasestorage.app",
    messagingSenderId: "836932838278",
    appId: "1:836932838278:web:895e677ffeff8360c00207"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const allQuestions = [
    // HISTÒRIA DE FEDEFARMA (150 preguntes)
    { question: "Quin any es va fundar Fedefarma (Federació Farmacèutica)?", answers: ["1925", "1928", "1930", "1932"], correct: 1 },
    { question: "Quants anys d'experiència té Fedefarma com a grup cooperatiu?", answers: ["Més de 85 anys", "Més de 90 anys", "Més de 95 anys", "Més de 100 anys"], correct: 2 },
    { question: "Quin any va començar la secció científica de Fedefarma?", answers: ["1927", "1928", "1929", "1930"], correct: 1 },
    { question: "Quan va començar Fedefarma a utilitzar furgonetes per al repartiment?", answers: ["1932", "1934", "1936", "1938"], correct: 0 },
    { question: "En quina dècada es van inaugurar els centres logístics de Lleida, Girona, Reus i Castelló?", answers: ["Finals dels 50", "Finals dels 60", "Finals dels 70", "Finals dels 80"], correct: 1 },
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
    { question: "Quants anys després de la fundació es va crear la secció científica?", answers: ["1 any", "5 anys", "10 anys", "15 anys"], correct: 0 },
    { question: "Quina dècada va ser clau per l'expansió logística de Fedefarma?", answers: ["1950s", "1960s", "1970s", "1980s"], correct: 1 },
    { question: "Quin centre logístic es va inaugurar primer, Terrassa o València?", answers: ["Terrassa", "València", "Al mateix temps", "Cap dels dos"], correct: 0 },
    { question: "Quants anys van passar entre la fundació i la primera furgoneta?", answers: ["4 anys", "6 anys", "8 anys", "10 anys"], correct: 1 },
    { question: "La robotització va començar abans o després del 1990?", answers: ["Abans (1989)", "Després (1991)", "Exactament el 1990", "Mai es va robotitzar"], correct: 0 },
    { question: "Quin any va marcar l'inici de la innovació tecnològica amb IOF?", answers: ["1985", "1987", "1989", "1991"], correct: 2 },
    { question: "Quina adquisició important va fer Fedefarma el 2023?", answers: ["GSN Farma", "Actibios", "Sfera", "Nextera"], correct: 1 },
    { question: "El centre de Palau-Solità es va inaugurar al segle XX o XXI?", answers: ["Segle XX", "Segle XXI", "Entre els dos", "Cap"], correct: 1 },
    { question: "Quina va ser la primera gran innovació logística de Fedefarma?", answers: ["Robots", "Furgonetes", "Avions", "Trens"], correct: 1 },
    { question: "Fedefarma va néixer abans o després de la Guerra Civil?", answers: ["Abans (1928)", "Després (1940)", "Durant (1937)", "Molt després (1950)"], correct: 0 },
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
    { question: "Quin tipus de vademècum ofereix Fedefarma?", answers: ["Molt ampli i diversificat", "El més ampli del mercat", "Molt complet i variat", "Extens i detallat"], correct: 1 },
    { question: "A qui acompanya Grup Fedefarma segons la seva missió?", answers: ["Als professionals farmacèutics", "A farmàcies i agents de salut", "Als col·lectius sanitaris", "Als centres de salut"], correct: 1 },
    { question: "On té la seu principal Fedefarma?", answers: ["Madrid i rodalies", "Zona centre peninsular", "Catalunya", "Comunitat Valenciana"], correct: 2 },
    { question: "Què significa IOF en el context de Fedefarma?", answers: ["Institut de Gestió Farmacèutica", "Departament d'innovació i operacions", "Informació i Organització Farmacèutica", "Investigació i Optimització Farmacèutica"], correct: 1 },
    { question: "Què caracteritza Fedefarma com a 'majorista'?", answers: ["Venda al detall", "Distribució especialitzada a farmàcies", "Fabricació directa", "Investigació aplicada"], correct: 1 },
    { question: "Quin és l'objectiu principal de la formació a Fedefarma?", answers: ["Augmentar vendes", "Empoderar el rol professional", "Mejorar rendiment", "Competir millor"], correct: 1 },
    { question: "Quin tipus de programa de gestió ofereix Sfera?", answers: ["Gestió tradicional en local", "Gestió intel·ligent al cloud", "Gestió estàndard", "Gestió personalitzada"], correct: 1 },
    { question: "Què és Nextera a l'ecosistema Fedefarma?", answers: ["Sistema ERP", "Plataforma CRM integrada", "Gestor de clients", "Base de dades"], correct: 1 },
    { question: "Quina àrea s'encarrega de la compravenda de farmàcies?", answers: ["Sfera", "Rúbrica", "Corintia", "Iconika"], correct: 1 },
    { question: "Quina empresa dissenya farmàcies dins del grup?", answers: ["Sfera", "Rúbrica", "Corintia", "Ortoteca"], correct: 2 },
    { question: "Què és Ortoteca?", answers: ["Laboratori", "Servei d'ortopèdia", "Software", "Formació"], correct: 1 },
    { question: "Quina és la comunitat de farmacèutics emprenedors de Fedefarma?", answers: ["Sfera", "Iconika", "Nextera", "Mentora"], correct: 1 },
    { question: "Fedefarma opera principalment a...?", answers: ["Tot Espanya", "Catalunya i Levant", "Només Barcelona", "Europa"], correct: 1 },
    { question: "Quin model de negoci segueix Fedefarma?", answers: ["Franquícia", "Cooperativa", "Multinacional", "Familiar"], correct: 1 },
    { question: "Els socis de Fedefarma són...?", answers: ["Inversors", "Farmacèutics", "Hospitals", "Laboratoris"], correct: 1 },
    { question: "Quina plataforma permet accedir als serveis online de Fedefarma?", answers: ["FedeCloud", "Farmacloud", "CloudFarma", "SferaCloud"], correct: 1 },
    { question: "Quin servei ofereix indicadors de negoci?", answers: ["Sfera", "Business Intelligence", "Nextera", "Iconika"], correct: 1 },
    { question: "Mentora forma part de quin àmbit de Fedefarma?", answers: ["Distribució", "Laboratori", "Formació i serveis", "Logística"], correct: 2 },
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
    { question: "El valor de Passió es relaciona amb...?", answers: ["Els diners", "L'amor per la professió", "La competència", "El creixement"], correct: 1 },
    { question: "El valor de Compromís implica...?", answers: ["Només beneficis", "Vetllar per la farmàcia sempre", "Només en èpoques bones", "Res específic"], correct: 1 },
    { question: "La Proximitat de Fedefarma significa...?", answers: ["Estar físicament a prop", "Escoltar i orientar", "Ser barat", "Ser ràpid"], correct: 1 },
    { question: "La Innovació a Fedefarma serveix per...?", answers: ["Ser moderns", "Acompanyar en els reptes", "Impressionar", "Vendre més"], correct: 1 },
    { question: "L'Honestedat implica actuar amb...?", answers: ["Agressivitat", "Transparència i rigor", "Secretisme", "Rapidesa"], correct: 1 },
    { question: "Quin valor parla de 'cooperar per estar al servei de la salut'?", answers: ["Proximitat", "Innovació", "Passió", "Compromís"], correct: 2 },
    { question: "Segons els valors, Fedefarma vol inspirar...?", answers: ["Por", "Excel·lència", "Conformisme", "Individualisme"], correct: 1 },
    { question: "El compromís de Fedefarma és amb...?", answers: ["Només els socis", "El sector i la comunitat", "Només els treballadors", "Ningú en concret"], correct: 1 },
    { question: "Fedefarma busca generar un impacte...?", answers: ["Negatiu", "Positiu", "Neutre", "Inexistent"], correct: 1 },
    { question: "Els valors de Fedefarma es basen en...?", answers: ["Només beneficis", "Servei i professionalitat", "Competència", "Individualisme"], correct: 1 },
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
    { question: "Sfera permet gestionar la farmàcia des de...?", answers: ["Només el local", "Qualsevol lloc amb internet", "Només l'oficina", "Només el magatzem"], correct: 1 },
    { question: "Nextera ajuda a gestionar...?", answers: ["L'estoc", "Les relacions amb clients", "Els enviaments", "Les compres"], correct: 1 },
    { question: "El BI de Fedefarma ofereix comparatives amb...?", answers: ["Altres països", "El mercat del sector", "Altres sectors", "Ningú"], correct: 1 },
    { question: "Iconika és una comunitat per a farmacèutics...?", answers: ["Conservadors", "Emprenedors", "Jubilats", "Novells"], correct: 1 },
    { question: "Rúbrica assessora en...?", answers: ["Disseny", "Compravenda de farmàcies", "Formació", "Màrqueting"], correct: 1 },
    { question: "Corintia transforma...?", answers: ["Els productes", "L'espai físic de la farmàcia", "El personal", "Els preus"], correct: 1 },
    { question: "Ortoteca potencia quin departament de la farmàcia?", answers: ["Cosmètica", "Ortopèdia", "Nutrició", "Infantil"], correct: 1 },
    { question: "Les Solucions 360º de Fedefarma són...?", answers: ["Parcials", "Integrals", "Bàsiques", "Opcionals"], correct: 1 },
    { question: "Farmacloud és una plataforma...?", answers: ["De jocs", "D'accés a serveis", "De xarxes socials", "De vídeos"], correct: 1 },
    { question: "Quants serveis inclou l'àrea de Solucions 360º?", answers: ["3", "5", "7 o més", "1"], correct: 2 },
    { question: "Com s'anomena el laboratori farmacèutic de Grup Fedefarma?", answers: ["Acofarma Labs", "GSN Farma", "Fedefarma Labs", "Actibios Labs"], correct: 1 },
    { question: "En què s'especialitza GSN Farma?", answers: ["Medicaments genèrics", "Salut natural", "Vacunes", "Antibiòtics"], correct: 1 },
    { question: "Quin tipus de productes crea GSN Farma?", answers: ["Només sintètics", "Productes innovadors amb principis actius naturals", "Només importats", "Només genèrics"], correct: 1 },
    { question: "Què combina GSN Farma en els seus productes?", answers: ["Química i física", "Principis naturals i coneixement tradicional", "Només tecnologia", "Només investigació"], correct: 1 },
    { question: "Quin és l'objectiu de GSN Farma?", answers: ["Maximitzar beneficis", "Millorar el benestar i qualitat de vida", "Dominar el mercat", "Exportar productes"], correct: 1 },
    { question: "Quin tipus de solucions ofereix GSN Farma?", answers: ["Cares i exclusives", "Naturals, eficients i segures", "Només per a hospitals", "Només per a veterinària"], correct: 1 },
    { question: "Quins estàndards respecta GSN Farma?", answers: ["Només locals", "Els més alts de qualitat i seguretat", "Només europeus", "Cap d'específic"], correct: 1 },
    { question: "Què és Orissens?", answers: ["Laboratori de diagnòstic", "Marca especialista en salut de la dona", "Plataforma de gestió", "Servei d'ortopèdia"], correct: 1 },
    { question: "Per a quin canal és exclusiva Orissens?", answers: ["Hospitals públics", "Canal farmàcia", "Supermercats", "Parafarmàcies online"], correct: 1 },
    { question: "En què s'especialitza Orissens?", answers: ["Salut infantil", "Salut de la dona", "Salut masculina", "Salut dental"], correct: 1 },
    { question: "Des de quan és GSN expert en suplements nutricionals?", answers: ["1986", "1996", "2006", "2016"], correct: 1 },
    { question: "Què és Nakama?", answers: ["Laboratori de diagnòstic", "Marca de salut animal", "Sistema de gestió veterinària", "Plataforma de comandes"], correct: 1 },
    { question: "En què ajuda Nakama a les farmàcies?", answers: ["En la comptabilitat", "En la recomanació creuada de productes per a animals", "En el disseny", "En la distribució"], correct: 1 },
    { question: "Què és Esenta?", answers: ["Suplement nutricional", "Solució per a aigua de consum diari", "Programa de fidelització", "Sistema de filtres"], correct: 1 },
    { question: "Com es descriu la solució Esenta?", answers: ["La més cara", "La més segura i eficaç per a l'aigua", "La més antiga", "La més coneguda"], correct: 1 },
    { question: "Quin any es va crear GSN Farma Labs Group?", answers: ["2023", "2024", "2025", "2026"], correct: 2 },
    { question: "Quin tipus de laboratori és GSN Farma?", answers: ["D'investigació bàsica", "Farmacèutic de salut natural", "D'anàlisis clínics", "De genètica"], correct: 1 },
    { question: "Quina àrea del Grup Fedefarma inclou GSN Farma?", answers: ["Distribució", "Formació", "Solucions 360", "Laboratori farmacèutic"], correct: 3 },
    { question: "Quantes marques principals té l'àrea de laboratori de Fedefarma?", answers: ["2", "3", "4", "5"], correct: 2 },
    { question: "Quins productes fabrica l'àrea de laboratori de Fedefarma?", answers: ["Només medicaments", "Productes per a la salut", "Només cosmètics", "Només alimentació"], correct: 1 },
    { question: "Orissens és exclusiva per a...?", answers: ["Supermercats", "Farmàcies", "Hospitals", "Online"], correct: 1 },
    { question: "Nakama es dedica a la salut...?", answers: ["Humana", "Animal", "Vegetal", "Ambiental"], correct: 1 },
    { question: "Esenta tracta l'aigua per al...?", answers: ["Reg", "Consum diari", "Piscines", "Indústria"], correct: 1 },
    { question: "GSN porta des de quin any amb suplements?", answers: ["1986", "1996", "2006", "2016"], correct: 1 },
    { question: "Els productes de GSN Farma són...?", answers: ["Sintètics", "Naturals i innovadors", "Importats", "Genèrics"], correct: 1 },
    { question: "Orissens cuida la salut de...?", answers: ["Els nens", "Les dones", "Els ancians", "Els esportistes"], correct: 1 },
    { question: "Nakama ajuda amb la recomanació...?", answers: ["De medicaments", "Creuada per a animals", "De cosmètics", "D'alimentació"], correct: 1 },
    { question: "El laboratori de Fedefarma aposta per la salut...?", answers: ["Sintètica", "Natural", "Química", "Artificial"], correct: 1 },
    { question: "GSN combina ciència amb...?", answers: ["Màgia", "Coneixement tradicional", "Especulació", "Intuïció"], correct: 1 },
    { question: "L'objectiu de GSN és millorar...?", answers: ["Els beneficis", "El benestar i qualitat de vida", "La competència", "Els preus"], correct: 1 },
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
    { question: "La formació continuada significa que...?", answers: ["És obligatòria", "Mai s'acaba, és constant", "Dura poc", "És opcional"], correct: 1 },
    { question: "Fedefarma forma a farmacèutics per...?", answers: ["Competir", "Millorar el servei de salut", "Vendre més", "Reduir costos"], correct: 1 },
    { question: "El programa de formació va començar fa...?", answers: ["20 anys", "30 anys", "Quasi 40 anys", "50 anys"], correct: 2 },
    { question: "La formació empodera el rol...?", answers: ["Comercial", "Professional del farmacèutic", "Administratiu", "Directiu"], correct: 1 },
    { question: "Quan eleves els coneixements, eleves...?", answers: ["Els preus", "La farmàcia", "Els problemes", "La competència"], correct: 1 },
    { question: "La formació és clau per afrontar...?", answers: ["El passat", "Els reptes del present i futur", "Res", "La jubilació"], correct: 1 },
    { question: "Mentora ofereix...?", answers: ["Productes", "Formació i acompanyament", "Distribució", "Disseny"], correct: 1 },
    { question: "El farmacèutic format ofereix millor...?", answers: ["Preu", "Atenció i servei", "Velocitat", "Quantitat"], correct: 1 },
    { question: "La formació de Fedefarma és...?", answers: ["Esporàdica", "Continuada i integral", "Obligatòria", "Puntual"], correct: 1 },
    { question: "L'àrea de formació acompanya...?", answers: ["Només iniciats", "En tots els àmbits", "Només experts", "Ningú"], correct: 1 },
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
    { question: "La distribució de Fedefarma arriba a...?", answers: ["Només Barcelona", "Catalunya i zones properes", "Tot el món", "Només Espanya"], correct: 1 },
    { question: "Els 8 centres logístics garanteixen...?", answers: ["Menys servei", "Cobertura àmplia", "Més costos", "Menys productes"], correct: 1 },
    { question: "La robotització millora...?", answers: ["L'estètica", "L'eficiència", "El soroll", "Res"], correct: 1 },
    { question: "La radiofreqüència serveix per...?", answers: ["Música", "Tracking de productes", "Comunicació", "Entreteniment"], correct: 1 },
    { question: "Fedefarma també actua com a operador logístic per a...?", answers: ["Ningú", "Tercers", "Només socis", "Governs"], correct: 1 },
    { question: "El vademècum de Fedefarma inclou...?", answers: ["Pocs productes", "Més de 150.000 referències", "Només medicaments", "Només cosmètics"], correct: 1 },
    { question: "La rendibilitat de la farmàcia és objectiu de...?", answers: ["Només la farmàcia", "Fedefarma amb la farmàcia", "Ningú", "Només Fedefarma"], correct: 1 },
    { question: "Els centres logístics estan repartits per...?", answers: ["Tot Espanya", "Catalunya, València i voltants", "Només Barcelona", "Europa"], correct: 1 },
    { question: "Fedefarma fa arribar a la farmàcia...?", answers: ["Problemes", "La salut i els productes", "Només factures", "Només publicitat"], correct: 1 },
    { question: "La interconnexió permet accedir a...?", answers: ["Menys estoc", "L'estoc de tots els centres", "Res nou", "Només informació"], correct: 1 },
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
    { question: "El cloud permet treballar des de...?", answers: ["Només l'oficina", "Qualsevol lloc", "Només casa", "Enlloc"], correct: 1 },
    { question: "La robotització va començar a Fedefarma fa...?", answers: ["10 anys", "20 anys", "Més de 30 anys", "50 anys"], correct: 2 },
    { question: "Sfera és un programa de gestió...?", answers: ["Antic", "Modern i al núvol", "Bàsic", "Gratuït"], correct: 1 },
    { question: "Nextera integra la gestió de...?", answers: ["Estoc", "Clients (CRM)", "Personal", "Compres"], correct: 1 },
    { question: "El BI ajuda a prendre...?", answers: ["Vacances", "Decisions basades en dades", "Riscos", "Pèrdues"], correct: 1 },
    { question: "La innovació és un valor de Fedefarma que impulsa...?", answers: ["El conservadorisme", "La millora contínua", "L'estancament", "Res"], correct: 1 },
    { question: "Fedefarma inverteix en tecnologia per...?", answers: ["Malgastar", "Millorar el servei", "Complicar les coses", "Res"], correct: 1 },
    { question: "El RFID permet...?", answers: ["Escoltar música", "Fer seguiment de productes", "Veure vídeos", "Res"], correct: 1 },
    { question: "Els robots als magatzems preparen...?", answers: ["Menjar", "Comandes de forma eficient", "Festes", "Reunions"], correct: 1 },
    { question: "La tecnologia de Fedefarma beneficia...?", answers: ["Ningú", "Les farmàcies sòcies", "Només Fedefarma", "La competència"], correct: 1 },
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
    { question: "Quina relació té Fedefarma amb els seus socis?", answers: ["De competència", "D'acompanyament i servei", "De domini", "D'indiferència"], correct: 1 },
    { question: "La missió parla d'acompanyar en reptes...?", answers: ["Passats", "Presents i futurs", "Inexistents", "Aliens"], correct: 1 },
    { question: "La visió és ser referent en...?", answers: ["Preus", "El sector farmacèutic", "Publicitat", "Res"], correct: 1 },
    { question: "Fedefarma vol inspirar excel·lència a...?", answers: ["Ningú", "Farmàcies i el sector", "Competidors", "Governs"], correct: 1 },
    { question: "L'impacte positiu és al sector i...?", answers: ["Ningú més", "La comunitat", "Només Fedefarma", "Els competidors"], correct: 1 },
    { question: "El model cooperatiu significa que els socis...?", answers: ["No participen", "Són propietaris i participen", "Només compren", "Només venen"], correct: 1 },
    { question: "Fedefarma reforça el paper de la farmàcia en...?", answers: ["El comerç", "La salut de la societat", "La política", "L'entreteniment"], correct: 1 },
    { question: "El creixement de Fedefarma és...?", answers: ["Individual", "Al costat de les farmàcies", "Contra les farmàcies", "Sense les farmàcies"], correct: 1 },
    { question: "L'estratègia inclou les 4 àrees de...?", answers: ["Màrqueting", "Distribució, Formació, Solucions i Laboratori", "Vendes", "Res"], correct: 1 },
    { question: "L'acompanyament de Fedefarma dura...?", answers: ["Poc temps", "Tot el cicle de vida de la farmàcia", "Només l'inici", "Només el final"], correct: 1 },
    { question: "Ser cooperativa implica...?", answers: ["Competir amb els socis", "Treballar junts pels socis", "Ignorar els socis", "Res"], correct: 1 },
    { question: "Quin color predomina a la marca Fedefarma?", answers: ["Blau", "Verd", "Vermell", "Groc"], correct: 1 },
    { question: "Fedefarma és una cooperativa de...?", answers: ["Metges", "Farmacèutics", "Infermers", "Pacients"], correct: 1 },
    { question: "El web principal de Fedefarma és...?", answers: ["fedefarma.es", "grupfedefarma.com", "grupfedefarma.es", "cooperativa-fedefarma.com"], correct: 1 },
    { question: "Quantes dècades d'història té Fedefarma aproximadament?", answers: ["5", "7", "Prop de 10", "12"], correct: 2 },
    { question: "Fedefarma treballa principalment amb...?", answers: ["Hospitals públics", "Farmàcies comunitàries", "Centres de salut", "Residències geriàtriques"], correct: 1 },
    { question: "El sector de Fedefarma és...?", answers: ["Alimentació saludable", "Farmacèutic i salut", "Tecnologia mèdica", "Construcció sanitària"], correct: 1 },
    { question: "Fedefarma distribueix productes de...?", answers: ["Una única marca pròpia", "Diverses marques i laboratoris", "Només genèrics", "Cap marca específica"], correct: 1 },
    { question: "L'àmbit geogràfic principal de Fedefarma és...?", answers: ["Tot Europa occidental", "Est d'Espanya", "Zona centre i sud", "Només llevant peninsular"], correct: 1 },
    { question: "Els farmacèutics socis de Fedefarma tenen...?", answers: ["Cap avantatge addicional", "Serveis i condicions exclusives", "Obligacions addicionals", "Res de diferent"], correct: 1 },
    { question: "Fedefarma ofereix serveis de...?", answers: ["Només logística", "Distribució, formació, tecnologia i serveis", "Només productes", "Només financers"], correct: 1 },
    { question: "La cooperativa pertany als...?", answers: ["Inversors privats", "Farmacèutics socis", "Administració pública", "Banc de cooperatives"], correct: 1 },
    { question: "Fedefarma competeix amb...?", answers: ["Cap empresa", "Distribuïdors farmacèutics", "Hospitals públics", "Pacients individuals"], correct: 1 },
    { question: "El model cooperatiu és...?", answers: ["Recent i modern", "Tradicional amb gairebé un segle", "Importat d'Amèrica", "Experimental i innovador"], correct: 1 },
    { question: "Fedefarma ajuda la farmàcia a ser més...?", answers: ["Petita i local", "Competitiva i professional", "Elegant i moderna", "Grande i franquícia"], correct: 1 },
    { question: "Els serveis de Fedefarma són per a...?", answers: ["Qualsevol persona", "Farmàcies sòcies", "Centres mèdics", "Particulars en general"], correct: 1 },
    { question: "La formació de Fedefarma és...?", answers: ["Bàsica i única", "Àmplia i continuada", "Només presencial", "Només online"], correct: 1 },
    { question: "Fedefarma té laboratori propi anomenat...?", answers: ["FedeLabs", "GSN Farma", "CoopLab", "LabFedefarma"], correct: 1 },
    { question: "El CRM de Fedefarma s'anomena...?", answers: ["SferaCRM", "Nextera", "ClientFarma", "RelacionsCRM"], correct: 1 },
    { question: "El software de gestió de Fedefarma és...?", answers: ["Excel Online", "Sfera", "GestFarm", "FarmacèuticPro"], correct: 1 },
    { question: "Fedefarma ajuda amb el disseny de farmàcies mitjançant...?", answers: ["Sfera", "Corintia", "Nextera", "DissenyFarma"], correct: 1 },
    { question: "Per comprar o vendre una farmàcia, Fedefarma ofereix...?", answers: ["Nextera", "Rúbrica", "TransFarm", "MarketFarm"], correct: 1 },
    { question: "La comunitat d'emprenedors farmacèutics és...?", answers: ["Sfera", "Iconika", "Rúbrica", "EmpreFarm"], correct: 1 },
    { question: "L'ortopèdia a la farmàcia es potencia amb...?", answers: ["Sfera", "Ortoteca", "Nextera", "OrtoPlus"], correct: 1 },
    { question: "Els indicadors de negoci s'obtenen amb...?", answers: ["Sfera", "Business Intelligence", "Nextera", "DadesNeg"], correct: 1 },
    { question: "Fedefarma té seu a...?", answers: ["Comunitat de Madrid", "Catalunya", "Comunitat Valenciana", "Andalusia"], correct: 1 },
    { question: "El grup cooperatiu es va consolidar el...?", answers: ["2020", "2022", "2024", "2025"], correct: 2 },
    { question: "GSN Farma Labs es va crear el...?", answers: ["2022", "2023", "2024", "2025"], correct: 2 },
    { question: "Actibios es va incorporar el...?", answers: ["2021", "2022", "2023", "2024"], correct: 2 },
    { question: "El centre més nou es va obrir el...?", answers: ["2019", "2020", "2021", "2022"], correct: 2 },
    // NOVES PREGUNTES - DISTRIBUCIÓ I LOGÍSTICA AVANÇADA (50 preguntes)
    { question: "Quants centres logístics interconnectats té actualment Grup Fedefarma?", answers: ["6", "7", "8", "9"], correct: 2 },
    { question: "Amb quants laboratoris col·labora Fedefarma per oferir el seu vademècum?", answers: ["Més de 800", "Més de 1000", "Més de 1200", "Més de 1500"], correct: 2 },
    { question: "Quin concepte guia la distribució de Fedefarma segons el seu web?", answers: ["Rapidesa", "Equitat, seguretat i sostenibilitat", "Quantitat", "Preus baixos"], correct: 1 },
    { question: "On es troba el centre logístic més modern de Fedefarma?", answers: ["València", "Barcelona", "Palau-Solità i Plegamans", "Terrassa"], correct: 2 },
    { question: "Què permet l'alt nivell de robotització del centre de Palau-Solità?", answers: ["Reduir costos", "Excel·lència logística", "Més empleats", "Menys productes"], correct: 1 },
    { question: "Els 8 centres logístics estan ubicats a...?", answers: ["Tot Espanya", "Catalunya i Comunitat Valenciana", "Només Catalunya", "Només Llevant"], correct: 1 },
    { question: "Què garanteix la interconnexió dels 8 centres logístics?", answers: ["Més beneficis", "Excel·lència logística", "Menys feina", "Més vacances"], correct: 1 },
    { question: "Quina és una característica clau dels centres logístics de Fedefarma?", answers: ["Traçabilitat total del producte", "Només manual", "Sense control", "Bàsics"], correct: 0 },
    { question: "Què garanteixen les bones pràctiques de distribució farmacèutica?", answers: ["Màxim benefici", "Qualitat i seguretat", "Més rapidesa", "Menys normativa"], correct: 1 },
    { question: "Quin és el nivell d'automatització dels centres de Fedefarma?", answers: ["Baix", "Mitjà", "Màxim", "Cap"], correct: 2 },
    { question: "El centre de Palau-Solità és referent a quin nivell?", answers: ["Nacional", "Europeu", "Mundial", "Local"], correct: 1 },
    { question: "Què permet la robotització del centre de Palau-Solità?", answers: ["Menys precisió", "Major eficiència i rapidesa", "Més errors", "Menys productes"], correct: 1 },
    { question: "En què inverteix contínuament Fedefarma als seus centres logístics?", answers: ["Decoració", "Innovació", "Publicitat", "Expansió internacional"], correct: 1 },
    { question: "Quin objectiu persegueix la inversió en innovació logística?", answers: ["Impressionar", "Garantir el millor servei als pacients", "Competir en preus", "Reduir plantilla"], correct: 1 },
    { question: "Quina província catalana NO té un centre logístic de Fedefarma?", answers: ["Barcelona", "Girona", "Tarragona", "Lleida"], correct: 2 },
    { question: "Per què Fedefarma té centres a totes les províncies catalanes i valencianes?", answers: ["Per tradició", "Per arribar més ràpid a les farmàcies", "Per pagar menys impostos", "Per contractar més personal"], correct: 1 },
    { question: "Quina tecnologia permet la traçabilitat total del producte?", answers: ["Paper", "Sistemes digitals avançats", "Telèfon", "Fax"], correct: 1 },
    { question: "La màxima automatització dels processos logístics permet...?", answers: ["Més errors", "Major eficiència i fiabilitat", "Més lentitud", "Menys control"], correct: 1 },
    { question: "Quin tipus de model de distribució ofereix Fedefarma?", answers: ["Estàndard únic", "Personalitzat a cada farmàcia", "Només per grans", "Només per petites"], correct: 1 },
    { question: "Què valora Fedefarma de les seves farmàcies sòcies?", answers: ["Només les vendes", "La dedicació a la cooperativa", "La mida", "La ubicació"], correct: 1 },
    // CLUB FEDEFARMA I MODELS COMERCIALS (40 preguntes)
    { question: "Què és el Club Fedefarma?", answers: ["Un gimnàs", "Model comercial amb descomptes i serveis exclusius", "Una revista", "Un edifici"], correct: 1 },
    { question: "Quin descompte màxim ofereix Club Fedefarma en EFG?", answers: ["10%", "12%", "14%", "16%"], correct: 3 },
    { question: "Què permet 'Fedefarma a la carta'?", answers: ["Triar menjar", "Personalitzar descomptes d'EFP's i Parafarmàcia", "Triar horaris", "Triar transportista"], correct: 1 },
    { question: "Què ofereix el Club Fedefarma de forma mensual opcional?", answers: ["Regals", "Assessorament d'experts", "Vacances", "Descomptes extres"], correct: 1 },
    { question: "El model comercial de genèrics de Fedefarma és...?", answers: ["El més car", "El més rendible del mercat", "El més antic", "El més petit"], correct: 1 },
    { question: "Fins a quin percentatge de marge ofereix Acofarma?", answers: ["40%", "45%", "50%", "55%"], correct: 3 },
    { question: "Fins a quin percentatge de descompte ofereix Acofarma?", answers: ["40%", "45%", "50%", "55%"], correct: 2 },
    { question: "Quants models comercials combinables ofereix Fedefarma amb Acofarma?", answers: ["1", "2", "3", "4"], correct: 2 },
    { question: "Quin és el primer avantatge del model Acofarma?", answers: ["Més velocitat", "Més descompte", "Més quantitat", "Més varietat"], correct: 1 },
    { question: "Quin és el segon avantatge del model Acofarma?", answers: ["Més descompte", "Més rendibilitat", "Més publicitat", "Més formació"], correct: 1 },
    { question: "Què són les 'comandes directes' del Club Fedefarma?", answers: ["Comandes per telèfon", "Comandes amb descomptes a PVL", "Comandes urgents", "Comandes de mostra"], correct: 1 },
    { question: "Els serveis exclusius del Club Fedefarma són per a...?", answers: ["Tothom", "Farmàcies sòcies", "Competidors", "Particulars"], correct: 1 },
    { question: "Els 3 models comercials d'Acofarma són...?", answers: ["Incompatibles", "Combinables entre si", "Obligatoris", "Temporals"], correct: 1 },
    { question: "Què busquen els models comercials d'Acofarma?", answers: ["Complicar", "Treure màxima rendibilitat", "Confondre", "Limitar"], correct: 1 },
    { question: "El descompte en EFG del Club Fedefarma pot arribar fins a...?", answers: ["10%", "12%", "14%", "16%"], correct: 3 },
    { question: "Personalitzar descomptes és possible amb...?", answers: ["Club Fedefarma", "Fedefarma a la carta", "Iconika", "Sfera"], correct: 1 },
    { question: "L'assessorament d'experts del Club Fedefarma és...?", answers: ["Obligatori", "Opcional", "Gratuït sempre", "Inexistent"], correct: 1 },
    { question: "El model de genèrics de Fedefarma destaca pel seu...?", answers: ["Preu alt", "Rendibilitat", "Antiguitat", "Origen"], correct: 1 },
    { question: "Acofarma ofereix fins a 50% de descompte en el model...?", answers: ["Més velocitat", "Més descompte", "Més rendibilitat", "Més quantitat"], correct: 1 },
    { question: "Acofarma ofereix fins a 55% de marge en el model...?", answers: ["Més descompte", "Més rendibilitat", "Més publicitat", "Més volum"], correct: 1 },
    // ICONIKA - GRUP DE FARMÀCIES (30 preguntes)
    { question: "Què és Farmàcia Iconika?", answers: ["Una farmàcia", "El grup de farmàcies més gran d'Espanya", "Una aplicació", "Un laboratori"], correct: 1 },
    { question: "Quin percentatge del capital d'Iconika és farmacèutic?", answers: ["50%", "75%", "90%", "100%"], correct: 3 },
    { question: "Amb quants laboratoris té acords exclusius Iconika?", answers: ["Més de 20", "Més de 30", "Més de 50", "Més de 100"], correct: 2 },
    { question: "Què ofereix Iconika en termes d'acompanyament?", answers: ["Cap", "Acompanyament expert", "Només telefònic", "Només online"], correct: 1 },
    { question: "Quin tipus de gestió promou Iconika?", answers: ["Tradicional", "Intel·ligent", "Manual", "Bàsica"], correct: 1 },
    { question: "Què inclou Iconika anualment en màrqueting?", answers: ["Res", "Pla anual de trade màrqueting", "Només publicitat online", "Només catàlegs"], correct: 1 },
    { question: "Iconika ofereix als seus membres...?", answers: ["Res especial", "Formació i comunitat", "Només descomptes", "Només logística"], correct: 1 },
    { question: "L'objectiu d'Iconika és millorar...?", answers: ["La imatge", "La rendibilitat de la farmàcia", "Només les vendes", "La ubicació"], correct: 1 },
    { question: "Iconika també ajuda a donar...?", answers: ["Més productes", "El millor servei als pacients", "Més horaris", "Més espai"], correct: 1 },
    { question: "El capital 100% farmacèutic d'Iconika significa...?", answers: ["És dels farmacèutics", "És dels bancs", "És internacional", "És públic"], correct: 0 },
    { question: "Els acords exclusius d'Iconika són amb...?", answers: ["Hospitals", "Més de 50 laboratoris", "Governs", "Universitats"], correct: 1 },
    { question: "La gestió intel·ligent d'Iconika es basa en...?", answers: ["Intuïció", "Tecnologia i dades", "Tradició", "Atzar"], correct: 1 },
    { question: "El pla de trade màrqueting d'Iconika és...?", answers: ["Mensual", "Anual", "Setmanal", "Inexistent"], correct: 1 },
    { question: "La comunitat d'Iconika està formada per...?", answers: ["Metges", "Farmacèutics emprenedors", "Infermers", "Pacients"], correct: 1 },
    { question: "Iconika és el grup més gran a nivell...?", answers: ["Local", "Autonòmic", "D'Espanya", "Mundial"], correct: 2 },
    { question: "L'acompanyament expert d'Iconika inclou...?", answers: ["Només jurídic", "Suport integral", "Només fiscal", "Només logístic"], correct: 1 },
    { question: "Els acords amb laboratoris d'Iconika són...?", answers: ["Normals", "Exclusius", "Temporals", "Condicionals"], correct: 1 },
    { question: "La formació a Iconika és part de...?", answers: ["Un extra", "L'oferta de valor", "Un cost addicional", "Res important"], correct: 1 },
    { question: "El model d'Iconika està dissenyat per a farmàcies...?", answers: ["Grans només", "Petites només", "De qualsevol mida", "Urbanes només"], correct: 2 },
    { question: "Iconika busca millorar tant rendibilitat com...?", answers: ["Imatge", "Servei als pacients", "Horaris", "Mida"], correct: 1 },
    // GSN FARMA - LABORATORI (40 preguntes)
    { question: "Quants anys d'història té GSN Farma?", answers: ["20 anys", "25 anys", "30 anys", "35 anys"], correct: 2 },
    { question: "Quants metres quadrats tenen les instal·lacions de GSN Farma?", answers: ["10.000m2", "15.000m2", "17.000m2", "20.000m2"], correct: 2 },
    { question: "A què estan dedicats els 17.000m2 de GSN Farma?", answers: ["Només emmagatzematge", "Innovació, investigació i fabricació", "Només oficines", "Només venda"], correct: 1 },
    { question: "GSN Farma és un laboratori amb una planta farmacèutica de...?", answers: ["Última generació", "Segona generació", "Antiga", "Bàsica"], correct: 0 },
    { question: "Quin és el compromís principal de GSN Farma?", answers: ["Beneficis", "Salut i qualitat", "Expansió", "Publicitat"], correct: 1 },
    { question: "Què uneix GSN Farma segons la seva filosofia?", answers: ["Preus i quantitat", "Experiència, ciència i innovació", "Tradició i rutina", "Només tecnologia"], correct: 1 },
    { question: "Quin tipus de solucions desenvolupa GSN Farma?", answers: ["Químiques pures", "Segures i eficaces", "Experimentals", "Genèriques"], correct: 1 },
    { question: "Un dels valors clau de GSN Farma és...?", answers: ["Rapidesa", "Innovació i qualitat", "Preus baixos", "Màrqueting"], correct: 1 },
    { question: "GSN Farma ofereix productes basats en...?", answers: ["Màgia", "Investigació científica avançada", "Tradicions antigues", "Proves mínimes"], correct: 1 },
    { question: "GSN Farma garanteix alts estàndards en...?", answers: ["Publicitat", "Qualitat en cada etapa", "Vendes", "Distribució"], correct: 1 },
    { question: "GSN Farma creu en el poder de...?", answers: ["La química sintètica", "La naturalesa", "Els productes artificials", "Les modes"], correct: 1 },
    { question: "L'enfocament de GSN Farma cap a la salut és...?", answers: ["Agressiu", "Respectuós i equilibrat", "Experimental", "Comercial"], correct: 1 },
    { question: "GSN Farma es compromet amb...?", answers: ["Només beneficis", "Desenvolupament sostenible", "Expansió ràpida", "Publicitat massiva"], correct: 1 },
    { question: "Com minimitza GSN Farma el seu impacte ambiental?", answers: ["No ho fa", "Amb compromís sostenible", "Només amb publicitat", "Ignorant-lo"], correct: 1 },
    { question: "GSN Farma promou l'ús...dels recursos naturals?", answers: ["Indiscriminat", "Responsable", "Mínim", "Excessiu"], correct: 1 },
    { question: "Quantes línies de negoci ofereix GSN Farma?", answers: ["1", "2", "Diverses", "Cap"], correct: 2 },
    { question: "GSN Farma ofereix desenvolupament de...?", answers: ["Només genèrics", "Productes propis", "Només importats", "Res"], correct: 1 },
    { question: "GSN Farma també ofereix...?", answers: ["Només distribució", "Fabricació per contracte", "Només consultoria", "Només investigació"], correct: 1 },
    { question: "GSN Farma estableix...?", answers: ["Només vendes", "Col·laboracions estratègiques", "Monopolis", "Barreres"], correct: 1 },
    { question: "GSN Farma adapta les seves capacitats per...?", answers: ["Confondre", "Respondre al mercat", "Complicar", "Reduir oferta"], correct: 1 },
    { question: "Com es descriu Natural Pharma Lab de GSN?", answers: ["Nova", "Més de 25 anys d'experiència", "Experimental", "Petita"], correct: 1 },
    { question: "Natural Pharma Lab és expert en...?", answers: ["Química sintètica", "Fórmules farmacèutiques de qualitat", "Productes bàsics", "Genèrics"], correct: 1 },
    { question: "Quantes marques principals té GSN Farma?", answers: ["1", "2", "4", "10"], correct: 2 },
    { question: "Des de quin any és GSN expert en suplements nutricionals?", answers: ["1986", "1991", "1996", "2000"], correct: 2 },
    { question: "Orissens està especialitzada en salut de...?", answers: ["Nens", "La dona", "Ancians", "Esportistes"], correct: 1 },
    { question: "Orissens és exclusiva per a quin canal?", answers: ["Supermercats", "Canal farmàcia", "Hospitals", "Online"], correct: 1 },
    { question: "Quin és el compromís d'Orissens segons el seu lema?", answers: ["Vendes", "Salut de la dona, farmàcia i ciència", "Màrqueting", "Expansió"], correct: 1 },
    { question: "Nakama es dedica a la salut...?", answers: ["Humana", "Animal", "Vegetal", "Ambiental"], correct: 1 },
    { question: "Nakama ajuda la farmàcia en...?", answers: ["Comptabilitat", "Recomanació creuada", "Disseny", "Horaris"], correct: 1 },
    { question: "El lema de Nakama és...?", answers: ["Salut per tots", "Mascotes cuidades, mascotes felices", "Animals sans", "Cura animal"], correct: 1 },
    { question: "Esenta és una solució per a...?", answers: ["Aliments", "Aigua de consum diari", "Aire", "Energia"], correct: 1 },
    { question: "Com es descriu la solució Esenta?", answers: ["Bàsica", "La més segura i eficaç", "Experimental", "Temporal"], correct: 1 },
    { question: "El lema d'Esenta és...?", answers: ["Aigua pura", "Aigua naturalment aigua", "H2O perfecte", "Aigua vital"], correct: 1 },
    { question: "Les marques de GSN Farma cobreixen salut...?", answers: ["Només humana", "Humana, animal i aigua", "Només infantil", "Només gent gran"], correct: 1 },
    { question: "GSN Farma combina principis naturals amb...?", answers: ["Química pura", "Coneixement tradicional", "Experimentació", "Atzar"], correct: 1 },
    { question: "L'objectiu de GSN Farma és millorar...?", answers: ["Vendes", "Benestar i qualitat de vida", "Imatge", "Quota de mercat"], correct: 1 },
    { question: "Els productes de GSN Farma són...?", answers: ["Sintètics", "Naturals, eficients i segurs", "Genèrics", "Importats"], correct: 1 },
    { question: "GSN Farma garanteix...?", answers: ["Preus baixos", "Alts estàndards de qualitat i seguretat", "Volum alt", "Màrqueting"], correct: 1 },
    { question: "Natural Pharma Lab fabrica fórmules de...?", answers: ["Baixa qualitat", "Gran qualitat", "Qualitat variable", "Qualitat bàsica"], correct: 1 },
    { question: "GSN Farma porta quants anys desenvolupant suplements?", answers: ["10 anys", "20 anys", "Des de 1996", "Des de 2000"], correct: 2 },
    // SFERA - ECOSISTEMA DIGITAL (40 preguntes)
    { question: "Sfera és un ecosistema...?", answers: ["Físic", "Digital", "Mixt", "Extern"], correct: 1 },
    { question: "A quantes farmàcies dóna servei Sfera?", answers: ["Més de 5.000", "Més de 10.000", "Més de 13.000", "Més de 20.000"], correct: 2 },
    { question: "Quants treballadors té l'equip de Sfera?", answers: ["Més de 100", "Més de 150", "Més de 200", "Més de 250"], correct: 2 },
    { question: "Quin percentatge del capital de Sfera és farmacèutic?", answers: ["50%", "75%", "90%", "100%"], correct: 3 },
    { question: "Quants anys d'experiència té el grup darrere de Sfera?", answers: ["50", "75", "Més de 95", "100"], correct: 2 },
    { question: "Sfera és un sistema per a la...de la farmàcia?", answers: ["Decoració", "Transformació digital", "Ampliació", "Tancament"], correct: 1 },
    { question: "Sfera és una plataforma tecnològica...?", answers: ["Bàsica", "Global", "Local", "Temporal"], correct: 1 },
    { question: "A Sfera es connecten...?", answers: ["Poques coses", "Totes les solucions i eines", "Només comptabilitat", "Només vendes"], correct: 1 },
    { question: "Sfera és un ecosistema per donar resposta als nous...?", answers: ["Problemes", "Reptes farmacèutics", "Competidors", "Preus"], correct: 1 },
    { question: "Sfera transforma i simplifica...?", answers: ["Només vendes", "Gestió, atenció al pacient i decisions", "Només horaris", "Només estoc"], correct: 1 },
    { question: "Les solucions de Sfera estan...?", answers: ["Desconnectades", "Connectades a l'ecosistema", "Aïllades", "Separades"], correct: 1 },
    { question: "Sfera connecta solucions a la farmàcia i al seu...?", answers: ["Passat", "Creixement", "Tancament", "Manteniment"], correct: 1 },
    { question: "Segons Sfera, el repte és cuidar la salut física en un món...?", answers: ["Analògic", "Digitalitzat", "Rural", "Antic"], correct: 1 },
    { question: "L'ecosistema Sfera és...?", answers: ["Parcial", "Integral", "Bàsic", "Limitat"], correct: 1 },
    { question: "Sfera connecta eines per gestionar la farmàcia de forma més...?", answers: ["Complicada", "Eficient", "Lenta", "Costosa"], correct: 1 },
    { question: "Sfera permet analitzar...?", answers: ["Només vendes", "El mercat", "Només costos", "Només estoc"], correct: 1 },
    { question: "Sfera ajuda a...els clients?", answers: ["Confondre", "Fidelitzar", "Allunyar", "Ignorar"], correct: 1 },
    { question: "Com controla Sfera les dades de la farmàcia?", answers: ["No ho fa", "En un entorn fiable, segur i actualitzat", "Sense control", "Amb risc"], correct: 1 },
    { question: "Les dades a Sfera estan sempre...?", answers: ["Perdudes", "Protegides", "Exposades", "Esborrades"], correct: 1 },
    { question: "Sfera és el primer software...?", answers: ["Tradicional", "Intel·ligent al cloud", "De pago", "Local"], correct: 1 },
    { question: "Sfera viu íntegrament al...?", answers: ["Servidor local", "Cloud", "Disc dur", "Paper"], correct: 1 },
    { question: "Amb Sfera pots accedir a la farmàcia des de...?", answers: ["Només l'oficina", "Qualsevol lloc i moment", "Només casa", "Enlloc"], correct: 1 },
    { question: "Les eines de Sfera són...?", answers: ["Complexes", "Integrades, simples i intuïtives", "Difícils", "Obsoletes"], correct: 1 },
    { question: "Sfera connecta...tecnologia?", answers: ["Poca", "Tota la que necessites", "Només bàsica", "Massa"], correct: 1 },
    { question: "Sfera garanteix que tot estigui...?", answers: ["Desconnectat", "Connectat", "Aïllat", "Separat"], correct: 1 },
    { question: "Sfera garanteix que tot estigui...?", answers: ["Insegur", "Segur", "Exposat", "Vulnerable"], correct: 1 },
    { question: "Sfera és un programa de gestió...?", answers: ["Antic", "Intel·ligent", "Bàsic", "Limitat"], correct: 1 },
    { question: "La nova era digital arriba a la farmàcia amb...?", answers: ["Res", "Sfera", "Només factures", "Només estoc"], correct: 1 },
    { question: "Amb Sfera guanyes...?", answers: ["Complicacions", "Temps", "Confusió", "Problemes"], correct: 1 },
    { question: "Sfera està constantment...?", answers: ["Obsolet", "Actualitzat", "Congelat", "Aturat"], correct: 1 },
    { question: "L'ecosistema Sfera és únic, integral i totalment...?", answers: ["Desconnectat", "Connectat", "Aïllat", "Separat"], correct: 1 },
    { question: "Sfera ofereix eines per al...de la farmàcia?", answers: ["Tancament", "Creixement", "Manteniment mínim", "Reducció"], correct: 1 },
    { question: "Sfera permet prendre decisions...?", answers: ["Aleatòries", "Estratègiques", "Sense dades", "Impulsives"], correct: 1 },
    { question: "Amb Sfera, la gestió de la farmàcia es...?", answers: ["Complica", "Simplifica", "Elimina", "Duplica"], correct: 1 },
    { question: "Sfera és accessible des de qualsevol lloc gràcies a...?", answers: ["Paper", "Cloud", "Disc dur", "USB"], correct: 1 },
    { question: "Les dades a Sfera estan protegides en un entorn...?", answers: ["Insegur", "Fiable i segur", "Obert", "Públic"], correct: 1 },
    { question: "Sfera transforma la gestió, l'atenció al pacient i...?", answers: ["Res més", "La presa de decisions", "Només les vendes", "Només l'estètica"], correct: 1 },
    { question: "L'ecosistema Sfera inclou solucions per a...?", answers: ["Només vendes", "Tot el que la farmàcia necessita", "Només estoc", "Només comptabilitat"], correct: 1 },
    { question: "Sfera és un sistema tecnològic per...la farmàcia?", answers: ["Complicar", "Acompanyar", "Confondre", "Limitar"], correct: 1 },
    { question: "Amb Sfera, pots gestionar la farmàcia amb eines...?", answers: ["Complexes", "Simples i intuïtives", "Antigues", "Incompatibles"], correct: 1 },
    // ACTIBIOS I ACOFARMA (20 preguntes)
    { question: "Actibios és un mayorista especialitzat en...?", answers: ["Genèrics", "Marques especialitzades", "Només alimentació", "Només cosmètica"], correct: 1 },
    { question: "Quin és l'eslògan d'Actibios?", answers: ["Salut per a tots", "D'especialista a especialista", "El primer ets tu", "Farmàcia natural"], correct: 1 },
    { question: "Actibios té el que...?", answers: ["Tothom té", "Tant busques", "No vols", "És barat"], correct: 1 },
    { question: "Actibios és líder en...?", answers: ["Preus baixos", "Marques especialitzades", "Genèrics", "Parafarmàcia"], correct: 1 },
    { question: "Actibios es va incorporar a Grup Fedefarma el...?", answers: ["2021", "2022", "2023", "2024"], correct: 2 },
    { question: "Acofarma és...?", answers: ["Un producte", "La marca de la teva cooperativa", "Un servei extern", "Una revista"], correct: 1 },
    { question: "Acofarma ofereix fins a...de descompte?", answers: ["30%", "40%", "50%", "60%"], correct: 2 },
    { question: "Acofarma ofereix fins a...de marge?", answers: ["40%", "45%", "50%", "55%"], correct: 3 },
    { question: "Quants models comercials ofereix Acofarma?", answers: ["1", "2", "3", "4"], correct: 2 },
    { question: "Els models d'Acofarma són...entre si?", answers: ["Incompatibles", "Combinables", "Excloents", "Temporals"], correct: 1 },
    { question: "Acofarma busca oferir...?", answers: ["Preus alts", "Les millors condicions", "Menys varietat", "Només bàsics"], correct: 1 },
    { question: "Els models Acofarma permeten treure màxima...?", answers: ["Complicació", "Rendibilitat", "Confusió", "Lentitud"], correct: 1 },
    { question: "Acofarma és la marca de la cooperativa...?", answers: ["Externa", "Fedefarma", "Internacional", "Privada"], correct: 1 },
    { question: "Un dels models d'Acofarma es diu 'Més...'?", answers: ["Barat", "Descompte", "Ràpid", "Fàcil"], correct: 1 },
    { question: "Un altre model d'Acofarma es diu 'Més...'?", answers: ["Descompte", "Rendibilitat", "Quantitat", "Volum"], correct: 1 },
    { question: "Amb Acofarma, les farmàcies poden aconseguir...?", answers: ["Menys marge", "Millors marges", "Menys varietat", "Menys qualitat"], correct: 1 },
    { question: "Acofarma ofereix condicions...?", answers: ["Normals", "Excel·lents", "Bàsiques", "Limitades"], correct: 1 },
    { question: "Els models d'Acofarma són flexibles i...?", answers: ["Rígids", "Combinables", "Únics", "Obligatoris"], correct: 1 },
    { question: "Acofarma és part de...?", answers: ["Una empresa privada", "La cooperativa Fedefarma", "Un grup internacional", "Una franquícia"], correct: 1 },
    { question: "Les condicions d'Acofarma beneficien...?", answers: ["Només grans farmàcies", "Totes les farmàcies sòcies", "Només petites farmàcies", "Només noves farmàcies"], correct: 1 },
    // ALTRES SERVEIS I SOLUCIONS (30 preguntes)
    { question: "Ortoteca ajuda a potenciar...a la farmàcia?", answers: ["Cosmètica", "Ortopèdia", "Nutrició", "Infantil"], correct: 1 },
    { question: "Com descriu Ortoteca el seu servei?", answers: ["Complicat", "La manera més fàcil", "Difícil", "Costós"], correct: 1 },
    { question: "Business Intelligence ofereix indicadors de...?", answers: ["Només vendes", "Negoci i comparativa de mercat", "Només costos", "Només estoc"], correct: 1 },
    { question: "Nextera és una plataforma...integrada?", answers: ["ERP", "CRM", "Cloud", "Local"], correct: 1 },
    { question: "Nextera ajuda a gestionar les...amb clients?", answers: ["Factures", "Relacions", "Comandes", "Devolucions"], correct: 1 },
    { question: "Rúbrica s'encarrega de...?", answers: ["Formació", "Compravenda de farmàcies", "Distribució", "Màrqueting"], correct: 1 },
    { question: "Corintia ofereix serveis de...?", answers: ["Distribució", "Disseny de farmàcies", "Formació", "Comptabilitat"], correct: 1 },
    { question: "Què transforma Corintia?", answers: ["Els productes", "L'espai físic de la farmàcia", "El personal", "Les comandes"], correct: 1 },
    { question: "Iconika és una comunitat de farmacèutics...?", answers: ["Jubilats", "Emprenedors", "Novells", "Estudiants"], correct: 1 },
    { question: "Les Solucions 360º són...?", answers: ["Parcials", "Integrals", "Bàsiques", "Limitades"], correct: 1 },
    { question: "Les Solucions 360º acompanyen la farmàcia de manera...?", answers: ["Parcial", "Integral", "Ocasional", "Mínima"], correct: 1 },
    { question: "Les Solucions 360º són...?", answers: ["Tradicionals", "Innovadores", "Antigues", "Bàsiques"], correct: 1 },
    { question: "Quina és la filosofia de les Solucions 360º?", answers: ["Vendre més", "Acompanyar en el creixement", "Reduir costos", "Simplificar"], correct: 1 },
    { question: "Mentora forma part de l'àrea de...?", answers: ["Distribució", "Formació i serveis", "Laboratori", "Logística"], correct: 1 },
    { question: "Què ofereix Mentora?", answers: ["Només productes", "Formació i acompanyament", "Només distribució", "Només tecnologia"], correct: 1 },
    { question: "El Business Intelligence permet...el negoci?", answers: ["Complicar", "Analitzar", "Ignorar", "Tancar"], correct: 1 },
    { question: "Amb el BI pots comparar la teva farmàcia amb...?", answers: ["Ningú", "El mercat", "Només locals", "Hospitals"], correct: 1 },
    { question: "Nextera és una eina per millorar...?", answers: ["Només vendes", "La relació amb clients", "Només l'estoc", "Només els preus"], correct: 1 },
    { question: "Rúbrica facilita la...de farmàcies?", answers: ["Decoració", "Compravenda", "Ampliació", "Tancament"], correct: 1 },
    { question: "Corintia ajuda amb el...de la farmàcia?", answers: ["Tancament", "Disseny", "Tancament", "Manteniment"], correct: 1 },
    { question: "Ortoteca fa més fàcil potenciar quin departament?", answers: ["Cosmètica", "Ortopèdia", "Dietètica", "Infantil"], correct: 1 },
    { question: "Les solucions de Fedefarma cobreixen...el cicle de vida?", answers: ["Part del", "Tot", "Només l'inici", "Només el final"], correct: 1 },
    { question: "Fedefarma ofereix solucions per a...?", answers: ["Només grans", "Farmàcies de qualsevol mida", "Només petites", "Només urbanes"], correct: 1 },
    { question: "Les eines de Fedefarma són...?", answers: ["Complexes", "Innovadores", "Antigues", "Limitades"], correct: 1 },
    { question: "Fedefarma acompanya en el creixement amb...?", answers: ["Només paraules", "Solucions reals", "Només publicitat", "Res concret"], correct: 1 },
    { question: "El portafoli de serveis de Fedefarma és...?", answers: ["Limitat", "Ampli i integral", "Bàsic", "Reduït"], correct: 1 },
    { question: "Les solucions de Fedefarma estan...?", answers: ["Desconnectades", "Integrades", "Aïllades", "Separades"], correct: 1 },
    { question: "Fedefarma ofereix eines per a la...de la farmàcia?", answers: ["Reducció", "Transformació digital", "Manteniment bàsic", "Tancament"], correct: 1 },
    { question: "Els serveis de Fedefarma busquen...la farmàcia?", answers: ["Complicar", "Empoderar", "Limitar", "Confondre"], correct: 1 },
    { question: "Fedefarma ofereix solucions per millorar tant gestió com...?", answers: ["Res més", "Atenció al pacient", "Només vendes", "Només imatge"], correct: 1 },
    // PREGUNTES SOBRE COMPROMÍS I ESTRATÈGIA (20 preguntes més)
    { question: "La distribució de Fedefarma es guia per tres conceptes: equitat, seguretat i...?", answers: ["Rapidesa", "Sostenibilitat", "Economia", "Volum"], correct: 1 },
    { question: "Fedefarma col·labora amb més de 1200 laboratoris per oferir...?", answers: ["Preus baixos", "Gamma completa de productes", "Menys varietat", "Només genèrics"], correct: 1 },
    { question: "L'objectiu de Fedefarma és que la salut arribi cada dia amb màxima equitat, seguretat i...?", answers: ["Rapidesa", "Sostenibilitat", "Quantitat", "Publicitat"], correct: 1 },
    { question: "Fedefarma inverteix contínuament en innovació per garantir...?", answers: ["Més beneficis", "Millor servei als pacients", "Menys feina", "Més publicitat"], correct: 1 },
    { question: "El model de distribució de Fedefarma és el més...del mercat?", answers: ["Barat", "Rendible i personalitzat", "Antic", "Simple"], correct: 1 },
    { question: "Fedefarma valora la...de les farmàcies a la cooperativa?", answers: ["Mida", "Dedicació", "Ubicació", "Antiguitat"], correct: 1 },
    { question: "Quants laboratoris aproximadament col·laboren amb Fedefarma?", answers: ["500", "800", "Més de 1200", "2000"], correct: 2 },
    { question: "La xarxa logística de Fedefarma és...a nivell del sector?", answers: ["Normal", "De referència", "Bàsica", "Petita"], correct: 1 },
    { question: "Fedefarma disposa d'un centre logístic a cadascuna de les províncies de Catalunya i...?", answers: ["Aragó", "Comunitat Valenciana", "Múrcia", "Andalusia"], correct: 1 },
    { question: "L'objectiu dels centres repartits és arribar de forma més...?", answers: ["Econòmica", "Ràpida", "Discreta", "Visible"], correct: 1 },
    { question: "El compromís de Fedefarma amb la sostenibilitat es reflecteix en...?", answers: ["Només publicitat", "La seva operativa diària", "Res concret", "Només el web"], correct: 1 },
    { question: "Fedefarma busca que els pacients...?", answers: ["Paguin més", "Tinguin accés a allò que necessiten", "Esperin més", "Comprin menys"], correct: 1 },
    { question: "La innovació als centres logístics garanteix...?", answers: ["Més beneficis", "Millor servei als pacients", "Menys personal", "Menys productes"], correct: 1 },
    { question: "El model personalitzat de Fedefarma s'adapta a...?", answers: ["Només grans farmàcies", "Cada farmàcia", "Només urbanes", "Només rurals"], correct: 1 },
    { question: "La dedicació de les farmàcies a la cooperativa es tradueix en...?", answers: ["Obligacions", "Millors condicions", "Més feina", "Menys serveis"], correct: 1 },
    { question: "Fedefarma treballa perquè les farmàcies...a l'abast allò necessari?", answers: ["No tinguin", "Sempre tinguin", "A vegades tinguin", "Rarament tinguin"], correct: 1 },
    { question: "La gamma completa de productes de Fedefarma és possible gràcies a...?", answers: ["Pocs proveïdors", "Col·laboració amb +1200 labs", "Només marca pròpia", "Importació"], correct: 1 },
    { question: "La salut arriba a la farmàcia cada dia amb màxima...?", answers: ["Publicitat", "Equitat, seguretat i sostenibilitat", "Velocitat", "Quantitat"], correct: 1 },
    { question: "Fedefarma és més que un distribuïdor, és un...?", answers: ["Venedor", "Soci estratègic", "Proveïdor bàsic", "Intermediari"], correct: 1 },
    { question: "El compromís de Fedefarma és amb la farmàcia i...?", answers: ["Els competidors", "Els pacients", "Només els socis", "Els inversors"], correct: 1 },
];

// Funció per barrejar arrays (Fisher-Yates shuffle)
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

// Game state
let questions = [];
let currentQuestion = 0;
let score = 0;
let playerName = '';

// DOM Elements - Screens
const nameScreen = document.getElementById('name-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const rankingScreen = document.getElementById('ranking-screen');

// DOM Elements - Name screen
const playerNameInput = document.getElementById('player-name');
const nameError = document.getElementById('name-error');
const startGameBtn = document.getElementById('start-game-btn');
const viewRankingBtn = document.getElementById('view-ranking-btn');

// DOM Elements - Quiz screen
const currentPlayerEl = document.getElementById('current-player');
const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const questionNumberEl = document.getElementById('question-number');
const scoreEl = document.getElementById('score');
const progressEl = document.getElementById('progress');

// DOM Elements - Result screen
const resultEmoji = document.getElementById('result-emoji');
const resultTitle = document.getElementById('result-title');
const resultScore = document.getElementById('result-score');
const resultMessage = document.getElementById('result-message');
const savingIndicator = document.getElementById('saving-indicator');
const restartBtn = document.getElementById('restart-btn');
const rankingBtn = document.getElementById('ranking-btn');

// DOM Elements - Ranking screen
const rankingList = document.getElementById('ranking-list');
const playBtn = document.getElementById('play-btn');
const backBtn = document.getElementById('back-btn');

// Helper functions
function showScreen(screen) {
    [nameScreen, quizScreen, resultScreen, rankingScreen].forEach(s => {
        if (s) s.classList.remove('active');
    });
    if (screen) screen.classList.add('active');
}

function formatDate(timestamp) {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    return `${day}/${month}/${year}`;
}

// Firebase functions
async function saveScore(name, points) {
    try {
        const scoresRef = database.ref('scores');
        await scoresRef.push({
            name: name,
            score: points,
            date: Date.now()
        });
        return true;
    } catch (error) {
        console.error('Error saving score:', error);
        return false;
    }
}

async function getTopScores(limit = 10) {
    try {
        const scoresRef = database.ref('scores');
        const snapshot = await scoresRef.orderByChild('score').limitToLast(limit).once('value');
        const scores = [];
        const playerBestScore = localStorage.getItem('playerBestScore') || 0;
        
        snapshot.forEach(child => {
            scores.push({
                id: child.key,
                ...child.val()
            });
        });
        // Sort descending by score
        return scores.sort((a, b) => b.score - a.score);
    } catch (error) {
        console.error('Error getting scores:', error);
        return [];
    }
}

async function displayRanking() {
    rankingList.innerHTML = '<div class="loading">Carregant ranking...</div>';
    
    const scores = await getTopScores();
    
    if (scores.length === 0) {
        rankingList.innerHTML = '<div class="no-scores">Encara no hi ha puntuacions.<br>Sigues el primer a jugar! 🎮</div>';
        return;
    }
    
    rankingList.innerHTML = scores.map((entry, index) => {
        let positionClass = '';
        let medal = '';
        if (index === 0) { positionClass = 'gold'; medal = '🥇'; }
        else if (index === 1) { positionClass = 'silver'; medal = '🥈'; }
        else if (index === 2) { positionClass = 'bronze'; medal = '🥉'; }
        
        return `
            <div class="ranking-item">
                <span class="ranking-position ${positionClass}">${medal}</span>
                <span class="ranking-name">${entry.name}</span>
                <span class="ranking-score">${entry.score}/25</span>
                <span class="ranking-date">${formatDate(entry.date)}</span>
            </div>
        `;
    }).join('');
}

// Game functions
function validateName() {
    const name = playerNameInput.value.trim();
    if (name.length < 2) {
        nameError.textContent = 'El nom ha de tenir almenys 2 caràcters';
        return false;
    }
    if (name.length > 20) {
        nameError.textContent = 'El nom no pot tenir més de 20 caràcters';
        return false;
    }
    nameError.textContent = '';
    return true;
}

function startGame() {
    if (!validateName()) return;
    
    playerName = playerNameInput.value.trim();
    questions = getRandomQuestions(25);
    currentQuestion = 0;
    score = 0;
    
    currentPlayerEl.textContent = playerName;
    showScreen(quizScreen);
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    questionNumberEl.textContent = `Pregunta ${currentQuestion + 1}/${questions.length}`;
    scoreEl.textContent = `Punts: ${score}`;
    progressEl.style.width = `${((currentQuestion) / questions.length) * 100}%`;
    
    // Barrejar les respostes per evitar patrons previsibles
    const answersWithIndex = q.answers.map((answer, index) => ({ answer, index }));
    const shuffledAnswers = shuffleArray(answersWithIndex);
    
    answersEl.innerHTML = '';
    shuffledAnswers.forEach((item, displayIndex) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = item.answer;
        btn.addEventListener('click', () => selectAnswer(item.index, displayIndex, shuffledAnswers));
        answersEl.appendChild(btn);
    });
}

function selectAnswer(originalIndex, displayIndex, shuffledAnswers) {
    const q = questions[currentQuestion];
    const buttons = answersEl.querySelectorAll('.answer-btn');
    
    buttons.forEach(btn => btn.disabled = true);
    
    // Comprovar si la resposta seleccionada és correcta
    if (originalIndex === q.correct) {
        buttons[displayIndex].classList.add('correct');
        score++;
    } else {
        buttons[displayIndex].classList.add('incorrect');
        // Trobar la posició de la resposta correcta en les respostes barrejades
        const correctDisplayIndex = shuffledAnswers.findIndex(item => item.index === q.correct);
        buttons[correctDisplayIndex].classList.add('correct');
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

async function showResults() {
    progressEl.style.width = '100%';
    
    const percentage = (score / questions.length) * 100;
    
    // Load and update personal best score from localStorage
    const playerBestScore = parseInt(localStorage.getItem('playerBestScore')) || 0;
    const isNewBestScore = score > playerBestScore;
    if (isNewBestScore) {
        localStorage.setItem('playerBestScore', score.toString());
    }
    
    let message = '';
    if (percentage === 100) {
        resultEmoji.textContent = '🏆';
        resultTitle.textContent = 'Expert en Fedefarma!';
        message = `${playerName}, coneixes a fons el Grup Fedefarma!`;
    } else if (percentage >= 70) {
        resultEmoji.textContent = '💊';
        resultTitle.textContent = 'Molt bé!';
        message = `${playerName}, tens excel·lents coneixements sobre Fedefarma!`;
    } else if (percentage >= 50) {
        resultEmoji.textContent = '👍';
        resultTitle.textContent = 'Ben fet!';
        message = `${playerName}, vas pel bon camí, segueix aprenent!`;
    } else {
        resultEmoji.textContent = '📚';
        resultTitle.textContent = 'A estudiar!';
        message = `${playerName}, visita grupfedefarma.com per saber-ne més.`;
    }
    
    // Show score with /25
    resultScore.textContent = `${score} de ${questions.length} correctes`;
    
    // Show personal best score
    const bestScoreDiv = document.createElement('div');
    bestScoreDiv.style.marginTop = '10px';
    bestScoreDiv.style.padding = '10px';
    bestScoreDiv.style.background = '#fef0f6';
    bestScoreDiv.style.borderRadius = '10px';
    bestScoreDiv.style.color = '#e6007e';
    bestScoreDiv.innerHTML = `<strong>La teva millor puntuació: ${playerBestScore}/25</strong>`;
    resultScore.appendChild(bestScoreDiv);
    
    showScreen(resultScreen);
    
    // Save score to Firebase
    savingIndicator.classList.add('visible');
    const saved = await saveScore(playerName, score);
    savingIndicator.classList.remove('visible');
    
    if (!saved) {
        savingIndicator.textContent = 'No s\'ha pogut guardar la puntuació';
        savingIndicator.classList.add('visible');
    }
}

function goToNameScreen() {
    showScreen(nameScreen);
}

async function goToRanking() {
    showScreen(rankingScreen);
    await displayRanking();
}

// Event listeners
startGameBtn.addEventListener('click', startGame);
viewRankingBtn.addEventListener('click', goToRanking);
restartBtn.addEventListener('click', goToNameScreen);
rankingBtn.addEventListener('click', goToRanking);
playBtn.addEventListener('click', startGame);
backBtn.addEventListener('click', goToNameScreen);

playerNameInput.addEventListener('input', () => {
    nameError.textContent = '';
});

playerNameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        startGame();
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    showScreen(nameScreen);
});
