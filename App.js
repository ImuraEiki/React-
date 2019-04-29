import React, {Component} from 'react'

function SearchBar(){
    return(
        <form>
            <label>
                <input type="text" name="name" />
            </label>
        </form>
    )
}

class ProductTable extends React.Component{
    render(){
        return(
            <div></div>
        )
    }
}


class App extends React.Component{
    render(){
        return(
            <div className="App">
                <SearchBar />
                <ProductTable />
            </div>
        )
    }
}

export default App