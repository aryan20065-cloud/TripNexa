function SectionTitle({ smallTitle, title, description }) {
  return (
    <div className="text-center mb-14">
      <p className="text-blue-600 font-bold mb-3">{smallTitle}</p>
      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
        {title}
      </h2>
      <p className="text-slate-500 max-w-2xl mx-auto">{description}</p>
    </div>
  );
}

export default SectionTitle;