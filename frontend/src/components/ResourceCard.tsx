import React from 'react'
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Chip,
  Stack,
} from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

interface ResourceCardProps {
  id: number
  name: string
  description: string
  url: string
  category: string
  tags: string[]
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  id,
  name,
  description,
  url,
  category,
  tags,
}) => {
  return (
    <Card
      key={id}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          boxShadow: 6,
          transform: 'translateY(-4px)',
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 0.5 }}>
          <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 600, flex: 1, pr: 1 }}>
            {name}
          </Typography>
          <Chip
            label={category}
            size="small"
            variant="outlined"
            sx={{ textTransform: 'capitalize', flexShrink: 0 }}
          />
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {description}
        </Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              variant="filled"
              sx={{
                textTransform: 'capitalize',
                fontSize: '0.75rem',
              }}
            />
          ))}
        </Stack>
      </CardContent>

      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button
          fullWidth
          variant="contained"
          endIcon={<OpenInNewIcon />}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Resource
        </Button>
      </CardActions>
    </Card>
  )
}

export default ResourceCard
