import React from 'react'
import "./preview.collection.styles.scss";
import Collectionitem from "../collection-item/collection.item";

const previewCollection = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1>{
                title.toUpperCase()
            }
            </h1>
            <div className="preview">

                {
                    items.filter((item, idx) => (idx < 4)).map((item, index) => (
                        <Collectionitem key={item.id} item={item}></Collectionitem>

                    ))
                }

            </div>
        </div>
    )
}

export default previewCollection
