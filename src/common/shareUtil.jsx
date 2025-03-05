import { useState } from "react";
import { Snackbar, SnackbarContent } from "@mui/material";

export const useShare = () => {
  const [shareOpen, setShareOpen] = useState(false);

  const sharePost = (postId, isRestaurant = false) => {
    const postType = isRestaurant ? "restaurant_post" : "recipe_post";
    const postLink = `${window.location.origin}/${postType}${postId}`;
    
    navigator.clipboard.writeText(postLink);
    setShareOpen(true);
  };

  const ShareSnackbar = () => (
    <Snackbar
    open={shareOpen}
    autoHideDuration={2000}
    onClose={() => setShareOpen(false)}
    anchorOrigin={{
      vertical: 'bottom',  
      horizontal: 'center', 
    }}
    >
    <SnackbarContent
      message="Link copied to clipboard!"
      sx={{
        backgroundColor: '#60709c', 
        color: 'white', 
        borderRadius: '30px', 
        fontWeight: 'bold', 
        padding: '10px 20px', 
      }}
    />
    </Snackbar>

  );

  return { sharePost, ShareSnackbar };
};
