import { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifList } from "./components/GifList";

function GifExpertApp() {

    const [categories, setCategories] = useState(['Kirby']);

    return (
        <div className='container' >
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ul>
                {categories.map(category => {
                    return (
                    <GifList 
                        key={category} 
                        category={category} 
                    /> )
                })}
            </ul>
        </div>
    );
}

export default GifExpertApp;