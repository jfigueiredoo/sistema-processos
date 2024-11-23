const data = {
    "Setor de Segurança": {
        "Gestor de SSO": {
            "Preenchimento de EPI e Aplicação dos Programas de SST": [
                "A01: Anualmente ou quando há demanda",
                "A02: Receber programas (PGR)",
                "A03: Receber ficha de EPI dos funcionários antecipadamente, via E-mail ou documento físico",
                "A04: Fazer análise de riscos da operação, a partir do documento anteriormente recebido",
                "A05: Auxiliar compra e receber programas de SST, podendo ser de contratos externos ou da própria empresa, dependendo dos riscos",
                "A06: Entender necessidades de enxoval para a equipe",
                "A07: Fazer entrega do enxoval (conjunto dos EPIs para o colaborador) no primeiro dia de trabalho",
                "A08: Preencher dados da ficha de EPI através da planilha do Excel",
                "A09: Enviar ficha de EPI's para gestor e funcionários via Teams ou E-Mail",
                "A10: Receber devolutiva da ficha de EPI assinada pelo colaborador via E-Mail ou Teams",
                "A11: Baixar ficha de EPIs já preenchida",
                "A12: Anexar ficha de EPIs juntamente com o CA na pasta no sistema",
                "A13: Conclusão do Preenchimento de EPI e Aplicação dos Programas de SST"
            ],
            "Atendimento aos Requisitos Legais SSO": [
                "A01: Mensalmente",
                "A02: Verificar requisitos legais",
                "A03: Atualizar planilha ou receber planilha atualizada",
                "A04: Verificar atendimento das leis",
                "A05: Está tudo atendendo às leis?",
                "Caso SIM: Ir para A06 e seguir leitura",
                "Caso NÃO: Voltar para A02 e seguir leitura",
                "A06: Monitorar atendimento das leis",
                "A07: Tudo certo no monitoramento?",
                "Caso SIM: Ir para A08 e finalizar processo",
                "Caso NÃO: Voltar para A04 e seguir leitura",
                "A08: Processo de Atendimento aos Requisitos Legais de SSO encerrado"
            ],
            "Fiscalizações de SST": [
                "A01: Diariamente",
                "A02: Fazer vistoria das instalações ou obras para verificar se as normas estão sendo seguidas, presencialmente",
                "A03: Tudo está dentro dos conformes?",
                "Caso SIM: Ir para A06 e finalizar processo",
                "Caso NÃO: Ir para A04 e seguir leitura",
                "A04: Gerar relatório para cada inconformidade detectada",
                "A05: Enviar relatório ao gestor do contrato/departamento, via Teams ou e-mail",
                "A06: Fiscalização finalizada"
            ],
            "Levantamento e Avaliação de Perigos e Riscos": [
                "A01: Anualmente ou quando necessário",
                "A02: Levantar e analisar os perigos e riscos do local de trabalho",
                "A03: Levantamento e avaliação de perigos e riscos encerrada" 
            ],
            "Manutenção do Escritório da Empresa": [
                "A01: Anualmente ou quando há necessidade",
                "A02: Realizar cronograma do ano",
                "A03: Realizar manutenção dos extintores de incêndio",
                "A04: Realizar análise da água",
                "A05: Realizar análise da qualidade do ar",
                "A06: Realizar manutenção e limpeza dos ar-condicionados",
                "A08: Trocar purificador de água",
                "A09: Realizar dedetização",
                "A10: Verificar laudo ergonômico dos escritórios",
                "A11: Realizar brigada",
                "A12: Levantar FDS",
                "A13: Manutenção do Escritório Encerrado"
            ],
            "Regularização da Brigada de Incêndios e Simulados": [
                "A01: Anualmente",
                "A02: Analisar documentação do abcb da rota de fuga e evacuação",
                "A03: Providenciar formação de brigada da empresa",
                "A04: Realizar treinos e simulados dentro da empresa",
                "A05: Processo de regularização da brigada de incêndios e simulados encerrado",
            ],
            "Treinamentos de Integração de Segurança": [
                "A01: Quando houver demanda ou quando houverem treinamentos previstos nos programas",
                "A02: Fornecer informações sobre dia e horário do treinamento para os colaboradores",
                "A03: Fornecer treinamento aos novos funcionários, de acordo com a necessidade, presencialmente ou via Teams",
                "A04: Recolher lista de presença",
                "A05: Emitir certificado de participação via formulário no PowerPoint",
                "A06: Enviar documento solicitando a assinatura do certificado para o gestor e setor de qualidade via E-Mail ou Teams",
                "A07: Aguardar assinatura do certificado",
                "A08: Entregar certificado ao colaborador que participou do treinamento presencialmente, caso solicitado",
                "A09: Arquivar certificado no sistema",
                "A10: Treinamentos de Segurança Encerrados"
            ]
        }
    },


    "Setor Comercial": {
        "Setor Comercial": {
            "Acompanhamento de Oportunidade": [
                "A01: Após entrega da proposta",
                "A02: A oportunidade é de iniciativa privada ou pública?",
                "Caso PRIVADA: Ir para A03 e pular para A12",
                "Caso PÚBLICA: Ir para A04 e seguir leitura",
                "A03: Iniciar negociação, podendo tratar de assuntos como redução de escopo, redução de valor e eliminação de risco",
                "A04: O processo é eletrônico?",
                "Caso SIM: Ir para A05 e seguir leitura",
                "Caso NÃO: Ir para A06 e seguir leitura",
                "A05: Acompanhar oportunidade através do portal ou plataforma",
                "A06: Acompanhar oportunidade via diário oficial e monitoramento junto à comissão de licitação por meio de ligações e e-mail",
                "A07: Verificar resultado da proposta",
                "A08: Verificar viabilidade de interpor algum recurso ou contrarrazão com jurídico, comercial, diretor da UN e CEO, conforme necessidade (té o quarto lugar teria o recurso)",
                "A09: Acompanhar decisão do recurso, se necessáriom em caso de interposição de recurso via plataforma necessária",
                "A10: Acompanhar resultado de homologação e adjudicação, caso não haja interposição de recurso",
                "A11: Verificar resultado final via plataforma, se necessário",
                "A12: A oportunidade foi ganha?",
                "Caso SIM: Ir para A15 e finalizar processo",
                "Caso NÃO: Ir para A13 e seguir leitura",
                "A13: Arquivar oportunidade no Pipeline e justificar",
                "A14: Continuar monitoramento do projeto para uma futura oportunidade de negócios",
                "A15: Acompanhamento finalizado"
            ],
            "Análise de Editais": [
                "A01: Após haver demonstração de interesse no edital",
                "A02: Criar uma pasta com histórico do projeto, na pasta dentro da rede com o edital, documentos, certidões e o que for relacionado ao edital",
                "A03: Inserir oportunidade no Pipeline",
                "A04: Aguardar análise crítica",
                "A05: Aguardar retorno de aprovação do Diretor Regional (tempo médio: 3 dias)",
                "A06: O edital foi aprovado?",
                "Caso SIM: Ir para A07 e pular pra A09",
                "Caso NÃO: Ir para A08",
                "A07: Realizar checklist antes da elaboração da proposta, usando formulário padrão conforme edital e Checklist (arquivo excel FO.CO.002_00 - Checklist documentos licitação)",
                "A08: Justificar 'No Go' no pipeline e arquivar",
                "A09: Análise de edital finalizada"
            ],
            "Atualização de Documentação": [
                "A01: Mensalmente",
                "A02: Abrir planilha 'Controle de documentação legal' de documentos legais via Excel dentro da rede de documentos da empresa",
                "A03: Realizar análise de documentação legal",
                "A04: Atualizar informações relacionadas à documentação",
                "A05: Atualização encerrada"
            ],
            "Captação de Oportunidade de Licitação": [
                "A01: Diariamente",
                "A02: Buscar licitações e editais (conforme a atividade da empresa, modalidades, região de atuação, valores acima de R$ 1 milhão)",
                "A03: Escolher editais",
                "A04: Baixar editais na pasta compartilhada - pelo SharePoint, sincronizado pelo OneDrive, com todos os documentos e informações disponibilizadas",
                "A05: Resumir oportunidade (modalidade, órgão, prazos de execução, participação de consórcio, datação orçamentária, recursos necessários, etc.)",
                "A06: Enviar documento para os coordenadores das unidades de negócio e para o setor comercial, junto com os arquivos do edital (projetos, supervisão de obras) por e-mail",
                "A07: Aguardar retorno de demonstração de interesse (tempo médio: 3 dias)",
                "A08: Receber retorno por e-mail",
                "A09: Houve manifestação de interesse da oportunidade?",
                "Caso SIM: Ir para A11 e finalizar processo",
                "Caso NÃO: Ir para A10 e seguir leitura",
                "A10: Acessar Pipeline para justificar NO GO e arquivar oportunidade",
                "A11: Captação finalizada"
            ],
            "Elaboração da Proposta": [
                "A01: Após 'GO' da análise do edital",
                "A02: Definir responsabilidades e prazos responsáveis pela proposta e setor comercial",
                "A03: Coordenar a elaboração da proposta técnica junto à Diretoria Regional",
                "A04: Elaborar e verificar habilitação e proposta comercial",
                "A05: Enviar mensagem solicitando documentação necessária para composição da proposta via Teams ou e-mail",
                "A06: Realizar reunião com a Diretoria Regional para dividir proposta comercial, levantando previsibilidade de fluxo de caixa dos primeiros 3 meses da proposta",
                "A07: Apresentar proposta para obter aprovação do CEO caso valor seja acima de R$ 2 milhões",
                "A08: Obteve-se autorização para o envio da proposta?",
                "Caso SIM: Ir para A10 e seguir leitura",
                "Caso NÃO: Ir para A09 ir finalizar processo na A14",
                "A09: Arquivar no pipeline",
                "A10: Entregar proposta digitalmente ou fisicamente",
                "A11: Acompanhar oportunidade",
                "A12: Vencemos?",
                "Caso SIM: Ir para A15 e seguir leitura",
                "Caso NÃO: Ir para A13 finalizar processo na A14",
                "A13: Arquivar no pipeline",
                "A14: Processo cancelado",
                "A15: Realizar adjudicação",
                "A16: Assinar contrato",
                "A17: Contratar seguro caso necessário",
                "A18: Abrir centro de custo",
                "A19: Informar ao diretor regional e setor de qualidade que o centro de custo foi aberto, via Teams ou e-mail",
                "A20: Aguardar setor de qualidade enviar pasta de centro de custo",
                "A21: Aguardar setor de qualidade incluir todo histórico comercial na pasta",
                "A22: Participar da reunião de handover",
                "A23: Processo de elaboração da proposta finalizado"
            ],
            "Substituição de Profissionais de Contrato Vigente": [
                "A01: Quando há necessidade",
                "A02: Receber solicitação do setor de gestão de contratos por e-mail, com exigência de uma mudança de acervo técnico do projeto",
                "A03: Analisar exigência do edital (pasta 'proposta de licitação que participaram') sincronizada pelo OneDrive no computador",
                "A04: Buscar profissional no quadro técnico atual pelo SharePoint, sincronizado pelo OneDrive",
                "A05: Existe profissional na equipe atual da empresa?",
                "Caso SIM: Ir para A06 e finalizar processo no A08",
                "Caso NÃO: Ir para A07 e finalizar processo no A08",
                "A06: Enviar documento para o demandante com o novo acervo técnico, por e-mail",
                "A07: Repassar informação para o setor de Recursos Humanos para recrutamento e seleção do novo profissional, por e-mail",
                "A08: Substituição de profissional finalizada"
            ]
        }
    },


    "Setor de Planejamento": {
        "Setor de Planejamento": {
            "Assessoria nos Planejamentos dos Contratos": [
                "A01: Quando há necessidade",
                "A02: Alinhar com os gestores de contrato para verificar se há alguma necessidade, por reunião, e-mail ou pessoalmente",
                "A03: O gestor possui alguma necessidade?",
                "Caso SIM: Ir para A05 e seguir leitura",
                "Caso NÃO: Ir para A04 e finalizar processo",
                "A04: Assessoria cancelada",
                "A05: Entender a necessidade",
                "A06: Entrar em contato com o setor necessário explicando a situação, pelo Teams ou e-mail",
                "A07: Monitorar situação, entrando em contato com o setor ou gestor, por Teams ou e-mail",
                "A08: Abordar situação na reunião de Project Review",
                "A09: Assessoria finalizada"
            ],
            "Atualização de Status dos Contratos": [
                "A01: Mensalmente",
                "A02: Solicitar atualização TAP com informações dos contratos para os gestores",
                "A03: Receber atualização TAP com informações dos contratos dos gestores",
                "A04: Atualizar arquivos 'Contratos Estratégica' e 'Controle Administrativo'",
                "A05: Salvar nova planilha na pasta 'Planejamento' no Teams",
                "A06: Comunicar à controladoria, pelo Teams, que a planilha atualizada está na pasta",
                "A07: Processo de atualização de status dos contratos encerrado"
            ],
            "Coleta de Dados Profissionais e Despesas": [
                "A01: No quinto dia útil do mês",
                "A02: Solicitar ao coordenador de TI o relatório do sistema referente ao mês anterior, via Teams",
                "A03: Receber informações do sistema",
                "A04: Atualizar todos os planejamento dos contratos com informações recebidas",
                "A05: Fazer análise entre informações previstas nos planejamentos e informações realizados",
                "A06: Abrir pasta de gestão de contratos",
                "A07: Descrever análise no planejamento",
                "A08: Comunicar aos gestores que as informações estão atualizadas via e-mail",
                "A09: Realizar reunião de alinhamento dos devios das informações",
                "A10: Há informações alocadas de forma correta?",
                "Caso SIM: Ir para A11 e seguir leitura",
                "Caso NÃO: Ir para A14 e seguir leitura",
                "A11: Ajustar as informações na planilha de planejamento",
                "A12: Informar aos setores envolvidos que as informações foram ajustadas",
                "A13: Enviar para as diretorias com cópia para o gestor, via e-mail",
                "A14: Salvar planilha quando estiver organizada, na pasta 'APRORA' no Teams",
                "A15: Há necessidade de replanejar o contrato nos meses seguintes?",
                "Caso SIM: Ir para A16 e finalizar processo em A17",
                "Caso NÃO: Ir para A17 e finalizar processo",
                "A16: Replanejar na planilha de planejamento",
                "A17: Coleta de dados encerrada"
            ],
            "Encerramento dos Contratos": [
                "A01: Quando as atividades técnicas são encerradas",
                "A02: Prestar suporte ao encerramento contábil do contrato aos gestores, com checklist, via e-mail",
                "A03: Monitorar e controlar se o encerramento dos contratos foi comunicado aos setores financeiro, RH, operacional, qualidade, jurídico e administrativo, via e-mail",
                "A04: Enviar para gestor os contratos",
                "A05: Solicitar encerramento do centro de custos na contabilidade, via e-mail",
                "A06: Enviar para planejamento",
                "A07: Receber do gestor",
                "A08: Comunicar ao gestor por e-mail sobre o encerramento do contrato",
                "A09: Revisar e adicionar na pasta de contratos encerrados",
                "A10: Solicitar backup ao TI",
                "A11: Encerramento dos contratos finalizado"
            ],
            "Previsão de Despesas e Receitas dos Contratos Ativos": [
                "A01: Mensalmente",
                "A02: Abrir pasta com todos os contratos ativos",
                "A03: Atualizar a planilha de planejamento financeiro da receita e despesa",
                "A04: Salvar a planilha na pasta de planejamento",
                "A05: Enviar a planilha para os diretores, por e-mail",
                "A06: O diretor tem alguma dúvida?",
                "Caso SIM: Ir para A07",
                "Caso NÃO: Ir para A08 e finalizar processo",
                "A07: Marcar reunião para tirar as dúvidas",
                "A08: Previsão Encerrada"
            ]
        }
    },


    "Setor Administrativo e Financeiro": {
        "Analista Administrativo e Financeiro Pleno": {
            "Atendimento de Demanda de Informações Financeiras": [
                "A01: Quando há demanda",
                "A02: Receber solicitação em reunião, por e-mail ou pelo chat do Teams",
                "A03: Precisa formalizar a solicitação?",
                "Caso SIM: Ir para A05 e seguir leitura",
                "Caso NÃO: Ir para A04 e finalizar processo em A09",
                "A04: Responder solicitação por onde a recebeu",
                "A05: Pedir ao solicitante que formalize a demanda por e-mail",
                "A06: Analisar a ordem de prioridade",
                "A07: Atender com a ferramenta que julga mais efetiva para solicitação",
                "A08: Responder ao solicitante informando que a demanda foi atendida",
                "A09: Atendimento finalizado"
            ],
            "Processamento de Pagamento de Demandas Específicas": [
                "A01: Quando há necessidade",
                "A02: Analisar se a equipe consegue fazer a inclusão de todos os pagamentos",
                "A03: A equipe financeiro consegue fazer todos os pagamentos sozinha?",
                "Caso SIM: Ir para A04 e finalizar processo",
                "Caso NÃO: Ir para A05 e seguir leitrura",
                "A04: Processamento cancelado",
                "A05: Identificar o pagamento e o seu tipo via TOTVS",
                "A06: Acessar banco via internet",
                "A07: Realizar pagamento",
                "A08: Fazer baixa de pagamento no TOTVS",
                "A09: Baixar comprovante de pagamento",
                "A10: Colocar comprovante no TOTVS",
                "A11: Processamento finalizado"
            ],
            "Proposição de Pagamentos": [
                "A01: Segunda, quarta e sexta",
                "A02: Atualizar relatórios via TOTVS, com participação do Setor Comercial",
                "A03: Classificar despesas na planilha, juntamente com o Setor Comercial",
                "A04: Entender o que o Operacional tem como prioridade de pagamento durante reunião entre a Equipe Financeira",
                "A05: Participar da reunião com a Diretoria",
                "A06: Elaborar proposição de pagamento",
                "A07: Apresentar proposição na reunião semanal",
                "A08: Receber devolutiva do que vai ser pago ou não",
                "A09: Proposição de pagamento encerrada"
            ],
            "Realizar Análise de Conciliação": [
                "A01: Após baixa no sistema",
                "A02: Acessar TOTVS",
                "A03: Gerar e acompanhar extrato no TOTVS",
                "A04: Acessar contas bancárias",
                "A05: Acessar extrato dos bancos",
                "A06: Contatar Analista Financeiro para marcar conciliação",
                "A07: Realizar conciliação do TOTVS com saldos bancários com o Analista Financeiro via Teams",
                "A08: Tudo certo na conciliação?",
                "Caso SIM: Ir para A10 e finalizar processo",
                "Caso NÃO: Ir para A09 e finalizar processo em A10",
                "A09: Resolver assunto internamente",
                "A10: Conciliação encerrada"
            ],
            "Reunião com Equipe Financeira (Diretoria e Operacional)": [
                "A01: Diariamente",
                "A02: Participar da reunião levando algumas pautas a serem discutidas, via Teams",
                "A03: Discutir pautas em reunião",
                "A04: Reunião finalizada"
            ],
            "Reunião com Equipe Financeira (Lideranças)": [
                "A01: Diariamente",
                "A02: Participar da reunião levando algumas pautas a serem discutidas, via Teams",
                "A03: Discutir pautas na reunião",
                "A04: Reunião finalizada"
            ],
            "Reunir Comprovantes de Pagamentos da Semana": [
                "A01: Uma vez por semana",
                "A02: Acessar bancos para coletar comprovantes por dia",
                "A03: Salvar comprovantes",
                "A04: Colocar comprovantes de pagamento na pasta do financeiro 'Comprovante de Pagamento', no Teams",
                "A05: Reunião de comprovantes finalizada"
            ],
            "Verificação de Pagamentos a Receber pelas Contas Bancárias": [
                "A01: Diariamente",
                "A02: Verificar as contas bancárias",
                "A03: Identificar pagamentos do dia anterior",
                "A04: Informar pagamentos recebidos no dia atual para líder do financeiro, no chat da reunião da diretoria financeira",
                "A05: Atualizar planilha de fluxo que está na pasta do financeiro, no Teams",
                "A06: Realizar baixa no TOTVS, identificando quitação da respectiva nota",
                "A07: Verificação encerrada"
            ]
        },
        "Auditor Interno": {
            "Auditoria Anual": [
                "A01: Anualmente",
                "A02: Analisar demonstrações contábeis (Bal, DRE, Fluxo de caixa e Mutações de Patrimônio Líquido) ",
                "A03: Contratar auditoria externa para Plano de trabalho; Discussão das informações apuradas; Gestão dos ajustes para atendimento às normas de conformidade; Prestação de esclarecimentos e gestão de possibilidades e ressalvas",
                "A04: Analisar lançamentos e registros contábeis: Apuração de resultado; Instrumentos financeiros (Consórcios); Caixa e equivalentes de caixa; Investimentos nas sucursais (Angola, CL, Bolívia, Mind); Imobilizados e intangíveis; Demais ativos circulantes e não circulantes; Obrigações com fornecedores, sociais e tributárias, e as demais obrigações; Contribuição social e imposto de renda; Provisões (legais e contingências); Ajuste a valor presente nos ativos e passivos; Novas normas e interpretações vigentes e não vigentes.",
                "A05: Levantar ativos contratuais: Backlog; Mediações a faturar; Contas a receber (Interface com os Gestores)",
                "A06: Realizar provisões para perdas esperadas de créditos de liquidação duvidosa",
                "A07: Realizar mensuração e reconhecimento de ativos e passivos de contratos a executar; Retirada de ativos e passivos finalizados em definitivo.",
                "A08: Revisar adiantamentos: Retenções contratuais; Resolução para efetivação das baixas parciais, ativo e passivo",
                "A09: Analisar tributos a compensar: Base faturamento / retenção nacional e exportação",
                "A10: Analisar ativo circulante: Adiantamentos para execução de obras e projetos em consórcio; Efeito reversão do investimento em despesas e resultados operacionais",
                "A11: Analisar empréstimo de mútuo: Análise dos instrumentos; Análise das regras e recolhimento dos tributos envolvidos",
                "A12: Calcular receita operacional liquida",
                "A13: Levantar custos dos serviços e despesas administrativas",
                "A14: Analisar receitas e despesas financeiras",
                "A15: Executar gestão de riscos financeiros",
                "A16: Analisar simulação de resultados e efeitos nos indices de performance; Análise de alternativas de otimização; Apresentação para admnistrador da empresa; Aprovação para fechamento pelo administrador; Relação dos pontos críticos verificados",
                "A17: Encerrar auditoria externa: Apresentação do relatório; Discussão e análise das ressalvas apontadas; Análise das recomendações; Entrega do relatório final",
                "A18: Auditoria Anual Finalizada"
            ],
            "Auditoria Mensal": [
                "Esperar validação"
            ]
        },
        "Auxiliar Administrativo": {
            "Envio de Comprovantes de Pagamentos": [
                "A01: Quando há necessidade",
                "A02: Receber solicitação dos comprovantes via E-mail ou Teams",
                "A03: Verificar se tem acesso aos comprovantes",
                "Se SIM: Prosseguir para A04 e pular para A07",
                "Se NÃO: Prosseguir para A05 e seguir leitura",
                "A04: Buscar comprovantes na pasta de comprovantes do Teams ou no Itaú na parte de comprovantes",
                "A05: Comunicar ao Analista Administrativo ou à equipe para solicitar os comprovantes via E-mail ou Teams",
                "A06: Receber comprovantes pelo E-mail ou Teams",
                "A07: Baixar comprovantes",
                "A08: Enviar comprovantes para o solicitante via E-mail ou Teams",
                "A09: Envio de comprovantes finalizado"
            ],
            "Lançamento de Aportes para Pagamento": [
                "A01: Mensalmente",
                "A02: Receber aportes e documentação contábil via HelpDesk",
                "A03: Baixar documentações",
                "A04: Conferir aportes e verificar se está tudo de acordo com a documentação de apoio (balanço e documentações necessárias)",
                "A05: Tem alguma inconformidade com os aportes?",
                "Se SIM: Prosseguir para A06 e seguir leitura",
                "Se NÃO: Prosseguir para A08 e seguir leitura",
                "A06: Devolver aporte para o solicitante via HelpDesk",
                "A07: Receber aporte ajustado via HelpDesk",
                "A08: Lançar aportes no TOTVS em faturas",
                "A09: É um novo aporte?",
                "Se SIM: Prosseguir para A10 e seguir leitura",
                "Se NÃO: Prosseguir para A11 e seguir leitura",
                "A10: Realizar cadastro no TOTVS",
                "A11: Arquivar aporte na pasta 'lançados' no Teams",
                "A12: Lançamento de aportes finalizado"
            ],
            "Lançamento de RPA": [
                "A01: Quando há necessidade",
                "A02: Receber RPA via HelpDesk",
                "A03: Baixar RPA acusando recebimento",
                "A04: Conferir RPA",
                "A05: Há alguma inconformidade com o RPA?",
                "Se SIM: Prosseguir para A06 e seguir leitura",
                "Se NÃO: Prosseguir para A08 e seguir leitura",
                "A06: Devolver RPA para o solicitante realizar as correções via HelpDesk",
                "A07: Receber RPA corrigido pelo HelpDesk",
                "A08: Abrir TOTVS",
                "A09: Lançar RPA no TOTVS, em 'Pessoa Física'",
                "A10: É uma nova PF?",
                "Se SIM: Prosseguir para A11 e seguir leitura",
                "Se NÃO: Prosseguir para A12 e seguir leitura",
                "A11: Realizar cadastro no TOTVS",
                "A12: Arquivar RPAs na pasta 'lançados' no Teams, respeitando as devidas datas do financeiro",
                "A13: Lançamento de RPA finalizado"
            ],
            "Lançamento dos CREA's e ART's": [
                "A01: Às segundas-feiras",
                "A02: Receber documentações pelo HelpDesk",
                "A03: Baixar documentações acusando recebimento",
                "A04: Conferir documentações e verificar se o engenheiro é elegível para que se possa efetuar o pagamento",
                "A05: Abrir TOTVS",
                "A06: Fazer lançamento para próxima data de pagamento",
                "A07: Arquivar documentações na pasta 'lançados' no Teams",
                "A08: Lançamento finalizado"
            ],
            "Prestação de Contas de Viagens": [
                "A01: Após colaborador voltar da viagem",
                "A02: Receber formulário de solicitação de viagem preenchido, assinado pelo gestor e superior imediato via sistema (em até 15 dias)",
                "A03: Analisar documentos recebidos",
                "A04: Há alguma inconformidade com os documentos",
                "Caso SIM: Ir para A05 e seguir leitura",
                "Caso NÃO: Ir para A07 e seguir leitura",
                "A05: Cobrar correção da informidade para o colaborador, via sistema",
                "A06: Houve alguma rejeição?",
                "Caso SIM: Retornar para A02 e seguir leitura",
                "Caso NÃO: Ir para A07 e seguir leitura",
                "A07: Realizar prestação de conta para fechar solicitação",
                "A08: Lançar prestação de contas no sistema",
                "A09: Arquivar prestação de contas na pasta de 'Lançados' no sistema",
                "A10: Processo finalizado"
            ],
            "Prestação de Conta Referente ao Adiantamento de Fundo Fixo": [
                "A01: Mensalmente",
                "A02: Receber prestação de contas via sistema, assinada pelo gestor e superior imediato",
                "A03: Acusar recebimento no sistema",
                "A04: Baixar prestação de contas",
                "A05: Conferir prestação de contas",
                "A06: Houve alguma dúvida ou divergência?",
                "Caso SIM: Ir para A07 e seguir leitura",
                "Caso NÃO: Ir para A09 e seguir leitura",
                "A07: Sanar dúvidas e divergências com o solicitante via sistema",
                "A08: Houve alguma rejeição?",
                "Caso SIM: Voltar para A02 e seguir leitura",
                "Caso NÃO: Ir para A09 e seguir leitura",
                "A09: Lançar no sistema como prestação de contas",
                "A10: O colaborador gastou além do fundo fixo?",
                "Caso SIM: Ir para A11 e seguir leitura",
                "Caso NÃO: Ir para A12 e seguir leitura",
                "A11: Solicitação de reembolso",
                "A12: Repor fundo fixo pelo sistema",
                "A13: Prestação de conta finalizada"
            ],
            "Solicitação de Reembolsos": [
                "A01: Quando algum colaborador preencher formulário de reembolso",
                "A02: Receber formulário de reembolso via Helpdesk junto com os comprovantes e assinado pelo gestor do contrato",
                "A03: Conferir solicitação",
                "A04: Há alguma inconformidade com a solicitação?",
                "Caso SIM: Ir para A05 e seguir leitura",
                "Caso NÃO: Ir para A06 e seguir leitura",
                "A05: Sanar dúvidas da inconformidade da solicitação com o colaborador",
                "A06: Lançar como pagamento para o respectivo colaborador no TOTVS, preenchendo todas as informações necessárias",
                "A07: Arquivar na pasta de 'lançados' no Teams",
                "A08: Solicitação finalizada"
            ]
        },
        "Consultor Financeiro": {
            "Acompanhamento de Relatórios Contábeis, Financeiros, de Performance e Controladoria": [
                "A01: Mensalmente",
                "A02: Analisar a situação financeira",
                "A03: Discutir situação com o setor comercial, pelo Teams",
                "A04: Realizar reunião com CEO, diretoria regional e time financeiro para analisar se indicadores e metas estão sendo atingidos, pelo Teams ou pessoalmente",
                "A05: Informar a situação financeira da empresa para o CEO, pelo Teams",
                "A06: Acompanhamento finalizado"
            ],
            "Reunião de Planejamento de Fluxo de Caixa (Geral e Diretoria)": [
                "A01: Segundas, quartas e sextas-feiras",
                "A02: Verificar lançamentos de tudo relacionado a pagamentos nos sistemas TOTVS e HD",
                "A03: Entender prioridades de pagamento dos diretores, a fim de agilizar os pagamentos mais urgentes via Teams ou pessoalmente",
                "A04: Receber lista de prioridades de pagamento, enviada pela diretoria via Teams ou e-mail",
                "A05: Abrir lista no Excel",
                "A06: Enviar cobrança sobre atualização do recebimento e resolução de faturamento da semana via e-mail",
                "A07: Realizar proposta de pagamento, listando os valores",
                "A08: Preencher planilha com os pagamentos a serem efetuados no Excel",
                "A09: Enviar ao CEO via Teams",
                "A10: Há alguma coisa para corrigir na proposta?",
                "Caso SIM: Ir para A12 e seguir leitura",
                "Caso NÃO: Ir para A11 e finalizar processo em A15",
                "A11: Efetuar pagamentos após aprovação do CEO",
                "A12: Discutir qual será o encaminhamento para resolver o problema",
                "A13: Reenviar para o CEO via Teams",
                "A14: Efetuar pagamentos após aprovação do CEO",
                "A15: Planejamento finalizado"
            ],
            "Reunião do Financeiro com Operacional em Situações de Crise de Liquidez": [
                "A01: Diariamente",
                "A02: Abrir reunião pelo Teams às 9 horas da manhã",
                "A03: Apresentar e discutir a situação financeira atual da empresa",
                "A04: Receber lista de prioridades de pagamento pelo Teams ou e-mail",
                "A05: Cobrar atualização de recebimentos e previsão de faturamento da semana",
                "A06: Entender riscos da operação a partir da visão do operacional",
                "A07: Discutir assuntos gerais acerca do financeiro e operacional",
                "A08: Reunião finalizada"
            ]
        }
    },


    "Setor de Administrativo e Compras": {
        "Analista Administrativo Júnior": {
            "Inclusão de Contrato no Sistema": [
                "A01: Quando recebe a nota pelo HelpDesk ou quando o contrato é finalizado no GED",
                "A02: Abrir sistema",
                "A03: Baixar nota correspondente ao contrato que foi finalizado",
                "A04: Realizar baixa no GED, se necessário",
                "A05: Abrir TOTVS",
                "A06: Inserir contrato no sistema com todas as informações necessárias",
                "A07: Realizar faturamento das medições",
                "A08: Processo de inclusão de contratos finalizado"
            ],
            "Lançamento de Notas e Faturas dos Fornecedores": [
                "A01: Diariamente",
                "A02: Acessar helpdesk",
                "A03: Receber notas e faturas através do helpdesk",
                "A04: Baixar notas e faturas em PDF",
                "A05: Abrir Teams",
                "A06: Inserir notas e faturas na pasta de lançamentos pendentes do financeiro (pasta do Teams)",
                "A07: Abrir TOTVS",
                "A08: Inserir informações das notas e faturas no sistema",
                "A09: Consultar CNPJ na nota fiscal",
                "A10: Abrir sites da fazenda e site do CEPON",
                "A11: Fazer consulta do CNPJ em ambos os sites",
                "A12: Verificar se vai haver retenção ou não nos impostos",
                "A13: Vai haver retenção?",
                "Caso SIM: Ir para A14 e seguir leitura",
                "Caso NÃO: Ir para A19 e seguir leitura",
                "A14: Realizar ajustes necessários no TOTVS",
                "A15: Surgiu alguma dúvida com relação a retenção ou notas e faturas?",
                "Caso SIM: Ir para A16 e seguir leitura",
                "Caso NÃO: Ir para A19 e seguir leitura",
                "A16: Receber dúvida sobre a retença2o ou notas e faturas, por E-mail ou teams",
                "A17: Analisar dúvida",
                "A18: Enviar devolutiva pelo E-mail ou teams, respondendo a dúvida",
                "A19: Mover notas e faturas para pasta 'Lançados' no teams",
                "A20: Lançamento finalizado",
            ],
            "Realizar Faturamento das Medições": [
                "A01: Ao incluir um contrato no TOTVS",
                "A02: Acessar TOTVS",
                "A03: Realizar faturamento das medições pelo TOTVS",
                "A04: Faturamento finalizado"
            ],
            "Revisão das Notas de Fornecedores": [
                "A01: No início do mês",
                "A02: Receber solicitação ou dúvida do setor contábil, via e-mail",
                "A03: Solicitar formalização, se necessário, por e-mail",
                "A04: Analisar solicitação ou dúvida",
                "A05: Consultar Setor Financeiro pelo Teams",
                "A06: Qual tipo de problema?",
                "Caso NOTA LANÇADA: Ir para A07, seguir para A08 e depois pular para A16",
                "Caso NOTA QUE NÃO FOI LANÇADA: Ir para A09 e seguir leitura",
                "A07: Abrir TOTVS",
                "A08: Fazer ajuste no TOTVS",
                "A09: Entrar em contato com o gestor para saber se é para cancelar ou lançar, via Teams ou E-mail",
                "A10: O que é para fazer com a nota?",
                "Caso CANCELAR: Ir para A13 e seguir leitura",
                "Caso LANÇAR: Ir para A11, seguir para A12 e pular para A16",
                "A11: Lançar notas e faturas dos fornecedores",
                "A12: Avisar setor contábil que a nota foi lançada por email ou WhatsApp",
                "A13: Entrar em contato com o gestor para que ele solicite cancelamento pelo Teams ou E-mail",
                "A14: Fazer consulta no site da prefeitura com data e verificar se a nota foi cancelada",
                "A15: Avisar setor contábil que a nota foi cancelada, por e-mail",
                "A16: Processo de cancelamento de nota finalizado"
            ]
        },
        "Auxiliar Administrativo": {
            "Análise de Contrato de Aluguel": [
                "A01: Quando há um novo contrato de aluguel",
                "A02: Acessar HelpDesk",
                "A03: Receber recibo de aluguel, juntamente com o contrato, pelo HelpDesk",
                "A04: Acessar GED",
                "A05: Pesquisar CPF/CNPJ do fornecedor",
                "A06: Verificar se o contrato de aluguel está vigente",
                "A07: Teve algum erro?",
                "Caso SIM: Ir de A08 até A10 e retornar para A06",
                "Caso NÃO: Ir para A11 e seguir leitura",
                "A08: Enviar e-mail para quem chamou, apontando o erro",
                "A09: Aguardar retorno",
                "A10: Receber contrato revisado, por e-mail",
                "A11: Acessar TOTVS",
                "A12: Clicar no campo de contratos",
                "A13: Fazer cadastro no TOTVS do novo contrato de aluguel",
                "A14: Fazer previsões no TOTVS",
                "A15: Fazer lançamento no TOTVS desse contrato de aluguel",
                "A16: Baixar contrato de aluguel no GED em PDF",
                "A17: Inserir contrato de aluguel na pasta 'Controle de Aluguel de Imóveis' no OneDrive",
                "A18: Análise de Contrato finalizada"
            ],
            "Lançamento de Notas e Faturas de Imóveis e Outros": [
                "A01: Diariamente",
                "A02: Acessar HelpDesk",
                "A03: Receber notas e faturas através do HelpDesk",
                "A04: Baixar notas e faturas em PDF",
                "A05: Inserir notas e faturas na pasta lançamentos pendentes do financeiro,em pasta no Teams",
                "A06: Abrir sistema TOTVS",
                "A07: Inserir informações das notas e faturas no TOTVS",
                "A08: Mover notas e faturas para pasta lançados na pasta 'Arquivos Lançados' no Teams",
                "A09: Surgiu alguma dúvida com relação às notas e faturas?",
                "Caso SIM: Ir para A10 e seguir leitura",
                "Caso NÃO: Ir para A20 e finalizar processo",
                "A10: Receber mensagem do setor financeiro com dados do fornecedor, pelo Teams",
                "A11: Enviar mensagem com a pessoa que abriu o chamado pelo Teams para esclarecer dúvida",
                "A12: Qual tipo de problema?",
                "Caso BOLETO: Ir para A16 e seguir leitura",
                "Caso NOTA: Ir de A13  até A15 e pular para A19",
                "A13: Aguardar solicitante entrar em contato com fornecedor",
                "A14: Receber nota de correção pelo Teams",
                "A15: Enviar para o setor financeiro nota corrigida pelo Teams",
                "A16: Aguardar solicitante pedir novo boleto",
                "A17: Receber o novo boleto pelo Teams",
                "A18: Enviar pro setor financeiro, pelo Teams o novo boleto",
                "A19: Inserir arquivo na pasta 'Arquivos Lançados' no Teams",
                "A20: Processo finalizado"
            ],
            "Lançamento de Despesas de Imóveis": [
                "A01: Após o recebimento das despesas do imóvel",
                "A02: Receber fatura referente a algum contrato de aluguel de imóvel pelo HelpDesk",
                "A03: Colocar fatura na pasta de lançamentos pendentes do financeiro em pasta no Teams",
                "A04: Abrir sistema TOTVS",
                "A05: Identificar contrato ao qual a fatura pertence",
                "A06: Identificar despesas da fatura no sistema TOTVS, selecionando o item no respectivo contrato",
                "A07: Fazer lançamento da fatura, baixando a previsão da respectiva despesa no TOTVS",
                "A08: Mover lançamentos para a pasta 'Arquivos lançados' no Teams",
                "A09: Itens adicionados dentro do contrato"
            ],
            "Realização de Cadastro de Cliente e Fornecedor": [
                "A01: Quando há necessidade",
                "A02: Receber do financeiro o cartão CNPJ, via Teams",
                "A03: Acessar TOTVS",
                "A04: O cliente ou fornecedor está no TOTVS?",
                "Caso SIM: Ir para A05 e pular para A11",
                "Caso NÃO: Ir para A06 e seguir leitura",
                "A05: Atualizar informações do cliente ou fornecedor, se necessário",
                "A06: Verificar se o fornecedor ou cliente está ativo pelo cartão CNPJ",
                "A07: Clicar em novo cadastro",
                "A08: Clicar em cliente/fornecedor",
                "A09: Realizar cadastro no TOTVS",
                "A10: Informar ao solicitante que o fornecedor/cliente já está cadastrado no TOTVS, por mensagem no Teams",
                "A11: Realização de Cadastro de Cliente e Fornecedor Finalizado"
            ],
            "Recebimento de Demonstrativo de Pagamento dos Correios": [
                "A01: No final do mês",
                "A02: Receber demonstrativo de pagamento dos correios por E-mail",
                "A03: Realizar comparação do demonstrativo com a planilha de controle de materiais enviados pelos correios",
                "A04: Realizar rateio por centro de custos, junto da nota, por planilha no Excel",
                "A05: Inserir planilha do rateio no Drive",
                "A06: Realizar lançamento de fatura no TOTVS",
                "A07: Recebimento de Demonstração de Pagamento nos Correios Encerrada"
            ],
            "Solicitação de Envio de Material pelo Correios": [
                "A01: Quando há demanda",
                "A02: Receber solicitação de coleta de material, pessoalmente ou pelo Teams",
                "A03: Pode ser enviado pelos correios?",
                "Caso SIM: Ir para A07 e seguir leitura",
                "Caso NÃO: Ir para A04 e seguir leitura",
                "A04: Informar que os correios não se responsabilizam por danos ou perda caso o material seja frágil, pessoalmente ou pelo Teams",
                "A05: Vai ser enviado pelos correios mesmo assim?",
                "Caso SIM: Ir para A07 e seguir leitura",
                "Caso NÃO: Ir para A06 e finalizar processo",
                "A06: Solicitação cancelada",
                "A07: Embalar material",
                "A08: Receber centro de custos do solicitante, pessoalmente ou pelo Teams",
                "A09: Receber endereço de destino do solicitante, pessoalmente ou pelo Teams",
                "A10: Informar aos correios que o material já está embalado, por ligação ou por mensagem no WhatsApp dos Correios",
                "A11: Aguardar chegar alguém dos correios para buscar o material",
                "A12: Entregar material para funcionários dos Correios",
                "A13: Preencher planilha de controle de materiais enviados pelos Correios, com código de rastreio, valor da entrega e data de coleta do material",
                "A14: Solicitação finalizada"
            ]
        },
        "Setor Administrativo": {
            "Ajustes de Quilometragem": [
                "A01: Quando há necessidade",
                "A02: Receber solicitação do condutor ou administrativo pelo HelpDesk",
                "A03: Receber informações do veículo (Placa, Quilometragem errada e Quilometragem a ser ajustada), pelo HelpDesk",
                "A04: Realizar ajuste no site Ticket Log",
                "A05: Finalizar chamado no HelpDesk",
                "A06: Ajuste de Quilometragem Encerrada"
            ],
            "Alteração do Condutor Principal de Veículos Locados": [
                "A01: Quando houver necessidade",
                "A02: Receber solicitação de alteração, do setor Administrativo, no HelpDesk",
                "A03: Elaborar carta",
                "A04: Enviar carta de solicitação para o fornecedor, via e-mail",
                "A05: Receber contrato do condutor, já assinado por ele",
                "A06: Liberar acesso do cartão e do cadastro para abastecimento de combustível, no site Ticket Log",
                "A07: O condutor já tem cadastro?",
                "Caso SIM: Ir para A08 e pular para A11",
                "Caso NÃO: Ir para A09 e seguir leitura",
                "A08: Ativar cartão de combustível",
                "A09: Fazer cadastro",
                "A10: Ativar cartão de combustível",
                "A11: Encerrar chamado no HelpDesk",
                "A12: Alteração de Condutor Principal Encerrada"
            ],
            "Desbloqueio de Cartão de Combustível": [
            "A01: Quando há necessidade",
            "A02: Receber chamado no HelpDesk do administrativo",
            "A03: Entrar no cartão",
            "A04: Verificar bloqueio",
            "A05: Entrar em contato com o administrativo para tratar sobre o bloqueio",
            "A06: Desbloquear cartão",
            "A07: Desbloqueio de Cartão de Combustível Encerrado"
        ],
            "Elaboração de Relatório do Combustível": [
                "A01: Quando solicitado",
                "A02: Receber chamado no HelpDesk",
                "A03: Elaborar relatório conforme o período solicitado no Ticket Log",
                "A04: Enviar relatório para o solicitante, via HelpDesk",
                "A05: Encerrar chamado no HelpDesk",
                "A06: Elaboração do Relatório de Combustível Encerrada"
            ],
                "Inserção de Crédito de Combustível Extra": [
                "A01: Semanalmente",
                "A02: Receber chamado do administrativo ou do condutor, no HelpDesk",
                "A03: Inserir crédito extra para o período solicitado, no cartão do condutor",
                "A04: Responder chamado com informações do período solicitado pelo condutor e com as informações do saldo atual",
                "A05: Encerrar chamado no HelpDesk",
                "A06: Inserção de Crédito de Combustível Extra Encerrado"
            ],
            "Realização de Compras": [
                "A01: Quando há demanda",
                "A02: Receber solicitação de compra já preenchida e assinada pelo gestor, via HelpDesk",
                "A03: É algo crítico?",
                "Caso SIM: Ir de A04 até A06 e pular para A09",
                "Caso NÃO: Ir para A07",
                "A04: Contactar Valéria para maior repasse das informações da compra, por e-mail, WhatsApp ou Teams",
                "A05: Qualificar no mínimo 3 fornecedores",
                "A06: Cotar valores",
                "A07: As compras são realizadas de maneira recorrente?",
                "Caso SIM: Ir para A09 e seguir leitura",
                "Caso NÃO: Ir para A08 e seguir leitura",
                "A08: Contactar o adm para repasse da especificidade da compra, por e-mail ou Teams",
                "A09: A compra é feita com algum fornecedor novo?",
                "Caso SIM: Ir para A10 e pular para A12",
                "Caso NÃO: Ir para A11 e seguir leitura",
                "A10: Enviar e-mail para cadastro da empresa",
                "A11: Contactar fornecedores via e-mail",
                "A12: Realizar cotação por e-mail",
                "A13: Aguardar retorno",
                "A14: Receber e-mail com cotação",
                "A15: Efetuar compra enviando e-mail para fornecedor",
                "A16: Enviar nota fiscal para o setor financeiro, via Teams",
                "A17: Realização de Compra Encerrada"
            ],
            "Recebimento de Solicitação para Manutenção ou Calibração de Equipamentos": [
                "A01: Quando há demanda",
                "A02: Receber solicitação de manutenção via E-mail ou HelpDesk",
                "A03: Receber equipamento com antecedência",
                "A04: Localizar fornecedor que realize o serviço em condições mais favoráveis no histórico no Drive de Compras e Serviços",
                "A05: Contactar o fornecedor específico para realizar a manutenção, por e-mail ou ligação",
                "A06: Entrar em contato com transportadoras para iniciar o procedimento de envio do equipamento",
                "A07: Enviar equipamento para a manutenção",
                "A08: Aguardar retorno do equipamento",
                "A09: Receber equipamento de volta",
                "A10: Enviar equipamento para o solicitante da manutenção",
                "A11: Recebimento de Solicitação para Manutenção de Equipamentos Encerrada"
            ],
            "Solicitação de Aplicativo de Mobilidade": [
                "A01: Quando houver necessidade",
                "A02: Receber solicitação do administrativo pelo HelpDesk",
                "A03: Fazer cadastro com as informações recebidas no portal da mobilidade (Uber ou 99)",
                "A04: Finalizar chamado de solicitação no HelpDesk",
                "A05: Aguardar chegada de e-mail para o colaborador",
                "A06: Receber e-mail",
                "A07: Solicitação de Aplicativos de Mobilidade Encerrada"
            ],
            "Solicitação de Autorização para Desconto de Multa": [
                "A01: Semanalmente",
                "A02: Receber e-mail da locadora com as multas",
                "A03: Repassar multas para o gestor do contrato e condutor por e-mail",
                "A04: Verificar a locadora",
                "A05: Qual é a locadora?",
                "Caso Unidas: Ir para A06 e pular para A09",
                "Caso Localiza: Ir para A07",
                "A06: Indicar via portal",
                "A07: O infrator é responsável pelo carro?",
                "Caso SIM: Ir para A09 e seguir leirura",
                "Caso NÃO: Ir para A08 e seguir leitura",
                "A08: Realizar indicação via portal",
                "A09: Anexar CNH e notificação",
                "A10: Receber documento com termo de responsabilidade do infrator",
                "A11: Enviar termo para infrator",
                "A12: Aguardar termo assinado",
                "A13: Anexar termo assinado",
                "A14: Receber autorização de desconto de multa para o departamento de Pessoas, por e-mail",
                "A15: Enviar autorização de desconto de multa para o condutor, por e-mail",
                "A16: O condutor é responsável pela multa?",
                "Caso SIM: Ir para A17 e finalizar processo em A22",
                "Caso NÃO: Ir para A18 e seguir leitura",
                "A17: Aguardar trâmite da locadora com o condutor responsável",
                "A18: Enviar formulário para condutor responsável assinar, indicando que ele foi infrator, pelo Teams",
                "A19: Aguardar preenchimento",
                "A20: Receber formulário autorizando o desconto da multa, já assinado pelo infrator, via e-mail",
                "A21: Encaminhar formulário para o RH e para o DP, pelo Teams",
                "A22: Solicitação de autorização de multa encerrada",
            ],
            "Solicitação de Manutenção de Rastreamento de Telemetria": [
                "A01: Quando há necessidade",
                "A02: Fornecer acesso dos carros ao gestor do contrato no site 'Mobyi'",
                "A03: Coletar informações relevantes (como histórico de multas) no portal",
                "A04: Repassar informações para o Gestor do Contrato, via e-mail",
                "A05: O gestor retornou o contato?",
                "Caso SIM: Ir para A06 e pular para A08",
                "Caso NÃO: Ir para A07 e seguir leitura",
                "A06: Solicitar advertência para o RH, por e-mail",
                "A07: Enviar e-mail para o gestor, para lembrá-lo",
                "A08: Guardar documentos em pasta no Drive",
                "A09: Solicitação Encerrada"
            ],
            "Solicitação de Manutenção de Veículos": [
                "A01: Quando há necessidade",
                "A02: O carro está em Recife?",
                "Caso SIM: Ir para A03 e pular para A05",
                "Caso NÃO: Ir para A04 e seguir leitura",
                "A03: Aguardar contato do motorista por WhatsApp",
                "A04: Receber solicitação via HelpDesk",
                "A05: Pesquisar fornecedores dependendo da localização que o carro está",
                "A06: Entrar em contato com oficinas mecânicas, por ligação, e-mail ou WhatsApp",
                "A07: Agendar manutenção",
                "A08: Realizar manutenção",
                "A09: Receber Nota Fiscal dos fornecedores, por e-mail",
                "A10: Colocar as notas fiscais no Drive",
                "A11: Colocar notas fiscais não lançadas no Teams",
                "A12: Solicitação de Manutenção de Veículos Encerrada"
            ],
        },
        "Representante da Direção": {

        }
    }
};

