import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { images } from "../../assets/images";

const OurStory = () => {
    const [showFullStory, setShowFullStory] = useState(false);

    return (
        <section id="story" className="relative bg-gradient-to-b from-pink-50 via-rose-50 to-white pt-20 pb-40 overflow-hidden">
            <motion.div
                className="absolute top-10 left-10 text-rose/40"
                initial={{ y: 0 }}
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity }}
            >
                <Heart size={50} />
            </motion.div>
            <motion.div
                className="absolute bottom-10 right-12 text-rose/40"
                initial={{ y: 0 }}
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity }}
            >
                <Sparkles size={55} />
            </motion.div>

            <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl great-vibes text-rose font-bold mb-10"
                >
                    Our Love Story ❤️
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <img
                            src={images.preWed2}
                            alt="our story"
                            className="rounded-3xl shadow-2xl border-4 border-white transform hover:scale-105 transition-transform duration-500"
                        />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 0.5, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute -top-4 -right-4 text-rose"
                        >
                            <Sparkles size={40} />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-left"
                    >
                        <div className="text-gray-700 text-3xl font-semibold leading-relaxed great-vibes">
                            ✨ The most beautiful part of my life is that I get to marry the love of my heart… 💍❤
                                <br />
                                "Medese.."
                                <br />
                                💫 My Love, Remember today for it marks the start of our Forever
                                <br />
                                "Timilehin.."
                                <br />
                            </div>

                        {showFullStory && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                className="mt-4 text-gray-700 text-lg leading-relaxed"
                            >
                                We've grown together, celebrated victories, and supported each other
                                through challenges. Every step brought us closer, and now, we're ready
                                to begin the biggest adventure of all -{" "}
                                <span className="text-rose font-semibold">marriage 💍</span>.  
                                Surrounded by those we love, we can't wait to say *I do*.
                            </motion.p>
                        )}

                        {/* <motion.button
                            onClick={() => setShowFullStory(!showFullStory)}
                            whileTap={{ scale: 0.95 }}
                            className="mt-5 px-5 py-2 rounded-full bg-rose text-white font-medium hover:bg-rose/90 shadow-lg transition duration-300"
                        >
                            {showFullStory ? "Read Less" : "Read More"}
                        </motion.button> */}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
