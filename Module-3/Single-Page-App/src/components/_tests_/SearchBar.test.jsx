import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchBar from '../SearchBar'

describe('SearchBar Component', () => {
  it('renders search input correctly', () => {
    render(<SearchBar searchTerm="" onSearchChange={() => {}} />)
    
    expect(screen.getByLabelText(/search projects/i)).toBeInTheDocument()
  })

  it('calls onSearchChange when user types', async () => {
    const mockSearchChange = jest.fn()
    render(<SearchBar searchTerm="" onSearchChange={mockSearchChange} />)
    
    const searchInput = screen.getByLabelText(/search projects/i)
    await userEvent.type(searchInput, 'test')
    
    expect(mockSearchChange).toHaveBeenCalled()
    expect(mockSearchChange).toHaveBeenCalledWith('test')
  })

  it('displays the current search term value', () => {
    render(<SearchBar searchTerm="current term" onSearchChange={() => {}} />)
    
    const searchInput = screen.getByLabelText(/search projects/i)
    expect(searchInput.value).toBe('current term')
  })
})