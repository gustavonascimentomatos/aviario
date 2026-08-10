const gaiolas = [
    {
        id: 1,
        numero: "01",
        status: "reproduzindo",

        macho: {
            nome: "Thor",
            anilha: "A-1025",
            cor: "Verde",
            raca: "Agapornis Roseicollis"
        },

        femea: {
            nome: "Luna",
            anilha: "A-1026",
            cor: "Azul",
            raca: "Agapornis Roseicollis"
        },

        atual: {
            preparacao: "02/08/2026",
            choco: "07/08/2026",
            ovos: 5,

            filhotes: [
                {
                    anilha: "F-2101",
                    sexo: "Macho",
                    cor: "Verde",
                    raca: "Roseicollis"
                },
                {
                    anilha: "F-2102",
                    sexo: "Fêmea",
                    cor: "Azul",
                    raca: "Roseicollis"
                }
            ],

            eventos: [
                {
                    data: "02/08/2026",
                    titulo: "Início da preparação",
                    descricao: "Gaiola preparada para o novo ciclo reprodutivo."
                },
                {
                    data: "04/08/2026",
                    titulo: "Primeiro ovo",
                    descricao: "Primeiro ovo identificado no ninho."
                },
                {
                    data: "07/08/2026",
                    titulo: "Início do choco",
                    descricao: "Fêmea iniciou o período de incubação."
                },
                {
                    data: "10/08/2026",
                    titulo: "Acompanhamento atual",
                    descricao: "Cinco ovos registrados e dois filhotes identificados."
                }
            ]
        },

        historico: [
            {
                periodo: "Abril / 2026",
                casal: "Thor (A-1025) + Luna (A-1026)",
                ovos: 6,
                nascidos: 5,
                sobreviventes: 5,
                resultado: "excelente",
                observacao: "Excelente reprodução. Todos os filhotes apresentaram desenvolvimento normal."
            },
            {
                periodo: "Janeiro / 2026",
                casal: "Thor (A-1025) + Luna (A-1026)",
                ovos: 5,
                nascidos: 4,
                sobreviventes: 4,
                resultado: "excelente",
                observacao: "Boa fertilidade do casal. Um ovo não eclodiu."
            },
            {
                periodo: "Outubro / 2025",
                casal: "Thor (A-1025) + Luna (A-1026)",
                ovos: 5,
                nascidos: 3,
                sobreviventes: 2,
                resultado: "regular",
                observacao: "Dois filhotes nasceram com baixo desenvolvimento."
            }
        ]
    },

    {
        id: 2,
        numero: "02",
        status: "reproduzindo",

        macho: {
            nome: "Romeu",
            anilha: "A-2031",
            cor: "Azul Cobalto",
            raca: "Agapornis Personatus"
        },

        femea: {
            nome: "Julieta",
            anilha: "A-2032",
            cor: "Verde",
            raca: "Agapornis Personatus"
        },

        atual: {
            preparacao: "05/08/2026",
            choco: "09/08/2026",
            ovos: 3,

            filhotes: [],

            eventos: [
                {
                    data: "05/08/2026",
                    titulo: "Início da preparação",
                    descricao: "Gaiola preparada e ninho disponibilizado."
                },
                {
                    data: "07/08/2026",
                    titulo: "Primeiro ovo",
                    descricao: "Primeiro ovo registrado."
                },
                {
                    data: "09/08/2026",
                    titulo: "Início do choco",
                    descricao: "Fêmea iniciou o choco."
                }
            ]
        },

        historico: [
            {
                periodo: "Maio / 2026",
                casal: "Romeu (A-2031) + Julieta (A-2032)",
                ovos: 5,
                nascidos: 5,
                sobreviventes: 4,
                resultado: "excelente",
                observacao: "Boa reprodução. Um filhote apresentou desenvolvimento abaixo do esperado."
            },
            {
                periodo: "Fevereiro / 2026",
                casal: "Romeu (A-2031) + Julieta (A-2032)",
                ovos: 4,
                nascidos: 3,
                sobreviventes: 3,
                resultado: "excelente",
                observacao: "Reprodução satisfatória e casal bastante ativo."
            }
        ]
    },

    {
        id: 3,
        numero: "03",
        status: "descanso",

        macho: {
            nome: "Apollo",
            anilha: "C-3010",
            cor: "Cinza",
            raca: "Calopsita"
        },

        femea: {
            nome: "Mel",
            anilha: "C-3011",
            cor: "Pérola",
            raca: "Calopsita"
        },

        atual: {
            preparacao: "-",
            choco: "-",
            ovos: 0,

            filhotes: [],

            eventos: [
                {
                    data: "15/07/2026",
                    titulo: "Fim da reprodução",
                    descricao: "Ciclo encerrado. Gaiola atualmente em período de descanso."
                }
            ]
        },

        historico: [
            {
                periodo: "Junho / 2026",
                casal: "Apollo (C-3010) + Mel (C-3011)",
                ovos: 7,
                nascidos: 6,
                sobreviventes: 6,
                resultado: "excelente",
                observacao: "Excelente reprodução. Todos os filhotes sobreviveram."
            },
            {
                periodo: "Março / 2026",
                casal: "Apollo (C-3010) + Mel (C-3011)",
                ovos: 6,
                nascidos: 4,
                sobreviventes: 4,
                resultado: "excelente",
                observacao: "Boa reprodução e excelente comportamento do casal."
            },
            {
                periodo: "Dezembro / 2025",
                casal: "Apollo (C-3010) + Mel (C-3011)",
                ovos: 5,
                nascidos: 2,
                sobreviventes: 2,
                resultado: "regular",
                observacao: "Baixa taxa de eclosão nesta reprodução."
            }
        ]
    },

    {
        id: 4,
        numero: "04",
        status: "reproduzindo",

        macho: {
            nome: "Trovão",
            anilha: "D-4012",
            cor: "Verde",
            raca: "Periquito Australiano"
        },

        femea: {
            nome: "Jade",
            anilha: "D-4013",
            cor: "Amarela",
            raca: "Periquito Australiano"
        },

        atual: {
            preparacao: "01/08/2026",
            choco: "06/08/2026",
            ovos: 4,

            filhotes: [
                {
                    anilha: "P-4101",
                    sexo: "Macho",
                    cor: "Verde",
                    raca: "Periquito Australiano"
                }
            ],

            eventos: [
                {
                    data: "01/08/2026",
                    titulo: "Início da preparação",
                    descricao: "Ninho preparado e casal colocado em reprodução."
                },
                {
                    data: "03/08/2026",
                    titulo: "Primeiro ovo",
                    descricao: "Primeiro ovo registrado."
                },
                {
                    data: "06/08/2026",
                    titulo: "Início do choco",
                    descricao: "Fêmea iniciou o período de incubação."
                },
                {
                    data: "09/08/2026",
                    titulo: "Primeiro filhote",
                    descricao: "Primeiro filhote identificado."
                }
            ]
        },

        historico: [
            {
                periodo: "Abril / 2026",
                casal: "Trovão (D-4012) + Jade (D-4013)",
                ovos: 6,
                nascidos: 5,
                sobreviventes: 5,
                resultado: "excelente",
                observacao: "Excelente reprodução. Cinco filhotes saudáveis."
            },
            {
                periodo: "Janeiro / 2026",
                casal: "Trovão (D-4012) + Jade (D-4013)",
                ovos: 5,
                nascidos: 4,
                sobreviventes: 4,
                resultado: "excelente",
                observacao: "Reprodução muito consistente."
            }
        ]
    },

    {
        id: 5,
        numero: "05",
        status: "descanso",

        macho: {
            nome: "Nero",
            anilha: "E-5015",
            cor: "Azul",
            raca: "Agapornis"
        },

        femea: {
            nome: "Bella",
            anilha: "E-5016",
            cor: "Lutino",
            raca: "Agapornis"
        },

        atual: {
            preparacao: "-",
            choco: "-",
            ovos: 0,

            filhotes: [],

            eventos: [
                {
                    data: "20/06/2026",
                    titulo: "Fim da reprodução",
                    descricao: "Ciclo encerrado. Casal está em período de descanso."
                }
            ]
        },

        historico: [
            {
                periodo: "Junho / 2026",
                casal: "Nero (E-5015) + Bella (E-5016)",
                ovos: 6,
                nascidos: 5,
                sobreviventes: 5,
                resultado: "excelente",
                observacao: "Excelente resultado. Todos os filhotes foram saudáveis."
            },
            {
                periodo: "Março / 2026",
                casal: "Nero (E-5015) + Bella (E-5016)",
                ovos: 5,
                nascidos: 3,
                sobreviventes: 3,
                resultado: "excelente",
                observacao: "Boa reprodução. Casal apresentou boa fertilidade."
            },
            {
                periodo: "Novembro / 2025",
                casal: "Nero (E-5015) + Bella (E-5016)",
                ovos: 4,
                nascidos: 2,
                sobreviventes: 1,
                resultado: "regular",
                observacao: "Um filhote não sobreviveu durante os primeiros dias."
            }
        ]
    }
];


