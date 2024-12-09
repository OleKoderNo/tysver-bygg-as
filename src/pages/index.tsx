import Image from "next/image";
// import localFont from "next/font/local";
import ServiceCard from "../../components/ServiceCard";
import MailButton from "../../components/ContactButton";
import TextLinkButton from "../../components/TextLinkButton";
import TextComponent from "../../components/OrangeText";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function Home() {
  return (
    <main className="">
      <section className="bg-hero-background text-center text-white">
        <div className="py-20">
          <h1>Bygg drømmehjemmet med oss</h1>
          <p className="my-8">Profesjonelt byggefirma med fokus på kvalitet</p>
          <MailButton
            className="bg-orange-500 px-10 my-6 py-6"
            email="example@example.com"
            text="Kontakt oss"
          />
        </div>
      </section>
      <section className="py-8 px-4 flex flex-col lg:flex-row items-center gap-8">
        <div>
          <Image
            src="/suitman.png"
            width={500}
            height={500}
            alt="Picture of the author"
            className="m-0"
          />
        </div>
        <div>
          <h2>Les mer om Tysvær Bygg AS</h2>
          <p>
            Tysvær Bygg AS er et etablert byggefirma i Tysvær med ekspertise
            innen bolig- og næringsbygg. Vi leverer skreddersydde løsninger for
            ethvert prosjekt.
          </p>
          <p>
            selskapet ble grunnlagt i 2010 av erfarne håndverkere som ønsklet å
            tilby høy kvalitet og ålitelighet til lokalsamfunnet. Siden den gang
            har vi bygget et solid rykte.
          </p>
          <TextLinkButton
            className="text-orange-500"
            linkText="Les mer"
            url="/"
          />
        </div>
      </section>
      <section className="py-8 px-4 grid bg-gray-200 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <h2 className="col-span-full text-center text-2xl font-bold">
          Våre tjenester og løsninger
        </h2>
        <p className="col-span-full text-center mb-4">
          Utforsk vårt utvalg av bygg- og rehabiliteringstjenester skreddersydd
          for dine behov.
        </p>
        <div className="">
          <ServiceCard
            title="Rehablitering av bygninger"
            price="Fra 12.000 NOK/m²"
            url="/"
            linkText="Lær mer"
            imageSrc="/outsidehome.png"
            altText="Modern apartment exterior"
          />
        </div>
        <ServiceCard
          title="Komersielle prosjekter"
          price="Tilpasses etter forespørsel"
          url="/"
          linkText="Lær mer"
          imageSrc="/outsidehome.png"
          altText="Modern apartment exterior"
        />
        <ServiceCard
          title="Nybygg av boliger"
          price="Fra 15.000 NOK/m²"
          url="/"
          linkText="Lær mer"
          imageSrc="/outsidehome.png"
          altText="Modern apartment exterior"
        />
        <ServiceCard
          title="Tilbygg og ombygginger"
          price="Fra 10.000 NOK/m²"
          url="/"
          linkText="Lær mer"
          imageSrc="/outsidehome.png"
          altText="Modern apartment exterior"
        />
      </section>
      <section className="px-4 bg-gray-200 border-t py-6 border-gray-300 text-center">
        <h2>Er du klar til å starte prosjektet?</h2>
        <MailButton email="example@example.com" text="Kontakt oss" />
      </section>
      <section className="bg-black text-white px-4">
        <h2>Gratis konsulatjon om byggprosjekter</h2>
        <p>
          Vi tilbyr en gratis konusltasjon for å diskutere dine byggebehov og
          hvordan vi kan hjelpe deg.
        </p>
        <div>
          <h3>Nybygg</h3>
          <p>Skreddersydde nybygg for boliger og næringsbygg.</p>
        </div>
        <div className="border-t border-gray-300">
          <h3>Rehablitering</h3>
          <p>
            Rehabliteringstjenester for eksiterende bygninger med fokus på
            kjvalitet
          </p>
        </div>
        <div className="border-t border-gray-300">
          <h3>Tilbygg</h3>
          <p>Tilbygg som gir deg extra plass og funksjonalitet.</p>
        </div>
        <div className="border-t border-gray-300">
          <h3>Prosjektledelse</h3>
          <p>
            Vi tilbyr prosesjonell prosjektledelse for å sikre suksess i ditt
            byggeprosjekt.
          </p>
        </div>
      </section>
      <section className="px-4 bg-gray-200">
        <h2>Vår enkle prosess</h2>
        <p>
          Vi følger strukturert prosess for å sikre att ditt byggprosjekt
          gjennomføres på en effektiv måte.
        </p>
        <div className="border-t border-gray-300">
          <TextComponent>01</TextComponent>
          <h3>Konsultasjon</h3>
          <p>
            Vi starter med en konsultasjion for å forstå dine behov og ønsker
            for prosjektet.
          </p>
        </div>
        <div>
          <TextComponent>02</TextComponent>
          <h3>Planlegging</h3>
          <p>
            Vi lager en detaljert plan med tidslinje og kostnadoverslag for
            prosjektet.
          </p>
        </div>
        <div>
          <TextComponent>03</TextComponent>
          <h3>Utførelse</h3>
          <p>
            Etter godkjenning begynner vi arbeidet med høy kvbalitet of
            presisjon.
          </p>
        </div>
      </section>
      <section className="px-4">
        <div className="text-center">
          <h2>Kundeuttalelser</h2>
          <p>Hva våre kunder sier om oss</p>
        </div>
        <div>
          <p>
            Tysvær Bygg AS leverte et fantastisk resultat på vårt nybygg. De var
            profesjonelle, punktlige og veldig hjelopsomme gjennom hele
            prosessen!
          </p>
          <div>
            <p>Ola Hansen</p>
          </div>
        </div>
        <div>
          <p>
            Vi er veldig fornøyd med rehabiliteringen av vår eldre bolig. Tysvær
            Bygg AS gjorde en utmerket jobb og overgikk våre forventinger.
          </p>
          <div>
            <p>Kari Nilsen</p>
          </div>
        </div>
      </section>
      <section className=" py-8 text-center bg-hero-background text-white">
        <h2>Ta kontakt idag for en gratis byggekonsultasjon!</h2>
        <MailButton email="example@example.com" text="Kontakt oss" />{" "}
        <p className="text-3xl">eller</p>
        <p className="text-3xl">
          Ring: <a href="tel:+4740303053">40303053</a>
        </p>
      </section>
    </main>
  );
}
