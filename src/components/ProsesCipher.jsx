export const ProsesCipher = ({
    PlainText,
    keyValue,
    cipher,
    ascii = [],
    shifted = [],
}) => {

    const text = PlainText || ""

    return (
        <div className="process-wrapper">

            <div className="process-summary">

                <div className="process-value">
                    <span>Plaintext</span>
                    <strong>
                        {text || "-"}
                    </strong>
                </div>

                <div className="process-arrow">
                    →
                </div>

                <div className="process-value">
                    <span>Key</span>
                    <strong>
                        {keyValue || "0"}
                    </strong>
                </div>

                <div className="process-arrow">
                    →
                </div>

                <div className="process-value result">
                    <span>Ciphertext</span>
                    <strong>
                        {cipher || "-"}
                    </strong>
                </div>

            </div>


            <div className="character-grid">

                {[
                    ...text.toUpperCase(),
                ].map((char, index) => {

                    const originalCode =
                        ascii[index]

                    const shiftedCode =
                        shifted[index]

                    const output =
                        cipher?.[index] || char

                    return (
                        <div
                            className="character-card"
                            key={`${char}-${index}`}
                        >

                            <div className="character-position">
                                Character {index + 1}
                            </div>

                            <div className="character-original">
                                {char === " "
                                    ? "SPACE"
                                    : char}
                            </div>

                            <div className="character-arrow">
                                ↓
                            </div>

                            <div className="character-detail">

                                <div>
                                    <span>
                                        ASCII
                                    </span>

                                    <strong>
                                        {originalCode ?? "-"}
                                    </strong>
                                </div>

                                <div>
                                    <span>
                                        Shifted
                                    </span>

                                    <strong>
                                        {shiftedCode ?? "-"}
                                    </strong>
                                </div>

                            </div>

                            <div className="character-result">
                                {output}
                            </div>

                        </div>
                    )
                })}

            </div>

        </div>
    )
}