import { cva, VariantProps } from "class-variance-authority";

export const tableCellVariants = cva("", {
  variants: {
    variant: {
      // Celda de flecha expandible
      expandable: "px-2 py-1 text-center",

      // Celdas de datos principales
      primary:
        "px-2.5 py-2 text-base text-primary font-semibold whitespace-nowrap",

      // Celdas de datos secundarios
      secondary: "px-2.5 py-2 text-base text-secondary",

      // Celdas de datos muted
      muted: "px-2.5 py-2 text-base text-muted",

      // Celdas de datos grandes (hectares, amount)
      large: "px-2.5 py-2 text-xl text-primary font-bold",

      // Celdas de datos acento (amount)
      accent: "px-2.5 py-2 text-xl text-accent font-bold",

      // Celdas de advertencia (ndvi, alert)
      warning: "px-2.5 py-2 text-base text-warning font-bold",

      // Celdas de error (ndviChange)
      error: "px-2.5 py-2 text-base text-error font-semibold",

      // Celda de botones
      button: "px-2 py-1 text-center",

      // Celda de badges
      badge: "px-2.5 py-2",
    },
  },
});

interface TableCellProps extends VariantProps<typeof tableCellVariants> {
  children: React.ReactNode;
}

const TableCell = ({ variant, children }: TableCellProps) => {
  return <td className={tableCellVariants({ variant })}>{children}</td>;
};

export default TableCell;
