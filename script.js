/* =====================================================
   DADOS ESTÁTICOS
   ===================================================== */


/* =====================================================
   AVES
   ===================================================== */

const aves = [

    {
        id: 1,
        nome: "Thor",
        sexo: "Macho",
        anilha: "A-1025",
        cor: "Verde",
        raca: "Agapornis Roseicollis",

        gaiolaAtual: "01",

        pai: null,
        mae: null,

        nascimento: "15/08/2024",
        gaiolaNascimento: "03"
    },

    {
        id: 2,
        nome: "Luna",
        sexo: "Fêmea",
        anilha: "A-1026",
        cor: "Azul",
        raca: "Agapornis Roseicollis",

        gaiolaAtual: "01",

        pai: null,
        mae: null,

        nascimento: "22/08/2024",
        gaiolaNascimento: "03"
    },

    {
        id: 3,
        nome: "Romeu",
        sexo: "Macho",
        anilha: "A-2031",
        cor: "Azul Cobalto",
        raca: "Agapornis Personatus",

        gaiolaAtual: "02",

        pai: "A-9001",
        mae: "A-9002",

        nascimento: "10/05/2024",
        gaiolaNascimento: "07"
    },

    {
        id: 4,
        nome: "Julieta",
        sexo: "Fêmea",
        anilha: "A-2032",
        cor: "Verde",
        raca: "Agapornis Personatus",

        gaiolaAtual: "02",

        pai: "A-9001",
        mae: "A-9002",

        nascimento: "13/05/2024",
        gaiolaNascimento: "07"
    },

    {
        id: 5,
        nome: "Apollo",
        sexo: "Macho",
        anilha: "C-3010",
        cor: "Cinza",
        raca: "Calopsita",

        gaiolaAtual: "03",

        pai: "C-8001",
        mae: "C-8002",

        nascimento: "05/03/2023",
        gaiolaNascimento: "04"
    },

    {
        id: 6,
        nome: "Mel",
        sexo: "Fêmea",
        anilha: "C-3011",
        cor: "Pérola",
        raca: "Calopsita",

        gaiolaAtual: "03",

        pai: "C-8001",
        mae: "C-8002",

        nascimento: "09/03/2023",
        gaiolaNascimento: "04"
    },

    {
        id: 7,
        nome: "Trovão",
        sexo: "Macho",
        anilha: "D-4012",
        cor: "Verde",
        raca: "Periquito Australiano",

        gaiolaAtual: "04",

        pai: "D-7001",
        mae: "D-7002",

        nascimento: "11/07/2024",
        gaiolaNascimento: "08"
    },

    {
        id: 8,
        nome: "Jade",
        sexo: "Fêmea",
        anilha: "D-4013",
        cor: "Amarela",
        raca: "Periquito Australiano",

        gaiolaAtual: "04",

        pai: "D-7001",
        mae: "D-7002",

        nascimento: "15/07/2024",
        gaiolaNascimento: "08"
    },

    {
        id: 9,
        nome: "Nero",
        sexo: "Macho",
        anilha: "E-5015",
        cor: "Azul",
        raca: "Agapornis",

        gaiolaAtual: "05",

        pai: "E-6001",
        mae: "E-6002",

        nascimento: "02/02/2024",
        gaiolaNascimento: "06"
    },

    {
        id: 10,
        nome: "Bella",
        sexo: "Fêmea",
        anilha: "E-5016",
        cor: "Lutino",
        raca: "Agapornis",

        gaiolaAtual: "05",

        pai: "E-6001",
        mae: "E-6002",

        nascimento: "05/02/2024",
        gaiolaNascimento: "06"
    },


    /* ================================
       PAIS
    ================================= */

    {
        id: 11,
        nome: "Atlas",
        sexo: "Macho",
        anilha: "A-9001",
        cor: "Verde",
        raca: "Agapornis Personatus",

        gaiolaAtual: null,

        pai: null,
        mae: null,

        nascimento: "10/02/2021",
        gaiolaNascimento: "01"
    },

    {
        id: 12,
        nome: "Íris",
        sexo: "Fêmea",
        anilha: "A-9002",
        cor: "Azul",
        raca: "Agapornis Personatus",

        gaiolaAtual: null,

        pai: null,
        mae: null,

        nascimento: "12/02/2021",
        gaiolaNascimento: "01"
    },


    /* ================================
       PAIS CALOPSITAS
    ================================= */

    {
        id: 13,
        nome: "Max",
        sexo: "Macho",
        anilha: "C-8001",
        cor: "Cinza",
        raca: "Calopsita",

        gaiolaAtual: null,

        pai: null,
        mae: null,

        nascimento: "02/01/2020",
        gaiolaNascimento: "02"
    },

    {
        id: 14,
        nome: "Pérola",
        sexo: "Fêmea",
        anilha: "C-8002",
        cor: "Pérola",
        raca: "Calopsita",

        gaiolaAtual: null,

        pai: null,
        mae: null,

        nascimento: "05/01/2020",
        gaiolaNascimento: "02"
    },


    /* ================================
       PAIS PERIQUITOS
    ================================= */

    {
        id: 15,
        nome: "Rex",
        sexo: "Macho",
        anilha: "D-7001",
        cor: "Verde",
        raca: "Periquito Australiano",

        gaiolaAtual: null,

        pai: null,
        mae: null,

        nascimento: "10/03/2021",
        gaiolaNascimento: "03"
    },

    {
        id: 16,
        nome: "Sol",
        sexo: "Fêmea",
        anilha: "D-7002",
        cor: "Amarela",
        raca: "Periquito Australiano",

        gaiolaAtual: null,

        pai: null,
        mae: null,

        nascimento: "15/03/2021",
        gaiolaNascimento: "03"
    },


    /* ================================
       PAIS AGAPORNIS
    ================================= */

    {
        id: 17,
        nome: "Zeus",
        sexo: "Macho",
        anilha: "E-6001",
        cor: "Verde",
        raca: "Agapornis",

        gaiolaAtual: null,

        pai: null,
        mae: null,

        nascimento: "11/11/2021",
        gaiolaNascimento: "05"
    },

    {
        id: 18,
        nome: "Afrodite",
        sexo: "Fêmea",
        anilha: "E-6002",
        cor: "Azul",
        raca: "Agapornis",

        gaiolaAtual: null,

        pai: null,
        mae: null,

        nascimento: "15/11/2021",
        gaiolaNascimento: "05"
    }

];


