export default function Footer() {
  return (
    <footer className="py-8 border-t border-glow text-center text-gray-400">
      <p>© {new Date().getFullYear()} DISCOON. All Rights Reserved.</p>
      <div className="mt-3 flex justify-center gap-6 text-glow">
        <a href="#">Instagram</a>
        <a href="#">Behance</a>
        <a href="#">Dribbble</a>
      </div>
    </footer>
  );
}
