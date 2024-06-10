document.addEventListener('DOMContentLoaded', function() {
    const formacoes = [
        { curso: 'Análise e Desenvolvimento de Sistemas', instituicao: 'Estácio', anoConclusao: 'Previsão para junho de 2025', imagem: '../img/estacio.jpg' },
        { curso: 'Técnico em Logística', instituicao: 'SENAC', anoConclusao: 'Previsão para janeiro de 2025', imagem: '../img/senac.png' },
        { curso: 'Sistemas de Informação', instituicao: 'Universidade Estadual de Goiás / UEG', anoConclusao: 'Trancado no 6º período', imagem: '../img/ueg.jpeg' },
        { curso: 'Ensino Médio', instituicao: 'Colégio Estadual Sebastião Alves Ferreira', anoConclusao: 2014, imagem: '../img/cesaf.jpg' },
    ];

    const hardskills = [
        { nome: 'HTML', porcentagem: 90 },
        { nome: 'CSS', porcentagem: 75 },
        { nome: 'JavaScript', porcentagem: 70 },
        { nome: 'Excel', porcentagem: 80 },
        { nome: 'Análise de dados', porcentagem: 75 },
        { nome: 'Bancos de Dados', porcentagem: 35 },
        { nome: 'Redes', porcentagem: 45 },
        { nome: 'Power BI', porcentagem: 45 },
        { nome: 'Diagnóstico e Resolução de Problemas', porcentagem: 75 },
        { nome: 'Instalação e Configuração de equipamentos', porcentagem: 85 },
        { nome: 'Monitoramento e Manutenção Preventiva', porcentagem: 90 },
        { nome: 'Gestão de Incidentes', porcentagem: 80 },
        { nome: 'Suporte em projetos de IOT', porcentagem: 80 },
    ];

    const softskills = [
        'Comunicação eficaz',
        'Resolução de problemas',
        'Adaptabilidade',
        'Aprendizado Contínuo',
        'Pensamento crítico',
        'Empatia',
        'Criatividade e Inovação',
        'Gestão do Tempo',
        'Resiliência',
    ];

    const experienciasProfissionais = [
        { cargo: 'ANALISTA DE SUPORTE', empresa: 'TIVIT Terceirização de Processos, Serviços e Tecnologia', periodo: '03/05/2021 - Presente', localizacao: 'Mineiros, Goiás, Brasil', descricao: 'Responsável por receber e registrar chamados de usuários. Oferecer suporte técnico por telefone, e-mail ou pessoalmente. Analisar e identificar problemas em hardware, software e redes. Desenvolver soluções e implementar correções. Instalar, configurar e atualizar softwares e hardware. Oferecer treinamento básico aos usuários. Monitorar desempenho e realizar manutenção preventiva. Gerenciar incidentes e colaborar com outras equipes. Participar de projetos de atualização e propor melhorias. Garantir a segurança dos sistemas. Manter comunicação clara com usuários e equipes de TI. Manutenção preventiva de equipamentos de IoT.', imagem: '../img/tivit.jpeg' },
        { cargo: 'OPERADOR DE UTILIDADES', empresa: 'Atvos - UAE - Unidade Água Emendada', periodo: '01/09/2020 - 15/04/2021', localizacao: 'Mineiros, Goiás, Brasil', descricao: 'Responsável por monitorar constantemente os indicadores e controles para garantir operações dentro dos parâmetros seguros. Operar sistemas de tratamento de água, como desmineralizadores e osmose reversa. Identificar e resolver problemas operacionais. Diagnosticar falhas em equipamentos e sistemas e tomar ações corretivas.', imagem: '../img/atvos.png' },
        { cargo: 'OPERADOR DE ETA E OSMOSE', empresa: 'Vale do Verdão S.A - Açúcar e Álcool', periodo: '15/04/2019 - 27/08/2020', localizacao: 'Maurilândia, Goiás, Brasil', descricao: 'Responsável por monitorar constantemente os indicadores e controles para garantir operações dentro dos parâmetros seguros. Fazer inspeção dos equipamentos a fim de verificar qualquer anomalia, vazamento, ruído e vibração. Operar e inspecionar ETA e Osmose Reversa, controlar parâmetros físicos como pressão, níveis e vazão dos processos da ETA e Osmose Reversa.', imagem: '../img/valedoverdao.png' },
        { cargo: 'Auxiliar de Caldeiras', empresa: 'Vale do Verdão S.A - Açúcar e Álcool', periodo: '09/05/2018 - 16/11/2018', localizacao: 'Maurilândia, Goiás, Brasil', descricao: 'Realizar a limpeza nas áreas das caldeiras, auxiliar nas operações em campo das caldeiras. Auxiliar nas inspeções das esteiras do circuito de bagaço e nas manobras de válvulas de vapor e água.', imagem: '../img/valedoverdao.png' },
    ];

    const certificacoes = [
        { nome: 'GESTÃO DE INFRAESTRUTURA DE TI', instituicao: 'FIAP', qtdhoras: '20 hora(s)', caminhoArquivo: 'https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/32257/6736d9bb7488d95297910cbf2535aa27/certificado.png' },
        { nome: 'PYTHON', instituicao: 'FIAP', qtdhoras: '80 hora(s)', caminhoArquivo: 'https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/39342/f8f7d4fbfc03e43fb06bc8d9838fb1ac/certificado.png' },
        { nome: 'INOVAÇÃO PARA LÍDERES', instituicao: 'Alura', qtdhoras: '41 hora(s)', caminhoArquivo: 'https://cursos.alura.com.br/degree/certificate/ee1f8f79-2741-4aa0-897c-198a6132bda7' },
        { nome: 'C# E ORIENTAÇÃO A OBJETOS', instituicao: 'Alura', qtdhoras: '41 hora(s)', caminhoArquivo: 'https://cursos.alura.com.br/degree/certificate/55c1f2a3-8b3f-4aa0-99c1-ab12490ecd1e' },
        { nome: 'FRONT-END', instituicao: 'Alura', qtdhoras: '115 hora(s)', caminhoArquivo: 'https://cursos.alura.com.br/degree/certificate/c99e64af-7e39-4d63-a3ad-59fbd2b61ec0' },
        { nome: 'HTML E CSS', instituicao: 'Alura', qtdhoras: '66 hora(s)', caminhoArquivo: 'https://cursos.alura.com.br/degree/certificate/09e48528-dd2e-4302-a28b-85dd246d49a8' },
        { nome: 'Excel para Análise de Dados', instituicao: 'Preditiva', qtdhoras: '12 hora(s)', caminhoArquivo: 'https://automacoes.s3.amazonaws.com/certificados/qwxlc3nhbmrybybbbhzlcybkysbtawx2yq-0.pdf' },
        { nome: 'OPERADOR DE ESTAÇÃO DE TRATAMENTO DE ÁGUAS E EFLUENTES', instituicao: 'SENAI', qtdhoras: '167 hora(s)', caminhoArquivo: '../doc/CertificadoETA.pdf' },
        { nome: 'ANALISTA DE REDES EM COMPUTADORES', instituicao: 'SENAI', qtdhoras: '160 hora(s)', caminhoArquivo: '../doc/CertificadoRedes.pdf' },
        { nome: 'MECÂNICA INDUSTRIAL', instituicao: 'Unova Cursos', qtdhoras: '50 hora(s)', caminhoArquivo: 'https://www.unovacursos.com.br/certificados/9444401568575100202104' },
        { nome: 'Cultivo e Produção de Cana-de-açúcar', instituicao: 'SENAR/GOP', qtdhoras: '20 hora(s)', caminhoArquivo: '../doc/certificado-1c5b434a-95f0-4d47-97a9-5a5d95c417e1.pdf' },
        { nome: 'TECNOLOGIA DA INFORMAÇÃO E COMUNICAÇÃO', instituicao: 'SENAI', qtdhoras: '14 hora(s)', caminhoArquivo: '../doc/CertificadoTI.pdf' },
        { nome: 'SEMANA PYTHON NA PRÁTICA', instituicao: 'Empowerdata', qtdhoras: '8 hora(s)', caminhoArquivo: 'https://certificado.empowerdata.com.br/media/certificates/public/alessandro-alves-da-silva.png' },
    ];

    function criarListaDeItens(lista, elementoPaiId, templateFunction) {
        const elementoPai = document.getElementById(elementoPaiId);
        lista.forEach(item => {
            const itemElemento = document.createElement('li');
            itemElemento.innerHTML = templateFunction(item);
            elementoPai.appendChild(itemElemento);
        });
    }

    function formacaoTemplate(formacao) {
        return `
            <div class="conteudo borda">
                <img src="${formacao.imagem}" alt="${formacao.instituicao}">
                <div class="info">
                <h4>${formacao.curso}</h4>
                <p>Instituição:<strong> ${formacao.instituicao}</strong></p>
                <p>Ano de Conclusão:<strong> ${formacao.anoConclusao}</strong></p>
                </div>
            </div>
        `;
    }

    function hardSkillTemplate(habilidade) {
        return `
            <div class="habilidade">
                <h5>${habilidade.nome}</h5>
                <div class="nivel-conhecimento">
                    <div class="barra" style="width: ${habilidade.porcentagem}%;"></div>
                    <div class="porcentagem">${habilidade.porcentagem}%</div>
                </div>
            </div>
        `;
    }

    function softSkillTemplate(habilidade) {
        return `
            <div class="habilidade">
                <h4>${habilidade}</h4>
            </div>
        `;
    }

    function experienciaTemplate(experiencia) {
        return `
            <div class="conteudo borda">
                <img src="${experiencia.imagem}" alt="${experiencia.empresa}">
                <div class="info">
                    <h5>${experiencia.cargo}</h5>
                    <p><strong>${experiencia.empresa}</strong> | ${experiencia.periodo}</p>
                    <p><strong>${experiencia.localizacao}</strong></p>
                    <p>${experiencia.descricao}</p>
                </div>
            </div>
        `;
    }

    function certificacaoTemplate(certificacao) {
        return `
            <h4>${certificacao.nome}</h4>
            <p>Instituição:<strong> ${certificacao.instituicao}</strong></p>
            <p>${certificacao.qtdhoras}</p>
            <a href="${certificacao.caminhoArquivo}" class="btn-download" download="${certificacao.nome}.pdf">
                <button>Download Certificado</button>
            </a>
            <hr style="border-width: 5px;">
        `;
    }

    criarListaDeItens(formacoes, 'formacoes-lista', formacaoTemplate);
    criarListaDeItens(hardskills, 'hardskills-lista', hardSkillTemplate);
    criarListaDeItens(softskills, 'softskills-lista', softSkillTemplate);
    criarListaDeItens(experienciasProfissionais, 'experiencias-lista', experienciaTemplate);
    criarListaDeItens(certificacoes, 'certificacoes-lista', certificacaoTemplate);
});

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
