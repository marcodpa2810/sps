import {
  Broadcast,
  Cpu,
  Drop,
  Factory,
  Fire,
  Gauge,
  Lightning,
  Radio,
  ShieldCheck,
  SolarRoof,
  ThermometerSimple,
  Truck,
  Waves,
  Wrench,
} from '@phosphor-icons/react'

const base = '/assets/sps-field'

export const media = {
  heroHome: `${base}/hero-home.jpg`,
  heroHomeMobile: `${base}/hero-home-ai-mobile.png`,
  heroServices: `${base}/hero-services.jpg`,
  heroProjects: `${base}/hero-projects.jpg`,
  heroAbout: `${base}/hero-about.jpg`,
  heroContact: `${base}/hero-contact.jpg`,
  bajoGrandeCaldera: `${base}/bajo-grande-caldera.jpg`,
  bajoGrandePatio: `${base}/bajo-grande-patio-02.jpg`,
  bajoGrandePatioWide: `${base}/bajo-grande-patio-02-wide.jpg`,
  bajoGrandeEquipos: `${base}/bajo-grande-patio-04.jpg`,
  boscanAntes: `${base}/boscan-slop-antes.jpg`,
  boscanDespues: `${base}/boscan-slop-despues.jpg`,
  boscanFosa: `${base}/boscan-fosa-04.jpg`,
  boscanCosta: `${base}/boscan-fosa-03.jpg`,
  tiaJuana01: `${base}/tia-juana-b5-01.jpg`,
  tiaJuana02: `${base}/tia-juana-b5-02.jpg`,
  fracModern01: `${base}/frac-tanks-modern-01.jpg`,
  fracModern02: `${base}/frac-tanks-modern-02.jpg`,
  fracLine01: `${base}/frac-tank-line-01.jpg`,
  fracLine02: `${base}/frac-tank-line-02.jpg`,
  patioVapor01: `${base}/patio-vapor-01.jpg`,
  patioVapor02: `${base}/patio-vapor-02.jpg`,
  patioVapor03: `${base}/patio-vapor-03.jpg`,
}

export const clients = [
  'PDVSA',
  'Petroboscan',
  'Chevron',
  'Bajo Grande',
  'Tia Juana',
  'Cargill',
  'HPI LLC',
]

export const serviceGroups = [
  {
    id: 'vapor',
    title: 'Vapor y recuperacion de crudo',
    eyebrow: 'Operacion petrolera',
    image: media.bajoGrandeCaldera,
    icon: ThermometerSimple,
    intro:
      'Servicios de vapor para pozos, fosas, patios de tanques, calentamiento de crudo y recuperacion de hidrocarburos.',
    services: [
      'Alquiler de calderas portatiles',
      'Inyeccion de vapor a pozos',
      'Inyeccion de vapor para patio de tanques',
      'Calentamiento de crudo en Pit',
      'Recuperacion de crudo en fosas de pasivos ambientales',
      'Calentamiento de sellos de bomba para carga de buques',
      'Reparacion y mantenimiento de calentadores',
      'Reparacion y mantenimiento de calderas',
    ],
  },
  {
    id: 'manejo',
    title: 'Manejo y saneamiento de hidrocarburos',
    eyebrow: 'Desechos petrolizados',
    image: media.boscanFosa,
    icon: Waves,
    intro:
      'Tratamiento, saneamiento y disposicion temporal de hidrocarburos, aguas de proceso, lodos y sedimentos petrolizados.',
    services: [
      'Saneamiento mediante hidrojet en areas contaminadas con petroleo',
      'Bombeo de crudo',
      'Trasegado con vacuum de 160 barriles',
      'Alquiler de Frac Tank con capacidad de 500 barriles',
      'Camiones con equipos de soldadura',
      'Disposicion temporal de desechos provenientes de derrames',
    ],
  },
  {
    id: 'automatizacion',
    title: 'Automatizacion, control y telemetria',
    eyebrow: 'PLC / RTU / SCADA',
    image: media.bajoGrandeEquipos,
    icon: Cpu,
    intro:
      'Integracion de instrumentacion, control y comunicaciones para pozos, estaciones y plantas industriales.',
    services: [
      'Rehabilitacion de telemetria de pozos y estaciones',
      'Programacion de PLC en estaciones',
      'Programacion de RTU para pozos de produccion e inyeccion de agua',
      'Servicio SCADA Wonderware CIBO',
      'Variadores de pozos con bombas BCP y sus RTU',
      'Instrumentacion de pozos y estaciones',
      'Sistemas de puesta a tierra y proteccion de pararrayos',
      'Paneles solares para telemetria en pozos sin electricidad',
    ],
  },
]

