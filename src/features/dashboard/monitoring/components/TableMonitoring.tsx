"use client";
import React, { useState } from "react";
import { clsx } from "clsx";
import { Collapse } from "@mui/material";

interface TableCellProps {
  children: React.ReactNode;
  className?: string;
  isCenter?: boolean;
  isCompact?: boolean;
}

const TableCell = ({
  children,
  className,
  isCenter,
  isCompact,
}: TableCellProps) => {
  return (
    <td
      className={clsx(
        isCompact ? "px-2 py-1" : "px-2.5 py-2",
        isCenter && "text-center",
        className,
      )}
    >
      {children}
    </td>
  );
};

interface NDVIScaleItemProps {
  color: string;
  label: string;
}

const NDVIScaleItem = ({ color, label }: NDVIScaleItemProps) => {
  return (
    <div className="flex items-center gap-[2px]">
      <div
        className={clsx("w-2 h-2 rounded-[1px]", `bg-[rgb(${color})]`)}
      ></div>
      <span className="text-[7px] text-[rgb(122,158,142)] font-poppins">
        {label}
      </span>
    </div>
  );
};

interface SatelliteImageProps {
  imageUrl?: string;
  date?: string;
}

const SatelliteImage = ({
  imageUrl = undefined,
  date = "2024-05-15",
}: SatelliteImageProps) => {
  return (
    <div className="shrink-0 flex flex-col gap-1">
      <p className="m-0 text-[8.5px] font-semibold text-[rgb(122,158,142)] font-poppins uppercase tracking-[0.05em]">
        Imagen Satelital NDVI
      </p>
      <div className="relative w-[140px] h-[110px] rounded-[6px] overflow-hidden bg-[rgb(239,246,255)] border border-[rgb(191,219,254)]">
        <img
          alt="NDVI"
          srcSet={imageUrl}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.45)] p-[2px_5px] flex justify-between items-center">
          <span className="text-[7.5px] text-white font-poppins font-semibold">
            NDVI
          </span>
          <span className="text-[7.5px] text-[rgb(170,238,255)] font-poppins">
            {date}
          </span>
        </div>
      </div>
      <div className="flex gap-0.75 items-center">
        {[
          { color: "200,230,201", label: "0" },
          { color: "129,199,132", label: "0.3" },
          { color: "46,125,50", label: "0.6" },
          { color: "27,94,32", label: "0.9+" },
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-0.5">
            <div
              className={clsx(
                "w-2 h-2 rounded-[1px]",
                `bg-[rgb(${item.color})]`,
              )}
            ></div>
            <span className="text-[7px] text-[rgb(122,158,142)] font-poppins">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

interface SatelliteHistoryTableProps {}

const SatelliteHistoryTable = ({}: SatelliteHistoryTableProps) => {
  return (
    <table className="w-full border-collapse min-w-[580px]">
      <thead>
        <tr>
          <th className="text-left text-[8px] font-bold text-[rgb(122,158,142)] font-poppins uppercase tracking-[0.05em] p-2 border-b border-[rgb(191,219,254)] whitespace-nowrap">
            Fecha
          </th>
          <th className="text-left text-[8px] font-bold text-[rgb(122,158,142)] font-poppins uppercase tracking-[0.05em] p-2 border-b border-[rgb(191,219,254)] whitespace-nowrap">
            Fase Fenológica
          </th>
          <th className="text-left text-[8px] font-bold text-[rgb(122,158,142)] font-poppins uppercase tracking-[0.05em] p-2 border-b border-[rgb(191,219,254)] whitespace-nowrap">
            Estado Salud
          </th>
          <th className="text-left text-[8px] font-bold text-[rgb(122,158,142)] font-poppins uppercase tracking-[0.05em] p-2 border-b border-[rgb(191,219,254)] whitespace-nowrap">
            NDVI
          </th>
          <th className="text-left text-[8px] font-bold text-[rgb(122,158,142)] font-poppins uppercase tracking-[0.05em] p-2 border-b border-[rgb(191,219,254)] whitespace-nowrap">
            Δ NDVI
          </th>
          <th className="text-left text-[8px] font-bold text-[rgb(122,158,142)] font-poppins uppercase tracking-[0.05em] p-2 border-b border-[rgb(191,219,254)] whitespace-nowrap">
            Rend. Est.
          </th>
          <th className="text-left text-[8px] font-bold text-[rgb(122,158,142)] font-poppins uppercase tracking-[0.05em] p-2 border-b border-[rgb(191,219,254)] whitespace-nowrap">
            P. Cosecha
          </th>
          <th className="text-left text-[8px] font-bold text-[rgb(122,158,142)] font-poppins uppercase tracking-[0.05em] p-2 border-b border-[rgb(191,219,254)] whitespace-nowrap">
            Alerta
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-transparent border-l-2 border-[rgb(248,113,113)]">
          <td className="p-2 text-[9.5px] font-poppins text-[rgb(58,82,68)] whitespace-nowrap font-semibold">
            2024-09-15
          </td>
          <td className="p-2 text-[9.5px] font-poppins text-[rgb(58,82,68)] whitespace-nowrap">
            Desarrollo
          </td>
          <td className="p-2">
            <span className="bg-[rgba(217,119,6,0.133)] text-[rgb(217,119,6)] rounded px-1.5 py-0.5 text-[9px] font-poppins font-semibold whitespace-nowrap">
              Requiere atención
            </span>
          </td>
          <td className="p-2 text-[9.5px] font-poppins text-[rgb(58,82,68)] font-bold">
            0.540
          </td>
          <td className="p-2 text-[9.5px] font-poppins text-[rgb(220,38,38)] font-bold">
            -16
          </td>
          <td className="p-2 text-[9.5px] font-poppins text-[rgb(58,82,68)]">
            5.8 t/ha
          </td>
          <td className="p-2">
            <span className="bg-[rgb(254,243,199)] text-[rgb(180,83,9)] rounded px-1.5 py-0.5 text-[9px] font-poppins font-bold">
              64%
            </span>
          </td>
          <td className="p-2">
            <span className="bg-[rgb(254,226,226)] text-[rgb(220,38,38)] rounded px-1.5 py-0.5 text-[9px] font-poppins font-semibold whitespace-nowrap">
              ⚠ Déficit hídrico severo
            </span>
          </td>
        </tr>
        <tr className="bg-[rgba(59,130,246,0.04)] border-l-2 border-[rgb(248,113,113)]">
          <td className="p-2 text-[9.5px] font-poppins text-[rgb(58,82,68)] whitespace-nowrap font-semibold">
            2024-09-01
          </td>
          <td className="p-2 text-[9.5px] font-poppins text-[rgb(58,82,68)] whitespace-nowrap">
            Establecimiento
          </td>
          <td className="p-2">
            <span className="bg-[rgba(34,197,94,0.133)] text-[rgb(34,197,94)] rounded px-1.5 py-0.5 text-[9px] font-poppins font-semibold whitespace-nowrap">
              Bueno
            </span>
          </td>
          <td className="p-2 text-[9.5px] font-poppins text-[rgb(58,82,68)] font-bold">
            0.620
          </td>
          <td className="p-2 text-[9.5px] font-poppins text-[rgb(220,38,38)] font-bold">
            -6
          </td>
          <td className="p-2 text-[9.5px] font-poppins text-[rgb(58,82,68)]">
            6.8 t/ha
          </td>
          <td className="p-2">
            <span className="bg-[rgb(254,243,199)] text-[rgb(180,83,9)] rounded px-1.5 py-0.5 text-[9px] font-poppins font-bold">
              78%
            </span>
          </td>
          <td className="p-2">
            <span className="bg-[rgb(254,226,226)] text-[rgb(220,38,38)] rounded px-1.5 py-0.5 text-[9px] font-poppins font-semibold whitespace-nowrap">
              ⚠ Estrés hídrico leve
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

interface NDVIEvolutionProps {}

const NDVIEvolution = ({}: NDVIEvolutionProps) => {
  return (
    <div className="shrink-0">
      <p className="m-0 mb-1 text-[8.5px] font-semibold text-[rgb(122,158,142)] font-poppins uppercase tracking-[0.05em]">
        Evolución NDVI
      </p>
    </div>
  );
};

interface ExpandedRowProps {
  producer: string;
  farm: string;
}

const ExpandedRow = ({ producer, farm }: ExpandedRowProps) => {
  return (
    <tr className="bg-[rgb(239,246,255)] animate-in slide-in-from-top-2 duration-300">
      <td colSpan={20} className="p-0">
        <div className="py-3 px-4 border-y border-[rgb(191,219,254)]">
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="text-[10px] font-bold text-[rgb(37,99,235)] font-poppins uppercase tracking-[0.07em]">
              📡 Historial Satelital — {producer} · {farm}
            </span>
            <span className="text-[10px] text-[rgb(122,158,142)] font-poppins">
              2 revisiones
            </span>
            <button className="ml-auto bg-[rgb(239,246,255)] border border-[rgb(147,197,253)] rounded-[7px] px-2.5 py-0.5 text-[9.5px] font-semibold text-[rgb(37,99,235)] font-poppins cursor-pointer flex items-center gap-1.5 hover:bg-[rgb(219,234,254)] transition-colors">
              Ver ficha completa →
            </button>
          </div>

          <div className="flex gap-4 items-start">
            <SatelliteImage />

            <NDVIEvolution />

            <div className="flex-1 overflow-x-auto">
              <SatelliteHistoryTable />
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

const TableMonitoring = () => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const handleRowClick = (id: number) => {
    if (expandedRow === id) {
      setExpandedRow(null);
    } else {
      setExpandedRow(id);
    }
  };

  const getHealthStatusBadge = (status: string, color: string) => {
    const colorClasses = {
      optimal: "bg-[rgba(34,197,94,0.133)] text-[#22c55e]",
      good: "bg-[rgba(59,130,246,0.133)] text-[#3b82f6]",
      warning: "bg-[rgba(217,119,6,0.133)] text-[#d97706]",
    };
    return (
      <span
        className={`${colorClasses[color as keyof typeof colorClasses]} rounded-md px-2 py-0.5 text-[10px] font-semibold`}
      >
        {status}
      </span>
    );
  };

  const getRiskBadge = (risk: string, color: string) => {
    const colorClasses = {
      low: "text-[#22c55e]",
      medium: "text-[#d97706]",
      high: "text-[#dc2626]",
    };
    return (
      <span
        className={`${colorClasses[color as keyof typeof colorClasses]} text-[10px] font-poppins font-semibold`}
      >
        {risk}
      </span>
    );
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse font-poppins min-w-225">
        <thead>
          <tr>
            {tableHeaders.map((header, index) => (
              <TableCell
                key={header + index}
                className="text-left text-[8.5px] font-semibold text-[#7a9e8e] uppercase tracking-[0.05em] border-b border-[#e1e8e7] bg-[#f8faf9] whitespace-nowrap"
              >
                {header}
              </TableCell>
            ))}
          </tr>
        </thead>
        <tbody>
          {mockData.map((row) => (
            <React.Fragment key={row.id}>
              <tr
                key={row.id}
                className={clsx(
                  "border-b border-[#e1e8e7] cursor-pointer border-l-[3px] border-l-[#f87171]",
                  {
                    "bg-[rgba(239,68,68,0.07)] hover:bg-[rgba(0,0,0,0.03)]":
                      expandedRow !== row.id,
                    "bg-[rgb(239,246,255)] hover:bg-[rgb(219,234,254)]":
                      expandedRow === row.id,
                  },
                )}
                onClick={() => handleRowClick(row.id)}
              >
                <TableCell isCenter isCompact>
                  <span
                    className={clsx(
                      "inline-block text-[#7a9e8e] text-[10px] px-1 font-poppins select-none transition-transform duration-200 ease-in-out",
                      expandedRow === row.id && "rotate-90",
                    )}
                  >
                    ▶
                  </span>
                </TableCell>
                <TableCell className="text-[10px] text-[#0f1f14] font-semibold whitespace-nowrap">
                  {row.producer}
                </TableCell>
                <TableCell className="text-[10px] text-[#7a9e8e]">
                  {row.phone}
                </TableCell>
                <TableCell className="text-[10px] text-[#0f1f14] font-semibold">
                  {row.farm}
                </TableCell>
                <TableCell className="text-[10px] text-[#3a5244]">
                  {row.region}
                </TableCell>
                <TableCell className="text-[10px] text-[#3a5244]">
                  {row.activity}
                </TableCell>
                <TableCell className="text-[11px] text-[#0f1f14] font-bold">
                  {row.hectares}
                </TableCell>
                <TableCell className="text-[11px] text-[#15803d] font-bold">
                  {row.amount}
                </TableCell>
                <TableCell className="text-[10px] text-[#3a5244]">
                  {row.phenologicalPhase}
                </TableCell>
                <TableCell>
                  {getHealthStatusBadge(
                    row.healthStatus,
                    row.healthStatusColor,
                  )}
                </TableCell>
                <TableCell className="text-[10px] text-[#d97706] font-bold">
                  {row.ndvi}
                </TableCell>
                <TableCell className="text-[10px] text-[#ef4444] font-semibold">
                  {row.ndviChange}
                </TableCell>
                <TableCell className="text-[10px] text-[#3a5244]">
                  {row.detectedArea}
                </TableCell>
                <TableCell className="text-[10px] text-[#3a5244]">
                  {row.estimatedYield}
                </TableCell>
                <TableCell>
                  <span className="bg-[#fef3c7] text-[#b45309] rounded-md px-2 py-0.5 text-[10px] font-bold">
                    {row.harvestProbability}
                  </span>
                </TableCell>
                <TableCell className="text-[10px] text-[#b45309]">
                  {row.alert}
                </TableCell>
                <TableCell>{getRiskBadge(row.risk, row.riskColor)}</TableCell>
                <TableCell className="text-[10px] text-[#3a5244]">
                  {row.cycleStart}
                </TableCell>
                <TableCell className="text-[10px] text-[#3a5244]">
                  {row.cycleEnd}
                </TableCell>
                <TableCell isCenter isCompact>
                  <button
                    title="Ver ficha completa"
                    className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-md px-1.5 py-0.5 text-[9.5px] font-semibold text-[#15803d] font-poppins cursor-pointer whitespace-nowrap hover:bg-[#dcfce7] transition-colors"
                  >
                    ↗ Ficha
                  </button>
                </TableCell>
              </tr>

              {expandedRow === row.id && (
                <ExpandedRow producer={row.producer} farm={row.farm} />
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TableMonitoring;

// Mock data array with all table cell values
const mockData = [
  {
    id: 1,
    producer: "Aurelio Cotrina",
    phone: "967-111-234",
    farm: "Finca Arrocera Trujillo",
    region: "La Libertad",
    activity: "Arroz",
    hectares: "620",
    amount: "$26.5M",
    phenologicalPhase: "Máximo vigor",
    healthStatus: "Requiere atención",
    healthStatusColor: "warning",
    ndvi: "0.500",
    ndviChange: "-22%",
    ndviChangeColor: "negative",
    detectedArea: "608 ha",
    estimatedYield: "5.2 t/ha",
    harvestProbability: "61%",
    alert: "Déficit hídrico severo",
    risk: "Alto",
    riskColor: "high",
    cycleStart: "2024-02-15",
    cycleEnd: "2024-07-30",
  },
  {
    id: 2,
    producer: "Carlos Mendoza",
    phone: "987-654-321",
    farm: "Finca Agrícola Piura",
    region: "Piura",
    activity: "Ganadería",
    hectares: "450",
    amount: "$18.2M",
    phenologicalPhase: "Crecimiento activo",
    healthStatus: "Óptimo",
    healthStatusColor: "optimal",
    ndvi: "0.750",
    ndviChange: "+5%",
    ndviChangeColor: "positive",
    detectedArea: "445 ha",
    estimatedYield: "3.8 t/ha",
    harvestProbability: "78%",
    alert: "Sin alertas",
    risk: "Bajo",
    riskColor: "low",
    cycleStart: "2024-01-10",
    cycleEnd: "2024-06-15",
  },
  {
    id: 3,
    producer: "María López",
    phone: "945-234-567",
    farm: "Finca Mixta Lambayeque",
    region: "Lambayeque",
    activity: "Cultivos",
    hectares: "320",
    amount: "$12.8M",
    phenologicalPhase: "Floración",
    healthStatus: "Bueno",
    healthStatusColor: "good",
    ndvi: "0.650",
    ndviChange: "-8%",
    ndviChangeColor: "negative",
    detectedArea: "315 ha",
    estimatedYield: "4.5 t/ha",
    harvestProbability: "72%",
    alert: "Estrés hídrico moderado",
    risk: "Medio",
    riskColor: "medium",
    cycleStart: "2024-03-01",
    cycleEnd: "2024-08-20",
  },
];

const tableHeaders = [
  "",
  "Productor",
  "Teléfono",
  "Finca",
  "Región",
  "Actividad",
  "Ha",
  "Monto",
  "Fase Fenológica",
  "Estado Salud",
  "NDVI",
  "Δ NDVI",
  "Área Det.",
  "Rend. Est.",
  "P. Cosecha",
  "Alerta",
  "Riesgo",
  "Inicio Ciclo",
  "Fin Ciclo",
  "",
];
