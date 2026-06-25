import { useState } from 'react'
import { CheckCircle, Clock, MapPin, PaperPlaneTilt, Phone, WarningCircle } from '@phosphor-icons/react'
import PageHero from '../components/PageHero'
import { Reveal } from '../lib/motion'
import { media, serviceGroups } from '../data/spsContent'

const initial = {
  name: '',
  company: '',
  phone: '',
  email: '',
  service: '',
  location: '',
  urgency: '',
  message: '',
}

export default function Contacto() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Indica tu nombre.'
    if (!form.phone.trim() && !form.email.trim()) next.phone = 'Indica al menos un telefono o correo.'
    if (!form.message.trim()) next.message = 'Describe brevemente el trabajo.'
    return next
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length === 0) setSubmitted(true)
  }

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
    if (errors[event.target.name]) setErrors({ ...errors, [event.target.name]: '' })
  }

  const inputClass = 'w-full rounded-2xl border border-steel-200 bg-white px-4 py-3 text-sm font-medium text-ink-900 transition-[border-color,box-shadow,background-color] duration-200 ease-field placeholder:text-steel-400 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20'

  return (
    <>
      <PageHero
        kicker="Contacto"
        title="Cuentanos que necesita"
        accent="tu operacion."
        subtitle="Mientras mas clara sea la informacion de campo, mas rapida puede ser la respuesta tecnica."
        image={media.heroContact}
      />

      <section className="bg-white py-20 text-ink-900 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-4 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
          <Reveal>
            <h2 className="mb-6 font-display text-2xl font-bold leading-tight text-ink-900 sm:text-3xl">Canales directos</h2>
            <div className="space-y-4">
              <div className="surface-panel rounded-2xl p-6">
                <MapPin size={28} className="mb-4 text-brand-red" />
                <h3 className="font-display text-xl font-bold text-ink-900">San Francisco, Maracaibo</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-600">
                  Av. 5, Calle 13, N 26A-162<br />
                  Zulia, Venezuela
                </p>
              </div>
              <div className="surface-panel rounded-2xl p-6">
                <Phone size={28} className="mb-4 text-brand-blueLight" />
                <h3 className="font-display text-xl font-bold text-ink-900">Telefonos</h3>
                <a href="tel:+582613226494" className="mt-2 block text-sm font-semibold text-steel-700 hover:text-brand-blue">
                  0261 322 6494
                </a>
                <a href="tel:+584146361373" className="block text-sm font-semibold text-steel-700 hover:text-brand-blue">
                  +58 414 636 1373
                </a>
              </div>
              <div className="surface-panel rounded-2xl p-6">
                <Clock size={28} className="mb-4 text-brand-blueLight" />
                <h3 className="font-display text-xl font-bold text-ink-900">Respuesta tecnica</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-600">
                  Para servicios de vapor, saneamiento, tanques, mantenimiento, telemetria o automatizacion.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[2rem] border border-steel-200 bg-white p-6 shadow-lift sm:p-8 lg:p-10">
              {submitted ? (
                <div className="py-16 text-center">
                  <CheckCircle size={64} weight="fill" className="mx-auto text-emerald-600" />
                  <h3 className="mt-6 font-display text-2xl font-bold text-ink-900">Solicitud registrada</h3>
                  <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-steel-600">
                    Ya tenemos la informacion base. Puedes usar los telefonos de contacto para seguimiento inmediato.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-ink-900">Datos del servicio</h2>
                    <p className="mt-2 text-sm text-steel-500">Campos clave para orientar la respuesta de SPS.</p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Nombre" name="name" value={form.name} onChange={handleChange} error={errors.name} className={inputClass} autoComplete="name" />
                    <Field label="Empresa" name="company" value={form.company} onChange={handleChange} className={inputClass} autoComplete="organization" />
                    <Field label="Telefono" name="phone" type="tel" inputMode="tel" value={form.phone} onChange={handleChange} error={errors.phone} className={inputClass} autoComplete="tel" />
                    <Field label="Correo" name="email" type="email" inputMode="email" value={form.email} onChange={handleChange} className={inputClass} autoComplete="email" />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-sm font-bold text-ink-900">Servicio requerido</span>
                      <select name="service" value={form.service} onChange={handleChange} className={inputClass}>
                        <option value="">Seleccionar</option>
                        {serviceGroups.map((group) => (
                          <option key={group.id} value={group.title}>{group.title}</option>
                        ))}
                      </select>
                    </label>
                    <Field label="Ubicacion del trabajo" name="location" value={form.location} onChange={handleChange} className={inputClass} autoComplete="address-level2" />
                  </div>

                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-ink-900">Urgencia</span>
                    <select name="urgency" value={form.urgency} onChange={handleChange} className={inputClass}>
                      <option value="">Seleccionar</option>
                      <option>Atencion inmediata</option>
                      <option>Programar visita tecnica</option>
                      <option>Solicitar cotizacion</option>
                      <option>Consulta general</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-ink-900">Descripcion del trabajo</span>
                    <textarea
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      aria-invalid={errors.message ? 'true' : undefined}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      className={`${inputClass} resize-none`}
                      placeholder="Ejemplo: calentamiento de crudo en patio de tanques, recuperacion en fosa, inyeccion de vapor, telemetria..."
                    />
                    {errors.message && <ErrorText id="message-error">{errors.message}</ErrorText>}
                  </label>

                  <button type="submit" className="btn-primary w-full text-sm">
                    Enviar solicitud <PaperPlaneTilt size={20} weight="fill" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function Field({ label, name, value, onChange, error, className, type = 'text', inputMode, autoComplete }) {
  const errorId = error ? `${name}-error` : undefined

  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-ink-900">{label}</span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        inputMode={inputMode}
        autoComplete={autoComplete}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={errorId}
        className={className}
      />
      {error && <ErrorText id={errorId}>{error}</ErrorText>}
    </label>
  )
}

function ErrorText({ id, children }) {
  return (
    <p id={id} className="mt-2 flex items-center gap-1 text-sm font-semibold text-brand-red">
      <WarningCircle size={15} /> {children}
    </p>
  )
}
