type ProjectCardProps = {
  nome: string;
  thumbnail: string;
  descricao: string;
  linkGithub?: string;
  linkDeploy?: string;
  tags: string[];
};

export function ProjectCard({ nome, thumbnail, descricao, tags, linkGithub, linkDeploy }: ProjectCardProps) {
  return (
    <div className="w-[265px] rounded-xl shadow-lg p-4 bg-zinc-800/90 hover:scale-105 transition-transform">
      <img src={thumbnail} alt={nome} className="rounded-md mb-2 w-full h-48 object-cover" />
      <h2 className="text-2xl font-bold p-0">{nome}</h2>
      <p className="mx-1 text-gray-600 line-clamp-4">{descricao}</p>

      <h3 className="text-xl font-bold my-2 mx-auto p-0">Tecnologias</h3>
      <div className="flex flex-wrap gap-2 justify-items-start">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-[#e3fd88]/50 text-gray-800 px-2 py-1 rounded-full text-xs font-semibold"
          >
            {tag}
          </span>
        ))}
      </div>

      {(linkGithub || linkDeploy) && (
        <div className="my-2">
          <h3 className="text-xl font-bold my-2 mx-auto p-0">Ver Projeto:</h3>
          <div className="flex justify-center gap-4 mt-1 mx-1 font-bold">
            {linkGithub && (
              <a href={linkGithub} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                💻 Código
              </a>
            )}
            {linkDeploy && (
              <a href={linkDeploy} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                🌐 Produção
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
