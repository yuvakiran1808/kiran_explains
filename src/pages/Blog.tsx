import { useParams } from "react-router-dom";
import { blogsData } from "../assets/data/blogsData";
import ReactMarkdown, { Components } from "react-markdown";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { styled } from "@mui/system";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// Styled container for layout
const BlogContainer = styled(Box)(({ theme }) => ({
  maxWidth: "768px", // ~50% width
  margin: "auto",
  padding: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    maxWidth: "95%",
    padding: theme.spacing(2),
  },
}));

// Markdown styling
const markdownComponents: Components = {
  h1: ({ node, ...props }) => (
    <Typography
      variant="h3"
      fontWeight={700}
      gutterBottom
      sx={{ fontFamily: "Inter, sans-serif" }}
      {...props}
    />
  ),
  h2: ({ node, ...props }) => (
    <Typography
      variant="h4"
      fontWeight={600}
      gutterBottom
      sx={{ fontFamily: "Inter, sans-serif" }}
      {...props}
    />
  ),
  h3: ({ node, ...props }) => (
    <Typography
      variant="h5"
      fontWeight={500}
      gutterBottom
      sx={{ fontFamily: "Inter, sans-serif" }}
      {...props}
    />
  ),
  h4: ({ node, ...props }) => (
    <Typography
      variant="h6"
      fontWeight={500}
      gutterBottom
      sx={{ fontFamily: "Inter, sans-serif" }}
      {...props}
    />
  ),
  p: ({ node, ...props }) => (
    <Typography
      variant="body1"
      component="p"
      sx={{ marginBottom: "1rem", whiteSpace: "pre-line", lineHeight: 1.8 }}
      fontFamily="Inter, sans-serif"
      {...props}
    />
  ),
  ul: ({ node, ...props }) => <Box component="ul" pl={3} {...props} />,
  ol: ({ node, ...props }) => <Box component="ol" pl={3} {...props} />,
  li: ({ node, ...props }) => (
    <Typography
      component="li"
      variant="body1"
      lineHeight={1.7}
      fontFamily="Inter, sans-serif"
      {...props}
    />
  ),
  strong: ({ node, ...props }) => (
    <strong style={{ fontWeight: 600 }} {...props} />
  ),
  em: ({ node, ...props }) => <em style={{ fontStyle: "italic" }} {...props} />,
  blockquote: ({ node, ...props }) => (
    <Box
      component="blockquote"
      sx={{
        borderLeft: "4px solid #bbb",
        backgroundColor: "#f9f9f9",
        padding: "0.75rem 1rem",
        margin: "1.5rem 0",
        fontStyle: "italic",
        color: "#111",
        fontFamily: "Inter, sans-serif",
      }}
      {...props}
    />
  ),
  code: ({ inline, className, children, ...props }: any) => {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={oneDark}
        language={match[1]}
        PreTag="div"
        customStyle={{
          borderRadius: "8px",
          fontSize: "0.9rem",
          padding: "1rem",
          margin: "1.5rem 0",
          overflowX: "auto",
          fontFamily: "monospace",
        }}
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <Box
        component="code"
        sx={{
          backgroundColor: "#f5f5f5",
          borderRadius: "4px",
          padding: "2px 6px",
          fontFamily: "monospace",
          fontSize: "0.875rem",
          color: "#111", 
        }}
        {...props}
      >
        {children}
      </Box>
    );
  },
  img: ({ node, ...props }) => (
    <Box
      component="img"
      {...props}
      sx={{
        display: "block",
        maxWidth: "100%",
        height: "300px",
        objectFit: "cover",
        borderRadius: "8px",
        my: 2,
      }}
    />
  ),
};

const Blog = () => {
  const { blogId } = useParams<{ blogId: string }>();
  const blog = blogsData.find((b) => b.id === Number(blogId));
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    if (blog) {
      fetch(`/blogs/${blog.markdownFile}`)
        .then((res) => res.text())
        .then((text) => setContent(text));
    }
  }, [blog]);

  if (!blog)
    return (
      <Typography textAlign="center" variant="h6">
        Blog not found.
      </Typography>
    );

  return (
    <BlogContainer>
      <Typography
        variant="h3"
        fontWeight={700}
        gutterBottom
        fontFamily="Inter, sans-serif"
      >
        {blog.title}
      </Typography>
      <Typography
        variant="caption"
        gutterBottom
        color="text.secondary"
        fontFamily="Inter, sans-serif"
      >
        {blog.date}
      </Typography>
      <Box mt={4}>
        <ReactMarkdown
          children={content}
          components={markdownComponents}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        />
      </Box>
    </BlogContainer>
  );
};

export default Blog;
