'use client';

import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

interface TableOfContentsProps {
    structure: {
        title: string;
        display: boolean;
        items: string[];
    }[];
    about: {
        tableOfContent: {
            display: boolean;
            subItems: boolean;
        };
    };
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ structure, about }) => {
    const scrollTo = (id: string, offset: number) => {
        const element = document.getElementById(id);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    if (!about.tableOfContent.display) return null;

    return (
        <Stack
            sx={{
                position: 'fixed',
                left: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                whiteSpace: 'nowrap',
                pl: 3,
                gap: 4,
                display: { xs: 'none', md: 'flex' },
                mb: 8,
                zIndex: 1,
            }}
            direction="column"
        >
            {structure
                .filter(section => section.display)
                .map((section, sectionIndex) => (
                    <Stack key={sectionIndex} spacing={1.5} direction="column">
                        <Box
                            onClick={() => scrollTo(section.title, 80)}
                            sx={{
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                '&:hover': {
                                    color: 'primary.main'
                                }
                            }}
                        >
                            <Box
                                sx={{
                                    height: '1px',
                                    width: '16px',
                                    bgcolor: 'text.primary'
                                }}
                            />
                            <Typography>{section.title}</Typography>
                        </Box>
                        {about.tableOfContent.subItems && (
                            <Stack spacing={1.5}>
                                {section.items.map((item, itemIndex) => (
                                    <Box
                                        key={itemIndex}
                                        onClick={() => scrollTo(item, 80)}
                                        sx={{
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1.5,
                                            pl: 3,
                                            '&:hover': {
                                                color: 'primary.main'
                                            }
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                height: '1px',
                                                width: '8px',
                                                bgcolor: 'text.primary'
                                            }}
                                        />
                                        <Typography>{item}</Typography>
                                    </Box>
                                ))}
                            </Stack>
                        )}
                    </Stack>
                ))}
        </Stack>
    );
};

export default TableOfContents;