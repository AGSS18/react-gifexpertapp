import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifList = ({category}) => {

    const {images, loading} = useFetchGifs(category);
    
    return (
        <>
            <h3 className='animate__animated animate__fadeIn' >{category}</h3>
            {loading && <p className='animate__animated animate__flash' >Loading...</p>}
            <div className='card-list'>
                    {images.map((image) => {
                        return <GifItem 
                        key={image.id}
                        {...image} />
                    })}
            </div>
        </>
    );
}