const descricaoDetalhada = {
    "A06: Entender necessidades de enxoval para a equipe": "Faça o login e, em seguida, clique no ícone localizado no canto inferior central da tela para realizar o cadastro do seu veículo.",
    "A05: Cadastrar veículo no aplicativo do Zona Azul": "Vá até o menu de veículos e insira as informações necessárias para o cadastro do novo veículo.",
    "A02: Receber programas (PGR)": "<img src='img/img-segurança/Doc. Preenchimento de EPI e Aplicação dos Programas de SST.png' style='width: 100%; height: auto;'>"
};

// Salva a estrutura 'data' no localStorage
function saveDataToLocalStorage() {
    localStorage.setItem('processData', JSON.stringify(data));
}

// Carrega os dados do localStorage para a estrutura 'data'
function loadDataFromLocalStorage() {
    const savedData = localStorage.getItem('processData');
    if (savedData) {
        Object.assign(data, JSON.parse(savedData));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Garante que os modais e overlay estejam ocultos no carregamento
    document.getElementById('modal-overlay').style.display = 'none';
    document.getElementById('add-process-modal').style.display = 'none';
    document.getElementById('update-process-modal').style.display = 'none';
    document.getElementById('modal').style.display = 'none';
    loadAreas();
});

function loadAreas() {
    const areaSelect = document.getElementById('areas');
    areaSelect.innerHTML = '<option value="">Selecione uma área:</option>';
    Object.keys(data).forEach(area => {
        const option = document.createElement('option');
        option.value = area;
        option.text = area;
        areaSelect.appendChild(option);
    });
}

