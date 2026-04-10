import { VariantProps } from "class-variance-authority";
import textVariants from "./text.variants";

type TextVariants = VariantProps<typeof textVariants>;

export const textPresets = {
    label: {
        variant: 'heading',
        intent: 'secondary',
        weight: 'semibold'
    }
} satisfies Record<string, TextVariants>
