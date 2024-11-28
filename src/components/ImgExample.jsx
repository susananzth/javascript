import imgNotFound from '@img/No_Image_Available.jpg'

export default function ImgExample({style = '', src = imgNotFound, alt = 'Imagen no encontrada'}) {
    return (
        <img
            className={`${style} w-auto h-auto max-h-50 max-w-full`}
            src={src}
            alt={alt}
            loading="lazy"
        />
    )
}