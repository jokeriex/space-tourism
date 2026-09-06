export default function TechnologyTab({isActive, children, onClick, classNameDiv, classNameButton }) {
    return (
        <div className={classNameDiv}>
            <button onClick={onClick} className={`${classNameButton} pb-2 border-b-[3px] ${
                    isActive ? 'border-white text-white' : 'border-transparent'
                }`}>
                {children}
            </button>
        </div>
    )
}