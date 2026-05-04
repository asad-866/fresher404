import { useState, useEffect } from 'react'
import { Container, Box, Typography, Grid, CircularProgress, Alert } from '@mui/material'
import ResourceCard from '../components/ResourceCard'
import axiosInstance from '../api/axios'

interface Resource {
  id: number
  name: string
  description: string
  url: string
  category: string
  tags: string[]
}

const Camps = () => {
  const [resources, setResources] = useState<Resource[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchResources = async () => {
      try {
        setLoading(true)
        const response = await axiosInstance.get('/resources/camps')
        setResources(response.data)
      } catch (err) {
        setError('Failed to load resources')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchResources()
  }, [])

  if (loading) {
    return (
      <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <CircularProgress />
      </Container>
    )
  }

  if (error) {
    return (
      <Container maxWidth="md">
        <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>
      </Container>
    )
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" component="h1" sx={{ fontWeight: 700, mb: 1 }}>
          Camps & Fellowships
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Programs like Google Summer of Code, summer internship programs, and fellowship opportunities.
        </Typography>
      </Box>

      {resources.length === 0 ? (
        <Alert severity="info">No camps or fellowships available yet.</Alert>
      ) : (
        <Grid container spacing={2}>
          {resources.map((resource) => (
            <Grid item xs={12} sm={6} md={4} key={resource.id}>
              <ResourceCard {...resource} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  )
}

export default Camps
