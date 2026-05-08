import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

describe('App Integration Tests', () => {
  beforeEach(() => {
    render(<App />)
  })

  it('renders the main heading', () => {
    expect(screen.getByText('Personal Project Showcase App')).toBeInTheDocument()
  })

  it('displays initial projects', () => {
    expect(screen.getByText('Project 1')).toBeInTheDocument()
    expect(screen.getByText('Project 2')).toBeInTheDocument()
    expect(screen.getByText('Project 3')).toBeInTheDocument()
  })

  it('adds a new project when form is submitted', async () => {
    const titleInput = screen.getByLabelText(/project title/i)
    const descInput = screen.getByLabelText(/project description/i)
    const addButton = screen.getByRole('button', { name: /add/i })
    
    await userEvent.type(titleInput, 'New Test Project')
    await userEvent.type(descInput, 'New Test Description')
    fireEvent.click(addButton)
    
    expect(screen.getByText('New Test Project')).toBeInTheDocument()
    expect(screen.getByText('New Test Description')).toBeInTheDocument()
  })

  it('filters projects when searching', async () => {
    const searchInput = screen.getByLabelText(/search projects/i)
    
    await userEvent.type(searchInput, 'Project 1')
    
    expect(screen.getByText('Project 1')).toBeInTheDocument()
    expect(screen.queryByText('Project 2')).not.toBeInTheDocument()
    expect(screen.queryByText('Project 3')).not.toBeInTheDocument()
  })

  it('shows no results when search matches nothing', async () => {
    const searchInput = screen.getByLabelText(/search projects/i)
    
    await userEvent.type(searchInput, 'Nonexistent Project')
    
    expect(screen.getByTestId('no-projects-message')).toBeInTheDocument()
  })

  it('clears search and shows all projects', async () => {
    const searchInput = screen.getByLabelText(/search projects/i)
    
    await userEvent.type(searchInput, 'Project 1')
    expect(screen.queryByText('Project 2')).not.toBeInTheDocument()
    
    await userEvent.clear(searchInput)
    
    expect(screen.getByText('Project 1')).toBeInTheDocument()
    expect(screen.getByText('Project 2')).toBeInTheDocument()
    expect(screen.getByText('Project 3')).toBeInTheDocument()
  })
})