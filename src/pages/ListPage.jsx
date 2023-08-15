import React from "react";
import ListItem from "../components/ListItem";
import AddItemModal from "../components/AddItemModal";

export default function ListPage() {
    return <div className="container">
    <h2>List Title</h2>
    <p>List description</p>
    <ListItem />
    <button>Add Item</button>
    </div>
}