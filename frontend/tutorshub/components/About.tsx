'use client';

import React from 'react';
import {
    Avatar,
    Box,
    Button,
    Container,
    Stack,
    Typography,
    Chip,
} from '@mui/material';
import TableOfContents from './AboutTableofContents';
import { renderContent } from '@/data/renderContent';
import styles from '@/components/styles/about.module.css';
import PublicIcon from '@mui/icons-material/Public';

export default function About() {
    const { person, about, social } = renderContent();
    const structure = [
        { 
            title: about.intro.title,
            display: about.intro.display,
            items: []
        },
        { 
            title: about.work.title,
            display: about.work.display,
            items: about.work.experiences.map(experience => experience.company)
        },
        { 
            title: about.studies.title,
            display: about.studies.display,
            items: about.studies.institutions.map(institution => institution.name)
        },
        { 
            title: about.technical.title,
            display: about.technical.display,
            items: about.technical.skills.map(skill => skill.title)
        },
    ];

    return (
        <Box id="#about">
            <Container maxWidth="md">
                <script
                    type="application/ld+json"
                    suppressHydrationWarning
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Person',
                            name: person.name,
                            jobTitle: person.role,
                            description: about.intro.description,
                            image: `${person.avatar}`,
                            sameAs: social
                                .filter((item) => item.link && !item.link.startsWith('mailto:'))
                                .map((item) => item.link),
                            worksFor: {
                                '@type': 'Organization',
                                name: about.work.experiences[0].company || ''
                            },
                        }),
                    }}
                />

                {about.tableOfContent.display && (
                    <TableOfContents structure={structure} about={about} />
                )}

                <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="center">
                    {about.avatar.display && (
                        <Stack
                            sx={{
                                minWidth: 160,
                                px: 4,
                                pb: 4,
                                gap: 2,
                                flex: 3,
                                alignItems: 'center'
                            }}
                        >
                            <Avatar
                                src={person.avatar}
                                sx={{ width: 160, height: 160 }}
                            />
                            <Stack direction="row" spacing={1} alignItems="center">
                                <PublicIcon color="primary" fontSize="small" />
                                <Typography>{person.location}</Typography>
                            </Stack>
                            {person.languages.length > 0 && (
                                <Stack direction="row" spacing={1} flexWrap="wrap">
                                    {person.languages.map((language, index) => (
                                        <Chip
                                            key={index}
                                            label={language}
                                            size="medium"
                                        />
                                    ))}
                                </Stack>
                            )}
                        </Stack>
                    )}

                    <Stack
                        className={styles.blockAlign}
                        sx={{
                            width: '100%',
                            flex: 9,
                            maxWidth: '40rem'
                        }}
                    >
                        <Box
                            id={about.intro.title}
                            sx={{
                                minHeight: 160,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                mb: 4
                            }}
                        >
                            <Typography
                                variant="h1"
                                className={styles.textAlign}
                                sx={{ fontSize: '2.5rem', fontWeight: 'bold' }}
                            >
                                {person.name}
                            </Typography>
                            <Typography
                                variant="h2"
                                className={styles.textAlign}
                                color="text.secondary"
                                sx={{ fontSize: '1.25rem' }}
                            >
                                {person.role}
                            </Typography>

                            {social.length > 0 && (
                                <Stack
                                    direction="row"
                                    spacing={1}
                                    flexWrap="wrap"
                                    sx={{ pt: 2.5, pb: 1 }}
                                    className={styles.blockAlign}
                                >
                                    {social.map((item) => (
                                        item.link && (
                                            <Button
                                                key={item.name}
                                                href={item.link}
                                                startIcon={<span className={item.icon} />}
                                                size="small"
                                                variant="text"
                                            >
                                                {item.name}
                                            </Button>
                                        )
                                    ))}
                                </Stack>
                            )}
                        </Box>

                        <Typography
                            variant="h5"
                            sx={{ mb: 2, fontWeight: 'bold' }}
                        >
                            Meet Your Tutor: Charles. O.O
                        </Typography>
                        {about.intro.display && (
                            <Typography
                                variant="body1"
                                sx={{ mb: 4 }}
                            >
                                {about.intro.description}
                            </Typography>
                        )}

                        {about.work.display && (
                            <>
                                <Typography
                                    variant="h2"
                                    id={about.work.title}
                                    sx={{ mb: 2, fontSize: '1.5rem', fontWeight: 'bold' }}
                                >
                                    {about.work.title}
                                </Typography>
                                <Stack spacing={4} sx={{ mb: 5 }}>
                                    {about.work.experiences.map((experience, index) => (
                                        <Stack key={`${experience.company}-${experience.role}-${index}`}>
                                            <Stack
                                                direction="row"
                                                justifyContent="space-between"
                                                alignItems="flex-end"
                                                sx={{ mb: 0.5 }}
                                            >
                                                <Typography
                                                    id={experience.company}
                                                    variant="h4"
                                                    sx={{ fontWeight: 'bold' }}
                                                >
                                                    {experience.company}
                                                </Typography>
                                                <Typography color="text.secondary" variant="body2">
                                                    {experience.timeframe}
                                                </Typography>
                                            </Stack>
                                            <Typography
                                                color="primary"
                                                sx={{ mb: 2 }}
                                                variant="body2"
                                            >
                                                {experience.role}
                                            </Typography>
                                            <Stack component="ul" spacing={2}>
                                                {experience.achievements.map((achievement, index) => (
                                                    <Typography
                                                        component="li"
                                                        key={`${experience.company}-${index}`}
                                                        variant="body1"
                                                    >
                                                        {achievement}
                                                    </Typography>
                                                ))}
                                            </Stack>
                                            
                                        </Stack>
                                    ))}
                                </Stack>
                            </>
                        )}

                        {about.studies.display && (
                            <>
                                <Typography
                                    variant="h2"
                                    id={about.studies.title}
                                    sx={{ mb: 2, fontSize: '1.5rem', fontWeight: 'bold' }}
                                >
                                    {about.studies.title}
                                </Typography>
                                <Stack spacing={4} sx={{ mb: 5 }}>
                                    {about.studies.institutions.map((institution, index) => (
                                        <Stack
                                            key={`${institution.name}-${index}`}
                                            spacing={0.5}
                                        >
                                            <Typography
                                                id={institution.name}
                                                variant="subtitle1"
                                                sx={{ fontWeight: 'bold', fontSize: '1rem' }}
                                            >
                                                {institution.name}
                                            </Typography>
                                            <Typography color="text-white-60" variant="body2">
                                                {institution.description}
                                            </Typography>
                                        </Stack>
                                    ))}
                                </Stack>
                            </>
                        )}

                        {about.technical.display && (
                            <>
                                <Typography
                                    variant="h2"
                                    id={about.technical.title}
                                    sx={{ mb: 5, fontSize: '1.5rem', fontWeight: 'bold' }}
                                >
                                    {about.technical.title}
                                </Typography>
                                <Stack spacing={4}>
                                    {about.technical.skills.map((skill, index) => (
                                        <Stack
                                            key={`${skill}-${index}`}
                                            spacing={0.5}
                                        >
                                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                                {skill.title}
                                            </Typography>
                                            <Typography color="text-white-60" variant="body1">
                                                {skill.description}
                                            </Typography>
                                        </Stack>
                                    ))}
                                </Stack>
                            </>
                        )}
                        {about.tutoringPhilosophy.display && (
                            <>
                                <Typography
                                    variant="h2"
                                    id={about.tutoringPhilosophy.title}
                                    sx={{ mt: 5, mb: 2, fontSize: '1.5rem', fontWeight: 'bold' }}
                                >
                                    {about.tutoringPhilosophy.title}
                                </Typography>
                                <Stack spacing={1} sx={{ mb: 4 }}>
                                    {about.tutoringPhilosophy.description.map((line, index) => (
                                        <Typography key={index} variant="body1">
                                            {line}
                                        </Typography>
                                    ))}
                                </Stack>
                            </>
                        )}

                        {/* Why Choose CHIVA Tutorhub Section */}
                        {about.whyChoose.display && (
                            <>
                                <Typography
                                    variant="h2"
                                    id={about.whyChoose.title}
                                    sx={{ mb: 2, fontSize: '1.5rem', fontWeight: 'bold' }}
                                >
                                    {about.whyChoose.title}
                                </Typography>
                                <Stack spacing={1} sx={{ mb: 4 }}>
                                    {about.whyChoose.description.map((line, index) => (
                                        <Typography key={index} variant="body1">
                                            {line}
                                        </Typography>
                                    ))}
                                </Stack>
                            </>
                        )}

                        {/* Goals Section */}
                        {about.goals.display && (
                            <>
                                <Typography
                                    variant="h2"
                                    id={about.goals.title}
                                    sx={{ mb: 2, fontSize: '1.5rem', fontWeight: 'bold' }}
                                >
                                    {about.goals.title}
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 4 }}>
                                    {about.goals.description}
                                </Typography>
                            </>
                        )}
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}