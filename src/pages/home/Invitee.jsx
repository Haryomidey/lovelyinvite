import { motion } from "framer-motion";

const Invitee = ({ invitees }) => {
    return (
        <section
            id="invitees"
            className="relative py-20 bg-gradient-to-b from-white via-ivory/50 to-rose/10"
        >
            <div className="max-w-5xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="font-playfair text-4xl md:text-5xl font-bold text-rose mb-10"
                >
                    Our Special Guests
                </motion.h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {invitees.map((name, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="p-6 rounded-2xl shadow-md bg-white hover:shadow-xl transition flex items-center justify-center sm:text-lg font-semibold text-gray-800 border border-ivory/50"
                        >
                            {name}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Invitee;