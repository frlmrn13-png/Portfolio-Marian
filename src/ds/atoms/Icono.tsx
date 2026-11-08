/**
 * Átomo Icono: los iconos de línea del design system, en una caja de 24 × 24.
 * El trazo (grosor, color, puntas redondas) lo pone quien lo usa, como el
 * botón granate. Son decorativos: el texto del enlace o botón ya los nombra.
 */
const trazos = {
  /** Flecha hacia delante: seguir, abrir, siguiente */
  siguiente: 'M5 12h13M13 6.5 18.5 12 13 17.5',
  /** Flecha hacia atrás: volver, anterior */
  anterior: 'M19 12H6M11 6.5 5.5 12 11 17.5',
  /** Flecha en diagonal: se abre fuera (pestaña nueva, correo) */
  externo: 'M7 17 17 7M9 7h8v8',
  /** Encender: pone en marcha un prototipo dentro de su marco */
  encender: 'M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0',
} as const

export type NombreIcono = keyof typeof trazos

export function Icono({ nombre, className }: { nombre: NombreIcono; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d={trazos[nombre]} />
    </svg>
  )
}