function loadCargos() {
    const area = document.getElementById('areas').value;
    const cargoSelect = document.getElementById('cargos');
    cargoSelect.innerHTML = '<option value="">Selecione um cargo:</option>';
    resetProcessDropdown();

    if (area) {
        const cargos = Object.keys(data[area]);
        cargos.forEach(cargo => {
            const option = document.createElement('option');
            option.value = cargo;
            option.text = cargo;
            cargoSelect.appendChild(option);
        });
        cargoSelect.disabled = false;
    } else {
        cargoSelect.disabled = true;
    }
}

function loadProcessos() {
    const area = document.getElementById('areas').value;
    const cargo = document.getElementById('cargos').value;
    const processoSelect = document.getElementById('processos');
    resetProcessDropdown();

    if (cargo) {
        const processos = Object.keys(data[area][cargo]);
        processos.forEach(processo => {
            const option = document.createElement('option');
            option.value = processo;
            option.text = processo;
            processoSelect.appendChild(option);
        });
        processoSelect.disabled = false;
    } else {
        processoSelect.disabled = true;
    }
}

function loadDetalhes() {
    const area = document.getElementById('areas').value;
    const cargo = document.getElementById('cargos').value;
    const processo = document.getElementById('processos').value;
    const detalhesList = document.getElementById('detalhes-list');

    if (processo) {
        const etapas = data[area][cargo][processo];
        detalhesList.innerHTML = '';
        etapas.forEach(etapa => {
            const li = document.createElement('li');
            li.textContent = etapa;
            li.onclick = () => openModal(etapa);  // Abre o modal com a descrição detalhada
            detalhesList.appendChild(li);
        });
        
        document.getElementById('detalhes').style.display = 'block';

        // Mapeamento do nome do processo para a imagem do fluxograma correspondente
        let fluxogramaUrl;
        if (processo === "Preenchimento de EPI e Aplicação dos Programas de SST") {
            fluxogramaUrl = 'img/img-segurança/Doc. Preenchimento de EPI e AplicaÃ§Ã£o dos Programas de SST (3) 05.01.2024 - Pedro Couto Diagrama.png';
        } else if (processo === "Atendimento aos Requisitos Legais SSO") {
            fluxogramaUrl = 'img/img-segurança/DOC. ATENDIMENTO AOS REQUISITOS LEGAIS SSO (1) 25.06.2024 - EDUARDO GODOY Diagrama.png';
        } else if (processo === "Fiscalizações de SST") {
            fluxogramaUrl = 'img/img-segurança/DOC. FiscalizaÃ§Ãµes de SST (3) 05.01.24 - ARTHUR MEDEIROS Diagrama.png';
        } else if (processo === "Levantamento e Avaliação de Perigos e Riscos") {
            fluxogramaUrl = 'img/img-segurança/DOC. LEVANTAMENTO E AVALIAÃÃO DE PERIGOS E RISCOS (1) 25.06.2024 - Arthur Alves  Diagrama.png';
        } else if (processo === "Manutenção do Escritório da Empresa") {
            fluxogramaUrl = 'img/img-segurança/DOC. MANUTENÃÃO DO ESCRITORIO DA EMPRESA (2) 27.06.2024 - Arthur Alves Diagrama.png';
        } else if (processo === "Regularização da Brigada de Incêndios e Simulados") {
            fluxogramaUrl = 'img/img-segurança/DOC. RegularizaÃ§Ã£o da brigada de incÃªndios e simulados (2)  27.06.24 - EDUARDO GODOY Diagrama.png';
        } else if (processo === "Treinamentos de Integração de Segurança") {
            fluxogramaUrl = 'img/img-segurança/Doc. Treinamentos de SeguranÃ§a (3) 05.01.2024 - Pedro Couto Diagrama.png';
        } 
        
        else if (processo === "Acompanhamento de Oportunidade") {
            fluxogramaUrl = 'img/img-comercial/DOC. ACOMPANHAMENTO DE OPORTUNIDADE (3) 27.02.2024 - MOZART MENDES Diagrama.png';
        } else if (processo === "Análise de Editais") {
            fluxogramaUrl = 'img/img-comercial/DOC. ANÃLISE DE EDITAIS TO BE (2) 15.03.2024 - MOZART MENDES Diagrama.png';
        } else if (processo === "Atualização de Documentação") {
            fluxogramaUrl = 'img/img-comercial/DOC. ATUALIZAÃÃO DE DOCUMENTAÃÃO TO BE (1) 26.01.2024 - MOZART MENDES Diagrama.png';
        } else if (processo === "Captação de Oportunidade de Licitação") {
            fluxogramaUrl = 'img/img-comercial/DOC. CAPTAÃÃO DE OPORTUNIDADE (LICITAÃÃO) TO BE (2) 22.02.2024 - ARTHUR MEDEIROS Diagrama.png';
        } else if (processo === "Elaboração da Proposta") {
            fluxogramaUrl = 'img/img-comercial/DOC. ELABORAÃÃO DA PROPOSTA TO BE (4) 22.02.2024 - ARTHUR MEDEIROS Diagrama.png';
        } else if (processo === "Substituição de Profissionais de Contrato Vigente") {
            fluxogramaUrl = 'img/img-comercial/DOC. SUBSTITUIÃÃO DE PROFISSIONAIS DE CONTRATO VIGENTE TO BE (1) 22.02.2024 - ARTHUR MEDEIROS Diagrama.png';
        } 
        
        else if (processo === "Assessoria nos Planejamentos dos Contratos") {
            fluxogramaUrl = 'img/img-planejamento/DOC. ASSESSORIA NOS PLANEJAMENTOS DOS CONTRATOS (1) 18.12.23 - ARTHUR MEDEIROS Diagrama.png';
        } else if (processo === "Atualização de Status dos Contratos") {
            fluxogramaUrl = 'img/img-planejamento/DOC.  ATUALIZAÃÃO DE STATUS DOS CONTRATOS (1) 20.12.23 - ARTHUR MEDEIROS Diagrama.png';
        } else if (processo === "Coleta de Dados Profissionais e Despesas") {
            fluxogramaUrl = 'img/img-planejamento/Doc. Coleta de Dados Profissionais e Despesas (1) 18.12.23 - Arthur Medeiros Diagrama.png';
        } else if (processo === "Encerramento dos Contratos") {
            fluxogramaUrl = 'img/img-planejamento/DOC. ENCERRAMENTO DOS CONTRATOS (2) 26.12.23 - ARTHUR MEDEIROS Diagrama (1).png';
        } else if (processo === "Previsão de Despesas e Receitas dos Contratos Ativos") {
            fluxogramaUrl = 'img/img-planejamento/Doc. PrevisÃ£o do acompanhamento de despesas e receitas dos contratos (1) 17.07.2024 - Breno Diagrama.png';
        } 

        else if (processo === "Atendimento de Demanda de Informações Financeiras") {
            fluxogramaUrl = 'img/img-adm_fin/DOC. ATENDIMENTO DE DEMANDA DE INFORMAÃÃES FINANCEIRAS TO BE (1) 02.04.24 - ARTHUR MEDEIROS Diagrama.png';
        } else if (processo === "Processamento de Pagamento de Demandas Específicas") {
            fluxogramaUrl = 'img/img-adm_fin/DOC. PROCESSAMENTO DE PAGAMENTO DE DEMANDAS ESPECÃFICAS TO BE (2) 02.04.24 - ARTHUR MEDEIROS Diagrama.png';
        } else if (processo === "Proposição de Pagamentos") {
            fluxogramaUrl = 'img/img-adm_fin/DOC. PROPOSIÃÃO DE PAGAMENTOS TO BE (2) 02.04.2024 - MOZART MENDES Diagrama.png';
        } else if (processo === "Realizar Análise de Conciliação") {
            fluxogramaUrl = 'img/img-adm_fin/DOC. REALIZAR ANÃLISE DE CONCILIAÃÃO (2) 20.12.2023 - MOZART MENDES Diagrama.png';
        } else if (processo === "Reunião com Equipe Financeira (Diretoria e Operacional)") {
            fluxogramaUrl = 'img/img-adm_fin/DOC. REUNIÃO COM EQUIPE FINANCEIRA (DIRETORIA E OPERACIONAL) (1) 22.12.23 - ARTHUR MEDEIROS .png';
        } else if (processo === "Reunião com Equipe Financeira (Lideranças)") {
            fluxogramaUrl = 'img/img-adm_fin/DOC. REUNIÃO COM EQUIPE FINANCEIRA (LIDERANÃAS) (2) 22.12.23 - ARTHUR MEDEIROS Diagrama.png';
        } else if (processo === "Reunir Comprovantes de Pagamentos da Semana") {
            fluxogramaUrl = 'img/img-adm_fin/DOC. REUNIR COMPROVANTES DE PAGAMENTOS DA SEMANA (1) 22.12.23 - ARTHUR MEDEIROS .png';
        } else if (processo === "Verificação de Pagamentos a Receber pelas Contas Bancárias") {
            fluxogramaUrl = 'img/img-adm_fin/DOC. VERIFICAÃÃO DE PAGAMENTOS A RECEBER PELAS CONTAS BANCÃRIAS TO BE (1) 02.04.2024 - MOZART MENDES Diagrama.png';
        } else if (processo === "Auditoria Anual") {
            fluxogramaUrl = 'img/img-adm_fin/DOC. AUDITORIA ANUAL TO BE (2) 02.04.24 - ARTHUR MEDEIROS Diagrama.png';
        } else if (processo === "Auditoria Mensal") {
           fluxogramaUrl = 'img/img-adm_fin/Doc. Auditoria Mensal TO BE (1) 04.02.2024 - Pedro Couto Diagrama.png';
        } else if (processo === "Envio de Comprovantes de Pagamentos") {
            fluxogramaUrl = 'img/img-adm_fin/DOC. ENVIO DE COMPROVANTES DE PAGAMENTOS TO BE (1) 02.04.24- MOZART MENDES Diagrama.png';
        } else if (processo === "Lançamento de Aportes para Pagamento") {
            fluxogramaUrl = 'img/img-adm_fin/DOC. LANÃAMENTO DE APORTES PARA PAGAMENTO TO BE (2) 02.04.24 - MOZART MENDES  Diagrama.png';
        } else if (processo === "Lançamento de RPA") {
            fluxogramaUrl = 'img/img-adm_fin/DOC. LANÃAMENTO DE RPA TO BE (2) 02.04.24 - MOZART MENDES Diagrama.png';
        } else if (processo === "Lançamento dos CREA's e ART's") {
            fluxogramaUrl = 'img/img-adm_fin/DOC. LANÃAMENTO DOS CREAÂ´S E ARTÂ´S TO BE (2) 02.04.2024 - MOZART MENDES  Diagrama.png';
        } else if (processo === "Prestação de Contas de Viagens") {
            fluxogramaUrl = 'img/img-adm_fin/DOC. PRESTAÃÃO DE CONTAS DE VIAGENS TO BE (3) 02.04.2024 - MOZART MENDES Diagrama.png';
        } else if (processo === "Prestação de Conta Referente ao Adiantamento de Fundo Fixo") {
            fluxogramaUrl = 'img/img-adm_fin/DOC. PRESTAÃÃO DE CONTA REFERENTE AO ADIANTAMENTO DE FUNDO FIXO TO BE (2) 02.04.2024 - MOZART MENDES Diagrama.png';
        } else if (processo === "Solicitação de Reembolsos") {
            fluxogramaUrl = 'img/img-adm_fin/DOC. SOLICITAÃÃO DE REEMBOLSOS TO BE (3) 02.04.24 - MOZART MENDES Diagrama.png';
        } else if (processo === "Acompanhamento de Relatórios Contábeis, Financeiros, de Performance e Controladoria") {
            fluxogramaUrl = 'img/img-adm_fin/DOC. ACOMPANHAMENTO DE RELATÃRIOS CONTÃBEIS E FINANCEIROS TO BE (2) 02.04.24 - ARTHUR MEDEIROS Diagrama.png';
        } else if (processo === "Reunião de Planejamento de Fluxo de Caixa (Geral e Diretoria)") {
            fluxogramaUrl = 'img/img-adm_fin/DOC. REUNIÃO DE PLANEJAMENTO DE FLUXO DE CAIXA TO BE (2) 02.04.24 - ARTHUR MEDEIROS Diagrama.png';
        } else if (processo === "Reunião do Financeiro com Operacional em Situações de Crise de Liquidez") {
            fluxogramaUrl = 'img/img-adm_fin/DOC. REUNIÃO DE PLANEJAMENTO DE FLUXO DE CAIXA TO BE (2) 02.04.24 - ARTHUR MEDEIROS Diagrama.png';
        } 

        else if (processo === "Inclusão de Contrato no Sistema") {
            fluxogramaUrl = 'img/img-adm_compras/DOC. INCLUSÃO DE CONTRATO NO SISTEMA (2) 05.01.2024 - ROBERTA ZIRPOLI Diagrama.png';
        } else if (processo === "Lançamento de Notas e Faturas dos Fornecedores") {
            fluxogramaUrl = 'img/img-adm_compras/DOC. LANÃAMENTO DE NOTAS E FATURAS DOS FORNECEDORES (2) 05.01.2024 - MOZART MENDES  Diagrama.png';
        } else if (processo === "Realizar Faturamento das Medições") {
            fluxogramaUrl = 'img/img-adm_compras/DOC. REALIZAR FATURAMENTO DAS MEDIÃÃES (1) 06.02.2024 - MOZART MENDES Diagrama.png';
        } else if (processo === "Revisão das Notas de Fornecedores") {
            fluxogramaUrl = 'img/img-adm_compras/DOC. RevisÃ£o das notas de Forncecedores (2) 05.01.2024 - ROBERTA ZIRPOLI E MOZART MENDES Diagrama.png';
        } else if (processo === "Análise de Contrato de Aluguel") {
            fluxogramaUrl = 'img/img-adm_compras/DOC. ANÃLISE DE CONTRATO DE ALUGUEL (2) 13.12.2023 - MOZART MENDES E CECILIA MAIOCCHI Diagrama.png';
        } else if (processo === "Lançamento de Notas e Faturas de Imóveis e Outros") {
            fluxogramaUrl = 'img/img-adm_compras/DOC. LanÃ§amento de notas e faturas de ImÃ³veis e Outros (2) 13.12.2023 - MOZART MENDES Diagrama.png';
        } else if (processo === "Lançamento de Despesas de Imóveis") {
            fluxogramaUrl = 'img/img-adm_compras/DOC. LanÃ§amentos de Despesas de ImÃ³veis (2) 14.12.2023 - ARTHUR MEDEIROS Diagrama.png';
        } else if (processo === "Realização de Cadastro de Cliente e Fornecedor") {
            fluxogramaUrl = 'img/img-adm_compras/DOC. REALIZAÃÃO DE CADASTRO DE CLIENTE E FORNECEDOR (2) 13.12.2023 - MOZART MENDES Diagrama.png';
        } else if (processo === "Recebimento de Demonstrativo de Pagamento dos Correios") {
            fluxogramaUrl = 'img/img-adm_compras/DOC. REALIZAR FATURAMENTO DAS MEDIÃÃES (1) 06.02.2024 - MOZART MENDES Diagrama.png';
        } else if (processo === "Solicitação de Envio de Material pelo Correios") {
            fluxogramaUrl = 'img/img-adm_compras/DOC. SOLICITAÃÃO DE ENVIO DE MATERIAL PELO CORREIOS (2) 14.12.23 - ARTHUR MEDEIROS Diagrama.png';
        } 
        
        else {
            fluxogramaUrl = null;
        }

        // Verificar se o URL do fluxograma foi definido e carregar a imagem
        const fluxogramaContainer = document.getElementById('fluxograma');
        const fluxogramaImagem = document.getElementById('fluxograma-imagem');

        if (fluxogramaUrl) {
            fluxogramaImagem.src = fluxogramaUrl;
            fluxogramaContainer.style.display = 'block';  // Mostrar o container
        } else {
            fluxogramaContainer.style.display = 'none';  // Ocultar o container se não houver imagem
        }
    }
}

