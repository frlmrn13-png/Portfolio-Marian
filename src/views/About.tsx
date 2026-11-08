import retrato from '../assets/img/retrato-bn.webp'
import { pages, sobreMi, ui } from '../content'
import { CarpetaHerramientas, Diplomas, FicheroExperiencia, PostIt } from '../ds/organisms/Archivo'
import { PageShell } from '../ds/layouts/PageShell'
import { paths } from '../lib/router'
import { Boton } from '../ds/atoms/Boton'
import p from '../ds/layouts/PageShell.module.css'
import s from './About.module.css'

/**
 * Sobre mí en columna (móvil y tableta): presentación en una hoja y los
 * mismos objetos que en escritorio (cajón, carpeta y diplomas), uno debajo de otro.
 */
export function About() {
  const page = pages['sobre-mi']
  return (
    <PageShell numero={page.numero}>
      <div className={s.layout}>
        <section className={s.main} aria-labelledby="titulo">
          <span className={p.tape} style={{ left: '8%', top: -14, width: 96, height: 30, rotate: '-6deg' }} />
          <figure className={s.retrato}>
            <img src={retrato} alt="Marian López Solís" />
          </figure>
          <p className={p.eyebrow}>{ui.sobreMi}</p>
          <h1 id="titulo" className={`${p.title} ${s.title}`}>
            {sobreMi.nombre}
          </h1>
          <p className={s.rol}>{sobreMi.rol}</p>
          <p className={`${p.lead} ${s.gancho}`}>
            {sobreMi.gancho[0]} <strong>{sobreMi.gancho[1]}</strong>
          </p>
          <p className={p.lead}>{sobreMi.lead}</p>
        </section>

        <section className={s.objeto} aria-labelledby="trayectoria">
          <h2 id="trayectoria" className="sr-only">
            {ui.dondeHeTrabajado}
          </h2>
          <FicheroExperiencia />
        </section>

        <section className={s.objeto} aria-labelledby="herramientas">
          <h2 id="herramientas" className="sr-only">
            {ui.herramientasYSoftware}
          </h2>
          <CarpetaHerramientas />
        </section>

        <section className={s.objeto} aria-labelledby="formacion">
          <PostIt id="formacion" className={s.postit}>
            {ui.estudiado}
          </PostIt>
          <Diplomas />
        </section>

        <Boton to={paths.casos} className={s.cta} icono="siguiente">
          {sobreMi.boton}
        </Boton>
      </div>
    </PageShell>
  )
}
