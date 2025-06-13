// Fraccionamientos por código postal en Aguascalientes
const fraccionamientosPorCP = {
  "20000": ["Zona Centro", "Colonia Aguascalientes Centro"],
  "20010": ["Las Brisas", "Ramon Romo Franco", "Colinas del Río", "Fraccionamiento San Cayetano", "Colonia Olivares Santana"],
  "20016": ["Colinas de San Ignacio", "La Fundición", "Fundición II", "Los Sauces"],
  "20018": ["Colonia Línea de Fuego"],
  "20020": ["Obraje", "Barrio del Encino", "Colonia Buenos Aires", "Fraccionamiento Circunvalación Norte", "Fraccionamiento Las Arboledas", "Fraccionamiento Villas de San Francisco"],
  "20029": ["Fraccionamiento Villas de La Universidad"],
  "20030": ["San Marcos", "Barrio de la Purísima", "Fraccionamiento El Sol", "Colonia Gremial", "Colonia Industrial"],
  "20040": ["Barrio de Guadalupe", "Colonia Altavista", "Colonia Curtidores", "Fraccionamiento La Concordia", "Colonia Miravalle", "Fraccionamiento Panorama", "Fraccionamiento Residencial Guadalupe"],
  "20049": ["Fraccionamiento Colinas del Poniente"],
  "20050": ["Jardines de Aguascalientes", "Condominio Bugambilias", "Colonia Del Carmen", "Colonia La Fe", "Colonia México", "Colonia Primavera", "Colonia San Pablo"],
  "20059": ["Colonia Guadalupe", "Colonia Heliodoro Garcia"],
  "20060": ["Los Volcanes", "Gómez Morín", "Fraccionamiento Gómez", "Fraccionamiento Moderno", "Fraccionamiento Valle del Rio San Pedro"],
  "20064": ["Fraccionamiento Valle del Rio San Pedro"],
  "20070": ["Altavista", "Gremial", "Unidad habitacional Guadalupe Posada", "Colonia San Marcos", "Barrio San Marcos"],
  "20078": ["Fraccionamiento San Marcos"],
  "20080": ["San Pablo", "La Salud", "Fraccionamiento Modelo", "Fraccionamiento Residencial del Valle I"],
  "20089": ["Fraccionamiento Residencial del Valle II"],
  "20100": ["Fraccionamiento La Herradura", "Fraccionamiento Club Campestre", "Condominio Jardines del Campestre", "Fraccionamiento Los Vergeles", "Equipamiento Ciudad Universitaria", "Condominio Rancho San Antonio"],
  "20110": ["Fraccionamiento Villas de Montenegro", "Fraccionamiento Las Cavas", "Fraccionamiento La Enramada", "Colonia Talamantes Ponce", "Fraccionamiento Granjas del Campestre", "Condominio Puerto las Hadas", "Fraccionamiento Valle del Campestre"],
  "20115": ["Fraccionamiento Trojes de Oriente", "Fraccionamiento Valle de las Trojes", "Fraccionamiento Villas de San Nicolás", "Fraccionamiento San Telmo", "Condominio La Paloma", "Fraccionamiento Barrio de Santiago", "Fraccionamiento Villa de las Trojes", "Fraccionamiento Valle de Santa Teresa"],
  "20116": ["Colinas de San Ignacio", "La Fundición", "Fundición II", "Los Sauces", "Fraccionamiento La Troje", "Colonia Trojes de Alonso", "Fraccionamiento San Telmo Residencial", "Condominio Santa Fe"],
  "20117": ["Fraccionamiento Aguascalientes 2000"],
  "20118": ["Condominio Las Trojes", "Fraccionamiento Misión del Campanario", "Fraccionamiento Trojes de Cristal", "Condominio Trojes del Sol", "Fraccionamiento Residencial Santa Clara", "Fraccionamiento Misión de Santiago", "Fraccionamiento Valle del Campanario", "Fraccionamiento Las Misiones", "Condominio Los Jarales", "Condominio Cerrada El Molino", "Fraccionamiento Valle Real", "Condominio Terzetto", "Fraccionamiento Cerrada de La Misión", "Fraccionamiento Cerrada del Valle", "Fraccionamiento Cerrada de la Mezquitera"],
  "20119": ["Fraccionamiento Lomas del Campestre 2a Sección", "Fraccionamiento Villas del Campestre", "Fraccionamiento Los Calicantos"],
  "20120": ["Fraccionamiento Jardines de la Concepción", "Fraccionamiento Los Bosques", "Condominio Rinconada los Bosques"],
  "20123": ["Condominio La Perla Norte", "Fraccionamiento Arroyo El Molino"],
  "20124": ["Zona comercial Galerías", "Fraccionamiento Residencial Altaria"],
  "20126": ["Fraccionamiento Constitución", "Fraccionamiento Libertad", "Fraccionamiento Pozo Bravo Norte", "Fraccionamiento Soberana Convención Revolucionaria", "Fraccionamiento Villa Montaña", "Fraccionamiento Villas de Don Antonio", "Fraccionamiento Los Ángeles", "Fraccionamiento Capittala", "Fraccionamiento Recinto de la Macarena", "Rancho La Soledad", "Fraccionamiento Los Naranjos", "Fraccionamiento Villa de Nuestra Señora de La Asunción Sector Guadalupe", "Fraccionamiento Villa Teresa", "Fraccionamiento Cartagena 1947", "Fraccionamiento Villas de La Convención", "Fraccionamiento Lomas de La Asunción", "Fraccionamiento Villa de Nuestra Señora de La Asunción Sector Encino", "Fraccionamiento Villa de Nuestra Señora de La Asunción Sector Alameda", "Fraccionamiento San José de Pozo Bravo", "Fraccionamiento Villa de Nuestra Señora de La Asunción Sector San Marcos", "Fraccionamiento Villa de Nuestra Señora de La Asunción Sector Estación", "Condominio Las Plazas", "Fraccionamiento El Rosedal", "Fraccionamiento Natura", "Fraccionamiento Montebello Della Stanza", "Condominio Villa Notre Dame", "Condominio Privada Guadalupe", "Fraccionamiento Rinconada Pozo Bravo", "Fraccionamiento Pozo Bravo Sur", "Fraccionamiento Villa Loma Dorada", "Fraccionamiento Jardines de Montebello", "Fraccionamiento Villas del Río", "Fraccionamiento El Puertecito", "Fraccionamiento Rinconada del Puertecito"],
  "20127": ["Fraccionamiento Bosques del Prado Norte"],
  "20128": ["Rancho Sartenejo"],
  "20129": ["Fraccionamiento Lomas del Campestre 1a Sección"],
  "20130": ["Fraccionamiento Bosques del Prado Sur", "Fraccionamiento El Roble", "Colonia Fátima", "Fraccionamiento Independencia de México", "Fraccionamiento Nueva Rinconada", "Colonia Primo Verdad", "Colonia San José del Arenal", "Colonia Unidad Ganadera", "Condominio San Xavier", "Fraccionamiento Residencial del Real", "Condominio Puerta Navarra", "Condominio Residencial Campestre Club de Golf", "Fraccionamiento Palma Real", "Fraccionamiento Muralia"],
  "20135": ["Zona comercial Agropecuario", "Zona comercial Centro Distribuidor de Básicos"],
  "20136": ["Fraccionamiento La Rinconada"],
  "20137": ["Fraccionamiento El Plateado"],
  "20138": ["Condominio Residencial Pulgas Pandas Norte", "Condominio Residencial Pulgas Pandas Sur", "Condominio Villas del Vergel", "Fraccionamiento Cerrada San Miguel"],
  "20140": ["Fraccionamiento Las Hadas", "Colonia Morelos", "Condominio Andrea"],
  "20146": ["Fraccionamiento Los Arcos"],
  "20149": ["Fraccionamiento Industrial"],
  "20150": ["Colonia Buenavista", "Fraccionamiento C.T.M.", "Fraccionamiento La Estrella", "Colonia Macias Arellano", "Condominio Trento", "Colonia Lomas del Cobano"],
  "20157": ["Colonia La Higuerilla", "Fraccionamiento Parras"],
  "20158": ["Fraccionamiento El Cobano", "Fraccionamiento Hacienda el Cobano", "Fraccionamiento Trojes del Cobano", "Fraccionamiento Villas del Cobano"],
  "20159": ["Fraccionamiento Alianza Ferrocarrilera", "Fraccionamiento Bosques del Prado Oriente"],
  "20160": ["Colonia Francisco Guel Jimenez", "Unidad habitacional Las Viñas INFONAVIT"],
  "20164": ["Colonia Santa Anita 4a Sección"],
  "20169": ["Fraccionamiento Santa Anita", "Fraccionamiento Santa Anita 2a Sección"],
  "20170": ["Fraccionamiento El Maguey", "Condominio Las Cumbres", "Unidad habitacional Lic Benito Juárez", "Fraccionamiento Nazario Ortiz Garza", "Fraccionamiento Rodolfo Landeros Gallegos", "Fraccionamiento S.T.E.M.A.", "Colonia Zona Militar", "Fraccionamiento Villa Bonita"],
  "20172": ["Fraccionamiento Lic Benito Palomino Dena", "Fraccionamiento Anexo Benito Palomino Dena (Cumbres II)", "Fraccionamiento La Florida l", "Fraccionamiento La Florida ll", "Fraccionamiento Claustros Loma Dorada", "Colonia Cumbres III"],
  "20174": ["Fraccionamiento Lomas de Bellavista", "Fraccionamiento Lomas de las Fuentes", "Fraccionamiento Colinas de Oriente", "Fraccionamiento Vista de las Cumbres", "Fraccionamiento Los Laureles", "Fraccionamiento Mirador de las Culturas", "Ranchería El Rocío", "Fraccionamiento Villas de la Loma", "Colonia Los Pericos", "Fraccionamiento Paseos del Sol", "Fraccionamiento Miradores de Santa Elena", "Fraccionamiento Villas de las Fuentes"],
  "20175": ["Condominio La Hojarasca", "Fraccionamiento Ejido las Cumbres", "Colonia J Refugio Esparza Reyes", "Fraccionamiento Rinconadas las Cumbres", "Fraccionamiento Lomas de Oriente"],
  "20177": ["Fraccionamiento C.N.O.P. Oriente"],
  "20179": ["Fraccionamiento Cerro Alto", "Fraccionamiento Santa Margarita", "Fraccionamiento Las Cumbres", "Fraccionamiento Luis Ortega Douglas", "Fraccionamiento Pensadores Mexicanos", "Fraccionamiento Pintores Mexicanos", "Colonia Progreso", "Fraccionamiento Santa Regina"],
  "20180": ["Colonia Del Trabajo", "Colonia Ferronales", "Fraccionamiento Luis Gómez Zepeda (ferronales)", "Colonia Lomas de Santa Anita", "Fraccionamiento Alameda", "Condominio Rinconada de La Alameda", "Condominio Bosques de La Alameda", "Fraccionamiento Nueva Alameda"],
  "20190": ["Colonia Héroes", "Condominio La Hacienda", "Condominio La Mancha"],
  "20196": ["Fraccionamiento Ojocaliente", "Unidad habitacional Ojocaliente INEGI", "Fraccionamiento Solidaridad 1a Sección", "Fraccionamiento Sol Naciente", "Fraccionamiento Villa de las Norias", "Fraccionamiento Camino Real", "Fraccionamiento Ribera del Sol", "Fraccionamiento Ambrosía", "Fraccionamiento José Guadalupe Peralta Gámez", "Fraccionamiento Haciendas de Aguascalientes", "Fraccionamiento Villerías", "Fraccionamiento Vistas de Oriente", "Fraccionamiento Real de Haciendas", "Fraccionamiento Valle de los Cactus", "Fraccionamiento Colinas de San Patricio", "Fraccionamiento Balcones de Oriente", "Fraccionamiento Terra Nova", "Fraccionamiento José Guadalupe Posada", "Colonia El Rocío", "Fraccionamiento Valle del Bicentenario", "Fraccionamiento Paseo de los Cactus", "Fraccionamiento Balcones del Valle", "Fraccionamiento Real del Sol"],
  "20198": ["Colonia Ex Hacienda Ojocaliente", "Fraccionamiento Ejido Ojocaliente", "Condominio Misión Alameda"],
  "20199": ["Colonia El Riego", "Unidad habitacional Fidel Velázquez", "Fraccionamiento Municipio Libre"],
  "20200": ["Condominio Fuentes del Lago", "Fraccionamiento El Quelite", "Fraccionamiento Olinda", "Condominio Bellavista", "Fraccionamiento Loma Bonita", "Condominio Nueva Castilla", "Condominio Xenia Residencial", "Fraccionamiento Vergel de la Cantera", "Fraccionamiento Villas de La Cantera", "Fraccionamiento Lic Manuel Gómez Morin", "Fraccionamiento Residencial San Nicolás", "Fraccionamiento Villas del Mediterráneo", "Fraccionamiento Ex Hacienda La Cantera", "Fraccionamiento José Vasconcelos Calderón", "Fraccionamiento Porta Canteras", "Colonia Veteranos de la Revolución"],
  "20205": ["Fraccionamiento Educación Álamos", "Colonia Nueva España"],
  "20206": ["Fraccionamiento Lic. José López Portillo", "Colonia La Barranquilla", "Colonia Barandales de San José"],
  "20207": ["Fraccionamiento Canteras de San Javier", "Zona comercial Capital City", "Fraccionamiento Rinconada San José"],
  "20208": ["Fraccionamiento Canteras de San José"],
  "20210": ["Fraccionamiento Circunvalación Poniente", "Fraccionamiento España", "Colonia La Barranca de Guadalupe", "Colonia Pirules INFONAVIT"],
  "20216": ["Fraccionamiento Jardines de los Pirules"],
  "20217": ["Fraccionamiento Residencial los Pirules"],
  "20218": ["Fraccionamiento Canteras de Santa Imelda", "Colonia Francisco Villa", "Fraccionamiento Jardines del Lago", "Colonia San Martin de La Cantera", "Condominio Canteras de San Agustin", "Condominio Santa Imelda", "Condominio Los Eucaliptos 2a. Sección", "Condominio Los Eucaliptos", "Rancho San Agustín"],
  "20219": ["Colonia El Edén", "Fraccionamiento Parque Industrial el Vergel", "Condominio Misión Juan Pablo II"],
  "20220": ["Colonia Las Flores", "Unidad habitacional Vivienda Popular"],
  "20229": ["Fraccionamiento Las Torres"],
  "20230": ["Fraccionamiento Las Américas", "Colonia Obraje", "Fraccionamiento Santa Elena"],
  "20234": ["Colonia Agricultura", "Fraccionamiento Mesonero"],
  "20235": ["Fraccionamiento El Dorado 1a Sección", "Fraccionamiento El Dorado 2a Sección", "Fraccionamiento Valle Dorado", "Fraccionamiento Villa Jardín"],
  "20236": ["Colonia Jardines de Santa Elena"],
  "20237": ["Fraccionamiento Hermanos Carreón", "Fraccionamiento Montebello"],
  "20238": ["Colonia Santa Elena 2a Sección"],
  "20239": ["Fraccionamiento La Fuente"],
  "20240": ["Colonia El Llanito", "Fraccionamiento Residencial el Encino", "Fraccionamiento Triana", "Fraccionamiento Residencial Cosío", "Condominio Triana", "Barrio El Encino", "Colonia El Laurel", "Fraccionamiento La Luna", "Barrio La Salud", "Condominio Los Virreyes"],
  "20247": ["Unidad habitacional San Fernando INFONAVIT"],
  "20248": ["Fraccionamiento Jardines de Triana"],
  "20249": ["Fraccionamiento Gámez"],
  "20250": ["Fraccionamiento Jesús Gómez Portugal", "Fraccionamiento Héroes de Aguascalientes", "Fraccionamiento Jardines de La Cruz", "Colonia La Huerta", "Colonia San Luis", "Condominio Villas de Kristal"],
  "20255": ["Fraccionamiento Bona Gens", "Unidad habitacional INFONAVIT Los Volcanes"],
  "20256": ["Unidad habitacional FOVISSSTE Ojocaliente I", "Condominio Ojocaliente FOVISSSTE II", "Fraccionamiento Ojocaliente las Torres", "Fraccionamiento Rinconada de La Cruz", "Fraccionamiento Villas de Ojocaliente", "Equipamiento Parque y Presa del Cedazo"],
  "20257": ["Unidad habitacional Lázaro Cárdenas"],
  "20259": ["Barrio La Estación", "Barrio La Purísima"],
  "20260": ["Unidad habitacional IV Centenario", "Fraccionamiento Jesús Terán Peredo", "Fraccionamiento Vivienda Militar", "Colonia Ojo de Agua", "Colonia Sidusa", "Condominio Rinconada El Cedazo"],
  "20263": ["Fraccionamiento Agua Clara", "Fraccionamiento Balcones de Ojocaliente", "Fraccionamiento Cielo Claro", "Fraccionamiento Lomas del Chapulín", "Colonia Ojo de Agua de Palmitas", "Fraccionamiento Salto de Ojocaliente", "Fraccionamiento Solidaridad 2a Sección", "Fraccionamiento Solidaridad 3a Sección", "Fraccionamiento Tierra Buena", "Fraccionamiento Rinconada San Antonio I", "Fraccionamiento Cima del Chapulín", "Fraccionamiento Cobano de Palmitas", "Fraccionamiento San Jorge", "Fraccionamiento La Lomita", "Fraccionamiento Villa las Palmas", "Fraccionamiento Bajío de las Palmas", "Fraccionamiento Lomas del Gachupín", "Fraccionamiento El Cedazo", "Fraccionamiento San Ángel", "Fraccionamiento Villa Taurina"],
  "20264": ["Unidad habitacional Morelos INFONAVIT", "Fraccionamiento Vista del Sol 2a Sección", "Fraccionamiento Vista del Sol 3a Sección"],
  "20265": ["Unidad habitacional Ojo de Agua INFONAVIT"],
  "20266": ["Fraccionamiento Jardines del Sol", "Colonia La Cruz", "Colonia Misión de Santa Fe", "Fraccionamiento Vista del Sol 1a Sección"],
  "20267": ["Condominio S.T.E.M.A.", "Colonia Jardines de La Convención", "Unidad habitacional Ojo de Agua FOVISSSTE 1a Sección", "Condominio Lic Primo Verdad INEGI"],
  "20268": ["Fraccionamiento Fuentes de La Asunción"],
  "20269": ["Colonia Jardines de La Luz"],
  "20270": ["Fraccionamiento Bulevar", "Fraccionamiento El Caminero", "Fraccionamiento Jardines de Aguascalientes", "Colonia Jardines de La Asunción", "Colonia Las Canoas", "Fraccionamiento Lindavista", "Fraccionamiento México", "Fraccionamiento Los Cedros"],
  "20276": ["Colonia Jardines de las Bugambilias", "Fraccionamiento Jardines del Parque", "Condominio Jardines de Alejandría"],
  "20277": ["Fraccionamiento Pirámides", "Fraccionamiento Residencial del Parque", "Condominio Rinconada del Parque"],
  "20278": ["Fraccionamiento Jardines de las Fuentes"],
  "20280": ["Fraccionamiento Casasolida", "Zona comercial Central de Abastos", "Colonia Jardines del Sur", "Colonia Martinez Dominguez", "Fraccionamiento Prados de Villasunción", "Fraccionamiento Prados del Sur", "Colonia San Francisco del Arenal", "Colonia San Pedro", "Fraccionamiento Torres de San Francisco", "Fraccionamiento Trojes del Sur", "Condominio Australis", "Fraccionamiento Conjunto San Francisco"],
  "20283": ["Parque industrial Parque Industrial Siglo XXI", "Parque industrial Parque Industrial Siglo XXI (Ampliación)"],
  "20284": ["Fraccionamiento Rinconada del Sur", "Fraccionamiento La Casita", "Fraccionamiento La Estancia", "Unidad habitacional INFONAVIT Potreros del Oeste", "Fraccionamiento Villas de Santa Rosa", "Fraccionamiento Villas del Oeste", "Fraccionamiento Vistas del Sur"],
  "20285": ["Fraccionamiento Versalles 1a Sección", "Fraccionamiento Versalles 2a Sección"],
  "20286": ["Condominio Bosque Real", "Fraccionamiento Rancho Santa Mónica", "Colonia Vicente Guerrero", "Fraccionamiento Villas del Pilar 1a Sección", "Condominio Barlovento", "Condominio Abadía", "Condominio Mangata", "Fraccionamiento Villas San Antonio", "Fraccionamiento Villa Capri", "Condominio Providencia", "Fraccionamiento Rinconada Santa Mónica", "Condominio Paseos de Santa Mónica"],
  "20287": ["Fraccionamiento Insurgentes"],
  "20288": ["Fraccionamiento Bulevares 1a. Sección", "Fraccionamiento Bulevares 2a. Sección"],
  "20289": ["Unidad habitacional Pilar Blanco INFONAVIT"],
  "20290": ["Fraccionamiento Ciudad Industrial", "Zona comercial Plaza Vestir", "Fraccionamiento Vista Alegre", "Fraccionamiento Parque Industrial ALTEC"],
  "20291": ["Equipamiento Centro SCT Aguascalientes"],
  "20296": ["Fraccionamiento Rústicos Calpulli", "Condominio Villas de Bonaterra", "Fraccionamiento San Francisco de los Arteaga", "Fraccionamiento Residencial San Javier", "Fraccionamiento Villa Sur"],
  "20297": ["Fraccionamiento Casa Blanca", "Fraccionamiento Jardines de Casablanca", "Fraccionamiento Jardines de Casanueva"],
  "20298": ["Fraccionamiento Emiliano Zapata", "Fraccionamiento Morelos I", "Fraccionamiento Morelos 2a Sección", "Fraccionamiento Solidaridad 4a Sección", "Fraccionamiento Residencial Hacienda San Martín", "Fraccionamiento Viñedos del Sur", "Fraccionamiento Reserva Villa Sur", "Colonia Villas de Ajedrez", "Fraccionamiento Lomas de Vistabella", "Fraccionamiento San Sebastián", "Fraccionamiento Lomas del Sur", "Colonia Lomas de Nueva York", "Fraccionamiento Laureles del Sur", "Fraccionamiento Lomas del Mirador", "Fraccionamiento Misión de Santa Lucía", "Fraccionamiento Lomas de Vistabella 2a. Sección", "Fraccionamiento Lotes de Arellano", "Fraccionamiento Condominio La terraza", "Fraccionamiento Valle del Cedazo", "Fraccionamiento Paseos de San Antonio", "Condominio Hacienda San Marcos"],
  "20299": ["Fraccionamiento Lomas del Ajedrez", "Colonia Mujeres Ilustres", "Fraccionamiento Periodistas", "Fraccionamiento Villa del Chapulín", "Granja Los Dolores", "Fraccionamiento Fundadores", "Fraccionamiento Lomas de San Jorge", "Fraccionamiento Reencuentro", "Fraccionamiento Villalta", "Fraccionamiento Lunaria"],
  "20310": ["Ranchería Los Negritos", "Colonia Coyotes", "Ranchería Viñedos Valle Redondo", "Pueblo La Loma de los Negritos", "Colonia Viñedos San Felipe"],
  "20313": ["Ejido Cuauhtémoc (Las Palomas)", "Ranchería Hacienda Nueva"],
  "20314": ["Granja El Cariñán"],
  "20316": ["Ranchería Santa Cruz de la Presa", "Fraccionamiento Lomas del Picacho"],
  "20319": ["Zona federal CERESO (Para Varones y Mujeres)"],
  "20320": ["Colonia Estación Cañada Honda", "Pueblo General José María Morelos y Pavón (Cañada Honda)", "Fraccionamiento Las Cañadas"],
  "20323": ["Ejido Santa María de Gallardo"],
  "20324": ["Ejido Jaltomate"],
  "20326": ["Condominio Loretta", "Zona industrial Parque Industrial Tecnopolo 2 (PITP2)", "Condominio La Aurora", "Condominio Bosque Sereno", "Condominio Cavalia", "Fraccionamiento Quinta los Olivos", "Fraccionamiento Misión de San Jerónimo", "Fraccionamiento Privada Los Olivos", "Fraccionamiento Residencial Punta del Cielo", "Fraccionamiento Portón San Ignacio", "Colonia Valle de San Ignacio (El Filso)", "Ejido San Ignacio", "Fraccionamiento La Trinidad", "Fraccionamiento Tamarindos", "Fraccionamiento Xaramá Entorno Residencial", "Fraccionamiento Puesta del Sol", "Fraccionamiento La Soledad", "Fraccionamiento La Rioja", "Condominio Rinconada de San Ignacio", "Ranchería Ex-Hacienda de San Ignacio", "Colonia La Perla", "Colonia San Ignacio II", "Colonia San Ignacio III"],
  "20328": ["Condominio Los Fresnos", "Condominio Terranza", "Colonia Pocitos", "Zona industrial Parque Industrial Tecn PDO Pocitos"],
  "20329": ["Condominio Privanza Andaluz", "Fraccionamiento Residencial Las Quintas", "Condominio La Querencia", "Condominio Rincón Andaluz", "Condominio La Plazuela", "Fraccionamiento Torres Residencial Campestre Santamaría", "Condominio La Punta Campestre", "Condominio Contadero", "Condominio La Joya", "Condominio Río Viejo"],
  "20340": ["Zona industrial Parque Industrial de Logística Automotriz (PILA)", "Ejido Arellano", "Ejido Buenavista de Peñuelas", "Colonia Peñuelas (El Cienegal)", "Ejido El Cedazo (Cedazo de San Antonio)"],
  "20341": ["Ranchería El Salto de los Salado"],
  "20342": ["Ranchería San Francisco", "Condominio San Gerardo", "Ranchería Santa Gertrudis"],
  "20343": ["Ranchería San José"],
  "20344": ["Pueblo Villa Licenciado Jesús Terán (Calvillito)"],
  "20345": ["Ejido Montoro (Mesa del Salto)"],
  "20346": ["Ejido Los Caños"],
  "20347": ["Ranchería Dolores", "Colonia El Turicate"],
  "20348": ["Ejido San Antonio de Peñuelas"],
  "20349": ["Aeropuerto Aguascalientes (Lic. Jesús Terán Peredo)"],
  "20363": ["Ejido San Antonio de los Pedroza", "Ejido San José de la Ordeña"],
  "20364": ["Ranchería San Nicolás de Arriba", "Ranchería San Nicolás de en Medio"],
  "20366": ["Ranchería La Herrada", "Ejido El Colorado (El Soyatal)", "Ejido El Conejal"],
  "20367": ["Colonia 2 de Octubre", "Colonia Che Guevara", "Colonia Tanque el Trigo", "Ejido Norias de Ojocaliente"],
  "20369": ["Ranchería El Malacate"],
  "20370": ["Rancho Puerto de Nieto"],
  "20371": ["Ranchería Santa Cruz de la Presa (La Tlacuacha)", "Ranchería Ciudad de los Niños", "Ranchería La Cotorra"],
  "20372": ["Ranchería Cabecita 3 Marías", "Ranchería El Niágara", "Ranchería Ex-Hacienda de Agostaderito", "Rancho Granjas Fátima", "Fraccionamiento Villa Campestre San José del Monte"],
  "20373": ["Ranchería El Ocote"],
  "20374": ["Ranchería La Huerta (La Cruz)"],
  "20375": ["Ejido El Tanque de los Jiménez", "Condominio Campestre Bosques de Las Lomas"],
  "20376": ["Ejido Centro de Arriba (El Taray)"],
  "20377": ["Ejido San Pedro Cieneguilla"],
  "20378": ["Ejido Cieneguilla (La Lumbrera)", "Hacienda Cieneguilla"],
  "20384": ["Ranchería El Hotelito", "Ejido Norias del Paso Hondo", "Ranchería Norias del Paso Hondo", "Ranchería Paso Hondo"],
  "20385": ["Ranchería La Rinconada (La Escondida)"],
  "20386": ["Ranchería El Duraznillo"],
  "20388": ["Ejido Los Cuervos (Los Ojos de Agua)", "Ranchería San Bartolo"],
  "20389": ["Ejido Los Durón", "Ranchería Soledad de Abajo", "Ranchería Matamoros"],
  "20392": ["Fraccionamiento Campestre el Potrerillo", "Zona industrial Parque Industrial Gigante de los Arellano", "Ejido El Gigante (Arellano)", "Rancho Montoro", "Equipamiento Universidad Autónoma de Aguascalientes Campus Sur"],
  "20393": ["Zona industrial Parque Industrial FINSA Aguascalientes"],
  "20394": ["Ranchería Lomas de Arellano", "Ranchería Tanque de Guadalupe", "Ranchería Cañada Grande de Cotorina"],
  "20395": ["Ejido Cotorina (Coyotes)"],
  "20396": ["Ejido El Refugio de Peñuelas", "Ranchería Ex-Hacienda de Peñuelas"]
};

