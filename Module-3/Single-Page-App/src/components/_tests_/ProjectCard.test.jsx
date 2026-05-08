import { render, screen } from '@testing-library/react'
import ProjectCard from '../ProjectCard'

describe('ProjectCard Component', () => {
  it('renders project title and description', () => {
    render(<ProjectCard title="Test Title" description="Test Description" />)
    
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Description')).toBeInTheDocument()
  })

  it('has correct data-testid attribute', () => {
    render(<ProjectCard title="Test" description="Test" />)
    
    expect(screen.getByTestId('project-card')).toBeInTheDocument()
  })
})