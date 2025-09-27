export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        const response = await fetch(
            "https://script.google.com/macros/s/AKfycbwY1RfjiV99gsemO--yaW6b7jc66EWDxLA-zL57ZAzpMh2B3Md6WL0r68a5Ezhlqz03-Q/exec",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(req.body),
            }
        );

        const data = await response.json();

        res.status(200).json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error", error: err.message });
    }
}