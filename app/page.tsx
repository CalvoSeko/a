export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-[600px] w-full">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <img
              key={num}
              src={`/${num}.jpg`}
              alt={`Foto ${num}`}
              className="h-32 w-full object-cover"
            />
          ))}
        </div>
      </main>
    </div>
      <footer className="row-start-3 flex flex-col items-center gap-6 max-w-3xl text-center">
        <h1 className="text-2xl font-bold text-red-600">
          Urgent: Help Valencia Recover from Historic Floods
        </h1>
        <h2 className="text-xl font-semibold">Valencia, Spain, is in Crisis</h2>
        
        <p className="text-sm leading-relaxed">
          In a devastating turn of events, Valencia has experienced its heaviest flood in 30 years, 
          with over 100,000 households left without electricity. The impact is immense, and the need 
          for support is urgent.
        </p>

        <div className="grid gap-6 w-full text-left">
          <section className="space-y-2">
            <h3 className="font-semibold">1. Generalitat Valenciana (ValencianRegional Government)</h3>
            <p className="text-sm">
              Donate Now: <a href="https://comunica.gva.es/va/detalle?id=387402765&site=373422916" className="text-blue-600 hover:underline">Official Portal</a><br />
              Bank Account: ES94 0081 0693 61 0002423445<br />
              <span className="font-medium">Matching Funds: Banco Sabadell will match every euro donated, up to €500,000.</span>
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-semibold">2. Som Solidaritat (Regional Government)</h3>
            <p className="text-sm">
              Donate Now: <a href="https://presidencia.gva.es/es/somsolidaritat" className="text-blue-600 hover:underline">Som Solidaritat</a>
            </p>
            <div className="text-sm grid grid-cols-2 gap-2">
              <p>Utiel: +34659289726</p>
              <p>Horta Sur: +34682177249</p>
              <p>Ribera: +34619975059</p>
              <p>Hoya: +34690027099</p>
              <p>Castellón: +34679161664</p>
            </div>
          </section>

          <section className="space-y-2">
            <h3 className="font-semibold">3. Cáritas (Humanitarian Organization)</h3>
            <p className="text-sm">
              <a href="https://www.caritasvalencia.org/emergencias/caritas-con-la-emergencia-en-valencia/" className="text-blue-600 hover:underline">Donate Now</a><br />
              Bank Accounts:<br />
              Caixa Popular: ES19 3159 0078 5716 6338 6025<br />
              Caixabank: ES02 2100 8734 6113 0064 8236<br />
              Bizum: 38026
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-semibold">4. Cruz Roja (Red Cross Spain)</h3>
            <p className="text-sm">
              <a href="https://cercadeti.cruzroja.es/ayudaafectadosinundacionesdana" className="text-blue-600 hover:underline">Donate Now</a><br />
              Bizum Code: 33512
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-semibold">5. World Central Kitchen</h3>
            <p className="text-sm">
              <a href="https://donate.wck.org/campaign/637262/donate#!/donation/checkout?c_src=first-alert" className="text-blue-600 hover:underline">Donate Now</a><br />
              Their team is already on the ground providing essential food to those affected.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-semibold">6. Fundació Horta Sud</h3>
            <p className="text-sm">
              <a href="https://fundaciohortasud.helpbysc.com/afectados-dana" className="text-blue-600 hover:underline">Donate Now</a><br />
              Bank Account: ES43 3159 0013 9630 4769 6921<br />
              BIC/SWIFT: BCOEESMM159
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-semibold">7. Go Fund Me Initiatives</h3>
            <p className="text-sm">
              <a href="https://www.gofundme.com/f/dana-ayuda-a-las-familias-de-la-horta-sud-de-valencia" className="text-blue-600 hover:underline">Help Families in Horta Sud</a><br />
              <a href="https://www.gofundme.com/f/ayuda-damnificados-por-el-dana-en-valencia" className="text-blue-600 hover:underline">Help DANA Victims in Valencia</a><br />
              <a href="https://www.gofundme.com/f/una-paella-para-valencia" className="text-blue-600 hover:underline">A Paella For Valencia</a><br />
              <a href="https://www.gofundme.com/f/ayudemos-a-el-refugio-de-maria-tras-la-dana" className="text-blue-600 hover:underline">Help Maria's Refuge</a>
            </p>
          </section>
        </div>

        <div className="mt-8 space-y-4 text-sm">
          <p className="font-medium">
            Every contribution, no matter the size, can make a significant impact on the lives of those affected by this disaster.
          </p>
          <p className="italic">
            Molta força a tots i cuideu-vos-en.
          </p>
          <p className="text-xs text-gray-600">
            Disclaimer: This website is not affiliated with any of the organizations listed and does not receive any compensation for sharing this information.
          </p>
        </div>
      </footer>
  );
}
