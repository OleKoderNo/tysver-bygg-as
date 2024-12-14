import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import MailButton from "../components/ContactButton";

const VareTjenester: NextPage = () => {
  return (
    <>
      <Head>
        <title>Våre Tjenester - Tysvær Bygg AS</title>
        <meta
          name="description"
          content="Utforsk våre tjenester innen nybygg, tilbygg, rehabilitering, takarbeid og mye mer. Tysvær Bygg AS leverer kvalitet i alle ledd."
        />
      </Head>
      <main className="bg-gray-50 text-gray-800 min-h-screen">
        <section className="bg-hero-background text-center text-white py-20">
          <h1 className="text-5xl font-bold">Våre Tjenester</h1>
          <p className="mt-6 text-lg">
            Utforsk vårt brede spekter av bygg- og rehabiliteringstjenester. Vi
            leverer kvalitet og skreddersydde løsninger.
          </p>
        </section>

        <section className="py-12 px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between"
            >
              <div className="pt-6 px-6">
                <h2 className="text-xl font-semibold  mb-4">{service.title}</h2>
                <p className="text-gray-700 mb-6">{service.description}</p>
              </div>
              <Image
                src="/outsidehome.png"
                alt={service.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </section>

        <section className="bg-gray-200 text-center py-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Klar for å starte prosjektet?
          </h2>
          <p className="text-lg mb-6">
            Kontakt oss i dag for en gratis konsultasjon om dine byggebehov.
          </p>
          <MailButton
            email="example@example.com"
            text="Kontakt oss"
            className="bg-orange-500 px-10 py-4 text-white font-semibold"
          />
        </section>
      </main>
    </>
  );
};

export default VareTjenester;

const services = [
  {
    title: "Nybygg – Bygg Drømmehuset ditt med Oss",
    description:
      "Drømmer du om et nytt hjem eller hytte? Vi hjelper deg med å bygge fra grunnen av, og tar hånd om alt fra planlegging til ferdigstilling. Moderne løsninger og høy kvalitet i alle ledd.",
  },
  {
    title: "Tilbygg og Påbygg – Mer Plass uten å Flytte",
    description:
      "Trenger du ekstra rom eller større plass? Vi lager tilbygg og påbygg som passer perfekt til huset ditt, både i stil og funksjon.",
  },
  {
    title: "Rehabilitering og Renovering – Gi Hjemmet ditt et Løft",
    description:
      "Er det på tide med en oppgradering? Vi fornyer og moderniserer eldre boliger med smarte og moderne løsninger.",
  },
  {
    title: "Kjøkken og Baderom – Oppgrader Hjemmets Viktigste Rom",
    description:
      "Vi hjelper deg med å designe og installere funksjonelle og stilige kjøkken og bad, tilpasset dine behov og ønsker.",
  },
  {
    title: "Vinduer og Dører – Forbedre Komfort og Sikkerhet",
    description:
      "Vi monterer energieffektive vinduer og dører som forbedrer inneklimaet og reduserer strømregningen.",
  },
  {
    title: "Takarbeid – Beskytt Hjemmet ditt mot Været",
    description:
      "Vi utfører alt av takarbeid, fra legging av nye tak til reparasjon og vedlikehold av eksisterende tak.",
  },
  {
    title: "Hagestuer og Terrasser – Utvid Boligen din med Uterom",
    description:
      "Vi bygger hagestuer og terrasser som gir deg et lunt og lyst rom å nyte naturen i, hele året.",
  },
  {
    title: "Isolering og Energioppgradering – Spar Penger og Miljøet",
    description:
      "Med riktig isolering kan du redusere strømregningen og gjøre hjemmet ditt mer miljøvennlig.",
  },
  {
    title: "Gulvlegging – Forny Rommene dine fra Bunn av",
    description:
      "Vi legger parkett, laminat, vinyl og andre gulvtyper med presisjon og omsorg.",
  },
  {
    title: "Vedlikehold og Reparasjoner – Hold Hjemmet ditt i Topp Stand",
    description:
      "Vi tar oss av alt fra mindre vedlikeholdsoppgaver til større reparasjoner, så du slipper å bekymre deg.",
  },
];
