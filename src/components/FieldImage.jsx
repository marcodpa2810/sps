export default function FieldImage({
  src,
  mobileSrc,
  alt = '',
  className = '',
  pictureClassName = '',
  loading = 'lazy',
}) {
  return (
    <picture className={pictureClassName}>
      {mobileSrc && <source media="(max-width: 640px)" srcSet={mobileSrc} />}
      <img src={src} alt={alt} className={`${className} max-sm:object-contain max-sm:bg-ink-950`} loading={loading} />
    </picture>
  )
}
