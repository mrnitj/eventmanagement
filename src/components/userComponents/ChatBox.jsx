import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box } from '@mui/material';

const ChatBox = () => {
  const [expanded, setExpanded] = useState(false);

  const boxStyle = {
    width: 300,
    height: expanded ? 200 : 50,
    backgroundColor: 'lightblue',
    borderRadius: 8,
    transition: 'height 0.3s ease-in-out',
    cursor: 'pointer',
    overflow: 'hidden',
  };

  const handleBoxClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box
      sx={boxStyle}
      onClick={handleBoxClick}
    >
      <Box p={2} display={'flex'} justifyContent={"space-between"}>
        <Box>Messages</Box>
        <KeyboardArrowDownIcon/>
      </Box>
      add -- find your events now
    </Box>
  );
};

export default ChatBox;
