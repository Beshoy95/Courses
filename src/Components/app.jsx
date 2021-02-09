import React, { Component } from 'react';
import CourseForm from './courseForm';
import CourseList from './courseList';

class App extends Component {
    state = {
        courses: [
            
        ],
        current: ""
    }

    updateCourse = (e) => {
        this.setState({ current: e.target.value });
    }

    addCourse = (e) => {
        e.preventDefault();
        let current = this.state.current;
        let courses = this.state.courses;
        if(current){
            courses.push({ name: current });
            this.setState({ courses, current: "" });
        }
       
    }

    deleteCourse = (index) => {
        let courses = [...this.state.courses];
        courses.splice(index, 1);
        this.setState({ courses });
    }

    editCourse = (index, value) => {
        let courses = this.state.courses;
        let course = courses[index];
        course['name'] = value;
        this.setState({ courses });
    }

    render() {
        const { courses } = this.state;
        const coursesList = courses.map(
            (course, index) => {
                return <CourseList key={index}
                    index={index}
                    update={this.handleChange}
                    details={course}
                    deleteCourse={this.deleteCourse}
                    editCourse={this.editCourse}
                />
            })

        return (
            <>
             <div className="App" >
                <h2>Add course</h2>
                <CourseForm
                    current={this.state.current}
                    addCourse={this.addCourse}
                    updateCourse={this.updateCourse} />
                <ul>
                {this.state.courses.length > 0 ? coursesList:<p className="text-center text-danger">No Courses To Show! Please Add New Course</p>}</ul>
            </div>        
            </>
           );
    }
}

export default App;