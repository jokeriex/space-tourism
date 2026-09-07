export default function CrewTab({isActive, children, onClick, classNameDiv, classNameButton }) {
    
    return (
        <div className={classNameDiv}>
            <button onClick={onClick} 
            className={`${classNameButton} ${
                    isActive ? 'bg-white': 'bg-white/20'
                }`}>
                {children}
            </button>
        </div>
    )
}