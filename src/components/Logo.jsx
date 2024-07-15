import myLogo from '@assets/logo.png'

export default function Logo({style = 'h-10'}) {
    return (
        <img
            className={`${style} w-auto`}
            src={myLogo}
            alt="Logo de SusanaNzth"
            loading="lazy"
        />
    )
}