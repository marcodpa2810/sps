export default function FieldImage({
  src,
  mobileSrc,
  alt = '',
  className = '',
  pictureClassName = '',
  loading = 'lazy',
  decoding = 'async',
  fetchPriority,
  width,
  height,
  sizes,
}) {
  return (
    <picture className={pictureClassName}>
      {mobileSrc && <source media="(max-width: 640px)" srcSet={mobileSrc} />}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        decoding={decoding}
        fetchPriority={fetchPriority}
        className={`${className} max-sm:object-cover`}
        loading={loading}
      />
    </picture>
  )
}
