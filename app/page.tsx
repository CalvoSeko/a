export default function Home() {
  return (
    <div className="grid grid-rows-[1fr] min-h-screen p-8">
      <main className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex gap-4 overflow-x-auto max-w-[600px] w-full pb-2">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <img
              key={num}
              src={`/${num}.jpg`}
              alt={`Foto ${num}`}
              className="h-32 w-auto object-cover"
            />
          ))}
        </div>
      </main>
    </div>
  );
}
