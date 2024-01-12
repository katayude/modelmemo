import React from 'react';

const ImageUploader: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleImageChange} />
            <button type="submit">アップロード</button>
        </form>
    )

}
export default ImageUploader;