/* =====================================================
   GAIOLAS
   ===================================================== */

const gaiolas = [

    {
        id: 1,

        numero: "01",

        status: "reproduzindo",

        macho: "A-1025",

        femea: "A-1026",

        atual: {

            preparacao: "05/07/2026",

            choco: "18/07/2026",

            ovos: 6,

            filhotes: [

                {
                    anilha: "F-2601",
                    sexo: "Macho",
                    cor: "Verde",
                    raca: "Agapornis Roseicollis"
                },

                {
                    anilha: "F-2602",
                    sexo: "Fêmea",
                    cor: "Azul",
                    raca: "Agapornis Roseicollis"
                }

            ],

            eventos: [

                {
                    data: "05/07/2026",
                    titulo: "Início da preparação",
                    descricao:
                        "Casal colocado na gaiola de reprodução."
                },

                {
                    data: "12/07/2026",
                    titulo: "Primeiro ovo",
                    descricao:
                        "Primeiro ovo identificado no ninho."
                },

                {
                    data: "18/07/2026",
                    titulo: "Início do choco",
                    descricao:
                        "Fêmea iniciou o choco regular."
                },

                {
                    data: "06/08/2026",
                    titulo: "Primeiro filhote",
                    descricao:
                        "Primeiro filhote nasceu."
                }

            ]

        },

        historico: [

            {
                periodo: "Março / 2026",
                data: "03/03/2026",
                ovos: 6,
                nascidos: 5,
                sobreviventes: 5,
                resultado: "excelente",
                casal: "Thor × Luna",
                observacao:
                    "Excelente reprodução. Todos os filhotes foram anilhados."
            },

            {
                periodo: "Novembro / 2025",
                data: "11/11/2025",
                ovos: 5,
                nascidos: 4,
                sobreviventes: 4,
                resultado: "excelente",
                casal: "Thor × Luna",
                observacao:
                    "Boa postura e excelente alimentação dos filhotes."
            }

        ]

    },


    {
        id: 2,

        numero: "02",

        status: "reproduzindo",

        macho: "A-2031",

        femea: "A-2032",

        atual: {

            preparacao: "20/07/2026",

            choco: "02/08/2026",

            ovos: 5,

            filhotes: [

                {
                    anilha: "F-2610",
                    sexo: "Macho",
                    cor: "Azul Cobalto",
                    raca: "Agapornis Personatus"
                }

            ],

            eventos: [

                {
                    data: "20/07/2026",
                    titulo: "Início da preparação",
                    descricao:
                        "Casal iniciou período de preparação."
                },

                {
                    data: "26/07/2026",
                    titulo: "Primeiro ovo",
                    descricao:
                        "Primeiro ovo identificado."
                },

                {
                    data: "02/08/2026",
                    titulo: "Início do choco",
                    descricao:
                        "Fêmea iniciou o choco."
                },

                {
                    data: "08/08/2026",
                    titulo: "Primeiro filhote",
                    descricao:
                        "Primeiro filhote identificado."
                }

            ]

        },

        historico: [

            {
                periodo: "Abril / 2026",
                data: "04/04/2026",
                ovos: 5,
                nascidos: 4,
                sobreviventes: 4,
                resultado: "excelente",
                casal: "Romeu × Julieta",
                observacao:
                    "Reprodução muito consistente."
            },

            {
                periodo: "Dezembro / 2025",
                data: "12/12/2025",
                ovos: 4,
                nascidos: 3,
                sobreviventes: 3,
                resultado: "regular",
                casal: "Romeu × Julieta",
                observacao:
                    "Um ovo não apresentou desenvolvimento."
            }

        ]

    },


    {
        id: 3,

        numero: "03",

        status: "descanso",

        macho: "C-3010",

        femea: "C-3011",

        atual: {

            preparacao: "10/05/2026",

            choco: "22/05/2026",

            ovos: 7,

            filhotes: [

                {
                    anilha: "F-2510",
                    sexo: "Macho",
                    cor: "Cinza",
                    raca: "Calopsita"
                },

                {
                    anilha: "F-2511",
                    sexo: "Fêmea",
                    cor: "Pérola",
                    raca: "Calopsita"
                },

                {
                    anilha: "F-2512",
                    sexo: "Macho",
                    cor: "Cinza",
                    raca: "Calopsita"
                }

            ],

            eventos: [

                {
                    data: "10/05/2026",
                    titulo: "Preparação iniciada",
                    descricao:
                        "Casal iniciou preparação."
                },

                {
                    data: "16/05/2026",
                    titulo: "Primeiro ovo",
                    descricao:
                        "Primeiro ovo identificado."
                },

                {
                    data: "22/05/2026",
                    titulo: "Início do choco",
                    descricao:
                        "Choco iniciado."
                },

                {
                    data: "13/06/2026",
                    titulo: "Nascimento",
                    descricao:
                        "Três filhotes nasceram."
                }

            ]

        },

        historico: [

            {
                periodo: "Maio / 2026",
                data: "10/05/2026",
                ovos: 7,
                nascidos: 5,
                sobreviventes: 5,
                resultado: "excelente",
                casal: "Apollo × Mel",
                observacao:
                    "Excelente postura."
            },

            {
                periodo: "Janeiro / 2026",
                data: "08/01/2026",
                ovos: 6,
                nascidos: 3,
                sobreviventes: 3,
                resultado: "regular",
                casal: "Apollo × Mel",
                observacao:
                    "Postura normal, mas três ovos não eclodiram."
            }

        ]

    },


    {
        id: 4,

        numero: "04",

        status: "descanso",

        macho: "D-4012",

        femea: "D-4013",

        atual: {

            preparacao: "02/04/2026",

            choco: "15/04/2026",

            ovos: 4,

            filhotes: [],

            eventos: [

                {
                    data: "02/04/2026",
                    titulo: "Preparação",
                    descricao:
                        "Casal preparado para reprodução."
                },

                {
                    data: "08/04/2026",
                    titulo: "Primeiro ovo",
                    descricao:
                        "Primeiro ovo identificado."
                },

                {
                    data: "15/04/2026",
                    titulo: "Início do choco",
                    descricao:
                        "Choco iniciado."
                },

                {
                    data: "10/05/2026",
                    titulo: "Finalização",
                    descricao:
                        "Filhotes foram transferidos."
                }

            ]

        },

        historico: [

            {
                periodo: "Abril / 2026",
                data: "02/04/2026",
                ovos: 4,
                nascidos: 3,
                sobreviventes: 2,
                resultado: "regular",
                casal: "Trovão × Jade",
                observacao:
                    "Dois filhotes sobreviveram."
            },

            {
                periodo: "Agosto / 2025",
                data: "05/08/2025",
                ovos: 5,
                nascidos: 4,
                sobreviventes: 4,
                resultado: "excelente",
                casal: "Trovão × Jade",
                observacao:
                    "Reprodução muito boa."
            }

        ]

    },


    {
        id: 5,

        numero: "05",

        status: "reproduzindo",

        macho: "E-5015",

        femea: "E-5016",

        atual: {

            preparacao: "28/07/2026",

            choco: "06/08/2026",

            ovos: 3,

            filhotes: [],

            eventos: [

                {
                    data: "28/07/2026",
                    titulo: "Preparação",
                    descricao:
                        "Casal colocado para reprodução."
                },

                {
                    data: "02/08/2026",
                    titulo: "Primeiro ovo",
                    descricao:
                        "Primeiro ovo identificado."
                },

                {
                    data: "06/08/2026",
                    titulo: "Início do choco",
                    descricao:
                        "Fêmea iniciou o choco."
                }

            ]

        },

        historico: [

            {
                periodo: "Fevereiro / 2026",
                data: "02/02/2026",
                ovos: 5,
                nascidos: 4,
                sobreviventes: 4,
                resultado: "excelente",
                casal: "Nero × Bella",
                observacao:
                    "Casal apresentou ótimo comportamento reprodutivo."
            },

            {
                periodo: "Outubro / 2025",
                data: "10/10/2025",
                ovos: 4,
                nascidos: 2,
                sobreviventes: 2,
                resultado: "regular",
                casal: "Nero × Bella",
                observacao:
                    "Dois ovos não apresentaram desenvolvimento."
            }

        ]

    }

];


