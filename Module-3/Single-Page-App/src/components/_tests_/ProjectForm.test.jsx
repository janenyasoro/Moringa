import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProjectForm from '../ProjectForm'

describe('ProjectForm Component', () => {
  it('renders form inputs correctly', () => {
    render(<ProjectForm onAddProject={() => {}} />)
    
    expect(screen.getByLabelText(/project title/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/project description/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument()
  })

  it('shows alert when submitting empty form', async () => {
    const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {})
    const mockAddProject = jest.fn()
    
    render(<ProjectForm onAddProject={mockAddProject} />)
    
    const submitButton = screen.getByRole('button', { name: /add/i })
    fireEvent.click(submitButton)
    
    expect(mockAlert).toHaveBeenCalledWith('Please fill in both fields')
    expect(mockAddProject).not.toHaveBeenCalled()
    
    mockAlert.mockRestore()
  })

  it('adds project when form is filled correctly', async () => {
    const mockAddProject = jest.fn()
    render(<ProjectForm onAddProject={mockAddProject} />)
    
    const titleInput = screen.getByLabelText(/project title/i)
    const descInput = screen.getByLabelText(/project description/i)
    const submitButton = screen.getByRole('button', { name: /add/i })
    
    await userEvent.type(titleInput, 'Test Project')
    await userEvent.type(descInput, 'Test Description')
    fireEvent.click(submitButton)
    
    expect(mockAddProject).toHaveBeenCalledWith({
      title: 'Test Project',
      description: 'Test Description'
    })
  })

  it('clears inputs after successful submission', async () => {
    const mockAddProject = jest.fn()
    render(<ProjectForm onAddProject={mockAddProject} />)
    
    const titleInput = screen.getByLabelText(/project title/i)
    const descInput = screen.getByLabelText(/project description/i)
    
    await userEvent.type(titleInput, 'Test Project')
    await userEvent.type(descInput, 'Test Description')
    
    const submitButton = screen.getByRole('button', { name: /add/i })
    fireEvent.click(submitButton)
    
    expect(titleInput.value).toBe('')
    expect(descInput.value).toBe('')
  })
})