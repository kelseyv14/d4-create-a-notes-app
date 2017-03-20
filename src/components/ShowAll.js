import React from 'react'
import { connect } from 'react-redux'

//to get all of the notes on the screen, I tried using the todo page from the todos example. I thought that if that was the right component to use that put all the todos up, this would work for the notes. I am also using elements from completed.js to show the notes that meet the completed requirement. as long as it's ok for each note to show up as a list...? I also think I should be looking for a specific command name to plug into this return...

class ShowAll extends React.Component {

    //then again, maybe the reason this worked was because it connected to the backend ? this part is truly lost on me. I'm sorry, after reading all about how to make main work for two days, this is just not making sense. 
    
    static propTypes = {
        id: React.PropTypes.any.isRequired,
        completed: React.PropTypes.string.isRequired,
        notes: React.PropTypes.string.isRequired,
        category: React.PropTypes.string.isRequired,
        toggleComplete: React.PropTypes.func
    }

    // Define default property values
    static defaultProps = {
        id: 0,
        completed: 'yes',
        notes: 'This is an example of default prop values',
        category: 'Uncategorized'
    }

    render() {
        return  <div className="row">
        <li className={this.props.toggleComplete ? 'list-group-item' : 'list-group-item list-group-item-success'}>
            <div className="row">

    //I was completely lost as to what to put in this area...something about calling this "notes: React.PropTypes.string.isRequired" and the aforementioned command from the AddNote.js?           

                    </div>
                 </li>
            </div>
       
    }
}

export default ShowAll