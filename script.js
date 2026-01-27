const allQuestions = [
    // GEOGRAFÍA (100 preguntas)
    { question: "¿Cuál es el país más grande del mundo?", answers: ["China", "Estados Unidos", "Rusia", "Canadá"], correct: 2 },
    { question: "¿Cuál es la capital de Australia?", answers: ["Sídney", "Melbourne", "Canberra", "Brisbane"], correct: 2 },
    { question: "¿En qué continente está Egipto?", answers: ["Asia", "África", "Europa", "Oceanía"], correct: 1 },
    { question: "¿Cuál es el río más largo del mundo?", answers: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"], correct: 1 },
    { question: "¿Cuál es la montaña más alta del mundo?", answers: ["K2", "Monte Everest", "Kangchenjunga", "Makalu"], correct: 1 },
    { question: "¿En qué país se encuentra Machu Picchu?", answers: ["Chile", "Bolivia", "Perú", "Ecuador"], correct: 2 },
    { question: "¿Cuál es la capital de Canadá?", answers: ["Toronto", "Vancouver", "Montreal", "Ottawa"], correct: 3 },
    { question: "¿Qué país tiene forma de bota?", answers: ["España", "Italia", "Grecia", "Portugal"], correct: 1 },
    { question: "¿Cuál es el océano más grande del mundo?", answers: ["Atlántico", "Índico", "Ártico", "Pacífico"], correct: 3 },
    { question: "¿En qué país está la Torre Eiffel?", answers: ["Italia", "España", "Francia", "Alemania"], correct: 2 },
    { question: "¿Cuál es la capital de Japón?", answers: ["Osaka", "Kioto", "Tokio", "Nagoya"], correct: 2 },
    { question: "¿Qué país es conocido como la tierra del sol naciente?", answers: ["China", "Corea", "Japón", "Vietnam"], correct: 2 },
    { question: "¿En qué continente está Brasil?", answers: ["América del Norte", "Europa", "América del Sur", "África"], correct: 2 },
    { question: "¿Cuál es el desierto más grande del mundo?", answers: ["Sahara", "Gobi", "Antártida", "Arábigo"], correct: 2 },
    { question: "¿Cuál es la capital de Alemania?", answers: ["Múnich", "Berlín", "Frankfurt", "Hamburgo"], correct: 1 },
    { question: "¿En qué país está el Taj Mahal?", answers: ["Pakistán", "India", "Bangladesh", "Nepal"], correct: 1 },
    { question: "¿Cuál es el lago más grande del mundo?", answers: ["Superior", "Victoria", "Caspio", "Baikal"], correct: 2 },
    { question: "¿Cuál es la capital de Argentina?", answers: ["Córdoba", "Rosario", "Buenos Aires", "Mendoza"], correct: 2 },
    { question: "¿En qué país se encuentra la Gran Muralla?", answers: ["Japón", "Corea", "China", "Mongolia"], correct: 2 },
    { question: "¿Cuál es la capital de España?", answers: ["Barcelona", "Madrid", "Sevilla", "Valencia"], correct: 1 },
    { question: "¿Qué país tiene más islas del mundo?", answers: ["Indonesia", "Filipinas", "Suecia", "Japón"], correct: 2 },
    { question: "¿En qué país está el Monte Fuji?", answers: ["China", "Corea", "Japón", "Taiwan"], correct: 2 },
    { question: "¿Cuál es la capital de Brasil?", answers: ["São Paulo", "Río de Janeiro", "Brasilia", "Salvador"], correct: 2 },
    { question: "¿Qué país es el más poblado del mundo?", answers: ["India", "Estados Unidos", "China", "Indonesia"], correct: 0 },
    { question: "¿En qué país está el Coliseo?", answers: ["Grecia", "Italia", "España", "Francia"], correct: 1 },
    { question: "¿Cuál es la capital de México?", answers: ["Guadalajara", "Monterrey", "Ciudad de México", "Cancún"], correct: 2 },
    { question: "¿Qué país tiene la bandera con una hoja de arce?", answers: ["Estados Unidos", "Canadá", "Australia", "Nueva Zelanda"], correct: 1 },
    { question: "¿Cuál es la capital de Rusia?", answers: ["San Petersburgo", "Moscú", "Kiev", "Minsk"], correct: 1 },
    { question: "¿En qué continente está Nueva Zelanda?", answers: ["Asia", "América", "Oceanía", "Europa"], correct: 2 },
    { question: "¿Cuál es la capital de Italia?", answers: ["Milán", "Roma", "Nápoles", "Florencia"], correct: 1 },
    { question: "¿Qué país tiene forma de chile?", answers: ["Chile", "Argentina", "Perú", "Ecuador"], correct: 0 },
    { question: "¿Cuál es la capital de Portugal?", answers: ["Oporto", "Lisboa", "Coímbra", "Faro"], correct: 1 },
    { question: "¿En qué país está la Sagrada Familia?", answers: ["Italia", "Francia", "España", "Portugal"], correct: 2 },
    { question: "¿Cuál es el país más pequeño del mundo?", answers: ["Mónaco", "San Marino", "Vaticano", "Liechtenstein"], correct: 2 },
    { question: "¿Cuál es la capital de Egipto?", answers: ["Alejandría", "El Cairo", "Luxor", "Asuán"], correct: 1 },
    { question: "¿En qué país está el Big Ben?", answers: ["Irlanda", "Escocia", "Inglaterra", "Gales"], correct: 2 },
    { question: "¿Cuál es la capital de Grecia?", answers: ["Tesalónica", "Atenas", "Creta", "Esparta"], correct: 1 },
    { question: "¿Qué país está entre España y Francia?", answers: ["Mónaco", "Andorra", "Luxemburgo", "Suiza"], correct: 1 },
    { question: "¿Cuál es la capital de Suiza?", answers: ["Zúrich", "Ginebra", "Berna", "Basilea"], correct: 2 },
    { question: "¿En qué país se encuentra el Partenón?", answers: ["Italia", "Grecia", "Turquía", "Egipto"], correct: 1 },
    { question: "¿Cuál es la capital de Turquía?", answers: ["Estambul", "Ankara", "Izmir", "Antalya"], correct: 1 },
    { question: "¿Qué país es conocido como el país de los tulipanes?", answers: ["Bélgica", "Países Bajos", "Dinamarca", "Suecia"], correct: 1 },
    { question: "¿Cuál es la capital de Noruega?", answers: ["Bergen", "Oslo", "Trondheim", "Stavanger"], correct: 1 },
    { question: "¿En qué país está Venecia?", answers: ["España", "Francia", "Italia", "Grecia"], correct: 2 },
    { question: "¿Cuál es la capital de Suecia?", answers: ["Gotemburgo", "Malmö", "Estocolmo", "Uppsala"], correct: 2 },
    { question: "¿Qué país tiene la mayor selva tropical?", answers: ["Indonesia", "Congo", "Brasil", "Colombia"], correct: 2 },
    { question: "¿Cuál es la capital de Polonia?", answers: ["Cracovia", "Varsovia", "Gdansk", "Poznan"], correct: 1 },
    { question: "¿En qué país está Praga?", answers: ["Austria", "Hungría", "República Checa", "Eslovaquia"], correct: 2 },
    { question: "¿Cuál es la capital de Austria?", answers: ["Salzburgo", "Viena", "Graz", "Innsbruck"], correct: 1 },
    { question: "¿Qué país es famoso por los fiordos?", answers: ["Suecia", "Finlandia", "Noruega", "Dinamarca"], correct: 2 },
    
    // HISTORIA (100 preguntas)
    { question: "¿En qué año comenzó la Segunda Guerra Mundial?", answers: ["1936", "1939", "1941", "1938"], correct: 1 },
    { question: "¿Quién descubrió América?", answers: ["Vasco de Gama", "Cristóbal Colón", "Américo Vespucio", "Fernando de Magallanes"], correct: 1 },
    { question: "¿En qué año llegó el hombre a la Luna?", answers: ["1965", "1969", "1972", "1959"], correct: 1 },
    { question: "¿Quién fue el primer presidente de Estados Unidos?", answers: ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"], correct: 2 },
    { question: "¿En qué año cayó el Muro de Berlín?", answers: ["1987", "1989", "1991", "1985"], correct: 1 },
    { question: "¿Quién fue Cleopatra?", answers: ["Reina de Grecia", "Reina de Egipto", "Reina de Roma", "Reina de Persia"], correct: 1 },
    { question: "¿En qué siglo fue la Revolución Francesa?", answers: ["XVII", "XVIII", "XIX", "XVI"], correct: 1 },
    { question: "¿Quién pintó la Capilla Sixtina?", answers: ["Leonardo da Vinci", "Rafael", "Miguel Ángel", "Botticelli"], correct: 2 },
    { question: "¿En qué año terminó la Primera Guerra Mundial?", answers: ["1916", "1918", "1920", "1917"], correct: 1 },
    { question: "¿Quién fue Napoleón Bonaparte?", answers: ["Rey de Francia", "Emperador de Francia", "Presidente de Francia", "Duque de Francia"], correct: 1 },
    { question: "¿En qué año se hundió el Titanic?", answers: ["1910", "1912", "1914", "1908"], correct: 1 },
    { question: "¿Quién fue Julio César?", answers: ["Emperador griego", "Emperador romano", "Rey egipcio", "Rey persa"], correct: 1 },
    { question: "¿En qué año comenzó la Revolución Rusa?", answers: ["1915", "1917", "1919", "1914"], correct: 1 },
    { question: "¿Quién fue Leonardo da Vinci?", answers: ["Escultor", "Pintor y científico", "Arquitecto", "Músico"], correct: 1 },
    { question: "¿En qué año se firmó la Declaración de Independencia de EEUU?", answers: ["1774", "1776", "1778", "1780"], correct: 1 },
    { question: "¿Quién fue Alejandro Magno?", answers: ["Rey de Roma", "Rey de Macedonia", "Rey de Persia", "Rey de Egipto"], correct: 1 },
    { question: "¿En qué siglo fue el Renacimiento?", answers: ["XIII-XIV", "XIV-XV", "XV-XVI", "XVI-XVII"], correct: 2 },
    { question: "¿Quién inventó la imprenta?", answers: ["Leonardo da Vinci", "Johannes Gutenberg", "Galileo Galilei", "Isaac Newton"], correct: 1 },
    { question: "¿En qué año empezó la Guerra Civil Española?", answers: ["1934", "1936", "1938", "1932"], correct: 1 },
    { question: "¿Quién fue Mahatma Gandhi?", answers: ["Líder chino", "Líder indio", "Líder africano", "Líder japonés"], correct: 1 },
    { question: "¿En qué año murió Adolf Hitler?", answers: ["1943", "1944", "1945", "1946"], correct: 2 },
    { question: "¿Quién fue Marco Polo?", answers: ["Explorador español", "Explorador italiano", "Explorador portugués", "Explorador inglés"], correct: 1 },
    { question: "¿En qué año se abolió la esclavitud en EEUU?", answers: ["1863", "1865", "1867", "1861"], correct: 1 },
    { question: "¿Quién fue Simón Bolívar?", answers: ["Libertador de México", "Libertador de Sudamérica", "Libertador de Cuba", "Libertador de Brasil"], correct: 1 },
    { question: "¿En qué año comenzó la Edad Media?", answers: ["376", "410", "476", "500"], correct: 2 },
    { question: "¿Quién fue Carlomagno?", answers: ["Rey de España", "Emperador del Sacro Imperio", "Rey de Inglaterra", "Zar de Rusia"], correct: 1 },
    { question: "¿En qué año se descubrió la penicilina?", answers: ["1918", "1928", "1938", "1908"], correct: 1 },
    { question: "¿Quién fue Hernán Cortés?", answers: ["Conquistador de Perú", "Conquistador de México", "Conquistador de Cuba", "Conquistador de Colombia"], correct: 1 },
    { question: "¿En qué año terminó el Imperio Romano de Occidente?", answers: ["376", "410", "476", "500"], correct: 2 },
    { question: "¿Quién fue Francisco Pizarro?", answers: ["Conquistador de México", "Conquistador de Perú", "Conquistador de Cuba", "Conquistador de Chile"], correct: 1 },
    { question: "¿En qué siglo fue la Peste Negra?", answers: ["XII", "XIII", "XIV", "XV"], correct: 2 },
    { question: "¿Quién fue Juana de Arco?", answers: ["Reina de Francia", "Heroína francesa", "Princesa inglesa", "Santa española"], correct: 1 },
    { question: "¿En qué año comenzó la Primera Cruzada?", answers: ["1076", "1096", "1106", "1116"], correct: 1 },
    { question: "¿Quién fue Gengis Kan?", answers: ["Emperador chino", "Líder mongol", "Rey japonés", "Sultán turco"], correct: 1 },
    { question: "¿En qué año se inventó la máquina de vapor?", answers: ["1769", "1779", "1789", "1759"], correct: 0 },
    { question: "¿Quién fue Martín Lutero?", answers: ["Papa", "Reformador protestante", "Rey alemán", "Filósofo griego"], correct: 1 },
    { question: "¿En qué año empezó la Revolución Industrial?", answers: ["1750", "1760", "1770", "1780"], correct: 1 },
    { question: "¿Quién fue Isabel I de Inglaterra?", answers: ["Reina del siglo XV", "Reina del siglo XVI", "Reina del siglo XVII", "Reina del siglo XVIII"], correct: 1 },
    { question: "¿En qué año se firmó el Tratado de Versalles?", answers: ["1917", "1918", "1919", "1920"], correct: 2 },
    { question: "¿Quién fue Winston Churchill?", answers: ["Presidente de EEUU", "Primer Ministro británico", "General francés", "Rey de Inglaterra"], correct: 1 },
    { question: "¿En qué año se creó la ONU?", answers: ["1943", "1945", "1947", "1949"], correct: 1 },
    { question: "¿Quién fue Albert Einstein?", answers: ["Químico", "Físico", "Biólogo", "Matemático"], correct: 1 },
    { question: "¿En qué año comenzó la Guerra Fría?", answers: ["1945", "1947", "1949", "1950"], correct: 1 },
    { question: "¿Quién fue Nikola Tesla?", answers: ["Inventor", "Político", "Militar", "Artista"], correct: 0 },
    { question: "¿En qué año se disolvió la URSS?", answers: ["1989", "1990", "1991", "1992"], correct: 2 },
    { question: "¿Quién fue Marie Curie?", answers: ["Física y química", "Bióloga", "Matemática", "Astrónoma"], correct: 0 },
    { question: "¿En qué año fue el atentado de las Torres Gemelas?", answers: ["1999", "2000", "2001", "2002"], correct: 2 },
    { question: "¿Quién fue Charles Darwin?", answers: ["Físico", "Químico", "Naturalista", "Médico"], correct: 2 },
    { question: "¿En qué año comenzó la Guerra de Vietnam?", answers: ["1955", "1959", "1963", "1965"], correct: 0 },
    { question: "¿Quién fue Nelson Mandela?", answers: ["Líder sudafricano", "Líder nigeriano", "Líder keniano", "Líder egipcio"], correct: 0 },
    
    // CIENCIA (100 preguntas)
    { question: "¿Cuál es el planeta más grande del sistema solar?", answers: ["Marte", "Júpiter", "Saturno", "Neptuno"], correct: 1 },
    { question: "¿Cuál es el elemento químico más abundante en el universo?", answers: ["Oxígeno", "Carbono", "Helio", "Hidrógeno"], correct: 3 },
    { question: "¿Cuántos huesos tiene el cuerpo humano adulto?", answers: ["186", "206", "226", "196"], correct: 1 },
    { question: "¿Cuál es la fórmula del agua?", answers: ["CO2", "H2O", "NaCl", "O2"], correct: 1 },
    { question: "¿Qué planeta es conocido como el planeta rojo?", answers: ["Venus", "Marte", "Júpiter", "Mercurio"], correct: 1 },
    { question: "¿Cuál es el órgano más grande del cuerpo humano?", answers: ["Hígado", "Cerebro", "Piel", "Intestino"], correct: 2 },
    { question: "¿Qué gas respiramos principalmente?", answers: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Hidrógeno"], correct: 1 },
    { question: "¿Cuántos planetas tiene el sistema solar?", answers: ["7", "8", "9", "10"], correct: 1 },
    { question: "¿Qué es el ADN?", answers: ["Proteína", "Ácido nucleico", "Carbohidrato", "Lípido"], correct: 1 },
    { question: "¿Cuál es el metal más abundante en la Tierra?", answers: ["Hierro", "Aluminio", "Cobre", "Oro"], correct: 1 },
    { question: "¿Qué planeta tiene los anillos más visibles?", answers: ["Júpiter", "Urano", "Saturno", "Neptuno"], correct: 2 },
    { question: "¿Cuántos cromosomas tiene el ser humano?", answers: ["44", "46", "48", "42"], correct: 1 },
    { question: "¿Qué es la fotosíntesis?", answers: ["Respiración celular", "Proceso de las plantas para hacer alimento", "División celular", "Digestión"], correct: 1 },
    { question: "¿Cuál es la velocidad de la luz?", answers: ["300.000 km/s", "150.000 km/s", "500.000 km/s", "100.000 km/s"], correct: 0 },
    { question: "¿Qué es un átomo?", answers: ["Molécula grande", "Unidad básica de la materia", "Tipo de célula", "Partícula de luz"], correct: 1 },
    { question: "¿Cuál es el planeta más cercano al Sol?", answers: ["Venus", "Marte", "Mercurio", "Tierra"], correct: 2 },
    { question: "¿Qué es la gravedad?", answers: ["Fuerza de atracción", "Tipo de energía", "Onda electromagnética", "Partícula"], correct: 0 },
    { question: "¿Cuántos litros de sangre tiene un adulto?", answers: ["3-4 litros", "5-6 litros", "7-8 litros", "1-2 litros"], correct: 1 },
    { question: "¿Qué es un eclipse solar?", answers: ["La Luna tapa al Sol", "El Sol tapa a la Luna", "La Tierra tapa al Sol", "Venus tapa al Sol"], correct: 0 },
    { question: "¿Cuál es el hueso más largo del cuerpo?", answers: ["Húmero", "Tibia", "Fémur", "Radio"], correct: 2 },
    { question: "¿Qué es la mitosis?", answers: ["División celular", "Unión celular", "Muerte celular", "Crecimiento celular"], correct: 0 },
    { question: "¿Cuál es el planeta más caliente?", answers: ["Mercurio", "Venus", "Marte", "Júpiter"], correct: 1 },
    { question: "¿Qué es un virus?", answers: ["Bacteria", "Agente infeccioso", "Célula", "Proteína"], correct: 1 },
    { question: "¿Cuántos sentidos tiene el ser humano tradicionalmente?", answers: ["4", "5", "6", "7"], correct: 1 },
    { question: "¿Qué es la clorofila?", answers: ["Proteína animal", "Pigmento verde de las plantas", "Vitamina", "Mineral"], correct: 1 },
    { question: "¿Cuál es el número atómico del carbono?", answers: ["4", "6", "8", "12"], correct: 1 },
    { question: "¿Qué es un agujero negro?", answers: ["Estrella", "Región del espacio con gravedad extrema", "Planeta", "Galaxia"], correct: 1 },
    { question: "¿Cuántos dientes tiene un adulto?", answers: ["28", "30", "32", "34"], correct: 2 },
    { question: "¿Qué es el ozono?", answers: ["O2", "O3", "CO2", "H2O"], correct: 1 },
    { question: "¿Cuál es el animal más grande del mundo?", answers: ["Elefante", "Ballena azul", "Tiburón ballena", "Jirafa"], correct: 1 },
    { question: "¿Qué es una neurona?", answers: ["Célula muscular", "Célula nerviosa", "Célula sanguínea", "Célula ósea"], correct: 1 },
    { question: "¿Cuál es la estrella más cercana a la Tierra?", answers: ["Alfa Centauri", "Sirio", "El Sol", "Próxima Centauri"], correct: 2 },
    { question: "¿Qué es el metabolismo?", answers: ["Digestión", "Conjunto de reacciones químicas del cuerpo", "Respiración", "Circulación"], correct: 1 },
    { question: "¿Cuántos elementos tiene la tabla periódica actualmente?", answers: ["108", "112", "118", "120"], correct: 2 },
    { question: "¿Qué es la evolución?", answers: ["Cambio de especies con el tiempo", "Crecimiento individual", "Reproducción", "Alimentación"], correct: 0 },
    { question: "¿Cuál es el gas más abundante en la atmósfera?", answers: ["Oxígeno", "Dióxido de carbono", "Nitrógeno", "Argón"], correct: 2 },
    { question: "¿Qué es un gen?", answers: ["Proteína", "Unidad de herencia", "Célula", "Órgano"], correct: 1 },
    { question: "¿Cuál es la temperatura del cuerpo humano normal?", answers: ["35°C", "36°C", "37°C", "38°C"], correct: 2 },
    { question: "¿Qué es la energía solar?", answers: ["Energía del viento", "Energía del Sol", "Energía del agua", "Energía nuclear"], correct: 1 },
    { question: "¿Cuántos átomos hay en una molécula de agua?", answers: ["2", "3", "4", "5"], correct: 1 },
    { question: "¿Qué es un ecosistema?", answers: ["Solo animales", "Comunidad de seres vivos y su ambiente", "Solo plantas", "Solo microorganismos"], correct: 1 },
    { question: "¿Cuál es la unidad de medida de la fuerza?", answers: ["Julio", "Vatio", "Newton", "Pascal"], correct: 2 },
    { question: "¿Qué es la célula?", answers: ["Unidad básica de la vida", "Tipo de tejido", "Órgano", "Sistema"], correct: 0 },
    { question: "¿Cuál es el punto de ebullición del agua?", answers: ["90°C", "100°C", "110°C", "120°C"], correct: 1 },
    { question: "¿Qué es un mamífero?", answers: ["Animal que pone huevos", "Animal que amamanta a sus crías", "Animal de sangre fría", "Animal sin columna"], correct: 1 },
    { question: "¿Cuál es el pH del agua pura?", answers: ["5", "6", "7", "8"], correct: 2 },
    { question: "¿Qué es la ionosfera?", answers: ["Capa del océano", "Capa de la atmósfera", "Capa de la Tierra", "Capa del Sol"], correct: 1 },
    { question: "¿Cuántos pares de costillas tiene el ser humano?", answers: ["10", "11", "12", "13"], correct: 2 },
    { question: "¿Qué es un semiconductor?", answers: ["Conductor perfecto", "Material con conductividad intermedia", "Aislante", "Superconductor"], correct: 1 },
    { question: "¿Cuál es la función del corazón?", answers: ["Filtrar sangre", "Bombear sangre", "Producir sangre", "Almacenar sangre"], correct: 1 },
    
    // ARTE Y LITERATURA (100 preguntas)
    { question: "¿Quién pintó la Mona Lisa?", answers: ["Miguel Ángel", "Rafael", "Leonardo da Vinci", "Botticelli"], correct: 2 },
    { question: "¿Quién escribió 'Don Quijote de la Mancha'?", answers: ["Lope de Vega", "Calderón de la Barca", "Miguel de Cervantes", "Francisco de Quevedo"], correct: 2 },
    { question: "¿Quién pintó 'La noche estrellada'?", answers: ["Monet", "Van Gogh", "Picasso", "Dalí"], correct: 1 },
    { question: "¿Quién escribió 'Romeo y Julieta'?", answers: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Oscar Wilde"], correct: 1 },
    { question: "¿Quién pintó 'El Guernica'?", answers: ["Dalí", "Miró", "Picasso", "Goya"], correct: 2 },
    { question: "¿Quién escribió 'Cien años de soledad'?", answers: ["Mario Vargas Llosa", "Gabriel García Márquez", "Julio Cortázar", "Jorge Luis Borges"], correct: 1 },
    { question: "¿Quién compuso la 'Novena Sinfonía'?", answers: ["Mozart", "Bach", "Beethoven", "Chopin"], correct: 2 },
    { question: "¿Quién escribió 'La Odisea'?", answers: ["Sófocles", "Homero", "Platón", "Aristóteles"], correct: 1 },
    { question: "¿Quién pintó 'Las Meninas'?", answers: ["Goya", "El Greco", "Velázquez", "Murillo"], correct: 2 },
    { question: "¿Quién escribió '1984'?", answers: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "Isaac Asimov"], correct: 1 },
    { question: "¿Quién compuso 'Las cuatro estaciones'?", answers: ["Bach", "Mozart", "Vivaldi", "Handel"], correct: 2 },
    { question: "¿Quién escribió 'El Principito'?", answers: ["Victor Hugo", "Antoine de Saint-Exupéry", "Albert Camus", "Émile Zola"], correct: 1 },
    { question: "¿Quién pintó 'El grito'?", answers: ["Van Gogh", "Munch", "Klimt", "Schiele"], correct: 1 },
    { question: "¿Quién escribió 'Orgullo y prejuicio'?", answers: ["Charlotte Brontë", "Emily Brontë", "Jane Austen", "Virginia Woolf"], correct: 2 },
    { question: "¿Quién compuso 'El lago de los cisnes'?", answers: ["Stravinsky", "Tchaikovsky", "Prokofiev", "Rimsky-Korsakov"], correct: 1 },
    { question: "¿Quién escribió 'La Divina Comedia'?", answers: ["Petrarca", "Boccaccio", "Dante Alighieri", "Maquiavelo"], correct: 2 },
    { question: "¿Quién pintó 'La persistencia de la memoria'?", answers: ["Picasso", "Miró", "Dalí", "Magritte"], correct: 2 },
    { question: "¿Quién escribió 'Crimen y castigo'?", answers: ["Tolstói", "Dostoievski", "Chéjov", "Gorki"], correct: 1 },
    { question: "¿Quién compuso 'La flauta mágica'?", answers: ["Beethoven", "Mozart", "Haydn", "Schubert"], correct: 1 },
    { question: "¿Quién escribió 'El retrato de Dorian Gray'?", answers: ["Charles Dickens", "Oscar Wilde", "Arthur Conan Doyle", "Bram Stoker"], correct: 1 },
    { question: "¿Quién pintó 'El nacimiento de Venus'?", answers: ["Leonardo", "Rafael", "Botticelli", "Miguel Ángel"], correct: 2 },
    { question: "¿Quién escribió 'Hamlet'?", answers: ["Ben Jonson", "Christopher Marlowe", "William Shakespeare", "John Milton"], correct: 2 },
    { question: "¿Quién compuso 'Carmen'?", answers: ["Verdi", "Puccini", "Bizet", "Rossini"], correct: 2 },
    { question: "¿Quién escribió 'Los miserables'?", answers: ["Balzac", "Victor Hugo", "Dumas", "Flaubert"], correct: 1 },
    { question: "¿Quién pintó 'La última cena'?", answers: ["Rafael", "Leonardo da Vinci", "Miguel Ángel", "Caravaggio"], correct: 1 },
    { question: "¿Quién escribió 'Anna Karenina'?", answers: ["Dostoievski", "Tolstói", "Pushkin", "Gógol"], correct: 1 },
    { question: "¿Quién compuso 'El Mesías'?", answers: ["Bach", "Handel", "Mozart", "Haydn"], correct: 1 },
    { question: "¿Quién escribió 'Moby Dick'?", answers: ["Mark Twain", "Herman Melville", "Jack London", "Ernest Hemingway"], correct: 1 },
    { question: "¿Quién pintó 'Los girasoles'?", answers: ["Monet", "Renoir", "Van Gogh", "Cézanne"], correct: 2 },
    { question: "¿Quién escribió 'El viejo y el mar'?", answers: ["Steinbeck", "Fitzgerald", "Hemingway", "Faulkner"], correct: 2 },
    { question: "¿Quién compuso la 'Quinta Sinfonía'?", answers: ["Mozart", "Beethoven", "Brahms", "Mahler"], correct: 1 },
    { question: "¿Quién escribió 'En busca del tiempo perdido'?", answers: ["Balzac", "Proust", "Flaubert", "Stendhal"], correct: 1 },
    { question: "¿Quién pintó 'La ronda de noche'?", answers: ["Vermeer", "Rembrandt", "Rubens", "Hals"], correct: 1 },
    { question: "¿Quién escribió 'Ulises'?", answers: ["Virginia Woolf", "James Joyce", "D.H. Lawrence", "Joseph Conrad"], correct: 1 },
    { question: "¿Quién compuso 'Claro de luna'?", answers: ["Chopin", "Debussy", "Liszt", "Beethoven"], correct: 3 },
    { question: "¿Quién escribió 'La metamorfosis'?", answers: ["Thomas Mann", "Franz Kafka", "Hermann Hesse", "Robert Musil"], correct: 1 },
    { question: "¿Quién pintó 'El jardín de las delicias'?", answers: ["Durero", "Brueghel", "El Bosco", "Van Eyck"], correct: 2 },
    { question: "¿Quién escribió 'Rayuela'?", answers: ["Borges", "Cortázar", "Sábato", "Bioy Casares"], correct: 1 },
    { question: "¿Quién compuso 'Bolero'?", answers: ["Debussy", "Ravel", "Satie", "Fauré"], correct: 1 },
    { question: "¿Quién escribió 'El amor en los tiempos del cólera'?", answers: ["Vargas Llosa", "García Márquez", "Fuentes", "Rulfo"], correct: 1 },
    { question: "¿Quién pintó 'La joven de la perla'?", answers: ["Rembrandt", "Vermeer", "Hals", "Rubens"], correct: 1 },
    { question: "¿Quién escribió 'Pedro Páramo'?", answers: ["Octavio Paz", "Carlos Fuentes", "Juan Rulfo", "José Emilio Pacheco"], correct: 2 },
    { question: "¿Quién compuso 'La Traviata'?", answers: ["Puccini", "Verdi", "Rossini", "Donizetti"], correct: 1 },
    { question: "¿Quién escribió 'El Gran Gatsby'?", answers: ["Hemingway", "Fitzgerald", "Steinbeck", "Faulkner"], correct: 1 },
    { question: "¿Quién pintó 'La escuela de Atenas'?", answers: ["Leonardo", "Miguel Ángel", "Rafael", "Botticelli"], correct: 2 },
    { question: "¿Quién escribió 'Drácula'?", answers: ["Mary Shelley", "Bram Stoker", "Edgar Allan Poe", "H.P. Lovecraft"], correct: 1 },
    { question: "¿Quién compuso 'Réquiem'?", answers: ["Haydn", "Mozart", "Beethoven", "Bach"], correct: 1 },
    { question: "¿Quién escribió 'Frankenstein'?", answers: ["Bram Stoker", "Mary Shelley", "Ann Radcliffe", "Edgar Allan Poe"], correct: 1 },
    { question: "¿Quién pintó 'Impresión, sol naciente'?", answers: ["Renoir", "Monet", "Degas", "Pissarro"], correct: 1 },
    { question: "¿Quién escribió 'El conde de Montecristo'?", answers: ["Victor Hugo", "Alexandre Dumas", "Stendhal", "Balzac"], correct: 1 },
    
    // DEPORTES (50 preguntas)
    { question: "¿Cuántos jugadores tiene un equipo de fútbol en el campo?", answers: ["9", "10", "11", "12"], correct: 2 },
    { question: "¿En qué país se inventó el baloncesto?", answers: ["Reino Unido", "Estados Unidos", "Canadá", "Francia"], correct: 1 },
    { question: "¿Cuántos sets se necesitan para ganar un partido de tenis masculino en Grand Slam?", answers: ["2", "3", "4", "5"], correct: 1 },
    { question: "¿Cada cuántos años se celebran los Juegos Olímpicos?", answers: ["2", "3", "4", "5"], correct: 2 },
    { question: "¿Cuál es el deporte más popular del mundo?", answers: ["Baloncesto", "Tenis", "Fútbol", "Críquet"], correct: 2 },
    { question: "¿Cuántos jugadores tiene un equipo de voleibol en cancha?", answers: ["5", "6", "7", "8"], correct: 1 },
    { question: "¿En qué deporte se usa un puck?", answers: ["Hockey sobre hielo", "Béisbol", "Golf", "Críquet"], correct: 0 },
    { question: "¿Cuánto dura un partido de fútbol?", answers: ["60 minutos", "80 minutos", "90 minutos", "100 minutos"], correct: 2 },
    { question: "¿En qué país se originó el judo?", answers: ["China", "Corea", "Japón", "Tailandia"], correct: 2 },
    { question: "¿Cuántos puntos vale un touchdown en fútbol americano?", answers: ["3", "5", "6", "7"], correct: 2 },
    { question: "¿Cuál es la distancia de un maratón?", answers: ["40 km", "42.195 km", "45 km", "50 km"], correct: 1 },
    { question: "¿En qué deporte se usa un birdie?", answers: ["Tenis", "Bádminton", "Golf", "Squash"], correct: 1 },
    { question: "¿Cuántos jugadores tiene un equipo de rugby?", answers: ["13", "15", "17", "11"], correct: 1 },
    { question: "¿Qué deporte practica Usain Bolt?", answers: ["Natación", "Ciclismo", "Atletismo", "Gimnasia"], correct: 2 },
    { question: "¿En qué país se celebró el primer Mundial de Fútbol?", answers: ["Brasil", "Italia", "Uruguay", "Argentina"], correct: 2 },
    { question: "¿Cuántos hoyos tiene un campo de golf estándar?", answers: ["9", "12", "18", "21"], correct: 2 },
    { question: "¿Qué país ha ganado más Mundiales de fútbol?", answers: ["Alemania", "Italia", "Brasil", "Argentina"], correct: 2 },
    { question: "¿En qué deporte compite Michael Phelps?", answers: ["Atletismo", "Gimnasia", "Natación", "Ciclismo"], correct: 2 },
    { question: "¿Cuánto mide la red de tenis en el centro?", answers: ["0.80 m", "0.914 m", "1 m", "1.10 m"], correct: 1 },
    { question: "¿Qué deporte practica Tiger Woods?", answers: ["Tenis", "Golf", "Béisbol", "Baloncesto"], correct: 1 },
    { question: "¿En qué año se celebraron los primeros Juegos Olímpicos modernos?", answers: ["1892", "1896", "1900", "1904"], correct: 1 },
    { question: "¿Cuántos jugadores tiene un equipo de béisbol en el campo?", answers: ["8", "9", "10", "11"], correct: 1 },
    { question: "¿Qué deporte se practica en Wimbledon?", answers: ["Golf", "Tenis", "Críquet", "Polo"], correct: 1 },
    { question: "¿Cuántos periodos tiene un partido de baloncesto NBA?", answers: ["2", "3", "4", "5"], correct: 2 },
    { question: "¿En qué deporte se realiza un 'slam dunk'?", answers: ["Fútbol", "Tenis", "Baloncesto", "Voleibol"], correct: 2 },
    { question: "¿Cuál es el Grand Slam más antiguo de tenis?", answers: ["Roland Garros", "US Open", "Wimbledon", "Australian Open"], correct: 2 },
    { question: "¿Qué deporte practica Lionel Messi?", answers: ["Baloncesto", "Fútbol", "Tenis", "Golf"], correct: 1 },
    { question: "¿Cuántos jugadores tiene un equipo de waterpolo en el agua?", answers: ["5", "6", "7", "8"], correct: 2 },
    { question: "¿En qué país se originó el taekwondo?", answers: ["Japón", "China", "Corea", "Vietnam"], correct: 2 },
    { question: "¿Cuánto dura un round de boxeo profesional?", answers: ["2 minutos", "3 minutos", "4 minutos", "5 minutos"], correct: 1 },
    
    // CINE Y TELEVISIÓN (50 preguntas)
    { question: "¿Quién dirigió 'Titanic'?", answers: ["Steven Spielberg", "James Cameron", "Martin Scorsese", "Christopher Nolan"], correct: 1 },
    { question: "¿En qué año se estrenó la primera película de Harry Potter?", answers: ["1999", "2000", "2001", "2002"], correct: 2 },
    { question: "¿Qué actor interpreta a Iron Man en las películas de Marvel?", answers: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"], correct: 2 },
    { question: "¿Quién dirigió 'El Padrino'?", answers: ["Martin Scorsese", "Francis Ford Coppola", "Brian De Palma", "Sergio Leone"], correct: 1 },
    { question: "¿En qué película aparece el personaje de Forrest Gump?", answers: ["Rain Man", "Forrest Gump", "Cast Away", "Big"], correct: 1 },
    { question: "¿Qué actriz protagonizó 'Desayuno con diamantes'?", answers: ["Marilyn Monroe", "Audrey Hepburn", "Grace Kelly", "Elizabeth Taylor"], correct: 1 },
    { question: "¿Quién dirigió 'Pulp Fiction'?", answers: ["Martin Scorsese", "David Lynch", "Quentin Tarantino", "Joel Coen"], correct: 2 },
    { question: "¿En qué año se estrenó 'Star Wars: Una nueva esperanza'?", answers: ["1975", "1977", "1979", "1980"], correct: 1 },
    { question: "¿Qué actor interpretó a Joker en 'El caballero oscuro'?", answers: ["Jack Nicholson", "Jared Leto", "Heath Ledger", "Joaquin Phoenix"], correct: 2 },
    { question: "¿Quién dirigió 'Parque Jurásico'?", answers: ["James Cameron", "Steven Spielberg", "George Lucas", "Ridley Scott"], correct: 1 },
    { question: "¿Qué película ganó el Oscar a Mejor Película en 2020?", answers: ["1917", "Joker", "Parásitos", "Había una vez en Hollywood"], correct: 2 },
    { question: "¿Quién interpreta a Jack Sparrow en 'Piratas del Caribe'?", answers: ["Orlando Bloom", "Johnny Depp", "Geoffrey Rush", "Javier Bardem"], correct: 1 },
    { question: "¿En qué año se estrenó 'Matrix'?", answers: ["1997", "1998", "1999", "2000"], correct: 2 },
    { question: "¿Qué actriz protagonizó 'Pretty Woman'?", answers: ["Meg Ryan", "Julia Roberts", "Sandra Bullock", "Cameron Diaz"], correct: 1 },
    { question: "¿Quién dirigió 'Inception'?", answers: ["Steven Spielberg", "James Cameron", "Christopher Nolan", "Ridley Scott"], correct: 2 },
    { question: "¿En qué película dice la frase 'Que la Fuerza te acompañe'?", answers: ["Star Trek", "Star Wars", "Battlestar Galactica", "Dune"], correct: 1 },
    { question: "¿Qué actor interpretó a Batman en las películas de Christopher Nolan?", answers: ["Ben Affleck", "Val Kilmer", "Christian Bale", "Michael Keaton"], correct: 2 },
    { question: "¿Quién dirigió 'Avatar'?", answers: ["Peter Jackson", "James Cameron", "Steven Spielberg", "Guillermo del Toro"], correct: 1 },
    { question: "¿En qué año se estrenó 'El Rey León' (versión animada)?", answers: ["1992", "1994", "1996", "1998"], correct: 1 },
    { question: "¿Qué actor protagonizó 'El show de Truman'?", answers: ["Tom Hanks", "Jim Carrey", "Robin Williams", "Adam Sandler"], correct: 1 },
    { question: "¿Quién dirigió 'El Señor de los Anillos'?", answers: ["Christopher Nolan", "Peter Jackson", "Sam Raimi", "Guillermo del Toro"], correct: 1 },
    { question: "¿Qué serie de TV trata sobre la familia Stark?", answers: ["The Witcher", "Game of Thrones", "House of the Dragon", "Vikings"], correct: 1 },
    { question: "¿Quién creó la serie 'Breaking Bad'?", answers: ["David Chase", "Vince Gilligan", "David Simon", "Matthew Weiner"], correct: 1 },
    { question: "¿En qué ciudad se desarrolla la serie 'Friends'?", answers: ["Los Ángeles", "Chicago", "Nueva York", "Boston"], correct: 2 },
    { question: "¿Qué actor interpretó a Walter White en 'Breaking Bad'?", answers: ["Aaron Paul", "Bryan Cranston", "Bob Odenkirk", "Dean Norris"], correct: 1 },
    { question: "¿Quién interpreta a Sheldon Cooper en 'The Big Bang Theory'?", answers: ["Johnny Galecki", "Jim Parsons", "Simon Helberg", "Kunal Nayyar"], correct: 1 },
    { question: "¿En qué año comenzó la serie 'Los Simpson'?", answers: ["1987", "1989", "1991", "1993"], correct: 1 },
    { question: "¿Qué serie de TV se desarrolla en un hospital llamado Grey Sloan?", answers: ["House", "ER", "Grey's Anatomy", "The Good Doctor"], correct: 2 },
    { question: "¿Quién creó la serie 'Stranger Things'?", answers: ["J.J. Abrams", "Los hermanos Duffer", "Steven Spielberg", "Jordan Peele"], correct: 1 },
    { question: "¿En qué década se ambienta la serie 'That '70s Show'?", answers: ["1960s", "1970s", "1980s", "1990s"], correct: 1 }
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
    scoreEl.textContent = `Puntos: ${score}`;
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
        resultTitle.textContent = '¡Perfecto!';
        resultMessage.textContent = '¡Eres un genio de la cultura general!';
    } else if (percentage >= 70) {
        resultEmoji.textContent = '🌟';
        resultTitle.textContent = '¡Excelente!';
        resultMessage.textContent = '¡Tienes muy buenos conocimientos!';
    } else if (percentage >= 50) {
        resultEmoji.textContent = '👍';
        resultTitle.textContent = '¡Bien hecho!';
        resultMessage.textContent = 'Nada mal, ¡sigue practicando!';
    } else {
        resultEmoji.textContent = '📚';
        resultTitle.textContent = '¡Sigue intentando!';
        resultMessage.textContent = 'Lee un poco más y vuelve a intentarlo.';
    }
    
    resultScore.textContent = `${score} de ${questions.length} correctas`;
    
    showScreen(resultScreen);
}

startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', startGame);

// Mostrar número total de preguntas disponibles
document.addEventListener('DOMContentLoaded', () => {
    const subtitle = document.querySelector('#start-screen p');
    subtitle.textContent = `${allQuestions.length} preguntas disponibles - 10 aleatorias por partida`;
});
