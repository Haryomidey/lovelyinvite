import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, X, ChevronLeft, ChevronRight } from "lucide-react";
import { images } from "../../assets/images";

const PreWeddingShoot = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const preWeddingImages = [
        images.preWedMain,
        images.preWed3,
        images.preWed1,
        images.preWed5,
        images.preWed4,
    ];

    const handlePrev = () => {
        setSelectedIndex((prev) =>
            prev === 0 ? preWeddingImages.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setSelectedIndex((prev) =>
            prev === preWeddingImages.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <section
            id="pre-wedding"
            className="relative bg-gradient-to-b from-pink-50 via-rose-50 to-white py-20 overflow-hidden"
        >
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
                    className="text-4xl md:text-5xl great-vibes text-rose font-bold mb-12"
                >
                    Pre Wedding Shoot ❤️
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {preWeddingImages.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="relative group cursor-pointer"
                            onClick={() => setSelectedIndex(index)}
                        >
                            <img
                                src={src}
                                alt={`Pre wedding ${index + 1}`}
                                className="w-full h-72 object-cover rounded-3xl shadow-xl border-4 border-white transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                className="absolute inset-0 bg-rose-500/20 rounded-3xl flex items-center justify-center"
                            >
                                <Sparkles className="text-white" size={40} />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            key={selectedIndex}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative max-w-4xl w-full px-4"
                        >
                            <button
                                onClick={() => setSelectedIndex(null)}
                                className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black"
                            >
                                <X size={28} />
                            </button>

                            <img
                                src={preWeddingImages[selectedIndex]}
                                alt="Selected"
                                className="w-full max-h-[80vh] object-contain rounded-2xl"
                            />

                            <button
                                onClick={handlePrev}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 p-2 rounded-full hover:bg-black"
                            >
                                <ChevronLeft size={32} />
                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 p-2 rounded-full hover:bg-black"
                            >
                                <ChevronRight size={32} />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default PreWeddingShoot;