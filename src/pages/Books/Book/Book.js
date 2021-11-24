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
                data-aos-duration="3000" elevation={3}>
                <Box>
                    <Box>
                        <img style={{ margin: 'auto', width: '300px', height: '300px' }} src={`data:image/png;base64,${image}`} alt="" />
                    </Box>

                    <Box>
                        <Typography>
                            {name}
                        </Typography>
                        <Typography>
                            By: {author}
                        </Typography>
                        {translator && <Typography>
                            Translator: {translator}
                        </Typography>}
                        <Typography>
                            Category: {category}
                        </Typography>
                        <Typography>
                            Publisher: {publisher}
                        </Typography>
                    </Box>
                </Box>

            </Paper>
        </div>
    );
};

export default Book;