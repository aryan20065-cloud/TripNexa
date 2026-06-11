function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white rounded-3xl shadow-xl p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;