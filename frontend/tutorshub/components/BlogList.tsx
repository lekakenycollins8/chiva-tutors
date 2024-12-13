import { Grid, Container, Typography } from '@mui/material';
import BlogCard from './BlogCard';
import { blogPosts } from '@/data/blog';

export default function BlogList() {
  return (
    <Container maxWidth="lg" className="py-8">
      <Typography variant="h4" component="h2" className="mb-8 text-center font-bold">
        Latest Blog Posts
      </Typography>
      <Grid container spacing={4}>
        {blogPosts.map((post) => (
          <Grid item xs={12} md={6} lg={4} key={post.id}>
            <BlogCard post={post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}