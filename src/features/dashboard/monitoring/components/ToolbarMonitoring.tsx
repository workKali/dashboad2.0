'use client'
import { useState } from 'react'

// Reusable Input Component
const SearchInput = ({ placeholder, value, onChange }: {
    placeholder: string
    value: string
    onChange: (value: string) => void
}) => (
    <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 min-w-[160px] bg-transparent border border-gray-200 rounded-lg px-2.5 py-1 text-lg text-primary outline-none focus:border-green-600 transition-colors"
    />
)

// Reusable Select Component
const FilterSelect = ({ label, options, value, onChange }: {
    label: string
    options: { value: string; label: string }[]
    value: string
    onChange: (value: string) => void
}) => (
    <div className="flex items-center gap-1.5">
        <span className="text-base text-secondary font-medium">{label}:</span>
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="bg-white border border-gray-200 rounded-lg px-2 py-1 text-base text-primary outline-none cursor-pointer focus:border-green-600 transition-colors"
        >
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    </div>
)

export const ToolbarMonitoring = () => {
    const [searchValue, setSearchValue] = useState('')
    const [riskFilter, setRiskFilter] = useState('todos')
    const [activityFilter, setActivityFilter] = useState('todas')
    const [regionFilter, setRegionFilter] = useState('todas')
    const [sortBy, setSortBy] = useState('riesgo_desc')

    const riskOptions = [
        { value: 'todos', label: 'Todos' },
        { value: 'bajo', label: 'Bajo' },
        { value: 'medio', label: 'Medio' },
        { value: 'alto', label: 'Alto' }
    ]

    const activityOptions = [
        { value: 'todas', label: 'Todas' },
        { value: 'ganaderia', label: 'Ganadería' },
        { value: 'cultivos', label: 'Cultivos' }
    ]

    const regionOptions = [
        { value: 'todas', label: 'Todas' },
        { value: 'cajamarca', label: 'Cajamarca' },
        { value: 'la_libertad', label: 'La Libertad' },
        { value: 'lambayeque', label: 'Lambayeque' },
        { value: 'piura', label: 'Piura' }
    ]

    const sortOptions = [
        { value: 'riesgo_desc', label: 'Riesgo ↓' },
        { value: 'ndvi_asc', label: 'NDVI ↑ (peor primero)' },
        { value: 'ndvi_desc', label: 'NDVI ↓ (mejor primero)' },
        { value: 'cosecha_desc', label: 'P. Cosecha ↓' },
        { value: 'ha_desc', label: 'Ha ↓' },
        { value: 'finca_asc', label: 'Finca A–Z' }
    ]

    return (
        <div className="flex gap-2 items-center flex-wrap mb-2.5 bg-gray-50 border border-gray-200 rounded-xl p-2 px-3">
            <SearchInput
                placeholder="Buscar finca, productor, región…"
                value={searchValue}
                onChange={setSearchValue}
            />

            <FilterSelect
                label="Riesgo"
                options={riskOptions}
                value={riskFilter}
                onChange={setRiskFilter}
            />

            <FilterSelect
                label="Actividad"
                options={activityOptions}
                value={activityFilter}
                onChange={setActivityFilter}
            />

            <FilterSelect
                label="Región"
                options={regionOptions}
                value={regionFilter}
                onChange={setRegionFilter}
            />

            <FilterSelect
                label="Orden"
                options={sortOptions}
                value={sortBy}
                onChange={setSortBy}
            />

            <span className="text-base text-secondary ml-auto whitespace-nowrap">
                23 de 23 fincas
            </span>
        </div>
    )
}
