export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
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
