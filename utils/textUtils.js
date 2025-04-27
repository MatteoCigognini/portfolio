export default function formatText(text) {
    // Suddivide il testo per trovare i segmenti tra ** e gli altri
    const parts = text.split(/(\*\*.*?\*\*)/);

    return parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
            // Rimuove ** e avvolge il testo in <strong>
            return (
                <strong key={index}>
                    {part.slice(2, -2)}
                </strong>
            );
        }
        // Restituisce il resto del testo come normale
        return part;
    });
}