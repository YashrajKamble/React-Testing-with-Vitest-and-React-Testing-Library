import { render, screen } from '@testing-library/react'
import ProductImageGallery from '../../src/components/ProductImageGallery'

describe('ProductImageGallery', () => {
    it('should render nothing if given an array is empty', () => {
        const { container } = render(<ProductImageGallery imageUrls={[]} />)

        expect(container).toBeInTheDocument()
    })


    it('should render a list if images', () => {
        const imageUrl = ['url1', 'url2']

        render(<ProductImageGallery imageUrls={imageUrl} />)
        const images = screen.getAllByRole('img')

        imageUrl.forEach((url, index) => {
            expect(images[index]).toHaveAttribute('src', url)
        })
    })
})