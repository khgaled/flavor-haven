import { useState } from "react";
import {
  Snackbar,
  SnackbarContent,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  DialogTitle,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

export const useShare = () => {
  const [shareOpen, setShareOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [postLink, setPostLink] = useState("");
  const [onCompleteCallback, setOnCompleteCallback] = useState();


  const sharePost = (postId, isRestaurant = false, onCompleteSharing = null) => {
    const postType = isRestaurant ? "restaurant_post" : "recipe_post";
    const link = `${window.location.origin}/${postType}${postId}`;
    
    setPostLink(link);
    setPopupOpen(true); // Show popup first
    if (onCompleteSharing) {
      setOnCompleteCallback(() => onCompleteSharing);
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(postLink);
    setPopupOpen(false); // Close popup
    setShareOpen(true); // Show snackbar
  };

  const handleClose = () => {
    setPopupOpen(false);
    // Notify the carousel or other components that the popup has closed
  };

  const handleSnackbarClose = () => {
    setShareOpen(false);
    // Call the completion callback when the snackbar closes
    if (onCompleteCallback) {
      onCompleteCallback();
      setOnCompleteCallback(null); // Clear the callback
    }
  };

  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(postLink)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };
  
  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postLink)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };
  

  const ShareSnackbar = () => (
    <Snackbar
      open={shareOpen}
      autoHideDuration={2000}
      onClose={() => setShareOpen(false)}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <SnackbarContent
        message="Link copied to clipboard!"
        sx={{
          backgroundColor: "#60709c",
          color: "white",
          borderRadius: "30px",
          fontWeight: "bold",
          padding: "10px 20px",
        }}
      />
    </Snackbar>
  );

  const SharePopup = () => (
    <Dialog open={popupOpen} onClose={handleSnackbarClose}
    sx={{
      '& .MuiBackdrop-root': { backgroundColor: 'transparent' }
    }}>
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontWeight: "bold",
          color: "#60709c",
          padding: "15px"
          //width: "10px",
        }}
      >
        <Typography sx={{ fontFamily: '"Arial", "Helvetica", sans-serif', fontWeight: "bold" }}>
          Share this post
        </Typography>
        <IconButton onClick={handleClose} sx={{ color: "#60709c" }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div className="flex gap-4 mt-2">
          <IconButton onClick={copyLink} sx={{ color: "#60709c" }}>
            <ContentCopyIcon fontSize="large" />
          </IconButton>
          <IconButton onClick={shareOnTwitter} sx={{ color: "#60709c" }}>
            <TwitterIcon fontSize="large" />
          </IconButton>
          <IconButton onClick={shareOnFacebook} sx={{ color: "#60709c" }}>
            <FacebookIcon fontSize="large" />
          </IconButton>
        </div>
      </DialogContent>
    </Dialog>
  );

  return { sharePost, ShareSnackbar, SharePopup };
};
