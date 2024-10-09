import { UserCircleIcon } from '@heroicons/react/24/outline';
import { useState, useEffect, useRef } from 'react';

interface Option {
    value: string;
    label: string;
}

interface SearchableSelectProps {
    id: string;
    name: string;
    options: Option[];
    placeholder: string;
    onSelect: (option: Option) => void;
}

const SearchableSelect: React.FC<SearchableSelectProps> = ({ id, name, options, placeholder, onSelect }) => {
    const [searchTerm, setSearchTerm] = useState<string>();
    const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    // Usamos ref para rastrear si se hace clic fuera del componente
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Manejar cambios en la búsqueda
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);
        setFilteredOptions(
            options.filter((option) =>
                option.label.toLowerCase().includes(value.toLowerCase())
            )
        );
        setSelectedOption(null); // Limpiar la opción seleccionada cuando el usuario empieza a escribir
    };

    // Manejar selección de opción
    const handleSelect = (option: Option) => {
        onSelect(option);
        setSelectedOption(option);
        setSearchTerm(option.label); // Establecer el valor seleccionado en el input
        setIsOpen(false); // Cierra la lista desplegable
    };

    // Mostrar todas las opciones cuando el input es enfocado
    const handleInputClick = () => {
        setFilteredOptions(options); // Restablecer todas las opciones
        setIsOpen(true); // Abrir el dropdown
    };

    // Detectar clics fuera del componente para cerrar el dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false); // Cerrar el dropdown si se hace clic fuera
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div className="relative" ref={dropdownRef}>
            <input
                id={id}
                name={name}
                type="text"
                placeholder={placeholder}
                defaultValue=""
                value={searchTerm} // Mostrar el término de búsqueda o la selección
                onClick={handleInputClick} // Cuando haces clic, restableces la lista
                onChange={handleSearchChange} // Cambios en el input
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 pr-10"
            />
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            {/* Triángulo simulado como el ícono de un select */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                {/* Flecha simulada */}
                <div className="w-0 h-0 border-l-4 border-r-4 border-transparent border-t-4 border-gray-500"></div>
            </div>
            {isOpen && (
                <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md max-h-60 overflow-y-auto shadow-lg">
                    {filteredOptions.length > 0 ? (
                        filteredOptions.map((option) => (
                            <li
                                key={option.value}
                                className="p-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleSelect(option)} // Seleccionar una opción
                            >
                                {option.label}
                            </li>
                        ))
                    ) : (
                        <li className="p-2 text-gray-500">No results found</li>
                    )}
                </ul>
            )}
        </div>
    );
};

export default SearchableSelect;
