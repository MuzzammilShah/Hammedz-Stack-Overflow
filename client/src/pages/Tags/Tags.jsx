import React from 'react'

import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './Tags.css'

const Tags = () => {

        const tagsList = [{
            id: 1,
            tagName: "javascript",
            tagDesc: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS"
        },{
            id: 2,
            tagName: "css",
            tagDesc: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML"
        },{
            id: 3,
            tagName: "html",
            tagDesc: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser"
        },{
            id: 4,
            tagName: "java",
            tagDesc: "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible"
        },{
            id: 5,
            tagName: "python",
            tagDesc: "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation"
        }]

  return (
    <div className='home-container-1'>
        <LeftSidebar />
        <div className='home-container-2'>
            <h1 className='tags-h1'>Tags</h1>
            <p className='tags-p'>A tag is a keyword or label that categorizes your question with other, similar questions.</p>
            <p className='tags-p'>Using the right tags makes it easier for others to find and answer your question.</p>
            <div className='tags-list-container'>
            {
                tagsList.map((tag) => (
                    <TagsList tag={tag} key={tagsList.id}/>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Tags