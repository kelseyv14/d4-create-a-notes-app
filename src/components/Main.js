import React from 'react'
import {connect} from 'react-redux'

class Main extends React.Component {
    //I am trying to add a button that makes the form appear after the welcome message and then after it all appeared, these onclick/onchange events would happen which exisit on the addnote.js page...
    constructor() {
        super();
        this.state = {
            showForm: false
        }
    }

    //not positive why these funtions have errors
    Template.addPost.events({
        'click .clickable': function () {
            Session.set("visible", true)
        }
    })

    Template.addPost.helpers({
        showForm: function () {
            var show = Session.get('visible');
            if (show === true) {
                return true;
            } else {
                return false
            }
        }
    })

    //to set the session to false on refresh.
    Template.addPost.destroyed = function () {
        Session.set('visible', false)
    }

    //there needs to be an onclick call to the "showForm" command but I don't know what that looks like. I will try out my best guess
    render() {
        const showHide = {
            'display': this.state.showStatus ? 'block' : 'none'
        }

        const showReplyForm = () => {
            this.setState({
                showForm: true
            });
        }
        return <div >
            <h1 className = "title"> LE MODE </h1> 
            <article className = "message is-info">
            <div className = "message-header">
            <p> Bienvenue! </p> 
            </div> 
            <div className = "message-body"> Bonjour, welcome to Le Mode.This is an easy application
        for taking notes about your favorite outfits.To start, name your outfit, and give it a brief description.Optionally, add a photo
        for reference.When you 're done, select a tag that further catagorizes the outfit as work, leisure, or formal</div> 
        </article>  
        <template className = "showForm" >
            <span> <a onClick= {showForm} className = "button"> add a new note </a></span>
            </template> 
            </div>

    }
}

//I also recognize that I have a lot of html on the page. I can't think of a way to break this up because it is all apart of the form...the info message is not interactive and reads as a textbox/alert message on the screen. maybe the form should be on it's own...?

//moved form to addNote.js 





export default Main

/////////// below is an example from one of the videos I watched to try to make the form with react/redux/reduce I think what I could use from this is simmilar to what I have above..on this example they connected an entire page of constants which from what I can tell are variables that don't change. so I came up short on using this example because I didn't know how the constants were implemented. I kept the constants.js to see what I would need to do to make them work or if I was on the right track to use those to store this form. 

// //className NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// ReactDOM.render(
//   <NameForm />,
//   document.getElementById('root')
// );