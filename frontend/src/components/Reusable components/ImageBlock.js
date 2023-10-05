import { ImageWrapper } from "../Global.styled"

const ImageBlock = ({src, alt, w="100px", h="100px"}) => {
    return(
        <ImageWrapper w={w} h={h}>
            <img src={src} alt={alt} />
        </ImageWrapper>
    )
}

export default ImageBlock;