export const featuredServices = [
  {
    title: 'Inyeccion de vapor a pozos',
    copy: 'Movilizacion de calderas, lineas, operadores y control de parametros para pozos de produccion.',
    image: media.tiaJuana02,
    icon: Fire,
  },
  {
    title: 'Patio de tanques y Pit',
    copy: 'Calentamiento de crudo, transferencia, apoyo con tanques y continuidad en areas operativas.',
    image: media.bajoGrandePatio,
    icon: Gauge,
  },
  {
    title: 'Recuperacion en fosas',
    copy: 'Servicio con vapor para recuperar crudo Slop y atender pasivos ambientales con evidencia fotografica.',
    image: media.boscanAntes,
    icon: Drop,
  },
  {
    title: 'Frac tanks y equipos moviles',
    copy: 'Tanques, unidades y accesorios preparados para almacenamiento temporal y operaciones de campo.',
    image: media.fracModern01,
    icon: Truck,
  },
  {
    title: 'SCADA, PLC y RTU',
    copy: 'Automatizacion de estaciones, telemetria, instrumentacion y monitoreo de variables criticas.',
    image: media.bajoGrandeEquipos,
    icon: Cpu,
  },
  {
    title: 'Redes y comunicaciones',
    copy: 'Conectividad, fibra, radio enlaces y soporte para instalaciones industriales y remotas.',
    image: media.fracLine01,
    icon: Broadcast,
  },
]

export const projectCases = [
  {
    title: 'Calentamiento y recuperacion de crudo Slop',
    location: 'Campo Boscan, Estacion 1',
    category: 'Antes / despues',
    image: media.boscanAntes,
    secondImage: media.boscanDespues,
    description:
      'Servicio de recuperacion de crudo con vapor en fosas de Campo Boscan, con registro fotografico antes y despues de la intervencion.',
  },
  {
    title: 'Inyeccion de vapor a pozos',
    location: 'PDVSA Tia Juana, Estacion B5',
    category: 'Vapor a pozos',
    image: media.tiaJuana01,
    secondImage: media.tiaJuana02,
    description:
      'Operacion de inyeccion de vapor a pozos con equipos movilizados en estacion y areas de produccion.',
  },
  {
    title: 'Calentamiento de crudo en Pit y patio de tanques',
    location: 'PDVSA Bajo Grande',
    category: 'Patio de tanques',
    image: media.bajoGrandeCaldera,
    secondImage: media.bajoGrandePatio,
    description:
      'Instalacion de caldera, tanques, lineas y sistemas auxiliares para calentamiento y manejo de crudo.',
  },
  {
    title: 'Saneamiento por derrames de hidrocarburos',
    location: 'Costas de San Francisco - La Canada',
    category: 'Saneamiento',
    image: media.boscanCosta,
    secondImage: media.boscanFosa,
    description:
      'Saneamiento y disposicion temporal de desechos provenientes de areas afectadas por derrames de hidrocarburos.',
  },
  {
    title: 'Frac tanks para almacenamiento temporal',
    location: 'Patio SPS',
    category: 'Equipos',
    image: media.fracModern01,
    secondImage: media.fracModern02,
    description:
      'Equipos de almacenamiento temporal con estructuras, escaleras y conexiones listas para operaciones petroleras.',
  },
  {
    title: 'Automatizacion e instrumentacion de campo',
    location: 'Estaciones y plantas industriales',
    category: 'Control',
    image: media.bajoGrandeEquipos,
    secondImage: media.fracLine02,
    description:
      'Soporte en telemetria, RTU, PLC, instrumentacion, puesta a tierra y comunicacion entre campo y sala de control.',
  },
]

export const capabilityIcons = [
  { label: 'Seguridad industrial', icon: ShieldCheck },
  { label: 'Vapor y temperatura', icon: ThermometerSimple },
  { label: 'Control de procesos', icon: Cpu },
  { label: 'Instrumentacion', icon: Gauge },
  { label: 'Energia y puesta a tierra', icon: Lightning },
  { label: 'Telemetria remota', icon: Radio },
  { label: 'Equipos moviles', icon: Truck },
  { label: 'Mantenimiento', icon: Wrench },
  { label: 'Paneles solares', icon: SolarRoof },
  { label: 'Operacion industrial', icon: Factory },
]
