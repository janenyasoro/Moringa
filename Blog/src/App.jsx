import Header from './components/Header'
import About from './components/About'
import ArticleList from './components/ArticleList'
import { blogName, blogImage, blogAbout, blogPosts } from './data/blog'
import './App.css'


function App() {
  return (
    <div>
      <Header name={blogName} />
      <About image={blogImage} about={blogAbout} />
      <ArticleList posts={blogPosts} />
    </div>
  );
}

export default App;