import { Link as RouterLink } from 'react-router-dom'
import {
  Container,
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Stack,
} from '@mui/material'
import {
  CheckCircle as CheckCircleIcon,
  People as PeopleIcon,
  Speed as SpeedIcon,
} from '@mui/icons-material'

const About = () => {
  const offerings: {
    icon: React.ElementType
    title: string
    description: string
  }[] = [
    {
      icon: CheckCircleIcon,
      title: 'Curated Categories',
      description: 'Dedicated sections for Internships, Certifications, Hackathons, Competitions, and Camps/Fellowships.',
    },
    {
      icon: SpeedIcon,
      title: 'Smart Tagging & Filtering',
      description: 'Resources tagged with attributes like Remote, Paid, Free, Beginner-friendly, and more for easy discovery.',
    },
    {
      icon: PeopleIcon,
      title: 'Community Submissions',
      description: 'A dedicated portal allowing users to contribute new resources.',
    },
  ]

  return (
    <Container maxWidth="md" sx={{ py: 4 }} style={{ width: '100%' }}>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 700, mb: 3 }}>
        About Fresher404
      </Typography>

      <Stack spacing={3}>
        <Paper elevation={0} sx={{ p: 2, bgcolor: 'primary.light', color: 'white' }}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
            Our Mission
          </Typography>
          <Typography variant="body1">
            Fresher404 is a scalable resource aggregator designed to help students and freshers find
            internships, certifications, hackathons, and fellowships without the noise of generic job boards.
            We believe in providing a clean, community-driven platform where quality matters over quantity.
          </Typography>
        </Paper>

        <Box>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
            What We Offer
          </Typography>
          <List>
            {offerings.map((item, index) => {
              const Icon = item.icon
              return (
                <Paper key={index} elevation={0} sx={{ mb: 2, p: 2 }}>
                  <ListItem>
                    <ListItemIcon sx={{ color: 'primary.main', minWidth: 56 }}>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.title}
                      secondary={item.description}
                      primaryTypographyProps={{ fontWeight: 600, variant: 'body1' }}
                    />
                  </ListItem>
                </Paper>
              )
            })}
          </List>
        </Box>

        <Paper elevation={0} sx={{ p: 3, bgcolor: 'background.default' }}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
            Our Team
          </Typography>
          <Typography variant="body1" paragraph>
            Fresher404 is built by passionate developers and tech enthusiasts who understand the
            challenges faced by freshers in finding quality opportunities. We're a community-driven
            project and welcome contributions from all backgrounds.
          </Typography>
        </Paper>

        <Paper elevation={0} sx={{ p: 3, bgcolor: 'secondary.light', color: 'white' }}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
            Join Our Community
          </Typography>
          <Typography variant="body1" paragraph>
            Have a resource to suggest? Know about a great internship or hackathon? Visit our submit page
            to contribute and help grow the platform for everyone.
          </Typography>
          <Button
            component={RouterLink}
            to="/submit"
            variant="contained"
            sx={{ backgroundColor: 'white', color: 'secondary.main' }}
          >
            Submit a Resource
          </Button>
        </Paper>
      </Stack>
    </Container>
  )
}

export default About
