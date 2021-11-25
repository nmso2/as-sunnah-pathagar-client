import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Book = ({ book }) => {
    const { name, image, category, author, translator, publisher } = book;
    return (
        <div>
            <Paper
                data-aos="fade-up"
                data-aos-duration="3000" elevation={3}
                sx={{ height: 475 }}>
                <Box>
                    <Box>
                        <img style={{ margin: 'auto', maxWidth: '300px', maxHeight: '300px', padding: '15px 0px' }} src={`data:image/png;base64,${image}`} alt="" />
                    </Box>

                    <Box sx={{ textAlign: 'left', px: 1 }}>
                        <Typography>
                            {name}
                        </Typography>
                        <Typography>
                            By: <span className="text-red-600">{author}</span>

                        </Typography>
                        {translator && <Typography>
                            Translator: <span className="text-red-600">{translator}</span>
                        </Typography>}
                        <Typography>
                            Category: <span className="text-red-600">{category}</span>
                        </Typography>
                        <Typography>
                            Publisher: <span className="text-red-600">{publisher}</span>
                        </Typography>
                    </Box>
                    
                </Box>

            </Paper>
        </div>
    );
};

export default Book;