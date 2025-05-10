// function Home() {
//   var homeText = 'Olá, tudo bem?\nSeja bem-vindo(a) ao meu portfólio. Me chamo Yuri Peres, sou graduado em Análise e Desenvolvimento de Sistemas e tenho experiência prática com desenvolvimento web fullstack, além de projetos pessoais que exploram áreas como automação e criação de jogos.\nAqui você encontrará uma seleção dos meus trabalhos — projetos nos quais apliquei e testei ideias com as ferramentas que venho estudando. A aba “Projetos” apresenta esses desenvolvimentos de forma filtrável e organizada.\nCaso queira saber um pouco mais sobre mim, minhas preferências de trabalho e como entrar em contato, fique à vontade para visitar a aba “Sobre”.\nO código deste portfólio também está disponível no meu GitHub.';
//   var tecnologies = 'aqui vai ter uma lista';
//     return (
//       <section className="grid">
//         <h1 className="text-3xl font-bold mb-4"> Portfólio de Yuri Peres</h1>
//         <p>{homeText}</p>
//         <p>{tecnologies}</p>
//       </section>
//     )
//   }

//   export default Home

function Home() {
  const homeText = 'Olá, tudo bem?\nSeja bem-vindo(a) ao meu portfólio. Me chamo Yuri Peres, sou graduado em Análise e Desenvolvimento de Sistemas e tenho experiência prática com desenvolvimento web fullstack, além de projetos pessoais que exploram áreas como automação e criação de jogos.\nAqui você encontrará uma seleção dos meus trabalhos — projetos nos quais apliquei e testei ideias com as ferramentas que venho estudando. A aba "Projetos" apresenta esses desenvolvimentos de forma filtrável e organizada.\nCaso queira saber um pouco mais sobre mim, minhas preferências de trabalho e como entrar em contato, fique à vontade para visitar a aba "Sobre".\nO código deste portfólio também está disponível no meu GitHub.';

  const technologies = {
    "Backend & Lógica": ["Java / Spring Boot", "Python", "SQL / PostgreSQL"],
    "Frontend": ["JavaScript / React", "HTML & CSS / Bootstrap", "Tailwind CSS"],
    "Outros": ["Unity Engine / C#", "Arduino com C++ (projeto básico de automação de estufa)"]
  };

  return (
    <section className="section-border grid grid-cols-1 md:grid-cols-2 gap-6 p-4 max-w-6xl mx-auto">
      {/* Título - ocupa toda a linha */}
      <h1 className="text-3xl font-bold md:col-span-2">Portfólio de Yuri Peres</h1>

      {/* Quadrado 1 - Texto de apresentação */}
      <div className="bg-zinc-800/90 p-6 rounded-md rounded-t-2xl full shadow-lg md:col-span-2">
        <h2 className="text-2xl font-bold mb-4 col-span-2">Apresentação</h2>
        {homeText.split('\n').map((paragraph, index) => (
          <p key={index} className="text-justify mb-4 last:mb-0">{paragraph}</p>
        ))}
      </div>

      {/* Quadrado 2 - Tecnologias */}
      <div className="bg-zinc-800/90 p-6 rounded-md rounded-b-2xl shadow-lg md:col-span-2 grid grid-cols-2 gap-4">
        <h2 className="text-2xl font-bold mb-4 col-span-2">Tecnologias mais utilizadas</h2>

        {Object.entries(technologies).map(([category, items]) => (
          <div key={category} className={`skillcard-border p-3 pl-6 col-span-2 ${category === "Outros" ? 'lg:col-span-2 col-span-2' : 'lg:col-span-1'}`}>
            <h3 className="text-xl font-semibold mb-2">{category}</h3>
            <ul className="space-y-2">
              {items.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-[#e3fd88]/60 rounded-full mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Home