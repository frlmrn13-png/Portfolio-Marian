import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from '../../lib/router'
import { Icono, type NombreIcono } from './Icono'
import b from './Boton.module.css'

type Comun = {
  children: ReactNode
  /** Icono detrás del texto */
  icono?: NombreIcono
  /** Clase de la pieza que lo usa (márgenes, giro, tamaño propio) */
  className?: string
  /**
   * «normal»: tamaño e interacciones del átomo (50px de alto, se levanta al
   * pasar y se hunde al pulsar). «material»: solo el material granate; el
   * tamaño y el movimiento los pone `className` (botones de la mesa, en unidades).
   */
  tamano?: 'normal' | 'material'
}

type Props =
  | (Comun & { to: string })
  | (Comun & { href: string })
  | (Comun & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'>)

/**
 * Átomo Boton: el botón granate, la única llamada principal del design system.
 * Con `to` es un enlace interno, con `href` un enlace que se abre en otra
 * pestaña y, si no, un <button>.
 */
export function Boton(props: Props) {
  const { children, icono, className = '', tamano = 'normal' } = props
  const clase = `${tamano === 'normal' ? b.boton : 'boton-granate'} ${className}`.trim()
  const contenido = (
    <>
      {children}
      {icono && <Icono nombre={icono} />}
    </>
  )
  if ('to' in props) {
    return (
      <Link to={props.to} className={clase}>
        {contenido}
      </Link>
    )
  }
  if ('href' in props) {
    return (
      <a className={clase} href={props.href} target="_blank" rel="noopener noreferrer">
        {contenido}
      </a>
    )
  }
  const { children: _c, icono: _i, className: _cl, tamano: _t, type = 'button', ...resto } = props
  return (
    <button type={type} className={clase} {...resto}>
      {contenido}
    </button>
  )
}
