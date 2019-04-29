import React, {Component} from 'react'
import './App.css'

function SearchBar(){
    return(
        <form>
            <label>
                <input type="text" name="name" />
            </label>
        </form>
    )
}

function ProductCategoryRow(props){
    return(
        <p>{props.value}</p>
    )
}

function ProductRow(props){
    return(
        <p>{props.value}</p>
    )
}

class ProductTable extends React.Component{
    render(){
        return(
            <div>
                <ProductCategoryRow value="Sporting Goods"/>
                <ProductRow value="Electronics" />
            </div>
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