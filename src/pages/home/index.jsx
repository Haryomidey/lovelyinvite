import { images } from "../../assets/images"
import CountdownTimer from "./CountdownTimer"
import EventDetails from "./EventDetails"
import Gallery from "./Gallery"
import Header from "./Header"
import Hero from "./Hero"
import OurStory from "./OurStory"
import PreWeddingShoot from "./PreWeddingShoot"
import RSVP from "./RSVP"
import ThankYou from "./ThankYou"


const WeddingInvite = () => {
    const weddingDate = new Date(2025, 9, 24, 17, 0, 0);

    return (
        <div className="min-h-screen font-montserrat bg-gradient-to-b from-ivory to-white">
            <Header />

            <main>
                <Hero
                    names="Medese & Timilehin"
                    date={weddingDate}
                    coverImg={images.coupleMain}
                />
                <CountdownTimer targetDate={weddingDate} />
                <EventDetails
                    venue="Oral Estate, Lagos"
                    time={weddingDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    address="Main House, 24C, Abiola Apooyin, Oral Estate. Lagos"
                    dressCode="white/black or ash"
                />
                <PreWeddingShoot />
                <OurStory />
                <Gallery />
                <RSVP />
                <ThankYou
                    venue="Oral Estate, Lagos"
                    date={weddingDate}
                    address="Main House, 24C, Abiola Apooyin, Oral Estate. Lagos"
                    dressCode="white/black or ash"
                />
            </main>
        </div>
    )
}

export default WeddingInvite