/* =====================================================
   FUNÇÕES AUXILIARES
   ===================================================== */

function encontrarAvePorAnilha(anilha) {

    if (!anilha) {
        return null;
    }

    return aves.find(function (ave) {

        return ave.anilha === anilha;

    }) || null;
}


function encontrarGaiola(id) {

    return gaiolas.find(function (gaiola) {

        return gaiola.id === id;

    }) || null;
}


function obterFilhos(anilha) {

    if (!anilha) {
        return [];
    }

    return aves.filter(function (ave) {

        return (
            ave.pai === anilha ||
            ave.mae === anilha
        );

    });
}


function obterIrmaos(ave) {

    if (!ave) {
        return [];
    }

    if (!ave.pai && !ave.mae) {
        return [];
    }

    return aves.filter(function (item) {

        if (item.id === ave.id) {
            return false;
        }

        const mesmoPai =
            ave.pai &&
            item.pai === ave.pai;

        const mesmaMae =
            ave.mae &&
            item.mae === ave.mae;

        return mesmoPai || mesmaMae;

    });
}


function obterFilhotesDaGaiola(gaiola) {

    return gaiola.atual.filhotes || [];

}


/* =====================================================
   NAVEGAÇÃO
   ===================================================== */

function mostrarGaiolas() {

    document
        .getElementById("gaiolasView")
        .classList.remove("hidden");


    document
        .getElementById("avesView")
        .classList.add("hidden");


    document
        .getElementById("tabGaiolas")
        .classList.add("active");


    document
        .getElementById("tabAves")
        .classList.remove("active");

}


