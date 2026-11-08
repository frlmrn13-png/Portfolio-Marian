import { ui } from '../content'
import { PageShell } from '../ds/layouts/PageShell'
import { Boton } from '../ds/atoms/Boton'
import { Icono } from '../ds/atoms/Icono'
import p from '../ds/layouts/PageShell.module.css'
import { Link, paths, type PageName } from '../lib/router'
import s from './NoEncontrado.module.css'

/** Dirección que no existe: una hoja rasgada que lo dice y las cuatro secciones para seguir. */
export function NoEncontrado() {
  const t = ui.noEncontrado
  const secciones: PageName[] = ['inicio', 'sobre-mi', 'casos', 'contacto']
  return (
    <PageShell numero="404">
      <section className={s.hoja} aria-labelledby="titulo">
        <span className={p.tape} style={{ left: '14%', top: -14, width: 96, height: 30, rotate: '-5deg' }} />
        <p className={s.rotulo}>{t.rotulo}</p>
        <h1 id="titulo" className={s.titulo}>
          {t.h1[0]} <span>{t.h1[1]}</span>
        </h1>
        <p className={s.texto}>{t.texto}</p>
        <nav aria-label={ui.secciones}>
          <ul className={s.secciones}>
            {secciones.map(k => (
              <li key={k}>
                {k === 'inicio' ? (
                  <Boton to={paths[k]} icono="siguiente">
                    {ui.menu[k]}
                  </Boton>
                ) : (
                  <Link to={paths[k]} className={s.enlace}>
                    {ui.menu[k]}
                    <Icono nombre="siguiente" />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <p className={`${p.note} ${s.nota}`}>
        {t.nota.map(l => (
          <span key={l}>{l}</span>
        ))}
      </p>
    </PageShell>
  )
}
