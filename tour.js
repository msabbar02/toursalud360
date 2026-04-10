const TOUR = {
  "centros": [
    {
      "id": "milagrosa",
      "nombre": {
        "es": "Centro de Salud de La Milagrosa",
        "eu": "Arrosadiako Osasungunea"
      },
      "carpeta": "Centro de Salud de la Milagrosa/",
      "fondo": "IMG_20230904_140211_00_002.jpg",
      "salas": [
        {
          "id": "m_exterior",
          "nombre": {
            "es": "Exterior — Entrada al centro",
            "eu": "Kanpoaldea — Sarrera al centro"
          },
          "foto": "IMG_20230904_140211_00_002.jpg",
          "hotspots": [
            {
              "destino": "m_recepcion",
              "texto": {
                "es": "Entrar →",
                "eu": "Sartu →"
              },
              "rotacion": {
                "x": 11,
                "y": 158
              },
              "dist": 20
            }
          ]
        },
        {
          "id": "m_recepcion",
          "nombre": {
            "es": "Recepción / Admisión",
            "eu": "Harrera / Admisión"
          },
          "foto": "IMG_20230904_140357_00_003.jpg",
          "hotspots": [
            {
              "destino": "m_exterior",
              "texto": {
                "es": "← Salida",
                "eu": "← Salida"
              },
              "rotacion": {
                "x": 1,
                "y": 38
              },
              "dist": 20
            },
            {
              "destino": "m_pasillo1",
              "texto": {
                "es": "Pasillo →",
                "eu": "Korridorea →"
              },
              "rotacion": {
                "x": 1,
                "y": 180
              },
              "dist": 20
            },
            {
              "destino": "m_extracciones",
              "texto": {
                "es": "Sala de extracciones →",
                "eu": "Sala de extracciones →"
              },
              "rotacion": {
                "x": 2,
                "y": 61
              },
              "dist": 20
            }
          ]
        },
        {
          "id": "m_extracciones",
          "nombre": {
            "es": "Recepción / Admisión",
            "eu": "Harrera / Admisión"
          },
          "foto": "IMG_20230904_135241_00_001.jpg",
          "hotspots": [
            {
              "destino": "m_recepcion",
              "texto": {
                "es": "← Recepción",
                "eu": "← Harrera"
              },
              "rotacion": {
                "x": 4,
                "y": -153
              },
              "dist": 7
            }
          ]
        },
        {
          "id": "m_pasillo1",
          "nombre": {
            "es": "Pasillo principal",
            "eu": "Korridorea principal"
          },
          "foto": "IMG_20230904_140500_00_004.jpg",
          "hotspots": [
            {
              "destino": "m_recepcion",
              "texto": {
                "es": "← Recepción",
                "eu": "← Harrera"
              },
              "rotacion": {
                "x": 1,
                "y": -3
              },
              "dist": 16
            },
            {
              "destino": "m_pasillo2",
              "texto": {
                "es": "Seguir →",
                "eu": "Seguir →"
              },
              "rotacion": {
                "x": 2,
                "y": 167
              },
              "dist": 17
            }
          ]
        },
        {
          "id": "m_pasillo2",
          "nombre": {
            "es": "Pasillo interior",
            "eu": "Korridorea interior"
          },
          "foto": "IMG_20230904_140605_00_005.jpg",
          "hotspots": [
            {
              "destino": "m_pasillo1",
              "texto": {
                "es": "← Atrás",
                "eu": "← Atrás"
              },
              "rotacion": {
                "x": -1,
                "y": 0
              },
              "dist": 16
            },
            {
              "destino": "m_espera",
              "texto": {
                "es": "Sala espera →",
                "eu": "Sala espera →"
              },
              "rotacion": {
                "x": 1,
                "y": 172
              },
              "dist": 17
            }
          ]
        },
        {
          "id": "m_espera",
          "nombre": {
            "es": "Zona de espera",
            "eu": "Zona de espera"
          },
          "foto": "IMG_20230904_140824_00_006.jpg",
          "hotspots": [
            {
              "destino": "m_pasillo2",
              "texto": {
                "es": "← Pasillo",
                "eu": "← Korridorea"
              },
              "rotacion": {
                "x": 1,
                "y": 18
              },
              "dist": 16
            },
            {
              "destino": "m_espera2",
              "texto": {
                "es": "Consultas →",
                "eu": "Consultas →"
              },
              "rotacion": {
                "x": 3.5,
                "y": 161
              },
              "dist": 20
            }
          ]
        },
        {
          "id": "m_espera2",
          "nombre": {
            "es": "Sala de espera consultas",
            "eu": "Sala de espera consultas"
          },
          "foto": "IMG_20230904_140915_00_007.jpg",
          "hotspots": [
            {
              "destino": "m_espera",
              "texto": {
                "es": "← Espera",
                "eu": "← Espera"
              },
              "rotacion": {
                "x": -2,
                "y": -5
              },
              "dist": 17.5
            },
            {
              "destino": "m_extracciones2",
              "texto": {
                "es": "Extracciones 2 →",
                "eu": "Extracciones 2 →"
              },
              "rotacion": {
                "x": 8,
                "y": 133
              },
              "dist": 6.1
            }
          ]
        },
        {
          "id": "m_extracciones2",
          "nombre": {
            "es": "Sala de extracciones 2",
            "eu": "Sala de extracciones 2"
          },
          "foto": "IMG_20230904_141132_00_008.jpg",
          "hotspots": [
            {
              "destino": "m_espera2",
              "texto": {
                "es": "← Espera",
                "eu": "← Espera"
              },
              "rotacion": {
                "x": 10,
                "y": -54
              },
              "dist": 13.5
            }
          ]
        }
      ]
    },
    {
      "id": "principeviana",
      "nombre": {
        "es": "Consultas Príncipe de Viana",
        "eu": "Vianako Printzea Kontsulta Gunea"
      },
      "carpeta": "Consultas Externas Principe De Viana/",
      "fondo": "PrincipeViana_EntradaPrincipal.jpg",
      "salas": [
        {
          "id": "entrada_principal",
          "nombre": {
            "es": "Entrada Principal",
            "eu": "Sarrera Principal"
          },
          "foto": "PrincipeViana_EntradaPrincipal.jpg",
          "hotspots": [
            {
              "destino": "hall",
              "texto": {
                "es": "Entrar →",
                "eu": "Sartu →"
              },
              "rotacion": {
                "x": 4,
                "y": 92
              },
              "dist": 18
            }
          ]
        },
        {
          "id": "hall",
          "nombre": {
            "es": "Hall",
            "eu": "Hall"
          },
          "foto": "PrincipeViana_Hall.jpg",
          "hotspots": [
            {
              "destino": "entrada_trasera",
              "texto": {
                "es": "← entrada trasera",
                "eu": "← sarrera trasera"
              },
              "rotacion": {
                "x": 3,
                "y": 111
              },
              "dist": 14
            },
            {
              "destino": "bajada_escaleras",
              "texto": {
                "es": "bajada escaleras →",
                "eu": "bajada escaleras →"
              },
              "rotacion": {
                "x": -7,
                "y": 80
              },
              "dist": 20
            },
            {
              "destino": "sala_esperaConsulataInicio",
              "texto": {
                "es": "Sala de espera consultas inicio →",
                "eu": "Sala de espera consultas inicio →"
              },
              "rotacion": {
                "x": 3,
                "y": -1
              },
              "dist": 16
            },
            {
              "destino": "entrada_principal",
              "texto": {
                "es": "Entrada principal →",
                "eu": "Sarrera principal →"
              },
              "rotacion": {
                "x": 2,
                "y": -72
              },
              "dist": 20
            }
          ]
        },
        {
          "id": "entrada_trasera",
          "nombre": {
            "es": "Entrada trasera",
            "eu": "Sarrera trasera"
          },
          "foto": "PrincipeViana_EntradaTrasera.jpg",
          "hotspots": [
            {
              "destino": "hall",
              "texto": {
                "es": "← hall",
                "eu": "← hall"
              },
              "rotacion": {
                "x": 14,
                "y": -80
              },
              "dist": 13.5
            }
          ]
        },
        {
          "id": "sala_esperaConsulataInicio",
          "nombre": {
            "es": "Sala de espera consultas inicio",
            "eu": "Sala de espera consultas inicio"
          },
          "foto": "PrincipeViana_SalaEsperaConsultasInicio.jpg",
          "hotspots": [
            {
              "destino": "hall",
              "texto": {
                "es": "← hall",
                "eu": "← hall"
              },
              "rotacion": {
                "x": 3,
                "y": 9
              },
              "dist": 20
            },
            {
              "destino": "sala_esperaConsulataFondo",
              "texto": {
                "es": "Sala de espera consultas fondo →",
                "eu": "Sala de espera consultas fondo →"
              },
              "rotacion": {
                "x": 6,
                "y": -172
              },
              "dist": 16.5
            }
          ]
        },
        {
          "id": "sala_esperaConsulataFondo",
          "nombre": {
            "es": "Sala de espera consultas fondo",
            "eu": "Sala de espera consultas fondo"
          },
          "foto": "PrincipeViana_SalaEsperaConsultasFondo.jpg",
          "hotspots": [
            {
              "destino": "sala_esperaConsulataInicio",
              "texto": {
                "es": "← Sala de espera consultas inicio",
                "eu": "← Sala de espera consultas inicio"
              },
              "rotacion": {
                "x": 4,
                "y": 1
              },
              "dist": 15
            },
            {
              "destino": "consulta",
              "texto": {
                "es": "Consulta →",
                "eu": "Consulta →"
              },
              "rotacion": {
                "x": 2,
                "y": -128
              },
              "dist": 13.5
            }
          ]
        },
        {
          "id": "consulta",
          "nombre": {
            "es": "Consulta",
            "eu": "Consulta"
          },
          "foto": "PrincipeViana_Consulta.jpg",
          "hotspots": [
            {
              "destino": "sala_esperaConsulataFondo",
              "texto": {
                "es": "← Sala de espera consultas fondo",
                "eu": "← Sala de espera consultas fondo"
              },
              "rotacion": {
                "x": 0,
                "y": 64
              },
              "dist": 13.5
            }
          ]
        },
        {
          "id": "bajada_escaleras",
          "nombre": {
            "es": "Bajada de escaleras",
            "eu": "Bajada de escaleras"
          },
          "foto": "PrincipeViana_BajadaEscaleras.jpg",
          "hotspots": [
            {
              "destino": "hall",
              "texto": {
                "es": "← hall",
                "eu": "← hall"
              },
              "rotacion": {
                "x": 17,
                "y": 118
              },
              "dist": 14
            },
            {
              "destino": "pasilloFrenteExtracciones",
              "texto": {
                "es": "Pasillo →",
                "eu": "Korridorea →"
              },
              "rotacion": {
                "x": 1,
                "y": -10
              },
              "dist": 15.5
            }
          ]
        },
        {
          "id": "pasilloFrenteExtracciones",
          "nombre": {
            "es": "Pasillo frente a la bajada de escaleras",
            "eu": "Korridorea frente a la bajada de escaleras"
          },
          "foto": "PrincipeViana_PasilloFrenteExtracciones.jpg",
          "hotspots": [
            {
              "destino": "bajada_escaleras",
              "texto": {
                "es": "← Bajada de escaleras",
                "eu": "← Bajada de escaleras"
              },
              "rotacion": {
                "x": 3,
                "y": 177
              },
              "dist": 20
            },
            {
              "destino": "extracciones",
              "texto": {
                "es": "Extracciones →",
                "eu": "Extracciones →"
              },
              "rotacion": {
                "x": 5,
                "y": 73
              },
              "dist": 7
            },
            {
              "destino": "ecografia",
              "texto": {
                "es": "Ecografia →",
                "eu": "Ecografia →"
              },
              "rotacion": {
                "x": -3,
                "y": -112
              },
              "dist": 9.5
            },
            {
              "destino": "radiografia",
              "texto": {
                "es": "Radiografia →",
                "eu": "Radiografia →"
              },
              "rotacion": {
                "x": -2,
                "y": -64
              },
              "dist": 10
            }
          ]
        },
        {
          "id": "extracciones",
          "nombre": {
            "es": "Pasillo de extracciones",
            "eu": "Korridorea de extracciones"
          },
          "foto": "PrincipeViana_Extracciones.jpg",
          "hotspots": [
            {
              "destino": "pasilloFrenteExtracciones",
              "texto": {
                "es": "← Pasillo",
                "eu": "← Korridorea"
              },
              "rotacion": {
                "x": 7,
                "y": -73
              },
              "dist": 5
            }
          ]
        },
        {
          "id": "ecografia",
          "nombre": {
            "es": "Ecografia",
            "eu": "Ecografia"
          },
          "foto": "PrincipeViana_Ecografia.jpg",
          "hotspots": [
            {
              "destino": "pasilloFrenteExtracciones",
              "texto": {
                "es": "← Pasillo",
                "eu": "← Korridorea"
              },
              "rotacion": {
                "x": 0,
                "y": 157
              },
              "dist": 7.5
            }
          ]
        },
        {
          "id": "radiografia",
          "nombre": {
            "es": "Radiografias",
            "eu": "Radiografias"
          },
          "foto": "PrincipeViana_Radiografia.jpg",
          "hotspots": [
            {
              "destino": "pasilloFrenteExtracciones",
              "texto": {
                "es": "← Pasillo",
                "eu": "← Korridorea"
              },
              "rotacion": {
                "x": 4,
                "y": -109
              },
              "dist": 15
            }
          ]
        }
      ]
    },
    {
      "id": "virgendelcamino",
      "nombre": {
        "es": "Planta Pediatría Virgen del Camino",
        "eu": "Bideko Amaren Pediatria Solairua"
      },
      "carpeta": "Planta Pediatria Virgen del Camino/",
      "fondo": "VirgenDelCamino_PlantaAscensores.jpg",
      "salas": [
        {
          "id": "vc_ascensores",
          "nombre": {
            "es": "Planta 4 — Ascensores",
            "eu": "Planta 4 — Ascensores"
          },
          "foto": "VirgenDelCamino_PlantaAscensores.jpg",
          "hotspots": [
            {
              "destino": "vc_control",
              "texto": {
                "es": "Control enfermería →",
                "eu": "Control enfermería →"
              },
              "rotacion": {
                "x": 2,
                "y": 90
              },
              "dist": 14.5
            }
          ]
        },
        {
          "id": "vc_control",
          "nombre": {
            "es": "Control de enfermería",
            "eu": "Control de enfermería"
          },
          "foto": "VirgenDelCamino_Control.jpg",
          "hotspots": [
            {
              "destino": "vc_ascensores",
              "texto": {
                "es": "← Ascensores",
                "eu": "← Ascensores"
              },
              "rotacion": {
                "x": 1,
                "y": -7
              },
              "dist": 12.5
            },
            {
              "destino": "vc_pasillo",
              "texto": {
                "es": "Pasillo →",
                "eu": "Korridorea →"
              },
              "rotacion": {
                "x": 2,
                "y": 171
              },
              "dist": 18
            }
          ]
        },
        {
          "id": "vc_pasillo",
          "nombre": {
            "es": "Pasillo de la planta",
            "eu": "Korridorea de la planta"
          },
          "foto": "VirgenDelCamino_PasilloPlanta.jpg",
          "hotspots": [
            {
              "destino": "vc_control",
              "texto": {
                "es": "← Control",
                "eu": "← Control"
              },
              "rotacion": {
                "x": 3,
                "y": 180
              },
              "dist": 20
            },
            {
              "destino": "vc_habitacion",
              "texto": {
                "es": "Habitación →",
                "eu": "Habitación →"
              },
              "rotacion": {
                "x": 8,
                "y": 92
              },
              "dist": 20
            }
          ]
        },
        {
          "id": "vc_habitacion",
          "nombre": {
            "es": "Habitación",
            "eu": "Habitación"
          },
          "foto": "VirgenCamino_Habitacion.jpg",
          "hotspots": [
            {
              "destino": "vc_pasillo",
              "texto": {
                "es": "← Pasillo",
                "eu": "← Korridorea"
              },
              "rotacion": {
                "x": 2,
                "y": -96
              },
              "dist": 20
            }
          ]
        }
      ]
    },
    {
      "id": "urgenciaschn",
      "nombre": {
        "es": "Urgencias del Hospital Universitario de Navarra",
        "eu": "Nafarroako Ospitale Unibertsitarioa Larrialdiak"
      },
      "carpeta": "Urgencias Pamplona/",
      "fondo": "IMG_20240327_084354_00_001.png",
      "salas": [
        {
          "id": "u_exterior",
          "nombre": {
            "es": "Exterior — Edificio Urgencias",
            "eu": "Kanpoaldea — Edificio Urgencias"
          },
          "foto": "IMG_20240327_084354_00_001.png",
          "hotspots": [
            {
              "destino": "u_porche",
              "texto": {
                "es": "Entrar →",
                "eu": "Sartu →"
              },
              "rotacion": {
                "x": 9,
                "y": 58
              },
              "dist": 15.5
            }
          ]
        },
        {
          "id": "u_porche",
          "nombre": {
            "es": "Porche de entrada",
            "eu": "Porche de sarrera"
          },
          "foto": "IMG_20240327_084446_00_002.png",
          "hotspots": [
            {
              "destino": "u_exterior",
              "texto": {
                "es": "← Exterior",
                "eu": "← Kanpoaldea"
              },
              "rotacion": {
                "x": 1,
                "y": -111
              },
              "dist": 20
            },
            {
              "destino": "u_puerta",
              "texto": {
                "es": "Entrar →",
                "eu": "Sartu →"
              },
              "rotacion": {
                "x": 7,
                "y": 77
              },
              "dist": 9.5
            }
          ]
        },
        {
          "id": "u_puerta",
          "nombre": {
            "es": "Puerta entrada",
            "eu": "Puerta sarrera"
          },
          "foto": "IMG_20240327_084543_00_003.png",
          "hotspots": [
            {
              "destino": "u_porche",
              "texto": {
                "es": "← Exterior",
                "eu": "← Kanpoaldea"
              },
              "rotacion": {
                "x": -3,
                "y": -89
              },
              "dist": 7.5
            },
            {
              "destino": "u_recepcion1",
              "texto": {
                "es": "Recepción →",
                "eu": "Harrera →"
              },
              "rotacion": {
                "x": 6,
                "y": 137
              },
              "dist": 16.5
            },
            {
              "destino": "u_pasillo",
              "texto": {
                "es": "Pasillo →",
                "eu": "Korridorea →"
              },
              "rotacion": {
                "x": 7,
                "y": 88
              },
              "dist": 16
            }
          ]
        },
        {
          "id": "u_pasillo",
          "nombre": {
            "es": "Pasillo",
            "eu": "Korridorea"
          },
          "foto": "IMG_20240327_084729_00_006.png",
          "hotspots": [
            {
              "destino": "u_puerta",
              "texto": {
                "es": "← Puerta entrada",
                "eu": "← Puerta sarrera"
              },
              "rotacion": {
                "x": 6,
                "y": 92
              },
              "dist": 14
            },
            {
              "destino": "u_pasillo0",
              "texto": {
                "es": "Pasillo 0→",
                "eu": "Korridorea 0→"
              },
              "rotacion": {
                "x": 7,
                "y": -88
              },
              "dist": 16
            }
          ]
        },
        {
          "id": "u_pasillo0",
          "nombre": {
            "es": "Pasillo0",
            "eu": "Korridorea0"
          },
          "foto": "IMG_20240327_084825_00_007.png",
          "hotspots": [
            {
              "destino": "u_pasillo",
              "texto": {
                "es": "← Pasillo",
                "eu": "← Korridorea"
              },
              "rotacion": {
                "x": 7,
                "y": 88
              },
              "dist": 15.5
            },
            {
              "destino": "u_pasillo1",
              "texto": {
                "es": "Pasillo1 →",
                "eu": "Korridorea1 →"
              },
              "rotacion": {
                "x": 6,
                "y": -89
              },
              "dist": 16
            }
          ]
        },
        {
          "id": "u_recepcion1",
          "nombre": {
            "es": "Recepción — Mostrador de admisión",
            "eu": "Harrera — Mostrador de admisión"
          },
          "foto": "IMG_20240327_090310_00_016.png",
          "hotspots": [
            {
              "destino": "u_puerta",
              "texto": {
                "es": "← Puerta entrada",
                "eu": "← Puerta sarrera"
              },
              "rotacion": {
                "x": 4,
                "y": 129
              },
              "dist": 20
            },
            {
              "destino": "u_recepcion2",
              "texto": {
                "es": "Recepción 2 →",
                "eu": "Harrera 2 →"
              },
              "rotacion": {
                "x": 2,
                "y": -114
              },
              "dist": 8.5
            }
          ]
        },
        {
          "id": "u_recepcion2",
          "nombre": {
            "es": "Recepción — Mostrador de admisión",
            "eu": "Harrera — Mostrador de admisión"
          },
          "foto": "IMG_20240327_090335_00_017.png",
          "hotspots": [
            {
              "destino": "u_recepcion1",
              "texto": {
                "es": "← Recepción 1",
                "eu": "← Harrera 1"
              },
              "rotacion": {
                "x": 7,
                "y": 63
              },
              "dist": 11
            },
            {
              "destino": "u_pasillo1",
              "texto": {
                "es": "Pasillo 1→",
                "eu": "Korridorea 1→"
              },
              "rotacion": {
                "x": 4,
                "y": -120
              },
              "dist": 20
            },
            {
              "destino": "u_pasillo2",
              "texto": {
                "es": "Pasillo 2 →",
                "eu": "Korridorea 2 →"
              },
              "rotacion": {
                "x": 1,
                "y": -77
              },
              "dist": 17.5
            }
          ]
        },
        {
          "id": "u_pasillo1",
          "nombre": {
            "es": "Pasillo1",
            "eu": "Korridorea1"
          },
          "foto": "IMG_20240327_084954_00_009.png",
          "hotspots": [
            {
              "destino": "u_pasillo0",
              "texto": {
                "es": "← pasillo 0",
                "eu": "← korridorea 0"
              },
              "rotacion": {
                "x": 4,
                "y": 87
              },
              "dist": 15.5
            },
            {
              "destino": "u_recepcion2",
              "texto": {
                "es": "← Recepción 2",
                "eu": "← Harrera 2"
              },
              "rotacion": {
                "x": 3,
                "y": 42
              },
              "dist": 20
            },
            {
              "destino": "u_pasillo2",
              "texto": {
                "es": "Pasillo 2 →",
                "eu": "Korridorea 2 →"
              },
              "rotacion": {
                "x": 5,
                "y": -4
              },
              "dist": 14.5
            },
            {
              "destino": "consulta",
              "texto": {
                "es": "Consulta →",
                "eu": "Consulta →"
              },
              "rotacion": {
                "x": 1,
                "y": -47
              },
              "dist": 12
            },
            {
              "destino": "admision",
              "texto": {
                "es": "Admisión →",
                "eu": "Admisión →"
              },
              "rotacion": {
                "x": 4,
                "y": -90
              },
              "dist": 20
            }
          ]
        },
        {
          "id": "admision",
          "nombre": {
            "es": "Admisión",
            "eu": "Admisión"
          },
          "foto": "IMG_20240327_085055_00_010.png",
          "hotspots": [
            {
              "destino": "u_pasillo1",
              "texto": {
                "es": "← Pasillo 1",
                "eu": "← Korridorea 1"
              },
              "rotacion": {
                "x": 4,
                "y": 96
              },
              "dist": 20
            },
            {
              "destino": "admision1",
              "texto": {
                "es": "Admisión 1 →",
                "eu": "Admisión 1 →"
              },
              "rotacion": {
                "x": 13,
                "y": -45
              },
              "dist": 11.5
            }
          ]
        },
        {
          "id": "admision1",
          "nombre": {
            "es": "Admisión 1",
            "eu": "Admisión 1"
          },
          "foto": "IMG_20240327_085251_00_013.png",
          "hotspots": [
            {
              "destino": "admision",
              "texto": {
                "es": "← Admisión",
                "eu": "← Admisión"
              },
              "rotacion": {
                "x": 4,
                "y": 88
              },
              "dist": 14
            },
            {
              "destino": "final_pasillo1 ",
              "texto": {
                "es": "Final del pasillo 1→",
                "eu": "Final del korridorea 1→"
              },
              "rotacion": {
                "x": 4,
                "y": -112
              },
              "dist": 20
            }
          ]
        },
        {
          "id": "final_pasillo1",
          "nombre": {
            "es": "Final del pasillo",
            "eu": "Final del korridorea"
          },
          "foto": "IMG_20240327_095613_00_035.png",
          "hotspots": [
            {
              "destino": "admision1",
              "texto": {
                "es": "← Admisión 1",
                "eu": "← Admisión 1"
              },
              "rotacion": {
                "x": 4,
                "y": 123
              },
              "dist": 20
            },
            {
              "destino": "final_pasillo2",
              "texto": {
                "es": "Final del pasillo 2 →",
                "eu": "Final del korridorea 2 →"
              },
              "rotacion": {
                "x": 4,
                "y": -54
              },
              "dist": 20
            },
            {
              "destino": "consulta2",
              "texto": {
                "es": "Consulta 2→",
                "eu": "Consulta 2→"
              },
              "rotacion": {
                "x": 2,
                "y": 54
              },
              "dist": 15.5
            },
            {
              "destino": "ambulancia",
              "texto": {
                "es": "Ambulancia→",
                "eu": "Ambulancia→"
              },
              "rotacion": {
                "x": 0,
                "y": -146
              },
              "dist": 15.5
            }
          ]
        },
        {
          "id": "final_pasillo2",
          "nombre": {
            "es": "Final del pasillo 2",
            "eu": "Final del korridorea 2"
          },
          "foto": "IMG_20240327_095702_00_036.png",
          "hotspots": [
            {
              "destino": "final_pasillo1",
              "texto": {
                "es": "← Final del pasillo",
                "eu": "← Final del korridorea"
              },
              "rotacion": {
                "x": 4,
                "y": -136
              },
              "dist": 16.5
            },
            {
              "destino": "consulta3",
              "texto": {
                "es": "Consulta 3→",
                "eu": "Consulta 3→"
              },
              "rotacion": {
                "x": 2,
                "y": 152
              },
              "dist": 11
            }
          ]
        },
        {
          "id": "ambulancia",
          "nombre": {
            "es": "Ambulancia",
            "eu": "Ambulancia"
          },
          "foto": "IMG_20240327_095517_00_034.png",
          "hotspots": [
            {
              "destino": "final_pasillo1",
              "texto": {
                "es": "← Final del pasillo 1",
                "eu": "← Final del korridorea 1"
              },
              "rotacion": {
                "x": 3,
                "y": 1
              },
              "dist": 20
            }
          ]
        },
        {
          "id": "consulta",
          "nombre": {
            "es": "Consulta",
            "eu": "Consulta"
          },
          "foto": "IMG_20240327_090039_00_015.png",
          "hotspots": [
            {
              "destino": "u_pasillo1",
              "texto": {
                "es": "← Pasillo 1",
                "eu": "← Korridorea 1"
              },
              "rotacion": {
                "x": -3,
                "y": 140
              },
              "dist": 7.5
            }
          ]
        },
        {
          "id": "consulta2",
          "nombre": {
            "es": "Consulta 2",
            "eu": "Consulta 2"
          },
          "foto": "IMG_20240327_095349_00_033.png",
          "hotspots": [
            {
              "destino": "final_pasillo1",
              "texto": {
                "es": "← Final del pasillo 1",
                "eu": "← Final del korridorea 1"
              },
              "rotacion": {
                "x": 4,
                "y": 50
              },
              "dist": 18
            }
          ]
        },
        {
          "id": "consulta3",
          "nombre": {
            "es": "Consulta 3",
            "eu": "Consulta 3"
          },
          "foto": "IMG_20240327_102254_00_043.png",
          "hotspots": [
            {
              "destino": "final_pasillo2",
              "texto": {
                "es": "← Final del pasillo 2",
                "eu": "← Final del korridorea 2"
              },
              "rotacion": {
                "x": 4,
                "y": 129
              },
              "dist": 20
            }
          ]
        },
        {
          "id": "u_pasillo2",
          "nombre": {
            "es": "Pasillo2",
            "eu": "Korridorea2"
          },
          "foto": "IMG_20240327_090417_00_018.png",
          "hotspots": [
            {
              "destino": "u_recepcion2",
              "texto": {
                "es": "← Recepción 2",
                "eu": "← Harrera 2"
              },
              "rotacion": {
                "x": 6,
                "y": 105
              },
              "dist": 15
            },
            {
              "destino": "u_pasillo1",
              "texto": {
                "es": "Pasillo 1→",
                "eu": "Korridorea 1→"
              },
              "rotacion": {
                "x": 7,
                "y": -180
              },
              "dist": 16
            },
            {
              "destino": "u_pasillo3  ",
              "texto": {
                "es": "Pasillo 3 →",
                "eu": "Korridorea 3 →"
              },
              "rotacion": {
                "x": 5,
                "y": 1
              },
              "dist": 20
            }
          ]
        },
        {
          "id": "u_pasillo3",
          "nombre": {
            "es": "Pasillo3",
            "eu": "Korridorea3"
          },
          "foto": "IMG_20240327_090611_00_020.png",
          "hotspots": [
            {
              "destino": "u_pasillo2",
              "texto": {
                "es": "← Pasillo 2",
                "eu": "← Korridorea 2"
              },
              "rotacion": {
                "x": 3,
                "y": -177
              },
              "dist": 17
            },
            {
              "destino": "u_pasillo4",
              "texto": {
                "es": "Pasillo 4 →",
                "eu": "Korridorea 4 →"
              },
              "rotacion": {
                "x": 5,
                "y": 1
              },
              "dist": 17
            }
          ]
        },
        {
          "id": "u_pasillo4",
          "nombre": {
            "es": "Pasillo4",
            "eu": "Korridorea4"
          },
          "foto": "IMG_20240327_090734_00_022.png",
          "hotspots": [
            {
              "destino": "u_pasillo3",
              "texto": {
                "es": "← Pasillo 3",
                "eu": "← Korridorea 3"
              },
              "rotacion": {
                "x": 3,
                "y": -178
              },
              "dist": 18
            },
            {
              "destino": "u_pasillo5",
              "texto": {
                "es": "Pasillo 5 →",
                "eu": "Korridorea 5 →"
              },
              "rotacion": {
                "x": 5,
                "y": 80
              },
              "dist": 10
            }
          ]
        },
        {
          "id": "u_pasillo5",
          "nombre": {
            "es": "Pasillo5",
            "eu": "Korridorea5"
          },
          "foto": "IMG_20240327_091923_00_023.png",
          "hotspots": [
            {
              "destino": "u_pasillo4",
              "texto": {
                "es": "← Pasillo 4",
                "eu": "← Korridorea 4"
              },
              "rotacion": {
                "x": 3,
                "y": -126
              },
              "dist": 7
            },
            {
              "destino": "habitacion",
              "texto": {
                "es": "habitacion →",
                "eu": "habitacion →"
              },
              "rotacion": {
                "x": 5,
                "y": 23
              },
              "dist": 11
            }
          ]
        },
        {
          "id": "habitacion",
          "nombre": {
            "es": "habitacion",
            "eu": "habitacion"
          },
          "foto": "IMG_20240327_091954_00_024.png",
          "hotspots": [
            {
              "destino": "u_pasillo5",
              "texto": {
                "es": "← Pasillo 5",
                "eu": "← Korridorea 5"
              },
              "rotacion": {
                "x": 7,
                "y": -154
              },
              "dist": 9.5
            },
            {
              "destino": "cama1",
              "texto": {
                "es": "cama1 →",
                "eu": "cama1 →"
              },
              "rotacion": {
                "x": 2,
                "y": -9
              },
              "dist": 7
            }
          ]
        },
        {
          "id": "cama1",
          "nombre": {
            "es": "cama1",
            "eu": "cama1"
          },
          "foto": "IMG_20240327_092435_00_026.png",
          "hotspots": [
            {
              "destino": "habitacion",
              "texto": {
                "es": "← habitacion",
                "eu": "← habitacion"
              },
              "rotacion": {
                "x": 6,
                "y": -140
              },
              "dist": 6
            }
          ]
        }
      ]
    },
    {
      "id": "urgenciaspediatria",
      "nombre": {
        "es": "Urgencias Pediátria",
        "eu": "Pediatriako Larrialdiak"
      },
      "carpeta": "Urgencias Pediatria/",
      "fondo": "01UrgenciasPediatria_Recepción.jpg",
      "salas": [
        {
          "id": "recepcion",
          "nombre": {
            "es": "Recepción",
            "eu": "Harrera"
          },
          "foto": "01UrgenciasPediatria_Recepción.jpg",
          "hotspots": [
            {
              "destino": "admision",
              "texto": {
                "es": "Admisión →",
                "eu": "Admisión →"
              },
              "rotacion": {
                "x": 3,
                "y": 106
              },
              "dist": 11.5
            },
            {
              "destino": "salaespera",
              "texto": {
                "es": "Sala de espera →",
                "eu": "Sala de espera →"
              },
              "rotacion": {
                "x": 1,
                "y": -146
              },
              "dist": 12
            },
            {
              "destino": "triaje",
              "texto": {
                "es": "Triaje →",
                "eu": "Triaje →"
              },
              "rotacion": {
                "x": 2,
                "y": 25
              },
              "dist": 12
            }
          ]
        },
        {
          "id": "salaespera",
          "nombre": {
            "es": "SalaEspera",
            "eu": "SalaEspera"
          },
          "foto": "04UrgenciasPediatria__SalaEspera_de1.jpg",
          "hotspots": [
            {
              "destino": "recepcion",
              "texto": {
                "es": "← Recepción",
                "eu": "← Harrera"
              },
              "rotacion": {
                "x": 3,
                "y": -174
              },
              "dist": 14
            }
          ]
        },
        {
          "id": "triaje",
          "nombre": {
            "es": "Triaje",
            "eu": "Triaje"
          },
          "foto": "05UrgenciasPediatria_Triaje_de1.jpg",
          "hotspots": [
            {
              "destino": "recepcion",
              "texto": {
                "es": "← Recepción",
                "eu": "← Harrera"
              },
              "rotacion": {
                "x": 4,
                "y": 11
              },
              "dist": 7
            }
          ]
        },
        {
          "id": "admision",
          "nombre": {
            "es": "Admisión",
            "eu": "Admisión"
          },
          "foto": "02UrgenciasPediatria_Admision_de1.jpg",
          "hotspots": [
            {
              "destino": "recepcion",
              "texto": {
                "es": "← Recepción",
                "eu": "← Harrera"
              },
              "rotacion": {
                "x": 4,
                "y": -97
              },
              "dist": 12
            },
            {
              "destino": "pasillo_de2",
              "texto": {
                "es": "Pasillo de 2 →",
                "eu": "Korridorea de 2 →"
              },
              "rotacion": {
                "x": 7,
                "y": 95
              },
              "dist": 8.5
            }
          ]
        },
        {
          "id": "pasillo_de2",
          "nombre": {
            "es": "Pasillo de 2",
            "eu": "Korridorea de 2"
          },
          "foto": "06UrgenciasPediatria_Pasillo_de2.jpg",
          "hotspots": [
            {
              "destino": "admision",
              "texto": {
                "es": "← Admisión",
                "eu": "← Admisión"
              },
              "rotacion": {
                "x": 4,
                "y": 88
              },
              "dist": 11
            },
            {
              "destino": "pasillo_de6",
              "texto": {
                "es": "Pasillo de 6 →",
                "eu": "Korridorea de 6 →"
              },
              "rotacion": {
                "x": 5,
                "y": -3
              },
              "dist": 12
            }
          ]
        },
        {
          "id": "pasillo_de6",
          "nombre": {
            "es": "Pasillo de 6",
            "eu": "Korridorea de 6"
          },
          "foto": "07UrgenciasPediatria_Pasillo_de6.jpg",
          "hotspots": [
            {
              "destino": "pasillo_de2",
              "texto": {
                "es": "← Pasillo de 2",
                "eu": "← Korridorea de 2"
              },
              "rotacion": {
                "x": 6,
                "y": -178
              },
              "dist": 12
            },
            {
              "destino": "salaEspera_de8",
              "texto": {
                "es": "Sala de espera de 8 →",
                "eu": "Sala de espera de 8 →"
              },
              "rotacion": {
                "x": 7,
                "y": 89
              },
              "dist": 9
            },
            {
              "destino": "esquinaPasillo_de7",
              "texto": {
                "es": "Esquina Pasillo de 7 →",
                "eu": "Esquina Korridorea de 7 →"
              },
              "rotacion": {
                "x": 8,
                "y": -1
              },
              "dist": 11
            }
          ]
        },
        {
          "id": "salaEspera_de8",
          "nombre": {
            "es": "Sala de espera de 8",
            "eu": "Sala de espera de 8"
          },
          "foto": "09UrgenciasPediatria_SalaEspera_de8.jpg",
          "hotspots": [
            {
              "destino": "pasillo_de6",
              "texto": {
                "es": "← Pasillo de 6",
                "eu": "← Korridorea de 6"
              },
              "rotacion": {
                "x": 6,
                "y": -101
              },
              "dist": 7
            }
          ]
        },
        {
          "id": "esquinaPasillo_de7",
          "nombre": {
            "es": "Esquina Pasillo de 7",
            "eu": "Esquina Korridorea de 7"
          },
          "foto": "10UrgenciasPediatria_EsquinaPasillo_de7.jpg",
          "hotspots": [
            {
              "destino": "pasillo_de6",
              "texto": {
                "es": "← Pasillo de 6",
                "eu": "← Korridorea de 6"
              },
              "rotacion": {
                "x": 7,
                "y": -180
              },
              "dist": 10
            },
            {
              "destino": "box_de10",
              "texto": {
                "es": "Box de 10 →",
                "eu": "Box de 10 →"
              },
              "rotacion": {
                "x": 5,
                "y": 47
              },
              "dist": 11
            },
            {
              "destino": "pasillo_de10",
              "texto": {
                "es": "Pasillo de 10 →",
                "eu": "Korridorea de 10 →"
              },
              "rotacion": {
                "x": 6,
                "y": -88
              },
              "dist": 11.5
            }
          ]
        },
        {
          "id": "box_de10",
          "nombre": {
            "es": "Box de 10",
            "eu": "Box de 10"
          },
          "foto": "12UrgenciasPediatria_Box_de10.jpg",
          "hotspots": [
            {
              "destino": "esquinaPasillo_de7",
              "texto": {
                "es": "← Esquina Pasillo de 7",
                "eu": "← Esquina Korridorea de 7"
              },
              "rotacion": {
                "x": 5,
                "y": -92
              },
              "dist": 11.5
            }
          ]
        },
        {
          "id": "pasillo_de10",
          "nombre": {
            "es": "Pasillo de 10",
            "eu": "Korridorea de 10"
          },
          "foto": "13UrgenciasPediatria_Pasillo_de10.jpg",
          "hotspots": [
            {
              "destino": "esquinaPasillo_de7",
              "texto": {
                "es": "← Esquina Pasillo de 7",
                "eu": "← Esquina Korridorea de 7"
              },
              "rotacion": {
                "x": 6,
                "y": -88
              },
              "dist": 12.5
            },
            {
              "destino": "salaEspera_de13",
              "texto": {
                "es": "Sala de espera de 13 →",
                "eu": "Sala de espera de 13 →"
              },
              "rotacion": {
                "x": 6,
                "y": 175
              },
              "dist": 10
            },
            {
              "destino": "pasillo_de13",
              "texto": {
                "es": "Pasillo de 13 →",
                "eu": "Korridorea de 13 →"
              },
              "rotacion": {
                "x": 5,
                "y": 95
              },
              "dist": 12
            }
          ]
        },
        {
          "id": "salaEspera_de13",
          "nombre": {
            "es": "Sala de espera de 13",
            "eu": "Sala de espera de 13"
          },
          "foto": "14UrgenciasPediatria_SalaEspera_de13.jpg",
          "hotspots": [
            {
              "destino": "pasillo_de10",
              "texto": {
                "es": "← Pasillo de 10",
                "eu": "← Korridorea de 10"
              },
              "rotacion": {
                "x": 5,
                "y": -1
              },
              "dist": 11
            }
          ]
        },
        {
          "id": "pasillo_de13",
          "nombre": {
            "es": "Pasillo de 13",
            "eu": "Korridorea de 13"
          },
          "foto": "15UrgenciasPediatria_Pasillo_de13.jpg",
          "hotspots": [
            {
              "destino": "pasillo_de10",
              "texto": {
                "es": "← Pasillo de 10",
                "eu": "← Korridorea de 10"
              },
              "rotacion": {
                "x": 7,
                "y": 98
              },
              "dist": 11
            },
            {
              "destino": "consulta_de15",
              "texto": {
                "es": "Consulta de 15 →",
                "eu": "Consulta de 15 →"
              },
              "rotacion": {
                "x": 4,
                "y": -177
              },
              "dist": 11.5
            },
            {
              "destino": "pasillo_de15",
              "texto": {
                "es": "Pasillo de 15 →",
                "eu": "Korridorea de 15 →"
              },
              "rotacion": {
                "x": 4,
                "y": -82
              },
              "dist": 16.5
            }
          ]
        },
        {
          "id": "consulta_de15",
          "nombre": {
            "es": "Consulta de 15",
            "eu": "Consulta de 15"
          },
          "foto": "16UrgenciasPediatria_Consulta_de15.jpg",
          "hotspots": [
            {
              "destino": "pasillo_de13",
              "texto": {
                "es": "← Pasillo de 13",
                "eu": "← Korridorea de 13"
              },
              "rotacion": {
                "x": 5,
                "y": -26
              },
              "dist": 9.5
            },
            {
              "destino": "consulta_de16",
              "texto": {
                "es": "Consulta de 16 →",
                "eu": "Consulta de 16 →"
              },
              "rotacion": {
                "x": 6,
                "y": -180
              },
              "dist": 9.5
            }
          ]
        },
        {
          "id": "consulta_de16",
          "nombre": {
            "es": "Consulta de 16",
            "eu": "Consulta de 16"
          },
          "foto": "17UrgenciasPediatria_Consulta_igualque16.jpg",
          "hotspots": [
            {
              "destino": "consulta_de15",
              "texto": {
                "es": "← Consulta de 15",
                "eu": "← Consulta de 15"
              },
              "rotacion": {
                "x": 0,
                "y": -27
              },
              "dist": 10.5
            }
          ]
        },
        {
          "id": "pasillo_de15",
          "nombre": {
            "es": "Pasillo de 15",
            "eu": "Korridorea de 15"
          },
          "foto": "18UrgenciasPediatria_Pasillo_de15.jpg",
          "hotspots": [
            {
              "destino": "pasillo_de13",
              "texto": {
                "es": "← Pasillo de 13",
                "eu": "← Korridorea de 13"
              },
              "rotacion": {
                "x": 7,
                "y": 110
              },
              "dist": 12.5
            },
            {
              "destino": "consulta_de18",
              "texto": {
                "es": "Consulta de 18 →",
                "eu": "Consulta de 18 →"
              },
              "rotacion": {
                "x": 6,
                "y": -178
              },
              "dist": 9.5
            }
          ]
        },
        {
          "id": "consulta_de18",
          "nombre": {
            "es": "Consulta de 18",
            "eu": "Consulta de 18"
          },
          "foto": "19UrgenciasPediatria_Consulta_de18.jpg",
          "hotspots": [
            {
              "destino": "pasillo_de15",
              "texto": {
                "es": "← Pasillo de 15",
                "eu": "← Korridorea de 15"
              },
              "rotacion": {
                "x": 5,
                "y": -16
              },
              "dist": 10
            }
          ]
        }
      ]
    },
    {
      "id": "zonaneuro",
      "nombre": {
        "es": "Neurofisiología del Hospital Universitario de Navarra",
        "eu": "Nafarroako Ospitale Unibertsitarioa - Neurofisiologia"
      },
      "carpeta": "Zona Neuro/",
      "fondo": "IMG_20240412_172816_00_068.png",
      "salas": [
        {
          "id": "zn_19",
          "nombre": {
            "es": "Posición 20",
            "eu": "Posición 20"
          },
          "foto": "IMG_20240412_172816_00_068.png",
          "hotspots": [
            {
              "destino": "zn_18",
              "texto": {
                "es": "Siguiente →",
                "eu": "Siguiente →"
              },
              "rotacion": {
                "x": 8,
                "y": -79
              },
              "dist": 12.5
            }
          ]
        },
        {
          "id": "zn_18",
          "nombre": {
            "es": "Posición 19",
            "eu": "Posición 19"
          },
          "foto": "IMG_20240412_172742_00_067.png",
          "hotspots": [
            {
              "destino": "zn_19",
              "texto": {
                "es": "← Atrás",
                "eu": "← Atrás"
              },
              "rotacion": {
                "x": 12,
                "y": 94
              },
              "dist": 8.5
            },
            {
              "destino": "zn_17",
              "texto": {
                "es": "Siguiente →",
                "eu": "Siguiente →"
              },
              "rotacion": {
                "x": 19,
                "y": -10
              },
              "dist": 20
            }
          ]
        },
        {
          "id": "zn_17",
          "nombre": {
            "es": "Posición 18",
            "eu": "Posición 18"
          },
          "foto": "IMG_20240412_172709_00_066.png",
          "hotspots": [
            {
              "destino": "zn_18",
              "texto": {
                "es": "← Atrás",
                "eu": "← Atrás"
              },
              "rotacion": {
                "x": -11,
                "y": 175
              },
              "dist": 20
            },
            {
              "destino": "zn_16",
              "texto": {
                "es": "Siguiente →",
                "eu": "Siguiente →"
              },
              "rotacion": {
                "x": 13,
                "y": -138
              },
              "dist": 20
            }
          ]
        },
        {
          "id": "zn_16",
          "nombre": {
            "es": "Posición 17",
            "eu": "Posición 17"
          },
          "foto": "IMG_20240412_172638_00_065.png",
          "hotspots": [
            {
              "destino": "zn_17",
              "texto": {
                "es": "← Atrás",
                "eu": "← Atrás"
              },
              "rotacion": {
                "x": 2,
                "y": 39
              },
              "dist": 12
            },
            {
              "destino": "zn_15",
              "texto": {
                "es": "Siguiente →",
                "eu": "Siguiente →"
              },
              "rotacion": {
                "x": 3,
                "y": -93
              },
              "dist": 17
            }
          ]
        },
        {
          "id": "zn_15",
          "nombre": {
            "es": "Posición 16",
            "eu": "Posición 16"
          },
          "foto": "IMG_20240412_172434_00_064.png",
          "hotspots": [
            {
              "destino": "zn_16",
              "texto": {
                "es": "← Atrás",
                "eu": "← Atrás"
              },
              "rotacion": {
                "x": 7,
                "y": 89
              },
              "dist": 20
            },
            {
              "destino": "zn_14",
              "texto": {
                "es": "Siguiente →",
                "eu": "Siguiente →"
              },
              "rotacion": {
                "x": 4,
                "y": -173
              },
              "dist": 13.5
            }
          ]
        },
        {
          "id": "zn_14",
          "nombre": {
            "es": "Posición 15",
            "eu": "Posición 15"
          },
          "foto": "IMG_20240412_172302_00_061.png",
          "hotspots": [
            {
              "destino": "zn_15",
              "texto": {
                "es": "← Atrás",
                "eu": "← Atrás"
              },
              "rotacion": {
                "x": 10,
                "y": -3
              },
              "dist": 10
            },
            {
              "destino": "zn_13",
              "texto": {
                "es": "Siguiente →",
                "eu": "Siguiente →"
              },
              "rotacion": {
                "x": 8,
                "y": 174
              },
              "dist": 15
            }
          ]
        },
        {
          "id": "zn_13",
          "nombre": {
            "es": "Posición 14",
            "eu": "Posición 14"
          },
          "foto": "IMG_20240412_172237_00_060.png",
          "hotspots": [
            {
              "destino": "zn_14",
              "texto": {
                "es": "← Atrás",
                "eu": "← Atrás"
              },
              "rotacion": {
                "x": 5,
                "y": 2
              },
              "dist": 17
            },
            {
              "destino": "zn_12",
              "texto": {
                "es": "Siguiente →",
                "eu": "Siguiente →"
              },
              "rotacion": {
                "x": 3,
                "y": -98
              },
              "dist": 12
            }
          ]
        },
        {
          "id": "zn_12",
          "nombre": {
            "es": "Posición 13",
            "eu": "Posición 13"
          },
          "foto": "IMG_20240412_172201_00_058.png",
          "hotspots": [
            {
              "destino": "zn_13",
              "texto": {
                "es": "← Atrás",
                "eu": "← Atrás"
              },
              "rotacion": {
                "x": 11,
                "y": 100
              },
              "dist": 9.5
            },
            {
              "destino": "zn_11",
              "texto": {
                "es": "Siguiente →",
                "eu": "Siguiente →"
              },
              "rotacion": {
                "x": 2,
                "y": -88
              },
              "dist": 13
            }
          ]
        },
        {
          "id": "zn_11",
          "nombre": {
            "es": "Posición 12",
            "eu": "Posición 12"
          },
          "foto": "IMG_20240412_172136_00_057.png",
          "hotspots": [
            {
              "destino": "zn_12",
              "texto": {
                "es": "← Atrás",
                "eu": "← Atrás"
              },
              "rotacion": {
                "x": 11,
                "y": 90
              },
              "dist": 8
            },
            {
              "destino": "zn_10",
              "texto": {
                "es": "Siguiente →",
                "eu": "Siguiente →"
              },
              "rotacion": {
                "x": 3,
                "y": -90
              },
              "dist": 13.5
            }
          ]
        },
        {
          "id": "zn_10",
          "nombre": {
            "es": "Posición 11",
            "eu": "Posición 11"
          },
          "foto": "IMG_20240412_172113_00_056.png",
          "hotspots": [
            {
              "destino": "zn_11",
              "texto": {
                "es": "← Atrás",
                "eu": "← Atrás"
              },
              "rotacion": {
                "x": 8,
                "y": 62
              },
              "dist": 10
            },
            {
              "destino": "zn_9",
              "texto": {
                "es": "Siguiente →",
                "eu": "Siguiente →"
              },
              "rotacion": {
                "x": 4,
                "y": -93
              },
              "dist": 14.5
            }
          ]
        },
        {
          "id": "zn_9",
          "nombre": {
            "es": "Posición 10",
            "eu": "Posición 10"
          },
          "foto": "IMG_20240412_172051_00_055.png",
          "hotspots": [
            {
              "destino": "zn_10",
              "texto": {
                "es": "← Atrás",
                "eu": "← Atrás"
              },
              "rotacion": {
                "x": 3,
                "y": 88
              },
              "dist": 11
            },
            {
              "destino": "zn_8",
              "texto": {
                "es": "Siguiente →",
                "eu": "Siguiente →"
              },
              "rotacion": {
                "x": 2,
                "y": -90
              },
              "dist": 16
            }
          ]
        },
        {
          "id": "zn_8",
          "nombre": {
            "es": "Posición 9",
            "eu": "Posición 9"
          },
          "foto": "IMG_20240412_172017_00_054.png",
          "hotspots": [
            {
              "destino": "zn_9",
              "texto": {
                "es": "← Atrás",
                "eu": "← Atrás"
              },
              "rotacion": {
                "x": 6,
                "y": 90
              },
              "dist": 20
            },
            {
              "destino": "zn_7",
              "texto": {
                "es": "Siguiente →",
                "eu": "Siguiente →"
              },
              "rotacion": {
                "x": 3,
                "y": -92
              },
              "dist": 15
            }
          ]
        },
        {
          "id": "zn_7",
          "nombre": {
            "es": "Posición 8",
            "eu": "Posición 8"
          },
          "foto": "IMG_20240412_171951_00_053.png",
          "hotspots": [
            {
              "destino": "zn_8",
              "texto": {
                "es": "← Atrás",
                "eu": "← Atrás"
              },
              "rotacion": {
                "x": 7,
                "y": 88
              },
              "dist": 14.5
            },
            {
              "destino": "zn_6",
              "texto": {
                "es": "Siguiente →",
                "eu": "Siguiente →"
              },
              "rotacion": {
                "x": 6,
                "y": -92
              },
              "dist": 12.5
            }
          ]
        },
        {
          "id": "zn_6",
          "nombre": {
            "es": "Posición 7",
            "eu": "Posición 7"
          },
          "foto": "IMG_20240412_171928_00_052.png",
          "hotspots": [
            {
              "destino": "zn_7",
              "texto": {
                "es": "← Atrás",
                "eu": "← Atrás"
              },
              "rotacion": {
                "x": 9,
                "y": 96
              },
              "dist": 11.5
            },
            {
              "destino": "zn_5",
              "texto": {
                "es": "Siguiente →",
                "eu": "Siguiente →"
              },
              "rotacion": {
                "x": 7,
                "y": -174
              },
              "dist": 8.5
            }
          ]
        },
        {
          "id": "zn_5",
          "nombre": {
            "es": "Posición 6",
            "eu": "Posición 6"
          },
          "foto": "IMG_20240412_171905_00_051.png",
          "hotspots": [
            {
              "destino": "zn_6",
              "texto": {
                "es": "← Atrás",
                "eu": "← Atrás"
              },
              "rotacion": {
                "x": 11,
                "y": 77
              },
              "dist": 10
            },
            {
              "destino": "zn_4",
              "texto": {
                "es": "Siguiente →",
                "eu": "Siguiente →"
              },
              "rotacion": {
                "x": 7,
                "y": -86
              },
              "dist": 12.5
            }
          ]
        },
        {
          "id": "zn_4",
          "nombre": {
            "es": "Posición 5",
            "eu": "Posición 5"
          },
          "foto": "IMG_20240412_171835_00_050.png",
          "hotspots": [
            {
              "destino": "zn_5",
              "texto": {
                "es": "← Atrás",
                "eu": "← Atrás"
              },
              "rotacion": {
                "x": 7,
                "y": 91
              },
              "dist": 11.5
            },
            {
              "destino": "zn_3",
              "texto": {
                "es": "Siguiente →",
                "eu": "Siguiente →"
              },
              "rotacion": {
                "x": 6,
                "y": -92
              },
              "dist": 11
            }
          ]
        },
        {
          "id": "zn_3",
          "nombre": {
            "es": "Posición 4",
            "eu": "Posición 4"
          },
          "foto": "IMG_20240412_171811_00_049.png",
          "hotspots": [
            {
              "destino": "zn_4",
              "texto": {
                "es": "← Atrás",
                "eu": "← Atrás"
              },
              "rotacion": {
                "x": 6,
                "y": 66
              },
              "dist": 9.5
            },
            {
              "destino": "zn_2",
              "texto": {
                "es": "Siguiente →",
                "eu": "Siguiente →"
              },
              "rotacion": {
                "x": 4,
                "y": -96
              },
              "dist": 10.5
            }
          ]
        },
        {
          "id": "zn_2",
          "nombre": {
            "es": "Posición 3",
            "eu": "Posición 3"
          },
          "foto": "IMG_20240412_171752_00_048.png",
          "hotspots": [
            {
              "destino": "zn_3",
              "texto": {
                "es": "← Atrás",
                "eu": "← Atrás"
              },
              "rotacion": {
                "x": 9,
                "y": 116
              },
              "dist": 10
            },
            {
              "destino": "zn_1",
              "texto": {
                "es": "Siguiente →",
                "eu": "Siguiente →"
              },
              "rotacion": {
                "x": 5,
                "y": -89
              },
              "dist": 10.5
            }
          ]
        },
        {
          "id": "zn_1",
          "nombre": {
            "es": "Posición 2",
            "eu": "Posición 2"
          },
          "foto": "IMG_20240412_171725_00_047.png",
          "hotspots": [
            {
              "destino": "zn_2",
              "texto": {
                "es": "← Atrás",
                "eu": "← Atrás"
              },
              "rotacion": {
                "x": 6,
                "y": 85
              },
              "dist": 11.5
            },
            {
              "destino": "zn_0",
              "texto": {
                "es": "Siguiente →",
                "eu": "Siguiente →"
              },
              "rotacion": {
                "x": 4,
                "y": -77
              },
              "dist": 12.5
            }
          ]
        },
        {
          "id": "zn_0",
          "nombre": {
            "es": "Posición 1",
            "eu": "Posición 1"
          },
          "foto": "IMG_20240412_171255_00_046.png",
          "hotspots": [
            {
              "destino": "zn_1",
              "texto": {
                "es": "← Atrás",
                "eu": "← Atrás"
              },
              "rotacion": {
                "x": 4,
                "y": 27
              },
              "dist": 11
            }
          ]
        }
      ]
    }
  ]
};