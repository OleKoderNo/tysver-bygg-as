import { NextPage } from "next";
import Head from "next/head";
import MailButton from "../../components/ContactButton";

const OmOss: NextPage = () => {
  return (
    <>
      <Head>
        <title>Om Oss - Tysvær Bygg AS</title>
        <meta name="description" content="Om oss - Tysvær Bygg AS" />
      </Head>
      <main className="bg-gray-50 text-gray-800 min-h-screen">
        <section className="bg-hero-background text-center text-white py-20">
          <h1 className="text-5xl font-bold">Om Tysvær Bygg AS</h1>
          <p className="my-8 text-lg">
            Profesjonelt byggefirma med fokus på kvalitet
          </p>
          <MailButton
            className="bg-orange-500 px-10 my-6 py-4 text-white font-semibold"
            email="example@example.com"
            text="Kontakt oss"
          />
        </section>

        <section className="py-8 px-4 flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 lg:mx-auto">
            <h2 className="text-3xl font-bold">Om Oss</h2>
            <p className="text-lg leading-relaxed text-gray-700 mt-4">
              Tysvær Bygg AS er et pålitelig og profesjonelt tømrerfirma basert
              i naturskjønne Tysvær i Rogaland. Vi er spesialister innen
              bygging, oppussing og renovering av både boliger og næringsbygg,
              og vi er stolte av å tilby et bredt spekter av tjenester som
              oppfyller dine unike behov og ønsker.
            </p>
          </div>
        </section>

        <section className="py-8 px-4 bg-gray-200">
          <h2 className="text-2xl font-bold text-center mb-6">Hva vi tilbyr</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold">Dyktige håndverkere</h3>
              <p className="text-gray-700 mt-2">
                Vårt engasjerte team av dyktige håndverkere og tømrere har solid
                kompetanse og erfaring innen byggebransjen.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold ">
                Skreddersydde løsninger
              </h3>
              <p className="text-gray-700 mt-2">
                Vi tilbyr skreddersydde løsninger for å sikre at hvert prosjekt
                oppfyller dine unike behov.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold ">Lokalkunnskap</h3>
              <p className="text-gray-700 mt-2">
                Som et lokalt tømrerfirma har vi inngående kjennskap til lokale
                byggeregler og standarder.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 text-center bg-hero-background text-white">
          <h2 className="text-3xl font-bold">
            Er du klar til å starte prosjektet?
          </h2>
          <MailButton email="example@example.com" text="Kontakt oss" />
        </section>
      </main>
    </>
  );
};

export default OmOss;
