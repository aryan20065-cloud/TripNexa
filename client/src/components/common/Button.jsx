function Button({ children }) {
  return (
    <button className="bg-blue-600 text-white px-7 py-3 rounded-full font-bold hover:scale-105 transition">
      {children}
    </button>
  );
}

export default Button;