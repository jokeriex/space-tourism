export default function DestinationTab({ children, onClick, classNameDiv, classNameButton }) {
    
    return (


        <div className={classNameDiv}>
            <button onClick={onClick} className={classNameButton}>
                {children}
            </button>
        </div>
    )
}