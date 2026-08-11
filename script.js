/* =====================================================
   DADOS ESTÁTICOS
===================================================== */

const aves = [

    {
        id: "A001",
        nome: "Thor",
        sexo: "Macho",
        anilha: "M-1001",
        cor: "Verde",
        raca: "Agapornis Roseicollis",
        gaiolaAtual: "01",
        pai: null,
        mae: null,
        nascimento: "12/02/2024",
        gaiolaNascimento: "03",
        filhos: ["A006", "A007", "A008"],
        irmaos: []
    },

    {
        id: "A002",
        nome: "Luna",
        sexo: "Fêmea",
        anilha: "F-1002",
        cor: "Azul",
        raca: "Agapornis Roseicollis",
        gaiolaAtual: "01",
        pai: null,
        mae: null,
        nascimento: "20/03/2024",
        gaiolaNascimento: "02",
        filhos: ["A006", "A007", "A008"],
        irmaos: []
    },

    {
        id: "A003",
        nome: "Romeu",
        sexo: "Macho",
        anilha: "M-1003",
        cor: "Verde",
        raca: "Agapornis Roseicollis",
        gaiolaAtual: "02",
        pai: null,
        mae: null,
        nascimento: "08/01/2024",
        gaiolaNascimento: "04",
        filhos: ["A009", "A010"],
        irmaos: []
    },

    {
        id: "A004",
        nome: "Julieta",
        sexo: "Fêmea",
        anilha: "F-1004",
        cor: "Lutino",
        raca: "Agapornis Roseicollis",
        gaiolaAtual: "02",
        pai: null,
        mae: null,
        nascimento: "17/02/2024",
        gaiolaNascimento: "04",
        filhos: ["A009", "A010"],
        irmaos: []
    },

    {
        id: "A005",
        nome: "Apollo",
        sexo: "Macho",
        anilha: "M-1005",
        cor: "Azul",
        raca: "Agapornis Roseicollis",
        gaiolaAtual: "03",
        pai: null,
        mae: null,
        nascimento: "05/04/2024",
        gaiolaNascimento: "01",
        filhos: ["A011", "A012"],
        irmaos: []
    },

    {
        id: "A006",
        nome: "Tico",
        sexo: "Macho",
        anilha: "M-2501",
        cor: "Verde",
        raca: "Agapornis Roseicollis",
        gaiolaAtual: "04",
        pai: "A001",
        mae: "A002",
        nascimento: "18/03/2026",
        gaiolaNascimento: "01",
        filhos: [],
        irmaos: ["A007", "A008"]
    },

    {
        id: "A007",
        nome: "Lola",
        sexo: "Fêmea",
        anilha: "F-2502",
        cor: "Azul",
        raca: "Agapornis Roseicollis",
        gaiolaAtual: "05",
        pai: "A001",
        mae: "A002",
        nascimento: "19/03/2026",
        gaiolaNascimento: "01",
        filhos: [],
        irmaos: ["A006", "A008"]
    },

    {
        id: "A008",
        nome: "Nino",
        sexo: "Macho",
        anilha: "M-2503",
        cor: "Verde",
        raca: "Agapornis Roseicollis",
        gaiolaAtual: "05",
        pai: "A001",
        mae: "A002",
        nascimento: "20/03/2026",
        gaiolaNascimento: "01",
        filhos: [],
        irmaos: ["A006", "A007"]
    },

    {
        id: "A009",
        nome: "Mel",
        sexo: "Fêmea",
        anilha: "F-2504",
        cor: "Lutino",
        raca: "Agapornis Roseicollis",
        gaiolaAtual: "03",
        pai: "A003",
        mae: "A004",
        nascimento: "28/03/2026",
        gaiolaNascimento: "02",
        filhos: [],
        irmaos: ["A010"]
    },

    {
        id: "A010",
        nome: "Kiko",
        sexo: "Macho",
        anilha: "M-2505",
        cor: "Verde",
        raca: "Agapornis Roseicollis",
        gaiolaAtual: "03",
        pai: "A003",
        mae: "A004",
        nascimento: "29/03/2026",
        gaiolaNascimento: "02",
        filhos: [],
        irmaos: ["A009"]
    },

    {
        id: "A011",
        nome: "Mimi",
        sexo: "Fêmea",
        anilha: "F-2506",
        cor: "Azul",
        raca: "Agapornis Roseicollis",
        gaiolaAtual: "04",
        pai: "A005",
        mae: "A002",
        nascimento: "15/05/2026",
        gaiolaNascimento: "03",
        filhos: [],
        irmaos: ["A012"]
    },

    {
        id: "A012",
        nome: "Zeca",
        sexo: "Macho",
        anilha: "M-2507",
        cor: "Azul",
        raca: "Agapornis Roseicollis",
        gaiolaAtual: "04",
        pai: "A005",
        mae: "A002",
        nascimento: "16/05/2026",
        gaiolaNascimento: "03",
        filhos: [],
        irmaos: ["A011"]
    },

    {
        id: "A013",
        nome: "Nala",
        sexo: "Fêmea",
        anilha: "F-1006",
        cor: "Verde",
        raca: "Agapornis Roseicollis",
        gaiolaAtual: "03",
        pai: null,
        mae: null,
        nascimento: "14/06/2024",
        gaiolaNascimento: "05",
        filhos: [],
        irmaos: []
    },

    {
        id: "A014",
        nome: "Simba",
        sexo: "Macho",
        anilha: "M-1007",
        cor: "Lutino",
        raca: "Agapornis Roseicollis",
        gaiolaAtual: "04",
        pai: null,
        mae: null,
        nascimento: "22/07/2024",
        gaiolaNascimento: "05",
        filhos: [],
        irmaos: []
    },

    {
        id: "A015",
        nome: "Melina",
        sexo: "Fêmea",
        anilha: "F-1008",
        cor: "Azul",
        raca: "Agapornis Roseicollis",
        gaiolaAtual: "05",
        pai: null,
        mae: null,
        nascimento: "03/09/2024",
        gaiolaNascimento: "02",
        filhos: [],
        irmaos: []
    },

    {
        id: "A016",
        nome: "Zeus",
        sexo: "Macho",
        anilha: "M-1009",
        cor: "Verde",
        raca: "Agapornis Roseicollis",
        gaiolaAtual: "05",
        pai: null,
        mae: null,
        nascimento: "10/08/2024",
        gaiolaNascimento: "03",
        filhos: [],
        irmaos: []
    }

];


