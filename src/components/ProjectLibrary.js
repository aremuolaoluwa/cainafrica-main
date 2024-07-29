import React from 'react';
import {TopImage, TextWrapper, TopHeaderText, TopParaText, OverallWrapper, PostWrapper, PostHeader, PostParagraph, PostImage, MediaWrapper, SingleImage} from './StyledComponents.js';
import LibraryInitiative from '../images/ProjectsData/LibraryInitiative.jpg';
import LibraryInitiative2 from '../images/ProjectsData/LibraryInitiative2.jpg';
import Toolbar from './Toolbar/Toolbar.js';
import projectsCover from '../images/ProjectsData/projectsCover.jpg';

const ProjectArise = (props) => {


    return(
        <div>
            <TopImage style={{backgroundImage: `url(${projectsCover})`, backgroundPosition:'center'}}>
                <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
                {props.sideDrawer}
                <TextWrapper>
                    <TopHeaderText>PROJECTS</TopHeaderText>
                    <TopParaText>“SMALL ACTS, WHEN MULTIPLIED BY MILLIONS OF PEOPLE, CAN TRANSFORM THE WORLD.” — HOWARD ZINN</TopParaText>
                </TextWrapper>
            </TopImage>
            <OverallWrapper>
                <PostWrapper>
                    <PostHeader>The CAIN Library Initiative</PostHeader>
                    <PostParagraph>
                        A library is an invaluable resource for students, offering access to a vast array of information and educational materials essential for research, study, and completing assignments. However, many underprivileged students lack access to libraries, as their schools often do not have such facilities, and their homes are typically not conducive to learning. Many students live in crowded conditions, sharing a single room with their families, which leads to constant noise and distractions, severely hindering any chance of self-learning.
                        <br /><br />
                        Understanding the critical role a library plays in a student's educational journey, we established a library at our Educational Resource Center. This facility provides a conducive environment for learning and is well-stocked with a diverse collection of books and educational texts, enabling students to conduct research and study effectively.
                        <br /><br />
                        Since its inception, 197 individuals, including students from higher institutions and local community members, have registered to use our library. The response has been overwhelmingly positive, with many expressing their gratitude for the access to educational resources they previously lacked.
                        <br /><br />
                        To maintain and expand our library's collection, we rely on donations of books and financial contributions from individuals and organizations. In 2022, Masobe Books generously donated books to our library, significantly enhancing the variety of materials available to our students.
                        <br /><br />
                        Our mission is to provide underprivileged students with the educational resources necessary for their academic growth and success. By creating a supportive learning environment, we aim to bridge the educational gap and offer these students a fighting chance for a better future.
                        <br /><br />
                    </PostParagraph>
                </PostWrapper>

                <MediaWrapper>
                    <SingleImage>
                        <PostImage src={`${LibraryInitiative}`} />
                        <i style={{padding: '1rem 0'}}>A classroom at  Ijegun Community Primary School 1</i>
                    </SingleImage>
                    
                    <SingleImage>
                        <PostImage src={`${LibraryInitiative2}`}/>
                        <i style={{padding: '1rem 0'}}>Members of our team with some school officials and students after donating whiteboards, stationery and books to Ijegun Community Primary School 1</i>
                    </SingleImage>

                </MediaWrapper>
            </OverallWrapper>
            
        </div>
    )
}

export default ProjectArise;