function resetProcessDropdown() {
    const processoSelect = document.getElementById('processos');
    processoSelect.innerHTML = '<option value="">Selecione um processo:</option>';
    processoSelect.disabled = true;
    document.getElementById('detalhes-list').innerHTML = '';
    document.getElementById('fluxograma').style.display = 'none';
}

function openModal(etapa) {
    const descricao = descricaoDetalhada[etapa] || "Descrição detalhada não disponível.";
    document.getElementById('modal-description').innerHTML = descricao;
    openOverlay();
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    closeOverlay();
}

function openAddModal() {
    openOverlay();
    document.getElementById('add-process-modal').style.display = 'block';
}

function closeAddModal() {
    document.getElementById('add-process-modal').style.display = 'none';
    closeOverlay();
}

function addNewProcess() {
    const area = document.getElementById('new-area').value.trim();
    const role = document.getElementById('new-role').value.trim();
    const process = document.getElementById('new-process').value.trim();
    const steps = document.getElementById('new-steps').value.split(',').map(step => step.trim());

    if (!area || !role || !process || steps.length === 0) {
        alert('Preencha todos os campos.');
        return;
    }

    if (!data[area]) {
        data[area] = {};
    }
    if (!data[area][role]) {
        data[area][role] = {};
    }

    data[area][role][process] = steps;

    alert('Processo adicionado com sucesso!');
    saveDataToLocalStorage(); // Salvar no localStorage
    closeAddModal();
    loadAreas(); // Atualizar os dropdowns
}

