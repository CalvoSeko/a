export default function Home() {
  return (
    <div className="grid grid-rows-[1fr] min-h-screen p-8">
      <main className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(8)].map((_, i) => (
          <Image
            key={i}
            src={`/${i + 1}.jpg`}
            alt={`Image ${i + 1}`}
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-lg"
          />
        ))}
      </main>
    </div>
  );
}
}
