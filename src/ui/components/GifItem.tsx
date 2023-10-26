import { IGif } from '../../types/gif';

interface GifItemProps {
    gif: IGif;
}

export const GifItem = ({ gif }: GifItemProps) => {
    return <>
        <input width={100} height={100} style={{
            margin: 15,
            borderRadius: 10
        }} type="image" src={gif.images.preview_gif.url} alt={gif.title} />
    </>
}