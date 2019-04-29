import React, {Component} from 'react'
import './App.css'
import list from './list'

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

    const content = props.list.map((value) =>
        <div key={value.id}>
            <p>{value.name}</p>
        </div>
        );
    
    return(
        <div>
            <p>{props.value}</p>
            <p>{content}</p>
        </div>
    );
}

class ProductTable extends React.Component{
    render(){
        return(
            <div>
                <ProductCategoryRow value="Sporting Goods"/>
                <ProductRow value="Electronics" list={list}/>
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