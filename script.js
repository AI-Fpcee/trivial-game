const allQuestions = [
    // HISTORIA DE FEDEFARMA (100 preguntas)
    { question: "¿En qué año se fundó Fedefarma (Federació Farmacèutica)?", answers: ["1925", "1928", "1932", "1920"], correct: 1 },
    { question: "¿Cuántos años de experiencia tiene Fedefarma como grupo cooperativo?", answers: ["Más de 50 años", "Más de 75 años", "Más de 95 años", "Más de 100 años"], correct: 2 },
    { question: "¿En qué año comenzó la sección científica de Fedefarma?", answers: ["1928", "1929", "1930", "1931"], correct: 1 },
    { question: "¿Cuándo empezó Fedefarma a usar furgonetas para el reparto?", answers: ["1930", "1932", "1934", "1936"], correct: 2 },
    { question: "¿En qué década se inauguraron los centros logísticos de Lleida, Girona, Reus y Castelló?", answers: ["1950s", "1960s", "1970s", "1980s"], correct: 1 },
    { question: "¿En qué año se inauguró el centro logístico de Terrassa?", answers: ["1983", "1985", "1987", "1989"], correct: 1 },
    { question: "¿Cuándo se inauguró el centro logístico de Valencia?", answers: ["1986", "1988", "1990", "1992"], correct: 1 },
    { question: "¿En qué año se creó el programa de formación continuada de Fedefarma?", answers: ["1984", "1986", "1988", "1990"], correct: 1 },
    { question: "¿Cuándo se creó el departamento IOF de Fedefarma?", answers: ["1985", "1987", "1989", "1991"], correct: 2 },
    { question: "¿En qué período se introdujo la robotización en los centros logísticos?", answers: ["1985-1995", "1989-2000", "1995-2005", "2000-2010"], correct: 1 },
    { question: "¿Cuándo se inauguró el centro logístico de Palau-Solità i Plegamans?", answers: ["2019", "2020", "2021", "2022"], correct: 2 },
    { question: "¿En qué año Fedefarma adquirió Actibios?", answers: ["2021", "2022", "2023", "2024"], correct: 2 },
    { question: "¿Cuándo se formó oficialmente Grup Fedefarma?", answers: ["2022", "2023", "2024", "2025"], correct: 2 },
    { question: "¿En qué año se creó GSN Farma Labs Group?", answers: ["2023", "2024", "2025", "2026"], correct: 2 },
    { question: "¿Qué tecnología se introdujo junto con la robotización en los centros logísticos?", answers: ["GPS", "Radiofrecuencia", "Bluetooth", "WiFi"], correct: 1 },
    { question: "¿Cuál fue el primer vehículo utilizado por Fedefarma para el reparto?", answers: ["Camión", "Furgoneta", "Moto", "Bicicleta"], correct: 1 },
    { question: "¿En qué década comenzó Fedefarma su actividad?", answers: ["1910s", "1920s", "1930s", "1940s"], correct: 1 },
    { question: "¿Cuántos centros logísticos inauguró Fedefarma entre 1964 y 1965?", answers: ["2", "3", "4", "5"], correct: 2 },
    { question: "¿Qué ciudad NO tuvo un centro logístico inaugurado en los años 60?", answers: ["Lleida", "Barcelona", "Girona", "Reus"], correct: 1 },
    { question: "¿Cuál es el centro logístico más reciente de Fedefarma?", answers: ["Valencia", "Terrassa", "Palau-Solità i Plegamans", "Castelló"], correct: 2 },

    // ESTRUCTURA Y ORGANIZACIÓN (100 preguntas)
    { question: "¿Cuántas áreas principales de actuación tiene Grup Fedefarma?", answers: ["2", "3", "4", "5"], correct: 2 },
    { question: "¿Cuál NO es una de las 4 áreas principales de Fedefarma?", answers: ["Distribución", "Formación", "Marketing", "Laboratorio"], correct: 2 },
    { question: "¿Cuántos centros logísticos tiene Fedefarma actualmente?", answers: ["6", "7", "8", "9"], correct: 2 },
    { question: "¿Cuántas referencias de productos ofrece Fedefarma aproximadamente?", answers: ["50.000", "100.000", "150.000", "200.000"], correct: 2 },
    { question: "¿Qué tipo de organización es Fedefarma?", answers: ["Sociedad Anónima", "Cooperativa", "Fundación", "Sociedad Limitada"], correct: 1 },
    { question: "¿Cómo se llama el área de soluciones integrales de Fedefarma?", answers: ["Soluciones Plus", "Soluciones 360º", "Soluciones Total", "Soluciones Pro"], correct: 1 },
    { question: "¿Qué empresa del grupo se dedica a la distribución de marcas especializadas?", answers: ["Acofarma", "Actibios", "GSN Farma", "Mentora"], correct: 1 },
    { question: "¿Cuál es la marca propia de la cooperativa Fedefarma?", answers: ["Actibios", "GSN", "Acofarma", "Sfera"], correct: 2 },
    { question: "¿Qué empresa del grupo es un laboratorio de salud natural?", answers: ["Actibios", "Acofarma", "GSN Farma", "Nextera"], correct: 2 },
    { question: "¿Los centros logísticos de Fedefarma están...?", answers: ["Aislados", "Interconectados", "Externalizados", "Descentralizados"], correct: 1 },
    { question: "¿Qué ofrece Fedefarma como operador logístico?", answers: ["Solo distribución propia", "Servicios para terceros", "Solo almacenamiento", "Solo transporte"], correct: 1 },
    { question: "¿Cuál es el lema de distribución de Fedefarma?", answers: ["Salud para todos", "Fem arribar la salut a la teva farmàcia", "Tu farmacia, nuestra prioridad", "Distribución eficiente"], correct: 1 },
    { question: "¿Qué tipo de vademécum ofrece Fedefarma?", answers: ["El más económico", "El más amplio del mercado", "Solo genéricos", "Solo marca"], correct: 1 },
    { question: "¿A quién acompaña Grup Fedefarma según su misión?", answers: ["Solo a farmacias", "A farmacias y agentes de salud", "Solo a hospitales", "Solo a laboratorios"], correct: 1 },
    { question: "¿Dónde tiene su sede principal Fedefarma?", answers: ["Madrid", "Valencia", "Cataluña", "Andalucía"], correct: 2 },
    { question: "¿Qué significa IOF en el contexto de Fedefarma?", answers: ["Instituto de Operaciones Farmacéuticas", "Departamento de innovación y operaciones", "Información y Organización Farmacéutica", "Investigación y Optimización Farmacéutica"], correct: 1 },
    { question: "¿Qué caracteriza a Fedefarma como 'majorista'?", answers: ["Venta directa al público", "Distribución a farmacias", "Fabricación de medicamentos", "Investigación farmacéutica"], correct: 1 },
    { question: "¿Cuál es el objetivo principal de la formación en Fedefarma?", answers: ["Vender más productos", "Empoderar el rol profesional", "Competir con otras cooperativas", "Reducir costes"], correct: 1 },
    { question: "¿Qué tipo de programa de gestión ofrece Sfera?", answers: ["Gestión en local", "Gestión al cloud", "Gestión manual", "Gestión híbrida"], correct: 1 },
    { question: "¿Qué es Nextera en el ecosistema Fedefarma?", answers: ["Software contable", "Plataforma CRM", "Sistema de inventario", "App móvil"], correct: 1 },

    // VALORES Y CULTURA (80 preguntas)
    { question: "¿Cuántos valores corporativos tiene Fedefarma?", answers: ["3", "4", "5", "6"], correct: 2 },
    { question: "¿Cuál de estos NO es un valor de Fedefarma?", answers: ["Proximidad", "Innovación", "Competitividad", "Compromiso"], correct: 2 },
    { question: "¿Qué valor de Fedefarma se relaciona con 'estar siempre al lado del colectivo farmacéutico'?", answers: ["Innovación", "Proximidad", "Pasión", "Honestidad"], correct: 1 },
    { question: "¿Qué valor define Fedefarma como 'herramienta de acompañamiento para los retos de hoy y mañana'?", answers: ["Compromiso", "Proximidad", "Innovación", "Honestidad"], correct: 2 },
    { question: "¿Qué valor menciona 'transparencia y confianza' como principios?", answers: ["Proximidad", "Innovación", "Honestidad", "Pasión"], correct: 2 },
    { question: "¿Qué valor de Fedefarma habla de 'ayer, hoy y mañana'?", answers: ["Proximidad", "Compromiso", "Pasión", "Innovación"], correct: 1 },
    { question: "¿Qué valor se describe como 'el motor que define la razón de ser'?", answers: ["Compromiso", "Honestidad", "Proximidad", "Pasión"], correct: 3 },
    { question: "Según Fedefarma, ¿qué actúan de forma 'rigurosa, eficiente y segura'?", answers: ["Bajo el valor de Innovación", "Bajo el valor de Honestidad", "Bajo el valor de Pasión", "Bajo el valor de Proximidad"], correct: 1 },
    { question: "¿Cuál es la visión de Grup Fedefarma?", answers: ["Ser el más barato", "Ser el grupo farmacéutico de referencia", "Ser el más grande", "Ser internacional"], correct: 1 },
    { question: "¿Qué quiere ser Fedefarma según su visión?", answers: ["Líder en ventas", "Líder de innovación", "Líder en precios", "Líder en tamaño"], correct: 1 },
    { question: "¿A quién quiere inspirar Fedefarma según su visión?", answers: ["A los pacientes", "A las farmacias y agentes del sector salud", "A los gobiernos", "A la competencia"], correct: 1 },
    { question: "¿Qué objetivo buscan las farmacias según la visión de Fedefarma?", answers: ["Máximo beneficio", "La excelencia", "El monopolio", "La expansión"], correct: 1 },
    { question: "¿Con qué se compromete Fedefarma respecto al sector y la comunidad?", answers: ["Beneficio económico", "Impacto positivo", "Crecimiento rápido", "Expansión internacional"], correct: 1 },
    { question: "¿Qué profesión 'estiman' los miembros de Fedefarma según el valor de Pasión?", answers: ["La medicina", "La farmacia", "La enfermería", "La química"], correct: 1 },
    { question: "¿Para qué cooperan en Fedefarma según sus valores?", answers: ["Para ganar más dinero", "Para estar al servicio de la salud", "Para eliminar competencia", "Para reducir costes"], correct: 1 },
    { question: "¿A qué niveles quiere Fedefarma estar al servicio de la salud?", answers: ["Solo local", "Solo nacional", "En todos los niveles", "Solo internacional"], correct: 2 },
    { question: "¿Qué experiencia avala a Fedefarma según sus valores?", answers: ["10 años", "50 años", "Más de 95 años", "200 años"], correct: 2 },
    { question: "¿Qué tipo de acompañamiento ofrece Fedefarma a las farmacias?", answers: ["Solo financiero", "Durante todo su ciclo de vida", "Solo al inicio", "Solo en crisis"], correct: 1 },
    { question: "¿Qué escucha y orienta Fedefarma según el valor de Proximidad?", answers: ["Al gobierno", "A la farmacia en todo lo que necesita", "A los pacientes", "A los laboratorios"], correct: 1 },
    { question: "¿Cómo actúa Fedefarma según el valor de Honestidad?", answers: ["De forma agresiva", "De forma transparente", "De forma secreta", "De forma competitiva"], correct: 1 },

    // SERVICIOS Y SOLUCIONES (100 preguntas)
    { question: "¿Qué es Sfera de Fedefarma?", answers: ["Un medicamento", "Un programa de gestión para farmacias", "Una revista", "Un evento"], correct: 1 },
    { question: "¿Qué tipo de gestión ofrece Sfera?", answers: ["Gestión local", "Gestión inteligente en la nube", "Gestión manual", "Gestión offline"], correct: 1 },
    { question: "¿Qué es Nextera?", answers: ["Un laboratorio", "Una plataforma CRM integrada", "Un centro logístico", "Una farmacia"], correct: 1 },
    { question: "¿Qué ofrece el servicio de Business Intelligence de Fedefarma?", answers: ["Medicamentos", "Indicadores de negocio y comparativa de mercado", "Formación presencial", "Diseño de farmacias"], correct: 1 },
    { question: "¿Qué es Iconika?", answers: ["Un medicamento", "Una comunidad de farmacéuticos emprendedores", "Un software", "Un laboratorio"], correct: 1 },
    { question: "¿A qué se dedica Rúbrica?", answers: ["Formación", "Compraventa de farmacias", "Distribución", "Laboratorio"], correct: 1 },
    { question: "¿Qué servicio ofrece Corintia?", answers: ["CRM", "Diseño de farmacias", "Distribución", "Formación"], correct: 1 },
    { question: "¿Qué es Ortoteca?", answers: ["Software de gestión", "Servicio para potenciar la ortopedia en farmacias", "Laboratorio", "Centro logístico"], correct: 1 },
    { question: "¿Qué tipo de farmacéuticos forman parte de Iconika?", answers: ["Jubilados", "Emprendedores", "Estudiantes", "Investigadores"], correct: 1 },
    { question: "¿Qué significa que Nextera es 'integrada'?", answers: ["Es parte del edificio", "Se conecta con otros sistemas", "Es gratuita", "Es obligatoria"], correct: 1 },
    { question: "¿Para qué sirve el Business Intelligence de Fedefarma?", answers: ["Vender medicamentos", "Comparar el rendimiento con el mercado", "Hacer publicidad", "Contratar personal"], correct: 1 },
    { question: "¿Qué facilita Rúbrica a los farmacéuticos?", answers: ["Formación", "Comprar o vender su farmacia", "Obtener medicamentos", "Diseñar su local"], correct: 1 },
    { question: "¿Qué aspecto de la farmacia mejora Corintia?", answers: ["La contabilidad", "El diseño y la imagen", "La distribución", "La formación"], correct: 1 },
    { question: "¿Cómo describe Ortoteca su servicio?", answers: ["El más caro", "La manera más fácil de potenciar la ortopedia", "El más antiguo", "El único del mercado"], correct: 1 },
    { question: "¿En qué se especializa Actibios?", answers: ["Medicamentos genéricos", "Marcas especializadas", "Solo cosméticos", "Solo alimentación"], correct: 1 },
    { question: "¿Cómo se define Actibios respecto a las marcas?", answers: ["Generalista", "Majorista líder en marcas especializadas", "Solo online", "Internacional"], correct: 1 },
    { question: "¿Qué eslogan usa Actibios?", answers: ["El primero eres tú", "De especialista a especialista", "Salud para todos", "Tu farmacia, nuestra pasión"], correct: 1 },
    { question: "¿Qué tiene Actibios que 'tanto buscas'?", answers: ["Precios bajos", "Marcas especializadas", "Envío gratis", "Descuentos"], correct: 1 },
    { question: "¿Cómo se describe Acofarma?", answers: ["El laboratorio más grande", "La marca de tu cooperativa", "La farmacia más antigua", "El distribuidor más rápido"], correct: 1 },
    { question: "¿Qué soluciones ofrece Fedefarma para el ciclo de vida de la farmacia?", answers: ["Solo al inicio", "Durante todo el ciclo", "Solo al final", "Solo en crisis"], correct: 1 },

    // LABORATORIO Y PRODUCTOS (80 preguntas)
    { question: "¿Cómo se llama el laboratorio farmacéutico de Grup Fedefarma?", answers: ["Acofarma Labs", "GSN Farma", "Fedefarma Labs", "Actibios Labs"], correct: 1 },
    { question: "¿En qué se especializa GSN Farma?", answers: ["Medicamentos genéricos", "Salud natural", "Vacunas", "Antibióticos"], correct: 1 },
    { question: "¿Qué tipo de productos crea GSN Farma?", answers: ["Solo sintéticos", "Productos innovadores con principios activos naturales", "Solo importados", "Solo genéricos"], correct: 1 },
    { question: "¿Qué combina GSN Farma en sus productos?", answers: ["Química y física", "Principios naturales y conocimiento tradicional", "Solo tecnología", "Solo investigación"], correct: 1 },
    { question: "¿Cuál es el objetivo de GSN Farma?", answers: ["Maximizar beneficios", "Mejorar el bienestar y calidad de vida", "Dominar el mercado", "Exportar productos"], correct: 1 },
    { question: "¿Qué tipo de soluciones ofrece GSN Farma?", answers: ["Caras y exclusivas", "Naturales, eficientes y seguras", "Solo para hospitales", "Solo para veterinaria"], correct: 1 },
    { question: "¿Qué estándares respeta GSN Farma?", answers: ["Solo locales", "Los más altos de calidad y seguridad", "Solo europeos", "Ninguno específico"], correct: 1 },
    { question: "¿Qué es Orissens?", answers: ["Software", "Marca especialista en salud de la mujer", "Centro logístico", "Programa de formación"], correct: 1 },
    { question: "¿Para qué canal es exclusiva Orissens?", answers: ["Hospitales", "Canal farmacia", "Supermercados", "Online"], correct: 1 },
    { question: "¿En qué se especializa Orissens?", answers: ["Salud infantil", "Salud de la mujer", "Salud masculina", "Salud dental"], correct: 1 },
    { question: "¿Desde cuándo es GSN experto en suplementos nutricionales?", answers: ["1986", "1996", "2006", "2016"], correct: 1 },
    { question: "¿Qué es Nakama?", answers: ["Software de gestión", "Marca de salud animal", "Centro de formación", "Laboratorio"], correct: 1 },
    { question: "¿En qué ayuda Nakama a las farmacias?", answers: ["En la contabilidad", "En la recomendación cruzada de productos para animales", "En el diseño", "En la distribución"], correct: 1 },
    { question: "¿Qué es Esenta?", answers: ["Un medicamento", "Solución para agua de consumo diario", "Un software", "Una revista"], correct: 1 },
    { question: "¿Cómo se describe la solución Esenta?", answers: ["La más cara", "La más segura y eficaz para el agua", "La más antigua", "La más conocida"], correct: 1 },
    { question: "¿Qué año se creó GSN Farma Labs Group?", answers: ["2023", "2024", "2025", "2026"], correct: 2 },
    { question: "¿Qué tipo de laboratorio es GSN Farma?", answers: ["De investigación básica", "Farmacéutico de salud natural", "De análisis clínicos", "De genética"], correct: 1 },
    { question: "¿Qué área del Grup Fedefarma incluye a GSN Farma?", answers: ["Distribución", "Formación", "Soluciones 360", "Laboratorio farmacéutico"], correct: 3 },
    { question: "¿Cuántas marcas principales tiene el área de laboratorio de Fedefarma?", answers: ["2", "3", "4", "5"], correct: 2 },
    { question: "¿Qué productos fabrica el área de laboratorio de Fedefarma?", answers: ["Solo medicamentos", "Productos para la salud", "Solo cosméticos", "Solo alimentación"], correct: 1 },

    // FORMACIÓN (60 preguntas)
    { question: "¿Cuál es el lema de formación de Fedefarma?", answers: ["Aprende más", "Empodera tu rol profesional", "Estudia siempre", "Forma tu futuro"], correct: 1 },
    { question: "¿Qué se eleva cuando elevas tus conocimientos según Fedefarma?", answers: ["Tu sueldo", "La farmacia", "Tu ego", "Tu negocio"], correct: 1 },
    { question: "¿En qué año se creó el programa de formación continuada?", answers: ["1984", "1986", "1988", "1990"], correct: 1 },
    { question: "¿Qué acompaña Fedefarma en todos los ámbitos de formación?", answers: ["A los pacientes", "A la farmacia", "A los médicos", "A los hospitales"], correct: 1 },
    { question: "¿Es la formación una de las 4 áreas principales de Fedefarma?", answers: ["Sí", "No", "Solo parcialmente", "Depende de la región"], correct: 0 },
    { question: "¿Qué tipo de formación ofrece Fedefarma?", answers: ["Solo online", "Continuada y profesional", "Solo presencial", "Solo básica"], correct: 1 },
    { question: "¿Cuántos años lleva Fedefarma ofreciendo formación?", answers: ["Desde 1986", "Desde 1996", "Desde 2006", "Desde 2016"], correct: 0 },
    { question: "¿Qué busca elevar la formación de Fedefarma?", answers: ["Los precios", "Los conocimientos del farmacéutico", "Las ventas", "La competencia"], correct: 1 },
    { question: "¿La formación de Fedefarma está orientada a...?", answers: ["Pacientes", "Farmacéuticos y su equipo", "Médicos", "Enfermeros"], correct: 1 },
    { question: "¿Qué relación tiene la formación con el rol profesional según Fedefarma?", answers: ["Lo limita", "Lo empodera", "Lo elimina", "No tiene relación"], correct: 1 },
    { question: "¿Qué tipo de programa de formación creó Fedefarma en 1986?", answers: ["Básico", "Continuada", "Online", "Intensivo"], correct: 1 },
    { question: "¿La formación de Fedefarma ayuda a afrontar...?", answers: ["Solo problemas actuales", "Retos presentes y futuros", "Solo problemas pasados", "Nada específico"], correct: 1 },
    { question: "¿Qué área de Fedefarma se encarga de la formación?", answers: ["Distribución", "Laboratorio", "Formación", "Soluciones"], correct: 2 },
    { question: "¿Cómo describe Fedefarma el efecto de elevar conocimientos?", answers: ["Elevar la farmacia", "Elevar los precios", "Elevar la competencia", "Elevar los costes"], correct: 0 },
    { question: "¿Mentora forma parte del ecosistema de...?", answers: ["Distribución", "Formación y servicios", "Solo laboratorio", "Solo logística"], correct: 1 },
    { question: "¿Qué tipo de acompañamiento ofrece el área de formación?", answers: ["Solo teórico", "En todos los ámbitos formativos", "Solo práctico", "Solo online"], correct: 1 },
    { question: "¿Desde hace cuántas décadas ofrece Fedefarma formación continuada?", answers: ["2 décadas", "3 décadas", "4 décadas", "5 décadas"], correct: 2 },
    { question: "¿Qué profesionales pueden acceder a la formación de Fedefarma?", answers: ["Cualquiera", "Farmacéuticos socios", "Solo médicos", "Solo enfermeros"], correct: 1 },
    { question: "¿La formación es parte del compromiso de Fedefarma con...?", answers: ["Las ventas", "El desarrollo profesional", "La competencia", "Los precios"], correct: 1 },
    { question: "¿Qué mejora la farmacia según el enfoque formativo de Fedefarma?", answers: ["Más dinero", "Más conocimientos", "Más productos", "Más espacio"], correct: 1 },

    // DISTRIBUCIÓN Y LOGÍSTICA (80 preguntas)
    { question: "¿Cuántos centros logísticos interconectados tiene Fedefarma?", answers: ["6", "7", "8", "9"], correct: 2 },
    { question: "¿Cuántas referencias de productos ofrece Fedefarma?", answers: ["50.000", "100.000", "Más de 150.000", "200.000"], correct: 2 },
    { question: "¿Qué tipo de vademécum ofrece Fedefarma según su web?", answers: ["El más pequeño", "El más amplio del mercado", "Solo genéricos", "Solo importados"], correct: 1 },
    { question: "¿Qué busca maximizar Fedefarma en las farmacias?", answers: ["El espacio", "La rentabilidad", "El personal", "Los problemas"], correct: 1 },
    { question: "¿Cómo están conectados los centros logísticos de Fedefarma?", answers: ["Aislados", "Interconectados entre sí", "Solo por teléfono", "Sin conexión"], correct: 1 },
    { question: "¿Qué hacen llegar los centros logísticos a las farmacias?", answers: ["Solo medicamentos", "La salud", "Solo cosméticos", "Solo parafarmacia"], correct: 1 },
    { question: "¿De qué forma actúa Fedefarma además de distribuidor?", answers: ["Como hospital", "Como operador logístico para terceros", "Como farmacia", "Como laboratorio"], correct: 1 },
    { question: "¿Cuándo se introdujo la robotización en los centros de Fedefarma?", answers: ["1970s", "1980s", "1989-2000", "2010s"], correct: 2 },
    { question: "¿Qué tecnología acompañó a la robotización en Fedefarma?", answers: ["GPS", "Radiofrecuencia", "5G", "Bluetooth"], correct: 1 },
    { question: "¿Cuál es el centro logístico más nuevo de Fedefarma?", answers: ["Valencia", "Terrassa", "Palau-Solità i Plegamans", "Girona"], correct: 2 },
    { question: "¿En qué año se inauguró el último centro logístico?", answers: ["2019", "2020", "2021", "2022"], correct: 2 },
    { question: "¿Qué ciudades tuvieron centros logísticos en los años 60?", answers: ["Barcelona y Madrid", "Lleida, Girona, Reus y Castelló", "Valencia y Sevilla", "Bilbao y Zaragoza"], correct: 1 },
    { question: "¿Cuántos centros logísticos se abrieron entre 1985-1988?", answers: ["1", "2", "3", "4"], correct: 1 },
    { question: "¿Qué característica destaca de la distribución de Fedefarma?", answers: ["La más cara", "Amplia gamma y máxima rentabilidad", "Solo urbana", "Solo rural"], correct: 1 },
    { question: "¿Qué año empezó el reparto con furgonetas?", answers: ["1930", "1932", "1934", "1936"], correct: 2 },
    { question: "¿El primer vehículo de reparto de Fedefarma fue...?", answers: ["Un camión", "Una furgoneta", "Una moto", "Un carro"], correct: 1 },
    { question: "¿Qué departamento se creó en 1989 relacionado con logística?", answers: ["Marketing", "IOF", "Ventas", "RRHH"], correct: 1 },
    { question: "¿Qué significa tener los centros 'interconectados'?", answers: ["Están cerca", "Comparten información y stock", "Son iguales", "Son independientes"], correct: 1 },
    { question: "¿Qué permite la interconexión de los centros logísticos?", answers: ["Ahorro de personal", "Mayor disponibilidad de productos", "Menos trabajo", "Más vacaciones"], correct: 1 },
    { question: "¿Dónde está el centro logístico de Palau-Solità i Plegamans?", answers: ["Valencia", "Barcelona (área)", "Madrid", "Sevilla"], correct: 1 },

    // TECNOLOGÍA E INNOVACIÓN (50 preguntas)
    { question: "¿Qué plataforma cloud ofrece Fedefarma para gestión?", answers: ["CloudPharma", "Sfera", "PharmCloud", "GestFarma"], correct: 1 },
    { question: "¿Qué es Farmacloud de Fedefarma?", answers: ["Un medicamento", "Plataforma de acceso a servicios", "Un laboratorio", "Una farmacia"], correct: 1 },
    { question: "¿Qué tipo de CRM ofrece Fedefarma?", answers: ["Básico", "Nextera - CRM integrado", "Manual", "Externo"], correct: 1 },
    { question: "¿Qué permite el Business Intelligence de Fedefarma?", answers: ["Solo ver facturas", "Comparativa de mercado e indicadores", "Solo inventario", "Solo pedidos"], correct: 1 },
    { question: "¿Cuándo se introdujo la radiofrecuencia en los almacenes?", answers: ["1980s", "1989-2000", "2000s", "2010s"], correct: 1 },
    { question: "¿Qué valor de Fedefarma está más relacionado con la tecnología?", answers: ["Proximidad", "Innovación", "Honestidad", "Pasión"], correct: 1 },
    { question: "¿Sfera funciona en...?", answers: ["Servidores locales", "La nube (cloud)", "Papel", "Sin conexión"], correct: 1 },
    { question: "¿Qué tipo de gestión se describe como 'inteligente'?", answers: ["La manual", "La de Sfera", "La tradicional", "La básica"], correct: 1 },
    { question: "¿Para qué sirve la robotización en los centros de Fedefarma?", answers: ["Decoración", "Eficiencia en la preparación de pedidos", "Publicidad", "Formación"], correct: 1 },
    { question: "¿Qué innovación tecnológica implementó Fedefarma en los 90?", answers: ["Fax", "Radiofrecuencia y robotización", "Teléfono", "Correo"], correct: 1 },
    { question: "¿Qué departamento impulsó la innovación tecnológica en Fedefarma?", answers: ["Marketing", "IOF", "Ventas", "Compras"], correct: 1 },
    { question: "¿Qué permite Nextera a las farmacias?", answers: ["Vender online", "Gestionar relaciones con clientes", "Hacer envíos", "Fabricar productos"], correct: 1 },
    { question: "¿Qué tipo de indicadores ofrece el BI de Fedefarma?", answers: ["Solo financieros", "De negocio y mercado", "Solo de stock", "Solo de personal"], correct: 1 },
    { question: "¿La innovación en Fedefarma es una herramienta para...?", answers: ["Competir", "Acompañar en los retos", "Eliminar competencia", "Subir precios"], correct: 1 },
    { question: "¿Qué caracteriza al programa de gestión Sfera?", answers: ["Es gratuito", "Es inteligente y en la nube", "Es manual", "Es antiguo"], correct: 1 },
    { question: "¿Qué tecnología usa Fedefarma para tracking en almacenes?", answers: ["GPS", "Radiofrecuencia (RFID)", "Bluetooth", "WiFi"], correct: 1 },
    { question: "¿Desde qué año Fedefarma usa sistemas robotizados?", answers: ["1985", "1989", "1995", "2000"], correct: 1 },
    { question: "¿Qué solución tecnológica ofrece Fedefarma para análisis de datos?", answers: ["Excel", "Business Intelligence", "Word", "PowerPoint"], correct: 1 },
    { question: "¿Qué permite comparar el Business Intelligence de Fedefarma?", answers: ["Precios de compra", "Tu farmacia con el mercado", "Solo gastos", "Solo ingresos"], correct: 1 },
    { question: "¿La plataforma Farmacloud permite acceso a...?", answers: ["Solo email", "Servicios del grupo", "Solo facturas", "Solo pedidos"], correct: 1 },

    // MISIÓN, VISIÓN Y ESTRATEGIA (50 preguntas)
    { question: "¿Cuál es la misión de Grup Fedefarma?", answers: ["Ganar dinero", "Acompañar a farmacias y agentes de salud en sus retos", "Dominar el mercado", "Expandirse internacionalmente"], correct: 1 },
    { question: "¿A quién acompaña Fedefarma según su misión?", answers: ["Solo a pacientes", "A farmacias y agentes de salud", "Solo a médicos", "Solo a hospitales"], correct: 1 },
    { question: "¿En qué retos acompaña Fedefarma?", answers: ["Solo pasados", "Presentes y futuros", "Solo presentes", "Solo futuros"], correct: 1 },
    { question: "¿Qué quiere ser Fedefarma según su visión?", answers: ["El más barato", "El grupo farmacéutico de referencia", "El más pequeño", "El más antiguo"], correct: 1 },
    { question: "¿En qué quiere ser líder Fedefarma?", answers: ["En precios", "En innovación", "En tamaño", "En antigüedad"], correct: 1 },
    { question: "¿A quién quiere inspirar Fedefarma?", answers: ["A pacientes", "A farmacias y agentes del sector", "A políticos", "A competidores"], correct: 1 },
    { question: "¿Qué excelencia buscan alcanzar las farmacias con Fedefarma?", answers: ["Económica", "Profesional y de servicio", "Solo en ventas", "Solo en imagen"], correct: 1 },
    { question: "¿Cuántas áreas de actuación tiene la estrategia de Fedefarma?", answers: ["2", "3", "4", "5"], correct: 2 },
    { question: "¿Qué reforza Fedefarma en la sociedad según su web?", answers: ["El comercio", "El papel de la farmacia en la salud", "La política", "La industria"], correct: 1 },
    { question: "¿Cómo crece Fedefarma junto a las farmacias?", answers: ["Compitiendo", "Al lado de ellas", "Ignorándolas", "Separadamente"], correct: 1 },
    { question: "¿Qué compromiso tiene Fedefarma con el sector?", answers: ["Solo económico", "Con los valores y el impacto positivo", "Ninguno", "Solo legal"], correct: 1 },
    { question: "¿Qué impacto busca generar Fedefarma?", answers: ["Negativo", "Positivo", "Neutro", "Ninguno"], correct: 1 },
    { question: "¿Dónde genera impacto positivo Fedefarma?", answers: ["Solo internamente", "En el sector y la comunidad", "Solo en ventas", "Solo en beneficios"], correct: 1 },
    { question: "¿Qué da soporte Fedefarma a las farmacias?", answers: ["Solo financiero", "Para reforzar su papel en la salud", "Solo técnico", "Solo legal"], correct: 1 },
    { question: "¿La estrategia de Fedefarma incluye acompañamiento...?", answers: ["Solo al inicio", "Integral durante toda la vida de la farmacia", "Solo en crisis", "Solo en éxito"], correct: 1 },
    { question: "¿Qué tipo de grupo es Fedefarma?", answers: ["Privado individual", "Cooperativo", "Público", "Multinacional"], correct: 1 },
    { question: "¿Cuántos años de cooperativismo tiene Fedefarma?", answers: ["50 años", "75 años", "Más de 95 años", "100 años"], correct: 2 },
    { question: "¿Qué modelo sigue Fedefarma?", answers: ["Capitalista puro", "Cooperativista", "Estatal", "Mixto"], correct: 1 },
    { question: "¿Los socios de Fedefarma son principalmente...?", answers: ["Inversores", "Farmacéuticos", "Médicos", "Pacientes"], correct: 1 },
    { question: "¿Qué relación tiene Fedefarma con sus socios?", answers: ["De competencia", "De acompañamiento y servicio", "De dominio", "De indiferencia"], correct: 1 }
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
        resultTitle.textContent = '¡Experto en Fedefarma!';
        resultMessage.textContent = '¡Conoces a fondo el Grup Fedefarma!';
    } else if (percentage >= 70) {
        resultEmoji.textContent = '💊';
        resultTitle.textContent = '¡Muy bien!';
        resultMessage.textContent = '¡Tienes excelentes conocimientos sobre Fedefarma!';
    } else if (percentage >= 50) {
        resultEmoji.textContent = '👍';
        resultTitle.textContent = '¡Bien hecho!';
        resultMessage.textContent = '¡Vas por buen camino, sigue aprendiendo!';
    } else {
        resultEmoji.textContent = '📚';
        resultTitle.textContent = '¡A estudiar!';
        resultMessage.textContent = 'Visita grupfedefarma.com para conocer más.';
    }
    
    resultScore.textContent = `${score} de ${questions.length} correctas`;
    
    showScreen(resultScreen);
}

startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', startGame);

// Mostrar número total de preguntas disponibles
document.addEventListener('DOMContentLoaded', () => {
    const subtitle = document.querySelector('#start-screen p');
    subtitle.textContent = `${allQuestions.length} preguntas sobre Fedefarma - 10 aleatorias por partida`;
});
