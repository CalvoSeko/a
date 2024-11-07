export const metadata = {
  title: 'Dana Information',
  description: 'How to help Valencia recover from DANA floods',
};

export default function Home() {
  return (
    <div>
      <main>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <div key={num} className="aspect-square overflow-hidden rounded-lg">
              <img
                src={`/${num}.jpg`}
                alt={`Foto ${num}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">
            Urgent: Help Valencia Recover from Historic Floods
          </h1>
          <h2 className="text-2xl font-semibold mb-8">
            Valencia, Spain, is in Crisis
          </h2>
          
          <p className="mb-8">
            In a devastating turn of events, Valencia has experienced its heaviest flood in 30 years, 
            with over 100,000 households left without electricity. The impact is immense, and the need 
            for support is urgent.
          </p>

          <div className="mb-8">
            <section className="mb-4">
              <h3 className="text-xl font-semibold mb-2">1. Generalitat Valenciana (Valencian Regional Government)</h3>
              <p>
                Donate Now: <a href="https://comunica.gva.es/va/detalle?id=387402765&site=373422916" className="text-blue-500 hover:text-blue-700">Official Portal</a><br />
                Bank Account: ES94 0081 0693 61 0002423445<br />
                <span>Matching Funds: Banco Sabadell will match every euro donated, up to €500,000.</span>
              </p>
            </section>

            <section className="mb-4">
              <h3 className="text-xl font-semibold mb-2">2. Som Solidaritat (Regional Government)</h3>
              <p>
                Donate Now: <a href="https://presidencia.gva.es/es/somsolidaritat" className="text-blue-500 hover:text-blue-700">Som Solidaritat</a>
              </p>
            </section>

            <section className="mb-4">
              <h3 className="text-xl font-semibold mb-2">3. Cáritas (Humanitarian Organization)</h3>
              <p>
                <a href="https://www.caritasvalencia.org/emergencias/caritas-con-la-emergencia-en-valencia/" className="text-blue-500 hover:text-blue-700">Donate Now</a><br />
                Bank Accounts:
                <br />
                Caixa Popular: ES19 3159 0078 5716 6338 6025
                <br />
                Caixabank: ES02 2100 8734 6113 0064 8236
                <br />
                Bizum: 38026
              </p>
            </section>

            <section className="mb-4">
              <h3 className="text-xl font-semibold mb-2">4. Cruz Roja (Red Cross Spain)</h3>
              <p>
                <a href="https://cercadeti.cruzroja.es/ayudaafectadosinundacionesdana" className="text-blue-500 hover:text-blue-700">Donate Now</a><br />
                Bizum Code: 33512
              </p>
            </section>

            <section className="mb-4">
              <h3 className="text-xl font-semibold mb-2">5. World Central Kitchen</h3>
              <p>
                <a href="https://donate.wck.org/campaign/637262/donate#!/donation/checkout?c_src=first-alert" className="text-blue-500 hover:text-blue-700">Donate Now</a><br />
                Their team is already on the ground providing essential food to those affected.
              </p>
            </section>
            <p className="text-sm text-gray-500">These are the larger NGOs working on the issue</p>

            <section className="mb-4">
              <h3 className="text-xl font-semibold mb-2">6. Fundació Horta Sud</h3>
              <p>
                <a href="https://fundaciohortasud.helpbysc.com/afectados-dana" className="text-blue-500 hover:text-blue-700">Donate Now</a><br />
                Bank Account: ES43 3159 0013 9630 4769 6921<br />
                BIC/SWIFT: BCOEESMM159
              </p>
            </section>

            <section className="mb-4">
              <h3 className="text-xl font-semibold mb-2">7. Go Fund Me Initiatives</h3>
              <p>
                <a href="https://www.gofundme.com/f/dana-ayuda-a-las-familias-de-la-horta-sud-de-valencia" className="text-blue-500 hover:text-blue-700">Help Families in Horta Sud</a><br />
                <a href="https://www.gofundme.com/f/ayuda-damnificados-por-el-dana-en-valencia" className="text-blue-500 hover:text-blue-700">Help DANA Victims in Valencia</a><br />
                <a href="https://www.gofundme.com/f/una-paella-para-valencia" className="text-blue-500 hover:text-blue-700">A Paella For Valencia</a><br />
                <a href="https://www.gofundme.com/f/ayudemos-a-el-refugio-de-maria-tras-la-dana" className="text-blue-500 hover:text-blue-700">Help Maria&apos;s Refuge</a>
              </p>
            </section>
          </div>

          <div className="mb-8">
            <p>
              Every contribution, no matter the size, can make a significant impact on the lives of those affected by this disaster.
            </p>
            <p style={{ fontFamily: 'Cursive', fontStyle: 'italic' }}>
              Molta força a tots i cuideu-vos-en.
            </p>
            <p>
              Disclaimer: This website is not affiliated with any of the organizations listed and does not receive any compensation for sharing this information.
            </p>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
