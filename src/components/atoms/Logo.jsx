function Logo({ src, alt}) {
    return (
        <div className="w-full pl-(--size-800) flex justify-start items-center gap-(--size-800)">
            <img src={src} alt={alt} className="w-(--size-48) h-(--size-48)" />
            <hr className="w-full h-[1px] border-white/25" />
        </div>
    )
}

export default Logo;