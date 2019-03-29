import React , {Component} from 'react'
import ArticleList from './ArticleList/index'
import articles from './../fixtures'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component{
    state= {
        reverted: false
    }
    render() {
        console.log('2 ',this.state)
        return(
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">
                        App name
                        <button className="btn" onClick={this.revert}>revert</button>
                    </h1>
                </div>
                <ArticleList articles = { this.state.reverted ? articles.slice().reverse() : articles  } />
            </div>
        )
    }

    revert = () => {
        console.log('1')
        this.setState({
            reverted: !this.state.reverted
        })
    }    
}

export default App