interface subTitle {
    title: string,
    subText: string
}

export default function SubTitle({title,subText} : subTitle){
    return(
        <div className="section-header">
            <h2>{title}</h2>
            <p className="mt-2 italic">{subText}</p>
        </div>
    )
}