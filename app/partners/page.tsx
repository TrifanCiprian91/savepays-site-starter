import LogoMarquee from '@/components/LogoMarquee'
import PartnerPlan from '@/components/PartnerPlan'

export default function PartnersPage() {
  return (
    <>
      <section className="container-max py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Partenerii <span className="text-babyblue">SavePays</span>
        </h1>
        <p className="mt-3 text-gray-600 max-w-2xl">
          Reducem costurile cu hârtia, simplificăm fluxurile și creștem loialitatea clienților. 
          Alege planul potrivit și hai să pornim pilotul.
        </p>
        <div className="mt-8">
          <LogoMarquee />
        </div>
      </section>

      <PartnerPlan />

      <section className="container-max py-12 text-center">
        <div className="inline-flex flex-col items-center justify-center gap-3 rounded-2xl p-6 md:p-8 bg-grayui">
          <div className="text-lg font-semibold">Ai întrebări?</div>
          <div className="text-gray-600">Scrie-ne – îți răspundem în aceeași zi lucrătoare.</div>
          <a href="/contact" className="btn">Contactează-ne</a>
        </div>
      </section>
    </>
  )
}