function openUpdateModal() {
    loadAreasForUpdate();
    openOverlay();
    document.getElementById('update-process-modal').style.display = 'block';
}

function closeUpdateModal() {
    document.getElementById('update-process-modal').style.display = 'none';
    closeOverlay();
}

function loadAreasForUpdate() {
    const areaSelect = document.getElementById('update-area');
    areaSelect.innerHTML = '<option value="">Selecione uma área:</option>';
    Object.keys(data).forEach(area => {
        const option = document.createElement('option');
        option.value = area;
        option.text = area;
        areaSelect.appendChild(option);
    });
}

function populateUpdateRoles() {
    const area = document.getElementById('update-area').value;
    const roleSelect = document.getElementById('update-role');
    roleSelect.innerHTML = '<option value="">Selecione um cargo:</option>';
    document.getElementById('update-process').innerHTML = '<option value="">Selecione um processo:</option>';
    document.getElementById('update-steps').value = '';

    if (area) {
        Object.keys(data[area]).forEach(role => {
            const option = document.createElement('option');
            option.value = role;
            option.textContent = role;
            roleSelect.appendChild(option);
        });
    }
}

function populateUpdateProcesses() {
    const area = document.getElementById('update-area').value;
    const role = document.getElementById('update-role').value;
    const processSelect = document.getElementById('update-process');
    processSelect.innerHTML = '<option value="">Selecione um processo:</option>';
    document.getElementById('update-steps').value = '';

    if (role) {
        Object.keys(data[area][role]).forEach(process => {
            const option = document.createElement('option');
            option.value = process;
            option.textContent = process;
            processSelect.appendChild(option);
        });
    }
}