async function populateFraccionamientos(cp, selectElement, otroDiv) {
  selectElement.innerHTML = '<option value="" disabled selected>Cargando...</option>';
  try {
    // Try API first (replace YOUR_API_TOKEN with actual token)
    const response = await fetch(`https://api.copomex.com/query/info_cp/${cp}?token=YOUR_API_TOKEN`);
    const data = await response.json();
    let fraccionamientos = data.response.asentamiento || [];

    // Fallback to local fraccionamientosPorCP if API fails or returns no data
    if (!fraccionamientos || fraccionamientos.length === 0) {
      fraccionamientos = fraccionamientosPorCP[cp] || [];
    }

    selectElement.innerHTML = '<option value="" disabled selected>Seleccione un fraccionamiento</option>';
    if (fraccionamientos.length > 0) {
      fraccionamientos.forEach(fracc => {
        const option = document.createElement('option');
        option.value = fracc;
        option.textContent = fracc;
        selectElement.appendChild(option);
      });
      selectElement.innerHTML += '<option value="Otro">Otro</option>';
      selectElement.disabled = false;
      otroDiv.style.display = 'none';
    } else {
      selectElement.disabled = true;
      selectElement.innerHTML = '<option value="" disabled selected>No hay fraccionamientos disponibles</option>';
      otroDiv.style.display = 'block';
    }
  } catch (error) {
    console.error('Error fetching fraccionamientos:', error);
    // Fallback to local fraccionamientosPorCP on error
    const fraccionamientos = fraccionamientosPorCP[cp] || [];
    selectElement.innerHTML = '<option value="" disabled selected>Seleccione un fraccionamiento</option>';
    if (fraccionamientos.length > 0) {
      fraccionamientos.forEach(fracc => {
        const option = document.createElement('option');
        option.value = fracc;
        option.textContent = fracc;
        selectElement.appendChild(option);
      });
      selectElement.innerHTML += '<option value="Otro">Otro</option>';
      selectElement.disabled = false;
      otroDiv.style.display = 'none';
    } else {
      selectElement.disabled = true;
      selectElement.innerHTML = '<option value="" disabled selected>No hay fraccionamientos disponibles</option>';
      otroDiv.style.display = 'block';
    }
  }
}

