import { render, screen } from "@testing-library/react"
import GifItem from "../../src/components/GifItem"


describe('Tests for GifItem component', () => {
  const title = 'Goku'
  const url = 'https://i.gifer.com/no.gif'

  test('should match with snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />)
    expect(container).toMatchSnapshot()
  })

  test('should render title and url', () => {
    render(<GifItem title={title} url={url} />)
    const { src, alt } = screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(title)
  })

  test('should show title in the component', () => {
    render(<GifItem title={title} url={url} />)
    expect( screen.getByText(title)).toBeTruthy()
  })
})