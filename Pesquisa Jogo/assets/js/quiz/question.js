function question(q, a, b, c, d){
	this.ask = q;
	this.rightAnswer = a;
	this.ans = [a, b, c, d];
}

var questions = [];

questions.push(new question("A negação de \“eu não gosto de acordar cedo e eu sou solteiro\” é:",
							"\“Eu gosto de acordar cedo ou eu não sou solteiro\”",
							"\“Eu não gosto de acordar cedo e eu não sou solteiro\”",
							"\“Eu gosto de acordar cedo ou eu sou solteiro\”",
							"\“Eu não gosto de acordar cedo ou eu sou solteiro\”"));

questions.push(new question("Em uma cidade, existem apenas dois tipos de habitantes: os que sempre mentem e os que sempre falam a verdade. Você está conversando com um casal e a mulher diz: \"Se ele sempre fala a verdade, então eu sempre minto\". Baseado nessa afirmação, pode-se deduzir que:",
							"A mulher sempre fala a verdade e o homem sempre mente",
							"A mulher sempre mente e o homem sempre fala a verdade",
							"Ambos mentem",
							"Ambos falam a verdade"));

questions.push(new question("Ao entrar numa floresta, Alice perdeu a noção dos dias da semana. O leão e o tigre tornaram-se amigos de Alice. Ela sabia que o leão mentia às segundas, terças e quartas e dizia a verdade nos outros dias da semana. Já o tigre mentia às quintas, sextas e sábados e dizia a verdade nos outros dias da semana. Um dia, os dois animais disseram para Alice: \“Ontem foi um dos meus dias de mentir\”. Qual era o dia da semana?",
							"Quinta-feira",
							"Segunda-feira",
							"Terça-feira",
							"Domingo"));

questions.push(new question("Um viajante se dirigia para uma cidade e se depara com uma bifurcação na qual se encontram dois guardas. Um caminho o levaria a cidade e o outro a uma floresta. Um dos guardas sempre procura enganar os viajantes que passam por ali enquanto o outro procura sempre ajudá-los. O enganador sabe que seu parceiro é honesto e o honesto sabe que seu parceiro é enganador. Além disso, ambos sabem qual dos caminhos leva a cidade. Qual pergunta o viajante deve fazer para qualquer um dos guardas para ter certeza que será indicado para o caminho certo?",
							"Qual caminho seu parceiro me mandaria seguir para chegar à floresta?",
							"Qual caminho me levaria para floresta?",
							"Qual de vocês me mandaria pro caminho correto?",
							"Qual caminho você seguiria para chegar até a cidade?"));

questions.push(new question("Três gatos comem três ratos em três minutos. Cem gatos comem cem ratos em quantos minutos?",
							"3 minutos",
							"100 minutos",
							"300 minutos",
							"1 minuto"));

questions.push(new question("Imagine que em sua frente vão caminhando 2 mães, 2 filhas, 1 avó e 1 neta. Quantas pessoas são?",
							"3",
							"4",
							"5",
							"6"));

questions.push(new question("Creuza saiu de casa e andou 500 metros, voltou metade do caminho e encontrou Terezinha, que mora com ela e havia acabado de sair de casa. As duas resolveram ir ao mercado juntas, andando cerca de 210 metros. Quantos metros Terezinha andou?",
							"460m",
							"210m",
							"710m",
							"290m"));

questions.push(new question("Um grupo de amigos fez uma aposta para prever o resultado de um jogo de futebol entre Grécia e Inglaterra. O resultado do jogo foi 4 a 1 para gregos e ingleses respectivamente. Quem ganhou a aposta?",
							"Ivone",
							"Lucas",
							"Maria",
							"Jonathan"));

questions.push(new question("Se você cortar 20 limões ao meio e depois cortar metade dessas metades ao meio, quantas partes você vai ter no total?",
							"60",
							"40",
							"80",
							"50"));

questions.push(new question("Dentre os itens abaixo, qual aquele que pode ser considerado um intruso?",
							"Vaca",
							"Leão",
							"Gato",
							"Hiena"));

questions.push(new question("Observe a expressão lógica: <br>((((true AND true) OR false) AND true) AND (true OR (true AND false)))<br>Considerando os operadores lógicos AND (e) e OR (ou), e os operandos lógicos true (verdadeiro) e false (falso), é CORRETO afirmar que o valor lógico dessa expressão é: ",
							"Verdadeiro",
							"Falso",
							"Nulo",
							"Indefinido"));

questions.push(new question("Considere que uma expressão lógica envolva candidato (C), cargo político (P), votos (V) e ganhador (G). Para avaliar se uma dada expressão é verdadeira ou não, um técnico deve usar uma Tabela da Verdade, que contém uma lista exaustiva de situações possíveis envolvendo as 4 variáveis. A Tabela da Verdade deve ter 4 colunas e:",
							"16 linhas",
							"8 linhas",
							"4 linhas",
							"24 linhas"));

questions.push(new question("O valor lógico da frase: \"Esta frase é falsa\" é:",
							"Paradoxo",
							"Verdadeiro",
							"Falso",
							"Negação"));

questions.push(new question("O próximo número da sequência: 2, 10, 12, 16, 17, 18, 19 .... é:",
							"200",
							"20",
							"2000",
							"101"));

questions.push(new question("O próximo número da sequencia: 0, 1, 1, 2, 3, 5, 8, 13, 21 .... é:",
							"34",
							"89",
							"55",
							"99"));

questions.push(new question("O próximo número da sequencia: 1, 2, 6, 24, 120 .... é:",
							"720",
							"360",
							"180",
							"1024"));

questions.push(new question("Ao rolar dois dados diferentes (de seis lados), quais as chances da soma dos resultados ser 11?",
							"1/12",
							"1/6",
							"2/9",
							"1/16"));

questions.push(new question("Numa reunião de professores, foram contados 45 apertos de mão. Sabendo que todos os professores se cumprimentaram apenas uma vez, quantos professores foram à reunião?",
							"10",
							"20",
							"44",
							"12"));

questions.push(new question("3 + 3 = 8, 7 + 7 = Triangulo, 2 + 2 = ?",
							"Peixe",
							"Quadrado",
							"Âncora",
							"Gancho"));

questions.push(new question("Um senhor, olhando para um retrato, diz:- O pai deste homem é o pai de meu filho. Ele está olhando para:",
							"Seu pai",
							"Seu proprio retrato",
							"Seu Avô",
							"Seu filho"));