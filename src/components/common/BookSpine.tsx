const MAX_HOLES = 100;

export default function BookSpine() {
  return (
    <div className="absolute inset-0 book-spine hidden xl:flex gap-20 overflow-hidden transition-colors">
      {Array.from({ length: MAX_HOLES }, (_, i) => (
        <div key={i} className="book-spine-hole" />
      ))}
    </div>
  );
}