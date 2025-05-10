type ProjectCardProps = {
  nome: string;
  thumbnail: string;
  descricao: string;
  link?: string;
};

export function ProjectCard({ nome, thumbnail, descricao, link }: ProjectCardProps) {
  return (
    <div className="rounded-xl shadow-lg p-4 bg-white hover:scale-105 transition-transform">
      <img src={thumbnail} alt={nome} className="rounded-md mb-2 w-full h-48 object-cover" />
      <h3 className="text-xl font-bold">{nome}</h3>
      <p className="text-gray-600">{descricao}</p>
      {link && (
        <a href={link} target="_blank" className="text-blue-500 hover:underline mt-2 block">
          Ver Projeto
        </a>
      )}
    </div>
  );
}