// ============================================
// ELEMENTOS DA PÁGINA
// ============================================

const homePage = document.getElementById("homePage");
const gaiolaPage = document.getElementById("gaiolaPage");
const gaiolasContainer = document.getElementById("gaiolasContainer");
const gaiolaContent = document.getElementById("gaiolaContent");


// ============================================
// LISTAR AS 5 GAIOLAS
// ============================================

function renderGaiolas() {

    gaiolasContainer.innerHTML = "";

    gaiolas.forEach(function(gaiola) {

        const card = document.createElement("div");

        card.className = "gaiola";

        card.addEventListener("click", function() {
            abrirGaiola(gaiola.id);
        });

        const statusTexto =
            gaiola.status === "reproduzindo"
                ? "EM REPRODUÇÃO"
                : "EM DESCANSO";

        card.innerHTML = `
            <div class="gaiola-top">

                <div class="gaiola-identificacao">

                    <div class="gaiola-icon">
                        🏠
                    </div>

                    <div>
                        <h3>Gaiola ${gaiola.numero}</h3>

                        <div class="gaiola-subtitle">
                            Casal reprodutor
                        </div>
                    </div>

                </div>

                <div class="status ${gaiola.status}">
                    ${statusTexto}
                </div>

            </div>

            <div class="casal-resumo">

                <div class="ave-resumo">

                    <div class="ave-sexo">
                        ♂ Macho
                    </div>

                    <div class="ave-nome">
                        ${gaiola.macho.nome}
                    </div>

                    <div class="ave-detalhe">
                        ${gaiola.macho.anilha}<br>
                        ${gaiola.macho.cor}
                    </div>

                </div>

                <div class="ave-resumo">

                    <div class="ave-sexo">
                        ♀ Fêmea
                    </div>

                    <div class="ave-nome">
                        ${gaiola.femea.nome}
                    </div>

                    <div class="ave-detalhe">
                        ${gaiola.femea.anilha}<br>
                        ${gaiola.femea.cor}
                    </div>

                </div>

            </div>

            <div class="clique">

                <span>
                    Ver reprodução e histórico
                </span>

                <span>
                    →
                </span>

            </div>
        `;

        gaiolasContainer.appendChild(card);
    });
}


