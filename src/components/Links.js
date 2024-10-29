function Links({github, linkedin}) {
    return (
        <>
            <h3>Links</h3>
            
            <a href={github} target="_blank">{github}</a>
            <a href={linkedin} target="_blank">{linkedin}</a>
        </>
    )
}

export default Links