function populateUpdateDetails() {
    const area = document.getElementById('update-area').value;
    const role = document.getElementById('update-role').value;
    const process = document.getElementById('update-process').value;

    if (process) {
        const steps = data[area][role][process];
        document.getElementById('update-steps').value = steps.join(', ');
    }
}

function updateProcess() {
    const area = document.getElementById('update-area').value;
    const role = document.getElementById('update-role').value;
    const process = document.getElementById('update-process').value;
    const steps = document.getElementById('update-steps').value.split(',').map(step => step.trim());

    if (!area || !role || !process || steps.length === 0) {
        alert('Preencha todos os campos.');
        return;
    }

    data[area][role][process] = steps;

    alert('Processo atualizado com sucesso!');
    saveDataToLocalStorage(); // Salvar no localStorage
    closeUpdateModal();
    loadAreas();
}

function deleteProcess() {
    const area = document.getElementById('update-area').value;
    const role = document.getElementById('update-role').value;
    const process = document.getElementById('update-process').value;

    // Verificar se todos os campos necessários estão selecionados
    if (!area || !role || !process) {
        alert('Por favor, selecione a área, o cargo e o processo para excluir.');
        return;
    }

    // Confirmar exclusão
    const confirmDelete = confirm(`Tem certeza de que deseja excluir o processo "${process}"?`);
    if (!confirmDelete) return;

    // Remover o processo do objeto data
    delete data[area][role][process];

    // Verificar se o cargo ficou vazio
    if (Object.keys(data[area][role]).length === 0) {
        delete data[area][role]; // Remover o cargo se não tiver mais processos
    }

    // Verificar se a área ficou vazia
    if (Object.keys(data[area]).length === 0) {
        delete data[area]; // Remover a área se não tiver mais cargos
    }

    // Salvar a alteração no localStorage
    saveDataToLocalStorage();

    alert(`O processo "${process}" foi excluído com sucesso.`);
    closeUpdateModal();
    loadAreas(); // Atualizar os dropdowns
}

// Overlay handling
function openOverlay() {
    document.getElementById('modal-overlay').style.display = 'block';
}

function closeOverlay() {
    document.getElementById('modal-overlay').style.display = 'none';
}

// Carregar dados ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    loadDataFromLocalStorage();
    loadAreas();
});

