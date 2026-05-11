import { useState } from 'react'
import {
  Container,
  Box,
  TextField,
  Select,
  MenuItem,
  FormLabel,
  Button,
  Alert,
  Paper,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  CircularProgress,
  Stack,
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import axiosInstance from '../api/axios'

const Submit = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    url: '',
    category: 'internships',
    tags: [] as string[],
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const allTags = ['remote', 'paid', 'free', 'beginner-friendly', 'certificate-included', 'team-based']
  const categories = ['internships', 'certifications', 'hackathons', 'competitions', 'camps']

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { name?: string; value: unknown }>) => {
    const { name, value } = e.target as any
    setFormData({ ...formData, [name]: value })
  }

  const handleTagChange = (tag: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      await axiosInstance.post('/resources', formData)
      setSuccess(true)
      setFormData({
        name: '',
        description: '',
        url: '',
        category: 'internships',
        tags: [],
      })
      setTimeout(() => setSuccess(false), 5000)
    } catch (err: any) {
      setError(err.response?.data?.detail || 'Failed to submit resource')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container maxWidth="sm" style={{ width: '100%' }}>
      <Box sx={{ py: 3 }}>
        <Typography variant="h5" component="h1" sx={{ fontWeight: 700, mb: 1 }}>
          Submit a Resource
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Help us build the best community resource hub. Share an internship, certification, hackathon, 
          competition, or fellowship that you think will help other freshers.
        </Typography>

        <Paper elevation={1} sx={{ p: 3 }}>
          {success && (
            <Alert severity="success" sx={{ mb: 3 }}>
              Thank you! Your resource has been submitted successfully.
            </Alert>
          )}

          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                fullWidth
                label="Resource Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="e.g., Internshala, Google Summer of Code"
                variant="outlined"
              />

              <TextField
                fullWidth
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                placeholder="Brief description of what this resource offers"
                multiline
                rows={4}
                variant="outlined"
              />

              <TextField
                fullWidth
                type="url"
                label="URL"
                name="url"
                value={formData.url}
                onChange={handleInputChange}
                required
                placeholder="https://example.com"
                variant="outlined"
              />

              <Box>
                <FormLabel component="legend" sx={{ display: 'block', mb: 1, fontWeight: 600 }}>
                  Category *
                </FormLabel>
                <Select
                  fullWidth
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  variant="outlined"
                >
                  {categories.map((cat) => (
                    <MenuItem key={cat} value={cat}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </MenuItem>
                  ))}
                </Select>
              </Box>

              <Box>
                <FormLabel component="legend" sx={{ display: 'block', mb: 2, fontWeight: 600 }}>
                  Tags (select all that apply)
                </FormLabel>
                <FormGroup>
                  <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1 }}>
                    {allTags.map((tag) => (
                      <FormControlLabel
                        key={tag}
                        control={
                          <Checkbox
                            checked={formData.tags.includes(tag)}
                            onChange={() => handleTagChange(tag)}
                          />
                        }
                        label={tag.charAt(0).toUpperCase() + tag.slice(1)}
                      />
                    ))}
                  </Box>
                </FormGroup>
              </Box>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                disabled={loading}
                endIcon={loading ? <CircularProgress size={20} /> : <SendIcon />}
              >
                {loading ? 'Submitting...' : 'Submit Resource'}
              </Button>
            </Stack>
          </form>
        </Paper>
      </Box>
    </Container>
  )
}

export default Submit
