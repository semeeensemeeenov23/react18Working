import React, {Component} from "react";
import AppHeader from '../app-header/app-header'
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter"
import PostList from "../post-list/post-list"
import PostAddForm from "../post-add-form/post-add-form"

import './app.css'
import '../app-header/app-header.css'
import '../post-add-form/post-add-form.css'
import '../post-list/post-list.css'
import '../post-list-item/post-list-item.css'
import '../post-status-filter/post-status-filter.css'
import '../search-panel/search-panel.css'


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data :  [
                {label: "Going to learn React", important: true, id: 1},
                {label: "That is so good", important: false, id: 2},
                {label: "I need a break...", important: false, id: 3},
                {label: "Мой текст", important: false, id: 4}
            ]
        };
        this.deletItem = this.deletItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);


        this.maxId = 5;
    }

    deletItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

            return {
                data: newArr
            }
        });
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data:newArr
            }
        })
    }

    onToggleImportant(id) {
        console.log(`important ${id}`);
    }

    onToggleLiked(id) {
        console.log(`Like ${id}`);
    }

    render() {
        return (
            <div className="app">
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList 
                    posts={this.state.data}
                    onDelete={this.deletItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}/>
                <PostAddForm
                    onAdd={this.addItem}/>
            </div>
        
        )
    }
}
