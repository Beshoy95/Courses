import React from 'react'

const CourseForm = (props) => {
    const { addCourse, updateCourse, current } = props
    return (<>

        <form onSubmit={addCourse}>

            <input onChange={updateCourse} value={current} type="text" />
            <button type="submit">Add Course</button>

        </form>
    </>);
}

export default CourseForm;