function showError(input, message) {
  const errorDiv = input.parentElement.querySelector('.error');
  errorDiv.textContent = message;
  errorDiv.style.color = 'red';
  setTimeout(() => errorDiv.textContent = '', 5000);
}

function serializeFormData() {
  const form = document.getElementById('formulario-medico');
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => {
    if (key === 'archivos[]' || key.includes('firma')) return;
    if (data[key]) {
      if (!Array.isArray(data[key])) data[key] = [data[key]];
      data[key].push(value);
    } else {
      data[key] = value;
    }
  });
  return JSON.stringify(data);
}

function generateQRCode() {
  const qrCodeDiv = document.getElementById('qrcode');
  qrCodeDiv.innerHTML = '';
  const baseUrl = window.location.origin + window.location.pathname;
  const serializedData = encodeURIComponent(serializeFormData());
  const qrUrl = `${baseUrl}?data=${serializedData}`;
  new QRCode(qrCodeDiv, {
    text: qrUrl,
    width: 128,
    height: 128,
    colorDark: '#00695c',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H
  });
}

function populateFormFromQR() {
  const urlParams = new URLSearchParams(window.location.search);
  const data = urlParams.get('data');
  if (data) {
    try {
      const formData = JSON.parse(decodeURIComponent(data));
      const form = document.getElementById('formulario-medico');
      Object.keys(formData).forEach(key => {
        const inputs = form.querySelectorAll(`[name="${key}"]`);
        inputs.forEach(input => {
          if (input.type === 'checkbox' || input.type === 'radio') {
            input.checked = formData[key].includes(input.value);
          } else {
            input.value = formData[key];
          }
        });
      });
      // Trigger CP and especialidad updates after populating
      const cpInput = document.querySelector('input[name="cp"]:not([disabled])');
      if (cpInput && cpInput.value) {
        cpInput.dispatchEvent(new Event('input'));
      }
      const especialidadSelect = document.querySelector('select[name="especialidad"]:not([disabled])');
      if (especialidadSelect) {
        especialidadSelect.dispatchEvent(new Event('change'));
      }
    } catch (e) {
      console.error('Error parsing QR data:', e);
    }
  }
}

