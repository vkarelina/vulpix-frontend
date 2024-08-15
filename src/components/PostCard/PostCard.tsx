import { FC } from "react";

import { Chip } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { cardContentStyle, cardStyle, chipStyle } from "./PostCardStyle";

interface PostCardProps {
  title: string;
  description: string;
  picturePath?: string;
  tags: TagProps[];
}

export interface TagProps {
  id: number;
  name: string;
}

const PostCard: FC<PostCardProps> = ({
  title,
  description,
  picturePath,
  tags,
}) => {
  return (
    <Card sx={cardStyle}>
      <CardMedia component="img" height="140" image={picturePath} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardContent sx={cardContentStyle}>
        {tags.map((tag) => (
          <Chip
            key={tag.id}
            label={tag.name}
            variant="outlined"
            sx={chipStyle}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default PostCard;
