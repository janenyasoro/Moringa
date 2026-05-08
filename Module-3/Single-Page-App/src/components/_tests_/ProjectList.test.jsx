import { render, screen } from '@testing-library/react'
import ProjectList from '../ProjectList'

describe('ProjectList Component', () => {
  const mockProjects = [
    { id: 1, title: 'Project 1', description: 'Description 1' },
    { id: 2, title: 'Project 2', description: 'Description 2' }
  ]

  it('renders all projects when provided', () => {
    render(<ProjectList projects={mockProjects} />)
    
    expect(screen.getByText('Project 1')).toBeInTheDocument()
    expect(screen.getByText('Description 1')).toBeInTheDocument()
    expect(screen.getByText('Project 2')).toBeInTheDocument()
    expect(screen.getByText('Description 2')).toBeInTheDocument()
    expect(screen.queryByTestId('no-projects-message')).not.toBeInTheDocument()
  })

  it('shows no projects message when array is empty', () => {
    render(<ProjectList projects={[]} />)
    
    expect(screen.getByTestId('no-projects-message')).toBeInTheDocument()
    expect(screen.getByText('No projects found')).toBeInTheDocument()
  })

  it('renders correct number of project cards', () => {
    render(<ProjectList projects={mockProjects} />)
    
    const projectCards = screen.getAllByTestId('project-card')
    expect(projectCards).toHaveLength(2)
  })
})