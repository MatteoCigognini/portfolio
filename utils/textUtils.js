export default function formatText(text) {
    // Suddivide il testo per trovare i segmenti tra ** e gli altri
    const parts = text.split(/(\*\*.*?\*\*)/);

    return parts.flatMap((part, index) => {
        // Rimuove ** e avvolge il testo in <strong>
        if (part.startsWith("**") && part.endsWith("**")) {
            return (
                <strong key={index}>
                    {part.slice(2, -2)}
                </strong>
            );
        }

        // Gestione delle newline nei segmenti normali
        const lines = part.split("\n");

        return lines.flatMap((line, lineIndex) => [
            line,
            // Aggiunge <br /> dopo ogni riga tranne l'ultima
            lineIndex < lines.length - 1 ? <br key={`${index}-${lineIndex}`} /> : null
        ]);
    });
}
