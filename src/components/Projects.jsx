import { useEffect } from 'react'
import AOS from 'aos'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import styles from '../assets/styles/Projects.module.css'
import projects from '../assets/data/ProjectData'
import { ReactComponent as GithubLogo } from '../assets/icons/github.svg'

const Projects = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Container fluid className={styles.container}>
      <Container as="h1" className={styles.title} data-aos="fade-up" data-aos-duration="800">PROJECTS</Container>
      <Row xs={1} sm={2} lg={3} className={styles.projects}>
        {projects.map(project => <Col key={project.link} className="mb-4">
          <ProjectCard {...project} />
        </Col>)}
      </Row>
      <Container className={styles.more}>
        Check Out
        <a href="https://github.com/vuezy?tab=repositories" target="_blank" rel="noreferrer" className={styles.link}>
          <div className={styles.logo}><GithubLogo /></div>My GitHub Repositories
        </a>&nbsp;
        For More!
      </Container>
    </Container>
  )
}

export default Projects