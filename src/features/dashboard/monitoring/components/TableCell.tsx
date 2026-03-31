import { cva, VariantProps } from "class-variance-authority";

export const tableCellVariants = cva("", {
  variants: {
    variant: {
      // Celda de flecha expandible
      expandable: "px-2 py-1 text-center",

      // Celdas de datos principales
      primary:
        "px-2.5 py-2 text-[10px] text-[#0f1f14] font-semibold whitespace-nowrap",

      // Celdas de datos secundarios
      secondary: "px-2.5 py-2 text-[10px] text-[#7a9e8e]",

      // Celdas de datos muted
      muted: "px-2.5 py-2 text-[10px] text-[#3a5244]",

      // Celdas de datos grandes (hectares, amount)
      large: "px-2.5 py-2 text-[11px] text-[#0f1f14] font-bold",

      // Celdas de datos acento (amount)
      accent: "px-2.5 py-2 text-[11px] text-[#15803d] font-bold",

      // Celdas de advertencia (ndvi, alert)
      warning: "px-2.5 py-2 text-[10px] text-[#d97706] font-bold",

      // Celdas de error (ndviChange)
      error: "px-2.5 py-2 text-[10px] text-[#ef4444] font-semibold",

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
