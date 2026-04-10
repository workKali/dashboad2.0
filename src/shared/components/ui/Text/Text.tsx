import { cn } from "@/shared/utils/cn";
import textVariants from "./text.variants";
import { textPresets } from "./text.presets";
import { VariantProps } from "class-variance-authority";

export interface TypographyProps extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
    as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'th';
    preset?: keyof typeof textPresets;
}

export const Text = ({
    as: Component = 'span',
    variant,
    intent,
    weight,
    transform,
    className,
    preset,
    tracking,
    ...props
}: TypographyProps) => {

    const presetStyles = preset ? textPresets[preset] : {};

    return (
        <Component
            className={cn(textVariants({ ...presetStyles, variant, intent, weight, transform, tracking }), className)}
            {...props}
        />
    );
};

export default Text