/**
 * @file translationRichText.jsx
 * @module translationRichText
 * @desc Shared rich text components for next-intl translations.
 *
 * @author Chace Nielson
 * @created July 7, 2026
 * @updated July 7, 2026 by Chace Nielson - added shared translation rich text components
 */

export function BoldText({ children }) {
    return (
        <span className="text-tertiary font-semibold">
            {children}
        </span>
    );
}

export function getRichTextComponents() {
    return {
        bold: (chunks) => (
            <BoldText>
                {chunks}
            </BoldText>
        ),
        link: (chunks) => (
            <a
                href="#"
                className="text-tertiary underline hover:opacity-80"
            >
                {chunks}
            </a>
        )
    };
}