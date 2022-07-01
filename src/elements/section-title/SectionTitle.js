import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';


const SectionTitle = ({subtitle, title, description, textAlignment, textColor}) => {
    return (
        <div className={`section-heading ${textAlignment} ${textColor}`}>
            <h2 className="subtitle" dangerouslySetInnerHTML={{__html: subtitle}}></h2>
            <AnimationOnScroll animateIn="bounce" animateOut='fadeOutDown' duration={1} delay={300} animateOnce={true}>
                <h1 className="title" dangerouslySetInnerHTML={{__html: title}}></h1>
            </AnimationOnScroll>
            <p dangerouslySetInnerHTML={{__html: description}}></p>
        </div>
    )
}

export default SectionTitle;