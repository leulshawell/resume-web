export default ({children, title, id, description})=>{
    return <div id={id}>
        <div>
            <span>{title}</span>
            <p className="text-muted text-xs">{description}</p>
        </div>

    <p className="text-sm mt-3 border-l px-2">
    {children}
    </p>
    </div>
}