function mostrarAves() {

    document
        .getElementById("gaiolasView")
        .classList.add("hidden");


    document
        .getElementById("avesView")
        .classList.remove("hidden");


    document
        .getElementById("tabGaiolas")
        .classList.remove("active");


    document
        .getElementById("tabAves")
        .classList.add("active");


    renderAves();

}


function voltarHome() {

    document
        .getElementById("gaiolaPage")
        .classList.add("hidden");


    document
        .getElementById("homePage")
        .classList.remove("hidden");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   RENDER GAIOLAS
   ===================================================== */

function renderGaiolas() {

    const container =
        document.getElementById(
            "gaiolasContainer"
        );


    const count =
        document.getElementById(
            "gaiolasCount"
        );


    container.innerHTML = "";


    count.textContent =
        `${gaiolas.length} gaiolas`;


    gaiolas.forEach(function (gaiola) {

        const macho =
            encontrarAvePorAnilha(
                gaiola.macho
            );


        const femea =
            encontrarAvePorAnilha(
                gaiola.femea
            );


        const card =
            document.createElement("article");


        card.className =
            "gaiola-card";


        card.innerHTML = `

            <div
                class="gaiola-main"
                onclick="abrirGaiola(${gaiola.id})"
            >

                <div class="gaiola-number">
                    ${gaiola.numero}
                </div>


                <div class="gaiola-main-info">

                    <h3>
                        Gaiola ${gaiola.numero}
                    </h3>

                    <div class="gaiola-casal">

                        ${macho?.nome || "Macho"} ×
                        ${femea?.nome || "Fêmea"}

                    </div>

                </div>


                <span
                    class="status-badge ${gaiola.status}"
                >

                    ${
                        gaiola.status === "reproduzindo"
                            ? "EM REPRODUÇÃO"
                            : "EM DESCANSO"
                    }

                </span>


                <div class="gaiola-arrow">
                    →
                </div>

            </div>

        `;


        container.appendChild(card);

    });

}


/* =====================================================
   ABRIR GAIOLA
   ===================================================== */

function abrirGaiola(id) {

    const gaiola =
        encontrarGaiola(id);


    if (!gaiola) {
        return;
    }


    renderGaiolaDetalhes(gaiola);


    document
        .getElementById("homePage")
        .classList.add("hidden");


    document
        .getElementById("gaiolaPage")
        .classList.remove("hidden");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   RENDER DETALHES GAIOLA
   ===================================================== */

function renderGaiolaDetalhes(gaiola) {

    const container =
        document.getElementById(
            "gaiolaContent"
        );


    const macho =
        encontrarAvePorAnilha(
            gaiola.macho
        );


    const femea =
        encontrarAvePorAnilha(
            gaiola.femea
        );


    const atual =
        gaiola.atual;


    const filhotes =
        obterFilhotesDaGaiola(
            gaiola
        );


    const filhotesHTML =
        filhotes.length
            ? filhotes
                .map(function (filhote) {

                    return `

                        <div class="filhote">

                            <div class="filhote-icon">
                                🐥
                            </div>


                            <div class="filhote-info">

                                <div class="filhote-name">

                                    ${filhote.anilha}

                                </div>


                                <div class="filhote-details">

                                    ${filhote.cor}
                                    ·
                                    ${filhote.raca}

                                </div>

                            </div>


                            <div class="filhote-sex">

                                ${
                                    filhote.sexo === "Macho"
                                        ? "♂ Macho"
                                        : "♀ Fêmea"
                                }

                            </div>

                        </div>

                    `;

                })
                .join("")
            : `

                <div class="empty-state">

                    Nenhum filhote registrado
                    na reprodução atual.

                </div>

            `;


    const eventosHTML =
        atual.eventos
            .map(function (evento) {

                return `

                    <div class="timeline-item">

                        <div class="timeline-date">

                            ${evento.data}

                        </div>


                        <div class="timeline-title">

                            ${evento.titulo}

                        </div>


                        <div class="timeline-description">

                            ${evento.descricao}

                        </div>

                    </div>

                `;

            })
            .join("");


    const historicoHTML =
        gaiola.historico
            .map(function (historico) {

                return renderHistorico(
                    historico
                );

            })
            .join("");


    container.innerHTML = `

        <!-- CABEÇALHO -->

        <div class="detail-header">

            <div class="detail-header-top">

                <div class="detail-title">

                    <div class="detail-number">

                        ${gaiola.numero}

                    </div>


                    <div>

                        <h2>
                            Gaiola ${gaiola.numero}
                        </h2>

                        <p>

                            ${macho?.nome || "Macho"}
                            ×
                            ${femea?.nome || "Fêmea"}

                        </p>

                    </div>

                </div>


                <span
                    class="status-badge ${gaiola.status}"
                >

                    ${
                        gaiola.status === "reproduzindo"
                            ? "EM REPRODUÇÃO"
                            : "EM DESCANSO"
                    }

                </span>

            </div>

        </div>


        <!-- CASAL -->

        <section class="detail-section">

            <div class="detail-section-title">

                <div class="detail-section-title-icon">
                    🐦
                </div>

                <h3>
                    Casal atual
                </h3>

            </div>


            <div class="casal-grid">

                ${renderAveCasal(
                    macho,
                    "Macho",
                    "♂"
                )}


                ${renderAveCasal(
                    femea,
                    "Fêmea",
                    "♀"
                )}

            </div>

        </section>


        <!-- REPRODUÇÃO -->

        <section class="detail-section">

            <div class="detail-section-title">

                <div class="detail-section-title-icon">
                    🥚
                </div>

                <h3>
                    Reprodução atual
                </h3>

            </div>


            <div class="stats-grid">

                <div class="stat-card">

                    <strong>
                        ${atual.ovos}
                    </strong>

                    <span>
                        Ovos
                    </span>

                </div>


                <div class="stat-card">

                    <strong>
                        ${filhotes.length}
                    </strong>

                    <span>
                        Filhotes
                    </span>

                </div>


                <div class="stat-card">

                    <strong>
                        ${atual.preparacao}
                    </strong>

                    <span>
                        Preparação
                    </span>

                </div>


                <div class="stat-card">

                    <strong>
                        ${atual.choco}
                    </strong>

                    <span>
                        Início do choco
                    </span>

                </div>

            </div>


            <div class="timeline">

                ${eventosHTML}

            </div>

        </section>


        <!-- FILHOTES -->

        <section class="detail-section">

            <div class="detail-section-title">

                <div class="detail-section-title-icon">
                    🐥
                </div>

                <h3>
                    Filhotes
                </h3>

            </div>


            <div class="filhotes-list">

                ${filhotesHTML}

            </div>

        </section>


        <!-- HISTÓRICO -->

        <section class="detail-section">

            <div class="detail-section-title">

                <div class="detail-section-title-icon">
                    📚
                </div>

                <h3>
                    Histórico de reproduções
                </h3>

            </div>


            <div class="history-list">

                ${historicoHTML}

            </div>

        </section>

    `;

}


/* =====================================================
   CARD DO CASAL
   ===================================================== */

function renderAveCasal(
    ave,
    tipo,
    simbolo
) {

    if (!ave) {

        return `

            <div class="casal-card">

                <div class="casal-card-label">

                    ${tipo}

                </div>

                <div class="casal-card-name">

                    Não cadastrado

                </div>

            </div>

        `;

    }


    return `

        <div
            class="casal-card"
            style="cursor:pointer"
            onclick="abrirAve(${ave.id})"
        >

            <div class="casal-card-label">

                ${simbolo} ${tipo}

            </div>


            <div class="casal-card-name">

                ${ave.nome}

            </div>


            <div class="casal-card-info">

                Anilha:
                ${ave.anilha}

                <br>

                ${ave.cor}
                ·
                ${ave.raca}

            </div>

        </div>

    `;

}


/* =====================================================
   HISTÓRICO
   ===================================================== */

function renderHistorico(historico) {

    let classeResultado =
        "regular";


    let textoResultado =
        "REGULAR";


    if (
        historico.resultado ===
        "excelente"
    ) {

        classeResultado =
            "excelente";

        textoResultado =
            "EXCELENTE";

    }


    if (
        historico.resultado ===
        "baixo"
    ) {

        classeResultado =
            "baixo";

        textoResultado =
            "BAIXO";

    }


    return `

        <article class="history-card">

            <div class="history-top">

                <div>

                    <div class="history-title">

                        ${historico.periodo}

                    </div>


                    <div class="history-date">

                        ${historico.data}
                        ·
                        ${historico.casal}

                    </div>

                </div>


                <span
                    class="result-badge ${classeResultado}"
                >

                    ${textoResultado}

                </span>

            </div>


            <div class="history-stats">

                <div class="history-stat">

                    <strong>
                        ${historico.ovos}
                    </strong>

                    <span>
                        Ovos
                    </span>

                </div>


                <div class="history-stat">

                    <strong>
                        ${historico.nascidos}
                    </strong>

                    <span>
                        Nascidos
                    </span>

                </div>


                <div class="history-stat">

                    <strong>
                        ${historico.sobreviventes}
                    </strong>

                    <span>
                        Sobreviventes
                    </span>

                </div>


                <div class="history-stat">

                    <strong>

                        ${
                            historico.nascidos > 0
                                ? Math.round(
                                    (
                                        historico.sobreviventes /
                                        historico.nascidos
                                    ) * 100
                                )
                                : 0
                        }%

                    </strong>

                    <span>
                        Sucesso
                    </span>

                </div>

            </div>


            <div class="history-observation">

                ${historico.observacao}

            </div>

        </article>

    `;

}


/* =====================================================
   AVES
   ===================================================== */

function renderAves(lista = aves) {

    const container =
        document.getElementById(
            "avesContainer"
        );


    const count =
        document.getElementById(
            "avesCount"
        );


    container.innerHTML = "";


    count.textContent =
        `${lista.length} aves`;


    if (lista.length === 0) {

        container.innerHTML = `

            <div class="empty-state">

                Nenhuma ave encontrada
                para essa anilha.

            </div>

        `;

        return;

    }


    lista.forEach(function (ave) {

        const card =
            document.createElement("article");


        card.className =
            "ave-card";


        card.dataset.id =
            ave.id;


        card.innerHTML = `

            <div
                class="ave-card-main"
                onclick="expandirAve(${ave.id})"
            >

                <div class="ave-avatar">

                    ${
                        ave.sexo === "Macho"
                            ? "♂"
                            : "♀"
                    }

                </div>


                <div class="ave-card-info">

                    <h3>
                        ${ave.nome}
                    </h3>


                    <div class="ave-card-subtitle">

                        ${ave.sexo}
                        ·
                        Anilha ${ave.anilha}
                        ·
                        ${ave.raca}

                    </div>

                </div>


                <div class="ave-card-arrow">

                    ▼

                </div>

            </div>


            <div
                id="ave-details-${ave.id}"
                class="ave-expanded"
            >

                ${gerarDetalhesAve(ave)}

            </div>

        `;


        container.appendChild(card);

    });

}


/* =====================================================
   DETALHES DA AVE
   ===================================================== */

function gerarDetalhesAve(ave) {

    const pai =
        encontrarAvePorAnilha(
            ave.pai
        );


    const mae =
        encontrarAvePorAnilha(
            ave.mae
        );


    const filhos =
        obterFilhos(
            ave.anilha
        );


    const irmaos =
        obterIrmaos(
            ave
        );


    return `

        <div class="ave-expanded-content">


            <!-- DADOS -->

            <div class="ave-detail-grid">

                <div class="ave-detail-item">

                    <span>
                        Nome
                    </span>

                    <strong>
                        ${ave.nome}
                    </strong>

                </div>


                <div class="ave-detail-item">

                    <span>
                        Sexo
                    </span>

                    <strong>
                        ${ave.sexo}
                    </strong>

                </div>


                <div class="ave-detail-item">

                    <span>
                        Anilha
                    </span>

                    <strong>
                        ${ave.anilha}
                    </strong>

                </div>


                <div class="ave-detail-item">

                    <span>
                        Cor
                    </span>

                    <strong>
                        ${ave.cor}
                    </strong>

                </div>


                <div class="ave-detail-item">

                    <span>
                        Raça
                    </span>

                    <strong>
                        ${ave.raca}
                    </strong>

                </div>


                <div class="ave-detail-item">

                    <span>
                        Nascimento
                    </span>

                    <strong>
                        ${ave.nascimento}
                    </strong>

                </div>


                <div class="ave-detail-item">

                    <span>
                        Gaiola atual
                    </span>

                    <strong>

                        ${
                            ave.gaiolaAtual
                                ? `Gaiola ${ave.gaiolaAtual}`
                                : "Fora de gaiola"
                        }

                    </strong>

                </div>


                <div class="ave-detail-item">

                    <span>
                        Gaiola onde nasceu
                    </span>

                    <strong>

                        Gaiola
                        ${ave.gaiolaNascimento}

                    </strong>

                </div>

            </div>


            <!-- PAIS -->

            <div class="family-section">

                <div class="family-title">

                    👨‍👩‍👦 Pais

                </div>


                <div class="family-grid">

                    ${gerarParente(
                        pai,
                        "Pai",
                        "♂"
                    )}


                    ${gerarParente(
                        mae,
                        "Mãe",
                        "♀"
                    )}

                </div>

            </div>


            <!-- FILHOS -->

            <div class="family-section">

                <div class="family-title">

                    🐣 Filhos

                </div>


                <div class="family-list">

                    ${
                        filhos.length
                            ? filhos
                                .map(function (filho) {

                                    return gerarParente(
                                        filho,
                                        "Filho",
                                        filho.sexo === "Macho"
                                            ? "♂"
                                            : "♀"
                                    );

                                })
                                .join("")
                            : `

                                <div class="no-family">

                                    Nenhum filho
                                    cadastrado.

                                </div>

                            `
                    }

                </div>

            </div>


            <!-- IRMÃOS -->

            <div class="family-section">

                <div class="family-title">

                    👥 Irmãos

                </div>


                <div class="family-list">

                    ${
                        irmaos.length
                            ? irmaos
                                .map(function (irmao) {

                                    return gerarParente(
                                        irmao,
                                        "Irmão",
                                        irmao.sexo === "Macho"
                                            ? "♂"
                                            : "♀"
                                    );

                                })
                                .join("")
                            : `

                                <div class="no-family">

                                    Nenhum irmão
                                    cadastrado.

                                </div>

                            `
                    }

                </div>

            </div>

        </div>

    `;

}


/* =====================================================
   PARENTE
   ===================================================== */

function gerarParente(
    ave,
    tipo,
    simbolo
) {

    if (!ave) {

        return `

            <div class="no-family">

                ${tipo}
                não cadastrado.

            </div>

        `;

    }


    return `

        <button
            class="parente-link"
            type="button"
            onclick="abrirAveRelacionada(${ave.id})"
        >

            <div class="parente-avatar">

                ${simbolo}

            </div>


            <div class="parente-info">

                <strong>

                    ${ave.nome}

                </strong>


                <span>

                    ${ave.anilha}
                    ·
                    ${ave.cor}

                </span>

            </div>


            <div class="parente-arrow">

                →

            </div>

        </button>

    `;

}


/* =====================================================
   EXPANDIR AVE
   ===================================================== */

function expandirAve(id) {

    const card =
        document.querySelector(
            `.ave-card[data-id="${id}"]`
        );


    if (!card) {
        return;
    }


    const estavaAberto =
        card.classList.contains(
            "expanded"
        );


    document
        .querySelectorAll(".ave-card")
        .forEach(function (item) {

            item.classList.remove(
                "expanded"
            );

        });


    if (!estavaAberto) {

        card.classList.add(
            "expanded"
        );

    }

}


/* =====================================================
   ABRIR AVE RELACIONADA
   ===================================================== */

function abrirAveRelacionada(id) {

    const ave =
        aves.find(function (item) {

            return item.id === id;

        });


    if (!ave) {
        return;
    }


    const busca =
        document.getElementById(
            "buscarAnilha"
        );


    if (busca) {

        busca.value = "";

    }


    renderAves();


    setTimeout(function () {

        const card =
            document.querySelector(
                `.ave-card[data-id="${id}"]`
            );


        if (!card) {
            return;
        }


        card.classList.add(
            "expanded"
        );


        card.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

    }, 50);

}


/* =====================================================
   ABRIR AVE A PARTIR DA GAIOLA
   ===================================================== */

function abrirAve(id) {

    const ave =
        aves.find(function (item) {

            return item.id === id;

        });


    if (!ave) {
        return;
    }


    document
        .getElementById("gaiolaPage")
        .classList.add("hidden");


    document
        .getElementById("homePage")
        .classList.remove("hidden");


    mostrarAves();


    const busca =
        document.getElementById(
            "buscarAnilha"
        );


    if (busca) {

        busca.value = ave.anilha;

    }


    renderAves([ave]);


    setTimeout(function () {

        const card =
            document.querySelector(
                `.ave-card[data-id="${id}"]`
            );


        if (!card) {
            return;
        }


        card.classList.add(
            "expanded"
        );


        card.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

    }, 50);

}


/* =====================================================
   PESQUISA POR ANILHA
   ===================================================== */

function filtrarAves() {

    const input =
        document.getElementById(
            "buscarAnilha"
        );


    const termo =
        input.value
            .trim()
            .toLowerCase();


    const resultado =
        aves.filter(function (ave) {

            return ave.anilha
                .toLowerCase()
                .includes(termo);

        });


    renderAves(resultado);

}


/* =====================================================
   EVENTOS
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        renderGaiolas();


        const busca =
            document.getElementById(
                "buscarAnilha"
            );


        if (busca) {

            busca.addEventListener(
                "input",
                filtrarAves
            );

        }

    }
);