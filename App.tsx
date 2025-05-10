const podcastData = {
  "title": "Prompt Power: Como Usar IA com Precisão e Criatividade",
  "episode_number": 1,
  "segments": [
    {
      "type": "intro",
      "script": `Olá, pessoal! Sejam muito bem-vindos ao primeiro episódio do nosso podcast sobre Inteligência Artificial! Hoje, vamos mergulhar no universo dos prompts e descobrir como usar essa ferramenta poderosa com precisão e criatividade. Preparados para desbloquear o potencial da IA? Então, vamos nessa!`
    },
    {
      "type": "main",
      "script": `Vocês já pararam para pensar no que realmente é um prompt? De forma simples, um prompt é uma instrução ou pergunta que damos a uma IA para que ela gere uma resposta. Mas a mágica acontece quando aprendemos a formular esses prompts de maneira eficaz. Um bom prompt pode ser a diferença entre uma resposta genérica e uma solução genial! Por exemplo, em vez de perguntar 
'Como fazer um site?', que é muito vago, tente algo como 'Quais são os passos para criar um site de portfólio para um desenvolvedor front-end júnior usando HTML, CSS e JavaScript?'. Viu a diferença? A especificidade é a chave!`
    },
    {
      "type": "main",
      "script": `Agora, vamos explorar os tipos de prompt. Basicamente, podemos usar instruções diretas, como 'Escreva um código Python para inverter uma string'. Podemos fazer perguntas, como 'Qual a melhor biblioteca JavaScript para criar gráficos interativos?'. E, muito importante, podemos fornecer contexto e exemplos para guiar a IA. Na programação, isso é super útil! Imagine pedir para a IA 'Complete este código para que ele ordene uma lista de números em ordem decrescente, seguindo o estilo de código X'. Quanto mais informação de qualidade você der, melhor será o resultado.`
    },
    {
      "type": "main",
      "script": `E como podemos realmente turbinar nossos prompts? Primeiro, clareza e objetividade são fundamentais. Evite ambiguidades. Segundo, forneça contexto sempre que possível. Se está falando de um projeto específico, mencione! Terceiro, seja específico sobre o que você quer. Precisa de um código? Uma explicação? Um resumo? Defina o formato da resposta. Quer uma lista? Um parágrafo? Uma tabela? Diga à IA! Uma ótima estratégia é dividir tarefas complexas em prompts menores. Em vez de pedir para a IA criar um aplicativo inteiro de uma vez, peça para ela criar funções ou componentes específicos.`
    },
    {
      "type": "outro",
      "script": `Chegamos ao fim do nosso primeiro episódio! Hoje, desvendamos o poder dos prompts e como usá-los com precisão e criatividade para extrair o máximo da Inteligência Artificial. Lembrem-se da dica de ouro: pense como um diretor de cinema, você guia a IA com suas palavras! Se você curtiu esse conteúdo, compartilhe este episódio com seus amigos e colegas, e não se esqueça de nos seguir para mais dicas de IA no seu dia a dia. Até a próxima!`
    }
  ]
};

function App() {
  return (
    <div className="container mx-auto p-4 bg-gray-900 text-white min-h-screen">
      <header className="text-center py-8">
        <h1 className="text-5xl font-bold text-purple-400">{podcastData.title}</h1>
        <p className="text-xl text-gray-400 mt-2">Episódio {podcastData.episode_number}</p>
      </header>
      <main className="mt-8 space-y-12">
        {podcastData.segments.map((segment, index) => (
          <section key={index} className={`p-6 rounded-lg shadow-xl ${segment.type === 'intro' || segment.type === 'outro' ? 'bg-purple-700' : 'bg-gray-800'}`}>
            <h2 className="text-3xl font-semibold mb-4 capitalize text-purple-300">{segment.type.replace('_', ' ')}</h2>
            <p className="text-lg leading-relaxed text-gray-200 whitespace-pre-line">
              {segment.script}
            </p>
          </section>
        ))}
      </main>
      <footer className="text-center py-12 mt-12 border-t border-gray-700">
        <p className="text-gray-500">© 2025 Podcast IA Power. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;