// ============================================
// ABRIR GAIOLA
// ============================================

function abrirGaiola(id) {

    const gaiola = gaiolas.find(function(item) {
        return item.id === id;
    });

    if (!gaiola) {
        return;
    }

    renderDetalhes(gaiola);

    homePage.style.display = "none";
    gaiolaPage.style.display = "block";

    window.scrollTo(0, 0);
}


// ============================================
// RENDERIZAR DETALHES
// ============================================

function renderDetalhes(gaiola) {

    const atual = gaiola.atual;


    // ----------------------------------------
    // FILHOTES
    // ----------------------------------------

    let filhotesHTML = "";

    if (atual.filhotes.length === 0) {

        filhotesHTML = `
            <div style="
                color: #64748b;
                font-size: 12px;
                text-align: center;
                padding: 15px;
            ">
                Nenhum filhote registrado na reprodução atual.
            </div>
        `;

    } else {

        atual.filhotes.forEach(function(filhote) {

            const simboloSexo =
                filhote.sexo === "Macho"
                    ? "♂"
                    : "♀";

            filhotesHTML += `
                <div class="filhote">

                    <div class="filhote-icon">
                        🐥
                    </div>

                    <div>

                        <div class="filhote-nome">
                            Anilha ${filhote.anilha}
                        </div>

                        <div class="filhote-info">
                            ${filhote.cor} · ${filhote.raca}
                        </div>

                    </div>

                    <div class="filhote-sexo">
                        ${simboloSexo} ${filhote.sexo}
                    </div>

                </div>
            `;
        });
    }


    // ----------------------------------------
    // EVENTOS
    // ----------------------------------------

    let eventosHTML = "";

    atual.eventos.forEach(function(evento) {

        eventosHTML += `
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
    });


    // ----------------------------------------
    // HISTÓRICO
    // ----------------------------------------

    let historicoHTML = "";

    gaiola.historico.forEach(function(reproducao) {

        let resultadoTexto = "";

        if (reproducao.resultado === "excelente") {
            resultadoTexto = "EXCELENTE";
        } else if (reproducao.resultado === "regular") {
            resultadoTexto = "REGULAR";
        } else {
            resultadoTexto = "BAIXO";
        }


        let percentual = 0;

        if (reproducao.nascidos > 0) {

            percentual = Math.round(
                (reproducao.sobreviventes /
                    reproducao.nascidos) * 100
            );

        }


        historicoHTML += `
            <div class="reproducao-anterior">

                <div class="reproducao-top">

                    <div>

                        <h4>
                            Reprodução ${reproducao.periodo}
                        </h4>

                        <div class="reproducao-data">
                            Histórico do casal
                        </div>

                    </div>

                    <div class="resultado ${reproducao.resultado}">
                        ${resultadoTexto}
                    </div>

                </div>


                <div class="reproducao-numeros">

                    <div class="numero">
                        <strong>
                            ${reproducao.ovos}
                        </strong>

                        <span>
                            OVOS
                        </span>
                    </div>


                    <div class="numero">
                        <strong>
                            ${reproducao.nascidos}
                        </strong>

                        <span>
                            NASCIDOS
                        </span>
                    </div>


                    <div class="numero">
                        <strong>
                            ${reproducao.sobreviventes}
                        </strong>

                        <span>
                            SOBREVIVENTES
                        </span>
                    </div>


                    <div class="numero">
                        <strong>
                            ${percentual}%
                        </strong>

                        <span>
                            SUCESSO
                        </span>
                    </div>

                </div>


                <div class="reproducao-casal">

                    <strong>Casal:</strong>
                    ${reproducao.casal}

                </div>


                <div class="reproducao-observacao">

                    <strong>Observação:</strong>
                    ${reproducao.observacao}

                </div>

            </div>
        `;
    });


    // ----------------------------------------
    // STATUS
    // ----------------------------------------

    const statusTexto =
        gaiola.status === "reproduzindo"
            ? "EM REPRODUÇÃO"
            : "EM DESCANSO";


    // ----------------------------------------
    // HTML DA PÁGINA DA GAIOLA
    // ----------------------------------------

    gaiolaContent.innerHTML = `

        <div class="gaiola-detail-header">

            <div class="detail-header-top">

                <div class="detail-number">

                    <div class="detail-icon">
                        🏠
                    </div>

                    <div>

                        <h2>
                            Gaiola ${gaiola.numero}
                        </h2>

                        <p>
                            Acompanhamento do casal
                        </p>

                    </div>

                </div>

                <div class="status ${gaiola.status}">
                    ${statusTexto}
                </div>

            </div>

        </div>


        <!-- CASAL -->

        <div class="detail-section">

            <div class="section-heading">

                <div class="section-heading-icon">
                    🐦
                </div>

                <h3>
                    Casal atual
                </h3>

            </div>


            <div class="casal-detail">

                <div class="ave-detail">

                    <div class="ave-detail-title">

                        <h4>
                            ${gaiola.macho.nome}
                        </h4>

                        <span class="sexo-macho">
                            ♂ MACHO
                        </span>

                    </div>


                    <div class="info">

                        <span>
                            Anilha
                        </span>

                        <span>
                            ${gaiola.macho.anilha}
                        </span>

                    </div>


                    <div class="info">

                        <span>
                            Cor
                        </span>

                        <span>
                            ${gaiola.macho.cor}
                        </span>

                    </div>


                    <div class="info">

                        <span>
                            Raça
                        </span>

                        <span>
                            ${gaiola.macho.raca}
                        </span>

                    </div>

                </div>


                <div class="ave-detail">

                    <div class="ave-detail-title">

                        <h4>
                            ${gaiola.femea.nome}
                        </h4>

                        <span class="sexo-femea">
                            ♀ FÊMEA
                        </span>

                    </div>


                    <div class="info">

                        <span>
                            Anilha
                        </span>

                        <span>
                            ${gaiola.femea.anilha}
                        </span>

                    </div>


                    <div class="info">

                        <span>
                            Cor
                        </span>

                        <span>
                            ${gaiola.femea.cor}
                        </span>

                    </div>


                    <div class="info">

                        <span>
                            Raça
                        </span>

                        <span>
                            ${gaiola.femea.raca}
                        </span>

                    </div>

                </div>

            </div>

        </div>


        <!-- REPRODUÇÃO ATUAL -->

        <div class="detail-section">

            <div class="section-heading">

                <div class="section-heading-icon">
                    🥚
                </div>

                <h3>
                    Reprodução atual
                </h3>

            </div>


            <div class="status-grid">

                <div class="status-box">

                    <strong>
                        ${atual.ovos}
                    </strong>

                    <span>
                        Ovos
                    </span>

                </div>


                <div class="status-box">

                    <strong>
                        ${atual.filhotes.length}
                    </strong>

                    <span>
                        Filhotes
                    </span>

                </div>


                <div class="status-box">

                    <strong>
                        ${atual.preparacao}
                    </strong>

                    <span>
                        Preparação
                    </span>

                </div>


                <div class="status-box">

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

        </div>


        <!-- FILHOTES -->

        <div class="detail-section">

            <div class="section-heading">

                <div class="section-heading-icon">
                    🐥
                </div>

                <h3>
                    Filhotes da reprodução atual
                </h3>

            </div>


            <div class="filhotes">

                ${filhotesHTML}

            </div>

        </div>


        <!-- HISTÓRICO -->

        <div class="detail-section">

            <div class="section-heading">

                <div class="section-heading-icon">
                    📚
                </div>

                <h3>
                    Reproduções anteriores
                </h3>

            </div>


            <div class="historico">

                ${historicoHTML}

            </div>

        </div>

    `;
}


// ============================================
// VOLTAR
// ============================================

function voltar() {

    gaiolaPage.style.display = "none";

    homePage.style.display = "block";

    window.scrollTo(0, 0);
}


// ============================================
// INICIALIZAÇÃO
// ============================================

renderGaiolas();