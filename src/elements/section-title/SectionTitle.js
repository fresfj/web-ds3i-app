import React from 'react';


const SectionTitle = ({subtitle, title, description, textAlignment, textColor}) => {
    return (
        <div className={`section-heading ${textAlignment} ${textColor}`}>
            <h2 className="subtitle" dangerouslySetInnerHTML={{__html: subtitle}}></h2>
            <h1 className="title" dangerouslySetInnerHTML={{__html: title}}></h1>
            <p dangerouslySetInnerHTML={{__html: description}}></p>
        </div>
    )
}

export default SectionTitle;