function initSignatureCanvas(canvasId, hiddenInputId) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext('2d');
  let isDrawing = false;

  ctx.strokeStyle = '#000';
  ctx.lineWidth = 2;

  function startDrawing(e) {
    isDrawing = true;
    draw(e);
  }

  function stopDrawing() {
    isDrawing = false;
    ctx.beginPath();
    const hiddenInput = document.getElementById(hiddenInputId);
    hiddenInput.value = canvas.toDataURL('image/png');
  }

  function draw(e) {
    if (!isDrawing) return;
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || e.touches[0].clientX) - rect.left;
    const y = (e.clientY || e.touches[0].clientY) - rect.top;
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  }

  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('touchstart', startDrawing);
  canvas.addEventListener('touchend', stopDrawing);
  canvas.addEventListener('touchmove', draw);
}
import QRCode from "https://cdn.jsdelivr.net/npm/qrcode@1.5.3/build/qrcode.min.js";

document.addEventListener("DOMContentLoaded", () => {
  const urlActual = window.location.href;

  // Generar QR con la URL actual
  QRCode.toCanvas(document.getElementById("codigoQR"), urlActual, function (error) {
    if (error) console.error(error);
    console.log("Código QR generado");
  });
});
// Guardar datos temporalmente al escribir
document.getElementById("formulario-medico").addEventListener("input", () => {
  const datos = new FormData(document.getElementById("formulario-medico"));
  const obj = {};
  datos.forEach((valor, clave) => obj[clave] = valor);
  localStorage.setItem("datosFormulario", JSON.stringify(obj));
});

// Restaurar datos si existen
document.addEventListener("DOMContentLoaded", () => {
  const guardado = localStorage.getItem("datosFormulario");
  if (guardado) {
    const datos = JSON.parse(guardado);
    for (const campo in datos) {
      const input = document.querySelector(`[name="${campo}"]`);
      if (input && input.type !== "file") {
        input.value = datos[campo];
      }
    }
  }
});
