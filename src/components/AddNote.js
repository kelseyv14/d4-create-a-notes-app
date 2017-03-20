 import React from 'react'


 class AddNote extends React.Component {

      //this "static" means changing...the property types that change ?
    static propTypes = {
        addNote: React.PropTypes.func.isRequired
    }


    //unique method binds
    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this)
        this.state = {
            description: '',
            category: ''
        }
    }

   //calls the render
    onClick(addNote) {
       
        addNote(this.state.description, this.state.category)

       
        this.setState({
            description: '',
            category: ''
        })

    
    }

    //I think that I don't have enough set states or that it is not rendering because they say basically the same thing ? I thought that by setting the states like this it allows the render to loop through and create a new card...? I used the todos as an abstraction but that example only had 1 description and 1 catagory to add- the todo itself and the tag...here I have a title, a description, a photo url, and a tag.

    render () {
          return <div>
            <template className="showForm">
            <div className="card">
            <div className="card-image">
            <div className="field is-grouped">
            <p className="control is-expanded">
            <input className="input" type="text" placeholder="Glamour Shot" value={this.state.description} onChange={(e) => this.setState({description: e.target.value})} onKeyPress={(e) => (e.key === 'Enter' ? this.onClick(this.props.addNote) : undefined)}/>
            </p>
            <p className="control">
            <a className="button is-info">
            Add URL
            </a>
             </p>
            </div>
            <div className="card-content">
            <div className="media-content">
                <p className="title is-4">
                <div className="field">
                <label className="label">Outfit:</label>
                    <p className="control">
                     <input type="text" className="input" placeholder="Title Here" value={this.state.description} onChange={(e) => this.setState({description: e.target.value})} onKeyPress={(e) => (e.key === 'Enter' ? this.onClick(this.props.addNote) : undefined)} />
                     </p>
                </div>
                </p>
             </div>
            </div>
            <div className="content"><div className="field">
                <label className="label">Description:</label>
                    <p className="control">
                     <input type="text" className="input" placeholder="ex: wear on a day you need to be comfortable AND fashionable !" value={this.state.description} onChange={(e) => this.setState({description: e.target.value})} onKeyPress={(e) => (e.key === 'Enter' ? this.onClick(this.props.addNote) : undefined)} />
                     </p>
                </div>
               <div className="form-group">
                <select className="form-control" value={this.state.category} onChange={(e) => this.setState({category: e.target.value})}>
                    <option value="">Category</option>
                    <option value="work">work</option>
                    <option value="leisure">leisure</option>
                    <option value="formal">formal</option>
                    
                </select>
            </div>
            <div className="form-group">
                <div className="input-group">
                    <input type="text" className="form-control" value={this.state.description} onChange={(e) => this.setState({description: e.target.value})} onKeyPress={(e) => (e.key === 'Enter' ? this.onClick(this.props.addNote) : undefined)} />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button" onClick={()=> this.onClick(this.props.addNote)}>Add Note</button>
                    </span>
                </div>
            </div>

                </div>
                </div>
                </div>
                </template>  
                </div>
             
        }
}

export default AddNote