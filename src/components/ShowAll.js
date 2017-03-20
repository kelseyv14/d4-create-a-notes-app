import React from 'react'
import { connect } from 'react-redux'

//to get all of the notes on the screen, I tried using the todo page from the todos example. I thought that if that was the right component to use that put all the todos up, this would work for the notes. I am also using elements from completed.js to show the notes that meet the completed requirement. as long as it's ok for each note to show up as a list...? I also think I should be looking for a specific command name to plug into this return...

class ShowAll extends React.Component {
     render() {
    let notes = this.props.redux.notes

        // the filter that only will send through "complete" notes, though I don't know where those parameters are set up...
        notes = notes.filter(function(notesObject) {       
            return notesObject.completed === 'yes'
        })
    //then again, maybe the reason this worked was because it connected to the backend ? this part is truly lost on me. I'm sorry, after reading all about how to make main work for two days, this is just not making sense. 

    //I know that I need to map these notes...would this be a start ?
    notes = notes.map(function(notes, key) {
            return <Todo key={key} {...notes} />
        })


   
        return <div>
                <h5 className="text-center">My Notes</h5>
                <ul className="list-group">
                {notes}
                 </ul>
                 </div>
       

    //I was completely lost as to what to put in this area...something about calling this the aforementioned command from the AddNote.js?           

                 
    }
}
//I would assume this would be needed with the other map commands eventhough I don't have redux set up at this time:

// Map shared Redux state to props
const mapStateToProps = (redux) => {
    return {
        redux: redux.state
    }
}

// Export the component, connected to Redux, for other components to import
export default connect(mapStateToProps)(Completed)