const gaiolas = [

    {
        numero: "01",

        status: "reproduzindo",

        macho: "A001",

        femea: "A002",

        atual: {

            preparacao: "05/07/2026",

            choco: "18/07/2026",

            ultimoOvo: "14/07/2026",

            ovos: 6,

            filhotes: ["A006", "A007", "A008"],

            eventos: [

                {
                    data: "05/07/2026",
                    titulo: "Início da preparação",
                    descricao:
                        "Casal colocado na gaiola de reprodução."
                },

                {
                    data: "10/07/2026",
                    titulo: "Primeiro ovo",
                    descricao:
                        "Primeiro ovo identificado no ninho."
                },

                {
                    data: "14/07/2026",
                    titulo: "Último ovo botado",
                    descricao:
                        "Sexto e último ovo identificado no ninho."
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

                filhotes: [
                    "A006",
                    "A007",
                    "A008"
                ],

                observacao:
                    "Excelente reprodução. Todos os filhotes foram anilhados."
            },

            {
                periodo: "Outubro / 2025",
                data: "12/10/2025",
                ovos: 5,
                nascidos: 4,
                sobreviventes: 4,
                resultado: "excelente",
                casal: "Thor × Luna",

                filhotes: [],

                observacao:
                    "Boa postura e desenvolvimento uniforme."
            }

        ]
    },


    {
        numero: "02",

        status: "reproduzindo",

        macho: "A003",

        femea: "A004",

        atual: {

            preparacao: "22/07/2026",

            choco: "02/08/2026",

            ultimoOvo: "31/07/2026",

            ovos: 5,

            filhotes: [],

            eventos: [

                {
                    data: "22/07/2026",
                    titulo: "Início da preparação",
                    descricao:
                        "Casal preparado para nova reprodução."
                },

                {
                    data: "26/07/2026",
                    titulo: "Primeiro ovo",
                    descricao:
                        "Primeiro ovo identificado."
                },

                {
                    data: "31/07/2026",
                    titulo: "Último ovo botado",
                    descricao:
                        "Quinto e último ovo da postura."
                },

                {
                    data: "02/08/2026",
                    titulo: "Início do choco",
                    descricao:
                        "Fêmea iniciou o choco."
                }

            ]
        },

        historico: [

            {
                periodo: "Março / 2026",
                data: "09/03/2026",
                ovos: 5,
                nascidos: 4,
                sobreviventes: 4,
                resultado: "excelente",
                casal: "Romeu × Julieta",

                filhotes: [
                    "A009",
                    "A010"
                ],

                observacao:
                    "Reprodução muito estável e com excelente desenvolvimento."
            },

            {
                periodo: "Setembro / 2025",
                data: "18/09/2025",
                ovos: 6,
                nascidos: 3,
                sobreviventes: 3,
                resultado: "regular",
                casal: "Romeu × Julieta",

                filhotes: [],

                observacao:
                    "Três ovos não eclodiram."
            }

        ]
    },


    {
        numero: "03",

        status: "descanso",

        macho: "A005",

        femea: "A013",

        atual: {

            preparacao: "10/05/2026",

            choco: "25/05/2026",

            ultimoOvo: "28/05/2026",

            ovos: 4,

            filhotes: ["A011", "A012"],

            eventos: [

                {
                    data: "10/05/2026",
                    titulo: "Início da preparação",
                    descricao:
                        "Casal colocado para preparação."
                },

                {
                    data: "23/05/2026",
                    titulo: "Primeiro ovo",
                    descricao:
                        "Primeiro ovo identificado."
                },

                {
                    data: "28/05/2026",
                    titulo: "Último ovo botado",
                    descricao:
                        "Quarto e último ovo da postura."
                },

                {
                    data: "25/05/2026",
                    titulo: "Início do choco",
                    descricao:
                        "Fêmea iniciou o choco."
                },

                {
                    data: "17/06/2026",
                    titulo: "Filhotes nascidos",
                    descricao:
                        "Dois filhotes nasceram e foram anilhados."
                },

                {
                    data: "05/07/2026",
                    titulo: "Fim da reprodução",
                    descricao:
                        "Casal entrou em período de descanso."
                }

            ]
        },

        historico: [

            {
                periodo: "Novembro / 2025",
                data: "05/11/2025",
                ovos: 5,
                nascidos: 4,
                sobreviventes: 4,
                resultado: "excelente",
                casal: "Apollo × Nala",

                filhotes: [],

                observacao:
                    "Excelente taxa de nascimento e desenvolvimento."
            },

            {
                periodo: "Maio / 2025",
                data: "14/05/2025",
                ovos: 4,
                nascidos: 2,
                sobreviventes: 2,
                resultado: "regular",
                casal: "Apollo × Nala",

                filhotes: [],

                observacao:
                    "Apenas dois ovos apresentaram desenvolvimento."
            }

        ]
    },


    {
        numero: "04",

        status: "descanso",

        macho: "A014",

        femea: "A011",

        atual: {

            preparacao: "02/04/2026",

            choco: "14/04/2026",

            ultimoOvo: "21/04/2026",

            ovos: 5,

            filhotes: [],

            eventos: [

                {
                    data: "02/04/2026",
                    titulo: "Início da preparação",
                    descricao:
                        "Casal preparado para reprodução."
                },

                {
                    data: "17/04/2026",
                    titulo: "Primeiro ovo",
                    descricao:
                        "Primeiro ovo identificado."
                },

                {
                    data: "21/04/2026",
                    titulo: "Último ovo botado",
                    descricao:
                        "Quinto e último ovo da postura."
                },

                {
                    data: "14/04/2026",
                    titulo: "Início do choco",
                    descricao:
                        "Início do choco."
                },

                {
                    data: "12/05/2026",
                    titulo: "Fim da reprodução",
                    descricao:
                        "Casal finalizou a reprodução."
                }

            ]
        },

        historico: [

            {
                periodo: "Dezembro / 2025",
                data: "08/12/2025",
                ovos: 6,
                nascidos: 5,
                sobreviventes: 5,
                resultado: "excelente",
                casal: "Simba × Mimi",

                filhotes: [],

                observacao:
                    "Excelente reprodução."
            },

            {
                periodo: "Julho / 2025",
                data: "04/07/2025",
                ovos: 5,
                nascidos: 3,
                sobreviventes: 3,
                resultado: "regular",
                casal: "Simba × Mimi",

                filhotes: [],

                observacao:
                    "Desenvolvimento regular."
            }

        ]
    },


    {
        numero: "05",

        status: "reproduzindo",

        macho: "A016",

        femea: "A015",

        atual: {

            preparacao: "04/08/2026",

            choco: null,

            ultimoOvo: "09/08/2026",

            ovos: 2,

            filhotes: [],

            eventos: [

                {
                    data: "04/08/2026",
                    titulo: "Início da preparação",
                    descricao:
                        "Casal iniciado em preparação."
                },

                {
                    data: "08/08/2026",
                    titulo: "Primeiro ovo",
                    descricao:
                        "Primeiro ovo identificado."
                },

                {
                    data: "09/08/2026",
                    titulo: "Último ovo botado",
                    descricao:
                        "Segundo ovo identificado."
                }

            ]
        },

        historico: [

            {
                periodo: "Janeiro / 2026",
                data: "15/01/2026",
                ovos: 5,
                nascidos: 4,
                sobreviventes: 4,
                resultado: "excelente",
                casal: "Zeus × Melina",

                filhotes: [],

                observacao:
                    "Boa reprodução e filhotes saudáveis."
            },

            {
                periodo: "Agosto / 2025",
                data: "09/08/2025",
                ovos: 4,
                nascidos: 2,
                sobreviventes: 2,
                resultado: "regular",
                casal: "Zeus × Melina",

                filhotes: [],

                observacao:
                    "Dois ovos não eclodiram."
            }

        ]
    }

];


/* =====================================================
   FUNÇÕES DE DATA
===================================================== */

function converterData(data) {

    if (!data) {
        return null;
    }

    const partes = data.split("/");

    if (partes.length !== 3) {
        return null;
    }

    const dataConvertida = new Date(
        Number(partes[2]),
        Number(partes[1]) - 1,
        Number(partes[0])
    );

    dataConvertida.setHours(0, 0, 0, 0);

    return dataConvertida;
}


function adicionarDias(data, dias) {

    if (!data) {
        return null;
    }

    const novaData = new Date(data);

    novaData.setDate(
        novaData.getDate() + dias
    );

    novaData.setHours(0, 0, 0, 0);

    return novaData;
}


function formatarData(data) {

    if (!data) {
        return "";
    }

    const dia =
        String(data.getDate()).padStart(2, "0");

    const mes =
        String(data.getMonth() + 1).padStart(2, "0");

    const ano =
        data.getFullYear();

    return `${dia}/${mes}/${ano}`;
}


function dataOvoscopia(gaiola) {

    if (
        !gaiola ||
        !gaiola.atual ||
        !gaiola.atual.ultimoOvo
    ) {
        return null;
    }

    const ultimoOvo =
        converterData(
            gaiola.atual.ultimoOvo
        );

    return adicionarDias(
        ultimoOvo,
        6
    );
}


function deveFazerOvoscopia(gaiola) {

    const data =
        dataOvoscopia(gaiola);

    if (!data) {
        return false;
    }

    const hoje = new Date();

    hoje.setHours(0, 0, 0, 0);

    return hoje >= data;
}


/* =====================================================
   FUNÇÕES DE AVES
===================================================== */

function obterAve(id) {

    return aves.find(
        ave => ave.id === id
    );
}


function sexoIcone(sexo) {

    return sexo === "Macho"
        ? "♂"
        : "♀";
}


function obterNomeAve(id) {

    const ave = obterAve(id);

    if (!ave) {
        return "Ave não encontrada";
    }

    return ave.nome;
}


function obterAnilhaAve(id) {

    const ave = obterAve(id);

    if (!ave) {
        return "-";
    }

    return ave.anilha;
}


/* =====================================================
   NAVEGAÇÃO
===================================================== */

function esconderTelas() {

    document
        .getElementById("telaGaiolas")
        .classList.add("hidden");

    document
        .getElementById("telaGaiolaDetalhe")
        .classList.add("hidden");

    document
        .getElementById("telaAves")
        .classList.add("hidden");

    document
        .getElementById("telaAveDetalhe")
        .classList.add("hidden");
}


function atualizarNavegacao(tela) {

    document
        .getElementById("navGaiolas")
        .classList.remove("active");

    document
        .getElementById("navAves")
        .classList.remove("active");

    if (tela === "gaiolas") {

        document
            .getElementById("navGaiolas")
            .classList.add("active");

    }

    if (tela === "aves") {

        document
            .getElementById("navAves")
            .classList.add("active");

    }
}


function mostrarTela(tela) {

    esconderTelas();

    if (tela === "gaiolas") {

        document
            .getElementById("telaGaiolas")
            .classList.remove("hidden");

        atualizarNavegacao("gaiolas");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    if (tela === "aves") {

        document
            .getElementById("telaAves")
            .classList.remove("hidden");

        atualizarNavegacao("aves");

        renderAves();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}


function abrirGaiola(numero) {

    const gaiola =
        gaiolas.find(
            item => item.numero === numero
        );

    if (!gaiola) {
        return;
    }

    esconderTelas();

    document
        .getElementById("telaGaiolaDetalhe")
        .classList.remove("hidden");

    renderDetalheGaiola(gaiola);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function voltarGaiolas() {

    mostrarTela("gaiolas");
}


function abrirAve(id) {

    const ave = obterAve(id);

    if (!ave) {
        return;
    }

    esconderTelas();

    document
        .getElementById("telaAveDetalhe")
        .classList.remove("hidden");

    renderDetalheAve(ave);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function voltarAves() {

    esconderTelas();

    document
        .getElementById("telaAves")
        .classList.remove("hidden");

    atualizarNavegacao("aves");

    renderAves();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================================
   RENDERIZAÇÃO DAS GAIOLAS
===================================================== */

function renderGaiolas() {

    const container =
        document.getElementById(
            "listaGaiolas"
        );

    document
        .getElementById("totalGaiolas")
        .textContent = gaiolas.length;


    container.innerHTML =
        gaiolas
            .map(gaiola => {

                const macho =
                    obterAve(gaiola.macho);

                const femea =
                    obterAve(gaiola.femea);

                const casal =
                    macho && femea
                        ? `${macho.nome} × ${femea.nome}`
                        : "Casal não definido";


                return `

                    <article
                        class="gaiola-card"
                        onclick="abrirGaiola('${gaiola.numero}')"
                    >

                        <div class="gaiola-main">

                            <div class="gaiola-number">
                                ${gaiola.numero}
                            </div>


                            <div class="gaiola-info">

                                <h3>
                                    Gaiola ${gaiola.numero}
                                </h3>

                                <div class="gaiola-casal">
                                    ${casal}
                                </div>

                            </div>


                            <div class="gaiola-status-container">

                                <span
                                    class="status-badge ${gaiola.status}"
                                >

                                    ${
                                        gaiola.status === "reproduzindo"
                                            ? "EM REPRODUÇÃO"
                                            : "EM DESCANSO"
                                    }

                                </span>


                                ${
                                    deveFazerOvoscopia(gaiola)
                                        ? `
                                            <span class="ovoscopia-alert">
                                                ⚠ Ovoscopia
                                            </span>
                                        `
                                        : ""
                                }

                            </div>


                            <span class="gaiola-arrow">
                                →
                            </span>

                        </div>

                    </article>

                `;

            })
            .join("");
}


/* =====================================================
   RENDERIZAÇÃO DA GAIOLA
===================================================== */

function renderDetalheGaiola(gaiola) {

    const container =
        document.getElementById(
            "gaiolaDetalhe"
        );


    const macho =
        obterAve(gaiola.macho);

    const femea =
        obterAve(gaiola.femea);


    const dataOvo =
        gaiola.atual.ultimoOvo;


    const dataOvoConvertida =
        converterData(dataOvo);


    const dataOvoScopia =
        dataOvoscopia(gaiola);


    const ovoscopiaAtiva =
        deveFazerOvoscopia(gaiola);


    const filhotesAtuais =
        gaiola.atual.filhotes || [];


    container.innerHTML = `

        <!-- ==========================
             CABEÇALHO
        =========================== -->

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
                            ${macho?.nome || "-"}
                            ×
                            ${femea?.nome || "-"}
                        </p>

                    </div>

                </div>


                <div class="detail-status-column">

                    <span
                        class="status-badge ${gaiola.status}"
                    >

                        ${
                            gaiola.status === "reproduzindo"
                                ? "EM REPRODUÇÃO"
                                : "EM DESCANSO"
                        }

                    </span>


                    ${
                        ovoscopiaAtiva
                            ? `
                                <span class="ovoscopia-alert">
                                    ⚠ Ovoscopia
                                </span>
                            `
                            : ""
                    }

                </div>

            </div>

        </div>


        <!-- ==========================
             CASAL
        =========================== -->

        <section class="detail-section">

            <div class="section-title">

                <div class="section-title-icon">
                    🐦
                </div>

                Casal atual

            </div>


            <div class="casal-grid">

                ${renderAveCasal(macho, "Macho")}

                ${renderAveCasal(femea, "Fêmea")}

            </div>

        </section>


        <!-- ==========================
             OVOSCOPIA
        =========================== -->

        ${
            dataOvo
                ? `

                    <section class="detail-section">

                        <div class="section-title">

                            <div class="section-title-icon">
                                🔎
                            </div>

                            Ovoscopia

                        </div>


                        ${
                            ovoscopiaAtiva
                                ? `

                                    <div class="ovoscopia-box">

                                        <div class="ovoscopia-icon">
                                            ⚠
                                        </div>

                                        <div>

                                            <strong>
                                                Ovoscopia recomendada
                                            </strong>

                                            <span>
                                                Último ovo:
                                                ${dataOvo}
                                                ·
                                                Data prevista:
                                                ${formatarData(dataOvoScopia)}
                                            </span>

                                        </div>

                                    </div>

                                `
                                : `

                                    <div class="ovoscopia-box">

                                        <div class="ovoscopia-icon">
                                            🕐
                                        </div>

                                        <div>

                                            <strong>
                                                Ovoscopia
                                            </strong>

                                            <span>
                                                Último ovo:
                                                ${dataOvo}
                                                ·
                                                Prevista para:
                                                ${formatarData(dataOvoScopia)}
                                            </span>

                                        </div>

                                    </div>

                                `
                        }

                    </section>

                `
                : ""
        }


        <!-- ==========================
             RESUMO
        =========================== -->

        <section class="detail-section">

            <div class="section-title">

                <div class="section-title-icon">
                    📊
                </div>

                Reprodução atual

            </div>


            <div class="stats-grid">

                <div class="stat-card">

                    <strong>
                        ${gaiola.atual.ovos}
                    </strong>

                    <span>
                        Ovos
                    </span>

                </div>


                <div class="stat-card">

                    <strong>
                        ${filhotesAtuais.length}
                    </strong>

                    <span>
                        Filhotes
                    </span>

                </div>


                <div class="stat-card">

                    <strong>
                        ${gaiola.atual.preparacao}
                    </strong>

                    <span>
                        Preparação
                    </span>

                </div>


                <div class="stat-card">

                    <strong>
                        ${
                            gaiola.atual.choco
                                ? gaiola.atual.choco
                                : "-"
                        }
                    </strong>

                    <span>
                        Início do choco
                    </span>

                </div>

            </div>

        </section>


        <!-- ==========================
             LINHA DO TEMPO
        =========================== -->

        <section class="detail-section">

            <div class="section-title">

                <div class="section-title-icon">
                    🕐
                </div>

                Linha do tempo

            </div>


            <div class="timeline">

                ${
                    gaiola.atual.eventos
                        .map(evento => `

                            <div class="timeline-item">

                                <div class="timeline-dot"></div>

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

                        `)
                        .join("")
                }

            </div>

        </section>


        <!-- ==========================
             FILHOTES ATUAIS
        =========================== -->

        <section class="detail-section">

            <div class="section-title">

                <div class="section-title-icon">
                    🐣
                </div>

                Filhotes da reprodução atual

            </div>


            ${
                filhotesAtuais.length > 0

                    ? `

                        <div class="filhotes-list">

                            ${
                                filhotesAtuais
                                    .map(id => {

                                        const ave =
                                            obterAve(id);

                                        return renderFilhoteRow(
                                            ave
                                        );

                                    })
                                    .join("")
                            }

                        </div>

                    `

                    : `

                        <div class="empty-family">

                            Nenhum filhote registrado nesta reprodução.

                        </div>

                    `
            }

        </section>


        <!-- ==========================
             HISTÓRICO
        =========================== -->

        <section class="detail-section">

            <div class="section-title">

                <div class="section-title-icon">
                    📚
                </div>

                Histórico de reproduções

            </div>


            <div class="history-list">

                ${
                    gaiola.historico
                        .map(historico =>
                            renderHistorico(
                                historico
                            )
                        )
                        .join("")
                }

            </div>

        </section>

    `;
}


/* =====================================================
   CASAL
===================================================== */

function renderAveCasal(ave, tipo) {

    if (!ave) {

        return `

            <div class="ave-card">

                <div class="ave-card-label">
                    ${tipo}
                </div>

                <div class="ave-card-name">
                    Não cadastrado
                </div>

            </div>

        `;

    }


    return `

        <div
            class="ave-card"
            onclick="abrirAve('${ave.id}')"
        >

            <div class="ave-card-label">
                ${tipo}
            </div>

            <div class="ave-card-name">
                ${ave.nome}
            </div>

            <div class="ave-card-info">

                Anilha:
                ${ave.anilha}

                ·

                ${ave.cor}

            </div>

            <span class="ave-card-link">
                Ver ficha da ave →
            </span>

        </div>

    `;
}


/* =====================================================
   FILHOTE
===================================================== */

function renderFilhoteRow(ave) {

    if (!ave) {
        return "";
    }


    return `

        <div
            class="filhote-row"
            onclick="abrirAve('${ave.id}')"
        >

            <div class="filhote-avatar">

                ${sexoIcone(ave.sexo)}

            </div>


            <div class="filhote-info">

                <strong>
                    ${ave.nome}
                </strong>

                <span>

                    Anilha:
                    ${ave.anilha}

                    ·

                    ${ave.sexo}

                    ·

                    ${ave.cor}

                    ·

                    ${ave.raca}

                </span>

            </div>


            <span class="filhote-arrow">
                →
            </span>

        </div>

    `;
}


/* =====================================================
   HISTÓRICO
===================================================== */

function renderHistorico(historico) {

    let classeResultado = "regular";

    let textoResultado = "REGULAR";


    if (
        historico.resultado === "excelente"
    ) {

        classeResultado = "excelente";

        textoResultado = "EXCELENTE";

    }


    if (
        historico.resultado === "baixo"
    ) {

        classeResultado = "baixo";

        textoResultado = "BAIXO";

    }


    const filhotes =
        historico.filhotes || [];


    const filhotesHTML =
        filhotes.length > 0

            ? `

                <div class="history-filhotes">

                    <div class="history-filhotes-title">

                        🐣 Filhotes nascidos

                    </div>


                    <div class="history-filhotes-list">

                        ${
                            filhotes
                                .map(id => {

                                    const filhote =
                                        obterAve(id);

                                    if (!filhote) {
                                        return "";
                                    }

                                    return `

                                        <div
                                            class="history-filhote"
                                            onclick="abrirAve('${filhote.id}')"
                                        >

                                            <div class="history-filhote-avatar">

                                                ${sexoIcone(filhote.sexo)}

                                            </div>


                                            <div class="history-filhote-info">

                                                <strong>

                                                    ${filhote.nome}

                                                </strong>


                                                <span>

                                                    Anilha:
                                                    ${filhote.anilha}

                                                    ·

                                                    ${filhote.cor}

                                                </span>

                                            </div>

                                        </div>

                                    `;

                                })
                                .join("")
                        }

                    </div>

                </div>

            `

            : `

                <div class="history-filhotes">

                    <div class="history-filhotes-title">

                        🐣 Filhotes nascidos

                    </div>

                    <div class="empty-family">

                        Filhotes não cadastrados neste histórico.

                    </div>

                </div>

            `;


    const percentual =
        historico.nascidos > 0

            ? Math.round(
                (
                    historico.sobreviventes /
                    historico.nascidos
                ) * 100
            )

            : 0;


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


            <!-- FILHOTES ANTES DO RESUMO -->

            ${filhotesHTML}


            <!-- RESUMO -->

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
                        ${percentual}%
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
            "listaAves"
        );


    document
        .getElementById("totalAves")
        .textContent = lista.length;


    if (lista.length === 0) {

        container.innerHTML = `

            <div class="empty-family">

                Nenhuma ave encontrada para esta anilha.

            </div>

        `;

        return;
    }


    container.innerHTML =
        lista
            .map(ave => `

                <article
                    class="ave-list-card"
                    onclick="abrirAve('${ave.id}')"
                >

                    <div class="ave-list-avatar">

                        ${sexoIcone(ave.sexo)}

                    </div>


                    <div class="ave-list-info">

                        <h3>
                            ${ave.nome}
                        </h3>

                        <p>

                            Anilha:
                            ${ave.anilha}

                            ·

                            ${ave.sexo}

                            ·

                            ${ave.cor}

                            ·

                            ${ave.raca}

                        </p>

                    </div>


                    <span class="ave-list-arrow">
                        →
                    </span>

                </article>

            `)
            .join("");
}


function pesquisarAves() {

    const campo =
        document.getElementById(
            "pesquisaAnilha"
        );


    const termo =
        campo.value
            .trim()
            .toLowerCase();


    if (!termo) {

        renderAves(aves);

        return;
    }


    const resultado =
        aves.filter(ave =>

            ave.anilha
                .toLowerCase()
                .includes(termo)

        );


    renderAves(resultado);
}


/* =====================================================
   DETALHE DA AVE
===================================================== */

function renderDetalheAve(ave) {

    const container =
        document.getElementById(
            "aveDetalhe"
        );


    const gaiolaAtual =
        gaiolas.find(
            gaiola =>
                gaiola.numero ===
                ave.gaiolaAtual
        );


    const pai =
        ave.pai
            ? obterAve(ave.pai)
            : null;


    const mae =
        ave.mae
            ? obterAve(ave.mae)
            : null;


    const filhos =
        (ave.filhos || [])
            .map(id => obterAve(id))
            .filter(Boolean);


    const irmaos =
        (ave.irmaos || [])
            .map(id => obterAve(id))
            .filter(Boolean);


    container.innerHTML = `

        <!-- ==========================
             CABEÇALHO DA AVE
        =========================== -->

        <div class="bird-header">

            <div class="bird-header-main">

                <div class="bird-big-avatar">

                    ${sexoIcone(ave.sexo)}

                </div>


                <div>

                    <h2>
                        ${ave.nome}
                    </h2>

                    <p>

                        Anilha:
                        ${ave.anilha}

                        ·

                        ${ave.sexo}

                    </p>

                </div>

            </div>

        </div>


        <!-- ==========================
             DADOS PRINCIPAIS
        =========================== -->

        <section class="detail-section">

            <div class="section-title">

                <div class="section-title-icon">
                    🐦
                </div>

                Dados da ave

            </div>


            <div class="bird-data-grid">

                ${renderDataItem(
                    "Nome",
                    ave.nome
                )}

                ${renderDataItem(
                    "Sexo",
                    ave.sexo
                )}

                ${renderDataItem(
                    "Anilha",
                    ave.anilha
                )}

                ${renderDataItem(
                    "Cor",
                    ave.cor
                )}

                ${renderDataItem(
                    "Raça",
                    ave.raca
                )}

                ${renderDataItem(
                    "Nascimento",
                    ave.nascimento
                )}

                ${renderDataItem(
                    "Gaiola atual",
                    `Gaiola ${ave.gaiolaAtual}`
                )}

                ${renderDataItem(
                    "Gaiola de nascimento",
                    `Gaiola ${ave.gaiolaNascimento}`
                )}

            </div>

        </section>


        <!-- ==========================
             LOCALIZAÇÃO
        =========================== -->

        <section class="detail-section">

            <div class="section-title">

                <div class="section-title-icon">
                    🏠
                </div>

                Localização atual

            </div>


            ${
                gaiolaAtual

                    ? `

                        <div
                            class="ave-card"
                            onclick="abrirGaiola('${gaiolaAtual.numero}')"
                        >

                            <div class="ave-card-label">
                                Gaiola atual
                            </div>

                            <div class="ave-card-name">

                                Gaiola
                                ${gaiolaAtual.numero}

                            </div>

                            <div class="ave-card-info">

                                ${
                                    obterNomeAve(
                                        gaiolaAtual.macho
                                    )
                                }

                                ×

                                ${
                                    obterNomeAve(
                                        gaiolaAtual.femea
                                    )
                                }

                            </div>

                            <span class="ave-card-link">

                                Ver reprodução da gaiola →

                            </span>

                        </div>

                    `

                    : `

                        <div class="empty-family">

                            A ave não está vinculada a uma gaiola atual.

                        </div>

                    `
            }

        </section>


        <!-- ==========================
             PAIS
        =========================== -->

        <section class="detail-section">

            <div class="section-title">

                <div class="section-title-icon">
                    👨‍👩‍👦
                </div>

                Pais

            </div>


            <div class="family-list">

                ${
                    pai
                        ? renderFamilyItem(
                            pai,
                            "Pai"
                        )
                        : `
                            <div class="empty-family">
                                Pai não cadastrado.
                            </div>
                        `
                }


                ${
                    mae
                        ? renderFamilyItem(
                            mae,
                            "Mãe"
                        )
                        : `
                            <div class="empty-family">
                                Mãe não cadastrada.
                            </div>
                        `
                }

            </div>

        </section>


        <!-- ==========================
             IRMÃOS
        =========================== -->

        <section class="detail-section">

            <div class="section-title">

                <div class="section-title-icon">
                    👥
                </div>

                Irmãos

            </div>


            ${
                irmaos.length > 0

                    ? `

                        <div class="family-list">

                            ${
                                irmaos
                                    .map(
                                        irmao =>
                                            renderFamilyItem(
                                                irmao,
                                                "Irmão"
                                            )
                                    )
                                    .join("")
                            }

                        </div>

                    `

                    : `

                        <div class="empty-family">

                            Nenhum irmão cadastrado.

                        </div>

                    `
            }

        </section>


        <!-- ==========================
             FILHOS
        =========================== -->

        <section class="detail-section">

            <div class="section-title">

                <div class="section-title-icon">
                    🐣
                </div>

                Filhos

            </div>


            ${
                filhos.length > 0

                    ? `

                        <div class="family-list">

                            ${
                                filhos
                                    .map(
                                        filho =>
                                            renderFamilyItem(
                                                filho,
                                                "Filho"
                                            )
                                    )
                                    .join("")
                            }

                        </div>

                    `

                    : `

                        <div class="empty-family">

                            Nenhum filho cadastrado.

                        </div>

                    `
            }

        </section>

    `;
}


/* =====================================================
   ITEM DE DADOS
===================================================== */

function renderDataItem(label, value) {

    return `

        <div class="data-item">

            <span class="data-item-label">
                ${label}
            </span>

            <span class="data-item-value">
                ${value || "-"}
            </span>

        </div>

    `;
}


/* =====================================================
   ITEM DE FAMÍLIA
===================================================== */

function renderFamilyItem(ave, parentesco) {

    return `

        <div
            class="family-item"
            onclick="abrirAve('${ave.id}')"
        >

            <div class="family-avatar">

                ${sexoIcone(ave.sexo)}

            </div>


            <div class="family-info">

                <strong>
                    ${ave.nome}
                </strong>

                <span>

                    ${parentesco}

                    ·

                    Anilha:
                    ${ave.anilha}

                    ·

                    ${ave.cor}

                </span>

            </div>


            <span class="family-link">

                Ver →

            </span>

        </div>

    `;
}


/* =====================================================
   INICIALIZAÇÃO
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        renderGaiolas();

        renderAves();

    }
);